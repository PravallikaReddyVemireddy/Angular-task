import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentListComponent } from './department-list/department-list.component';
import {EmployeeListComponent } from './employee-list/employee-list.component';
import {PageNotFoundComponent } from './page-not-found/page-not-found.component';
import{StudyComponent } from './study/study.component';
import {WordleComponent } from './wordle/wordle.component';
import {TiciacComponent } from './ticiac/ticiac.component';
import {SudokuComponent } from './sudoku/sudoku.component';
import {GameComponent } from './game/game.component';
const routes: Routes = [
    {path:'',redirectTo: '/departments',pathMatch:'full'},
	{path:'departments',component:DepartmentListComponent},
	{path:'employees',component:EmployeeListComponent},
	{path:'study',component:StudyComponent},
	{path:'game',component:GameComponent},
	{path:'wordle',component:WordleComponent},
	{path:'ticiac',component:TiciacComponent},
	{path:'sudoku',component:SudokuComponent},
	
	{path:'**',component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentListComponent,EmployeeListComponent]