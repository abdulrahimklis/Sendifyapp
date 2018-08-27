import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideNavComponent } from './components/choose-agency/side-nav/side-nav.component';
import { HeaderComponent } from './components/choose-agency/header/header.component';
import { FilterComponent } from './components/choose-agency/filter/filter.component';
import { ProductsComponent } from './components/choose-agency/products/products.component';
import { FooterComponent } from './components/choose-agency/footer/footer.component';
import { CheapFastComponent } from './components/choose-agency/cheap-fast/cheap-fast.component';
import { CheapPipe } from './filters/cheap/cheap.pipe';
import { FastPipe } from './filters/fast/fast.pipe';
import { ChooseAgencyComponent } from './components/choose-agency/choose-agency.component';

// Services
import { InputService } from "./services/inputs/input.service";

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    FilterComponent,
    ProductsComponent,
    FooterComponent,
    CheapFastComponent,
    CheapPipe,
    FastPipe,
    ChooseAgencyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    InputService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
