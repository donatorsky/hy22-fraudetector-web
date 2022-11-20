import {Component} from '@angular/core';
import * as feather from 'feather-icons';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	ngAfterViewInit() {
		feather.replace();
	}
}
