import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-task-filter',
	templateUrl: './task-filter.component.html',
	styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
	@Input() listFilter: Map<string, string> = new Map<string, string>();
	@Output() filterSelectedEvent = new EventEmitter<string>();
	@Input() filterSelected: string = '';

	selected(value: string): void {
		this.filterSelected = value;
		this.filterSelectedEvent.emit(value);
	}
}
