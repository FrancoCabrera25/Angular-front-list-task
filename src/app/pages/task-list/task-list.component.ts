import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TaskService } from '../../core/services/task/task.service';
import { TaskStatusEnum } from '../../shared/enums/tasks-enums';
import { ITask } from '../../shared/interface/task-interface';
import { TaskFormComponent } from './components/task-form/task-form.component';

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
	styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
	private destroy$: Subject<void> = new Subject<void>();
	tasklist: ITask[] = [];
	listFilter: Map<string, string> = new Map<string, string>();
	listSort: Map<string, string> = new Map<string, string>();
	filterSelected: string = 'ALL';
	searchTaskbyFilter: string = '';
	sortSelected: string = 'creationDate';
	sortOrderSelected: 'desc' | 'asc' = 'desc';
	dialogBoxSettings = {
		width: '650px',
		margin: '0 auto',
		disableClose: true,
		hasBackdrop: false,
		data: null
	};

	constructor(public dialog: MatDialog, private taskService: TaskService) {}
	ngOnInit(): void {
		this.setFiltersAndSort();
		this.loadTasks();
	}
	loadTasks(): void {
		this.taskService.currentTasks$.pipe(takeUntil(this.destroy$)).subscribe((tasks) => {
			this.tasklist = tasks;
		});
	}
	setFiltersAndSort() {
		this.listFilter.set('ALL', 'Todas');
		this.listFilter.set(TaskStatusEnum.PENDING.toString(), 'Pendientes');
		this.listFilter.set(TaskStatusEnum.DONE.toString(), 'Terminadas');
		this.listFilter.set(TaskStatusEnum.PROGRESS.toString(), 'Progreso');

		this.listSort.set('creationDate', 'Fecha creación');
		this.listSort.set('title', 'Titulo');
	}

	searchTaskByFilter(value: string): void {
		this.filterSelected = value;
		if (value === 'ALL') {
			this.searchTaskbyFilter = '';
		} else {
			this.searchTaskbyFilter = value;
		}
	}

	addTask(): void {
		this.openDialog();
	}

	updateTask(task: ITask): void {
		this.openDialog(task);
	}

	deleteTask(id: string): void {
		this.taskService.deleteTask(id);
	}

	openDialog(task?: ITask): void {
		this.dialog
			.open(TaskFormComponent, {
				...this.dialogBoxSettings,
				data: task ? task : null
			})
			.afterClosed()
			.subscribe((result) => {
				if (result !== null) {
					result.isEditing ? this.taskService.updateTask(result.task) : this.taskService.addTask(result.task);
				}
			});
	}

	setSort({ value }: MatSelectChange): void {
		this.sortOrderSelected = value === 'title' ? 'asc' : 'desc';
		this.sortSelected = value;
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
