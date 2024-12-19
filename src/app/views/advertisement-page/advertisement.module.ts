import { NgModule } from '@angular/core';

import { SharedModule } from '../../@shared/shared.module';
import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { AdvertisementComponent } from './advertisement.component';

@NgModule({
  declarations: [AdvertisementComponent],
  imports: [SharedModule, AdvertisementRoutingModule],
  exports: [],
})
export class AdvertisementModule {}
