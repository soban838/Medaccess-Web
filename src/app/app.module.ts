import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';

// Components
import { AboutUsComponent } from './about-us/about-us.component';
import { InfertilityTestingComponent } from './infertility-testing/infertility-testing.component';
import { ApointmentComponent } from './apointment/apointment.component';
import { TestingIvfComponent } from './testing-ivf/testing-ivf.component';
import { AIIVFComponent } from './ai-ivf/ai-ivf.component';
import { AIICSIComponent } from './ai-icsi/ai-icsi.component';

// @ts-ignore
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { AIIvmComponent } from './ai-ivm/ai-ivm.component';
import { AIIUIComponent } from './ai-iui/ai-iui.component';
import { EGGPOOLINGComponent } from './egg-pooling/egg-pooling.component';
import { ISSUESComponent } from './issues/issues.component';
import { EGGFREEZINGComponent } from './egg-freezing/egg-freezing.component';
import { STEMCELLOVARIANComponent } from './stemcell-ovarian/stemcell-ovarian.component';
import { STEMCELLERECTILEComponent } from './stemcell-erectile/stemcell-erectile.component';
import { GENDERSELECTIONComponent } from './gender-selection/gender-selection.component';

registerLocaleData(en as any);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PatientLoginComponent,
    AboutUsComponent,
    InfertilityTestingComponent,
    ApointmentComponent,
    TestingIvfComponent,
    AIIVFComponent,
    AIICSIComponent,
    AIIvmComponent,
    AIIUIComponent,
    EGGPOOLINGComponent,
    ISSUESComponent,
    EGGFREEZINGComponent,
    STEMCELLOVARIANComponent,
    STEMCELLERECTILEComponent,
    GENDERSELECTIONComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzModalModule,
    NzRadioModule,
    NzButtonModule, 
    // SwiperModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
