import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductComponent } from './components/product/product.component';
import { EffectButtonDirective } from './directives/effect-button.directive';

// Регистрируем локаль 'ru'
registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    AdvantageComponent,
    ProductComponent,
    EffectButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
