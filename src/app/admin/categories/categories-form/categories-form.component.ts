import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/model/Category';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from '../categories.service';
import { MessageService } from 'primeng/api';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';

@Component({
  selector: 'app-categories-form',
  templateUrl: '../../../shared/base-form/base-form.component.html',
  styleUrls: ['../../../shared/base-form/base-form.component.css']
})
export class CategoriesFormComponent extends BaseFormComponent implements OnInit {
  modelName: string = 'category';

  constructor(
    protected apiService: CategoriesService,
    protected messageService: MessageService,
    protected formBuilder: FormBuilder,
  ) {
    super(
      apiService,
      messageService, 
      formBuilder
    );
  }

  ngOnInit() {
    super.ngOnInit();
  }

  buildForm<Category>(data: Category): FormGroup {
    return this.formBuilder.group({
      name: [data ? this.dataToEdit.name : '', [Validators.required, Validators.maxLength(32)]],
      description: [data ? this.dataToEdit.description : '', [Validators.maxLength(64)]],
      logo: null,
      rowVersion: [data ? this.dataToEdit.rowVersion : null]
    });
  }

  prepareDataToSend() {
    let data: Category = Object.assign({}, this.dataForm.value);
    // data.logo = this.uploadedLogo;
    data.id = this.dataToEdit ? this.dataToEdit.id: null;

    return data;
  }
}
