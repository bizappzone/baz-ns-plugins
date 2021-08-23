import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BazNsUiComponent } from './baz-ns-ui.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BazNsUiComponent }])],
  declarations: [BazNsUiComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class BazNsUiModule {}
