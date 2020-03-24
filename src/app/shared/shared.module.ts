import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { KeyFilterModule } from 'primeng/keyfilter';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { HttpClientModule } from '@angular/common/http';
import { BaseComponent } from './base/base.component';
import { BaseListComponent } from './base-list/base-list.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { LookupModule } from '../lookup/lookup.module';

const primnegModules = [
  ButtonModule,
  RadioButtonModule,
  CheckboxModule, 
  TabMenuModule,
  TableModule,
  TooltipModule,
  DialogModule,
  InputTextModule,
  InputTextareaModule,
  FileUploadModule,
  ConfirmDialogModule,
  CardModule,
  ToastModule,
  MultiSelectModule,
  DropdownModule,
  KeyFilterModule
];

const commonModules = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  declarations: [BaseComponent, BaseListComponent, BaseFormComponent],
  imports: [
    ...commonModules,
    ...primnegModules,
    SpinnerModule,
    LookupModule
  ],
  providers: [MessageService, ConfirmationService],
  exports: [
    ...commonModules,
    ...primnegModules,
    SpinnerModule,
    BaseListComponent]
})
export class SharedModule { }
