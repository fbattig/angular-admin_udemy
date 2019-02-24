import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routes
import { APP_ROUTE } from './app-routing.module';

//Modules
import { PageModules } from './pages/page.modules';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent
	],
	imports: [BrowserModule, APP_ROUTE, PageModules],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
