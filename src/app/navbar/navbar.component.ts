import {Component} from '@angular/core';
import * as feather from 'feather-icons';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

	ngAfterViewInit() {
		feather.replace();
	}
}
