import * as uuid from 'uuid';
import { TaskPriorityEnum, TaskStatusEnum } from '../enums/tasks-enums';
import { ITask } from '../interface/task-interface';
export const TASK_LIST_MOCK: ITask[] = [
	{
		id: uuid.v4(),
		title: 'prueba',
		description: 'prueba',
		priority: TaskPriorityEnum.LOW,
		status: TaskStatusEnum.PENDING,
		creationDate: new Date()
	},
	{
		id: uuid.v4(),
		title: 'prueba',
		description: 'prueba',
		priority: TaskPriorityEnum.MEDIUM,
		status: TaskStatusEnum.PENDING,
		creationDate: new Date()
	},
	{
		id: uuid.v4(),
		title: 'prueba',
		description: 'prueba',
		priority: TaskPriorityEnum.HIGH,
		status: TaskStatusEnum.PENDING,
		creationDate: new Date()
	},
	{
		id: uuid.v4(),
		title: 'prueba',
		description: 'prueba',
		priority: TaskPriorityEnum.LOW,
		status: TaskStatusEnum.PENDING,
		creationDate: new Date()
	},
	{
		id: uuid.v4(),
		title: 'prueba',
		description: 'prueba',
		priority: TaskPriorityEnum.LOW,
		status: TaskStatusEnum.DONE,
		creationDate: new Date()
	}
];
