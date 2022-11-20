import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HeaderComponent} from './header/header.component';
import {DatabaseComponent} from './database/database.component';
import {StatsComponent} from './stats/stats.component';
import {SettingsComponent} from './settings/settings.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HeaderComponent,
		DatabaseComponent,
		StatsComponent,
		SettingsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
