import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskPriorityEnum } from 'src/app/shared/enums/tasks-enums';
import { TaskStatusEnum } from '../../../../shared/enums/tasks-enums';
import { ITask } from '../../../../shared/interface/task-interface';

@Component({
	selector: 'app-task-card',
	templateUrl: './task-card.component.html',
	styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
	@Input() task!: ITask;
	@Output() updateTaskEvent = new EventEmitter<void>();
	@Output() deleteTaskEvent = new EventEmitter<void>();

	public get taskSatusEnum(): typeof TaskStatusEnum {
		return TaskStatusEnum;
	}

	updateTask(): void {
		this.updateTaskEvent.emit();
	}
	deleteTask(): void {
		this.deleteTaskEvent.emit();
	}

	convertPriority(priority: TaskPriorityEnum): string {
		return priority === TaskPriorityEnum.LOW
			? 'Baja'
			: priority === TaskPriorityEnum.MEDIUM
			? 'Media'
			: priority === TaskPriorityEnum.HIGH
			? 'Alta'
			: '';
	}

	convertStatus(status: TaskStatusEnum): string {
		return status === TaskStatusEnum.PENDING
			? 'Pendiente'
			: status === TaskStatusEnum.PROGRESS
			? 'Progreso'
			: status === TaskStatusEnum.DONE
			? 'Terminada'
			: '';
	}
}
