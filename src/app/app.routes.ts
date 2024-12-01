import { Routes } from '@angular/router';
import { Component} from '@angular/core';
import path from 'path';
import { CustomComponent } from './custom/custom.component';

export const routes: Routes = [
    {path: '', component: CustomComponent},
];
