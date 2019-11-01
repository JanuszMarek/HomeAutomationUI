import { NgModule } from '@angular/core';
import { DevicesComponent } from './devices.component';
import { DevicesFormComponent } from './devices-form/devices-form.component';
import { DevicesResolveService } from './devices-resolve.service';
import { DevicesService } from './devices.service';
import { DevicesRoutingModule } from './devices-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DevicesComponent,
    DevicesFormComponent
  ],
  imports: [
    SharedModule,
    DevicesRoutingModule,
  ],
  entryComponents: [DevicesFormComponent],
  providers: [DevicesResolveService, DevicesService],
})
export class DevicesModule { }
