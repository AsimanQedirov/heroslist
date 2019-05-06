import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import {MatInputModule} from '@angular/material/input';
import { DetailComponent } from './home/detail/detail.component';
import { HeroelistsComponent } from './heroelists/heroelists.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

  const appRoutes  : Routes = [
    {
      path : '',
      component : HomeComponent
    },
    {
      path : 'detail',
      component : DetailComponent
    },
    {
      path : 'heroelists',
      component : HeroelistsComponent
    }
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    HeroelistsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatProgressBarModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
