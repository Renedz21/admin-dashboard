import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'add',
        component: AddComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    UsersComponent,
    ListComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
