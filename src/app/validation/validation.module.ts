import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from 'ng2-translate';
import { MzErrorMessageComponent } from './error-message';
import { MzValidationComponent } from './validation.component';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [
    MzErrorMessageComponent,
    MzValidationComponent,
  ],
  entryComponents: [MzErrorMessageComponent],
  exports: [
    MzErrorMessageComponent,
    MzValidationComponent,
  ],
})
export class MzValidationModule { }
