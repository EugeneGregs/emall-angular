import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material';

const components = [
  MatButtonModule
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [components]
})
export class FrontNgMatModule { }
