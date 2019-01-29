import 'core-js';
import 'zone.js';
import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: 'Hello World!'
})
class AppComponent {
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);