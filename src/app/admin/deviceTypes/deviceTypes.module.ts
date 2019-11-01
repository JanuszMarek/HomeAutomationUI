import { NgModule } from '@angular/core';
import { DeviceTypesComponent } from './deviceTypes.component';
import { DeviceTypesFormComponent } from './deviceTypes-form/deviceTypes-form.component';
import { DeviceTypesResolveService } from './deviceTypes-resolve.service';
import { DeviceTypesService } from './deviceTypes.service';
import { DeviceTypesRoutingModule } from './deviceTypes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DeviceTypesComponent,
    DeviceTypesFormComponent
  ],
  imports: [
    SharedModule,
    DeviceTypesRoutingModule,
  ],
  entryComponents: [DeviceTypesFormComponent],
  providers: [DeviceTypesResolveService, DeviceTypesService],
})
export class DeviceTypesModule { }
