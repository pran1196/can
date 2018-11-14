import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewusersComponent } from './viewusers.component';



const routes: Routes = [
    {
        path: '',
        component: ViewusersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewusersRoutingModule {}
