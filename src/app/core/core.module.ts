import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstantsService } from '../services/constants.service';
import { GeneratorService } from '../services/generator.service';
import { ConfigOptionsService } from '../services/config-options.service';
import { LocalStorageService } from '../services/local-storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ConfigOptionsService,
    { provide: ConstantsService, useValue: new ConstantsService()} ,
    { provide: GeneratorService, useFactory: () => new GeneratorService(20) },
    LocalStorageService
  ],
  declarations: []
})
export class CoreModule { }
