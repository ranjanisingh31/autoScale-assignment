import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatGridListModule } from "@angular/material/grid-list";


const material = [MatToolbarModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCardModule, MatSelectModule, MatGridListModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [material]
})
export class MaterialModule { }
