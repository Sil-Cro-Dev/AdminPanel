import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {ListComponent} from './common/components/list/list.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {ToolbarComponent} from './common/components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {SidebarComponent} from './common/components/sidebar/sidebar.component';
import {DashboardComponent} from './features/dashboard/dashboard.component';
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './common/components/form/form.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DialogComponent } from './common/components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ToolbarComponent,
    SidebarComponent,
    DashboardComponent,
    FormComponent,
    DialogComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        NoopAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatInputModule,
        HttpClientModule,
        MatProgressBarModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
