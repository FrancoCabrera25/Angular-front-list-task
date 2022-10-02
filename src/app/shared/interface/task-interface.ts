import { TaskPriorityEnum, TaskStatusEnum } from '../enums/tasks-enums';
export interface ITask {
	id: string;
	title: string;
	description: string;
	priority: TaskPriorityEnum;
	status: TaskStatusEnum;
	creationDate: Date;
	updateDate?: Date;
}
