import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InfertilityTestingComponent } from './infertility-testing/infertility-testing.component';
import { TestingIvfComponent } from './testing-ivf/testing-ivf.component';
import { AIIVFComponent } from './ai-ivf/ai-ivf.component';
import { AIICSIComponent } from './ai-icsi/ai-icsi.component';
import { AIIvmComponent } from './ai-ivm/ai-ivm.component';
import { AIIUIComponent } from './ai-iui/ai-iui.component';
import { EGGPOOLINGComponent } from './egg-pooling/egg-pooling.component';
import { ISSUESComponent } from './issues/issues.component';
import { EGGFREEZINGComponent } from './egg-freezing/egg-freezing.component';
import { STEMCELLOVARIANComponent } from './stemcell-ovarian/stemcell-ovarian.component';
import { STEMCELLERECTILEComponent } from './stemcell-erectile/stemcell-erectile.component';
import { GENDERSELECTIONComponent } from './gender-selection/gender-selection.component';

const routes: Routes = [ 
  {path: 'home',component:HomeComponent},
 { path: 'aboutus', component: AboutUsComponent },
  {path: 'infertilitytesting',component:InfertilityTestingComponent},
  {path:'check',component:TestingIvfComponent},
  {path:'IVF',component:AIIVFComponent},
  {path:'ICSI',component:AIICSIComponent},
  {path:'IVM',component:AIIvmComponent},
  {path:'IUI',component:AIIUIComponent},
  {path:'EGG',component:EGGPOOLINGComponent},
  {path:'ISSUES',component:ISSUESComponent},
  {path:'EGGFREEZING',component:EGGFREEZINGComponent},
  {path:'STEMOVERIAN',component:STEMCELLOVARIANComponent},
  {path:'STEMERECTILE',component:STEMCELLERECTILEComponent},
  {path:'GENDER',component:GENDERSELECTIONComponent},












];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
