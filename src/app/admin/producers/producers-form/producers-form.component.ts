import { Component, OnInit } from '@angular/core';
import { Producer } from 'src/app/shared/model/producer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProducersService } from '../producers.service';
import { MessageService } from 'primeng/api';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';

@Component({
  selector: 'app-producers-form',
  templateUrl: '../../../shared/base-form/base-form.component.html',
  styleUrls: ['../../../shared/base-form/base-form.component.css']
})
export class ProducersFormComponent extends BaseFormComponent implements OnInit {
  modelName: string = 'producer';

  constructor(
    protected apiService: ProducersService,
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

  buildForm<Producer>(data: Producer): FormGroup {
    return this.formBuilder.group({
      name: [data ? this.dataToEdit.name : '', [Validators.required, Validators.maxLength(32)]],
      description: [data ? this.dataToEdit.description : '', [Validators.maxLength(64)]],
      logo: null,
      rowVersion: [data ? this.dataToEdit.rowVersion : null]
    });
  }

  prepareDataToSend() {
    let data: Producer = Object.assign({}, this.dataForm.value);
    // data.logo = this.uploadedLogo;
    data.id = this.dataToEdit ? this.dataToEdit.id: null;

    return data;
  }
}
