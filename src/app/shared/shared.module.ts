import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './material/angular-material.module';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    FilterPipe
  ],
  imports: [
    AngularMaterialModule
  ],
  exports:[FilterPipe, AngularMaterialModule],
  providers: [],

})
export class SharedModule { }
