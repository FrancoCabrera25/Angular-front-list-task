import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as uuid from 'uuid';
import { ITask } from '../../../shared/interface/task-interface';
@Injectable()
export class TaskService {
	private currentTasks = new BehaviorSubject<ITask[]>([]);
	currentTasks$: Observable<any> = this.currentTasks.asObservable();

	constructor() {
		this.loadTask();
	}
	loadTask(): void {
		this.currentTasks.next(this.getTaskByLocalStorage());
	}

	addTask(task: ITask): void {
		task.id = uuid.v4();
		task.creationDate = new Date();
		const current = [...this.currentTasks.getValue(), task];
		this.setTaskByLocalStorage(current);
		this.currentTasks.next(current);
	}

	updateTask(task: ITask): void {
		const current = this.currentTasks.getValue().map((oldTask) => {
			if (oldTask.id === task.id) {
				return {
					...oldTask,
					description: task.description,
					title: task.title,
					status: task.status,
					priority: task.priority,
					updateDate: new Date()
				};
			}
			return oldTask;
		});
		this.currentTasks.next(current);
	}

	deleteTask(id: string): void {
		const currentTask = this.currentTasks.getValue().filter((f) => f.id !== id);
		this.setTaskByLocalStorage(currentTask);
		this.currentTasks.next(currentTask);
	}

	getTaskByLocalStorage(): ITask[] {
		return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : [];
	}

	setTaskByLocalStorage(tasks: ITask[]): void {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
}
