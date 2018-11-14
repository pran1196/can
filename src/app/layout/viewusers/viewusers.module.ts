import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatModule } from '../../shared';
import { ViewusersComponent } from './viewusers.component';
import { ViewusersRoutingModule } from './viewusers-routing.module';




@NgModule({
    imports: [CommonModule, ViewusersRoutingModule,StatModule],
    declarations: [ViewusersComponent]
})
export class ViewusersModule {}
