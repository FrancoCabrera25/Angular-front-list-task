import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskService } from 'src/app/core/services/task/task.service';
import { SharedModule } from '../../shared/shared.module';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskFilterComponent } from './components/task-filter/task-filter.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';

@NgModule({
	declarations: [TaskListComponent, TaskCardComponent, TaskFilterComponent, TaskFormComponent],
	imports: [CommonModule, TaskListRoutingModule, SharedModule, ReactiveFormsModule],
	exports: [TaskListComponent],
	providers: [TaskService]
})
export class TaskListModule {}
