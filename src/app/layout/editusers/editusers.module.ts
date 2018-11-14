import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatModule } from '../../shared';
import { EditusersComponent } from './editusers.component';
import { EditusersRoutingModule } from './editusers-routing.module';




@NgModule({
    imports: [CommonModule, EditusersRoutingModule,StatModule],
    declarations: [EditusersComponent]
})
export class EditusersModule {}