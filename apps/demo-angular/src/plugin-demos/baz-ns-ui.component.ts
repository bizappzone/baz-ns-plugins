import { Component, NgZone } from '@angular/core';
import { DemoSharedBazNsUi } from '@demo/shared';
import { } from '@bizappzone/baz-ns-ui';

@Component({
	selector: 'demo-baz-ns-ui',
	templateUrl: 'baz-ns-ui.component.html',
})
export class BazNsUiComponent {
  
  demoShared: DemoSharedBazNsUi;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBazNsUi();
  }

}