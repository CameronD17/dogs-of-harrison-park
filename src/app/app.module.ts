import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { UploadComponent } from './upload/upload.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FaqComponent } from './faq/faq.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'faq', component: FaqComponent },
  { path: '',
    redirectTo: '/upload',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UploadComponent,
    SponsorsComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
