import { NgModule } from '@angular/core';
import { ProducersComponent } from './producers.component';
import { ProducersFormComponent } from './producers-form/producers-form.component';
import { ProducersResolveService } from './producers-resolve.service';
import { ProducersService } from './producers.service';
import { ProducersRoutingModule } from './producers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProducersComponent,
    ProducersFormComponent
  ],
  imports: [
    SharedModule,
    ProducersRoutingModule,
  ],
  entryComponents: [ProducersFormComponent],
  providers: [ProducersResolveService, ProducersService],
})
export class ProducersModule { }
