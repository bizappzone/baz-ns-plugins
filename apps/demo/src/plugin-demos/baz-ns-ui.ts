import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedBazNsUi } from '@demo/shared';
import { } from '@bizappzone/baz-ns-ui';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedBazNsUi {
	
}
