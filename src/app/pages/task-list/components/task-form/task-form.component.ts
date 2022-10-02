import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskPriorityEnum, TaskStatusEnum } from '../../../../shared/enums/tasks-enums';
import { ITask } from '../../../../shared/interface/task-interface';

@Component({
	selector: 'app-task-form',
	templateUrl: './task-form.component.html',
	styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
	status = [
		{
			id: TaskStatusEnum.PENDING.toString(),
			text: 'Pendiente'
		},
		{
			id: TaskStatusEnum.PROGRESS.toString(),
			text: 'Progreso'
		},
		{
			id: TaskStatusEnum.DONE.toString(),
			text: 'Terminada'
		}
	];

	prioritys = [
		{
			id: TaskPriorityEnum.LOW.toString(),
			text: 'Baja'
		},
		{
			id: TaskPriorityEnum.MEDIUM.toString(),
			text: 'Media'
		},
		{
			id: TaskPriorityEnum.HIGH.toString(),
			text: 'Alta'
		}
	];
	form!: FormGroup;
	isEditing: boolean = false;

	constructor(
		private fb: FormBuilder,
		public dialogRef: MatDialogRef<TaskFormComponent>,
		@Inject(MAT_DIALOG_DATA) public data: ITask
	) {}

	ngOnInit(): void {
		this.isEditing = this.data !== null;
		this.initForm();
	}
	/* Reactive form */
	initForm() {
		this.form = this.fb.group({
			title: [this.data && this.data.title ? this.data.title : '', Validators.required],
			status: [this.data && this.data.status ? this.data.status : '', Validators.required],
			priority: [this.data && this.data.priority ? this.data.priority : '', Validators.required],
			description: [this.data && this.data.description ? this.data.description : '', Validators.required]
		});
	}

	submitForm(): void {
		this.dialogRef.close({
			isEditing: this.isEditing,
			task: {
				...this.form.value,
				id: this.data ? this.data.id : ''
			}
		});
	}

	close(): void {
		this.dialogRef.close(null);
	}
}
