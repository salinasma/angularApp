import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {
//   MatAutocompleteModule,
//   MatBadgeModule,
//   MatBottomSheetModule,
//   MatButtonModule,
//   MatButtonToggleModule,
//   MatCardModule,
//   MatCheckboxModule,
//   MatChipsModule,
//   MatDatepickerModule,
//   MatDialogModule,
//   MatDividerModule,
//   MatExpansionModule,
//   MatGridListModule,
//   MatIconModule,
//   MatInputModule,
//   MatListModule,
//   MatMenuModule,
//   MatNativeDateModule,
//   MatPaginatorModule,
//   MatProgressBarModule,
//   MatProgressSpinnerModule,
//   MatRadioModule,
//   MatRippleModule,
//   MatSelectModule,
//   MatSidenavModule,
//   MatSliderModule,
//   MatSlideToggleModule,
//   MatSnackBarModule,
//   MatSortModule,
//   MatStepperModule,
//   MatTableModule,
//   MatTabsModule,
//   MatToolbarModule,
//   MatTooltipModule,
//   MatTreeModule,
// } from '@angular/material';

import { AppComponent }  from './app.component';
import { InterestComponent }  from './interest/interest.component';
import { NetWorthComponent}  from './netWorth/netWorth.component';

// @NgModule({
//   exports: [
//     MatAutocompleteModule,
//     MatBadgeModule,
//     MatBottomSheetModule,
//     MatButtonModule,
//     MatButtonToggleModule,
//     MatCardModule,
//     MatCheckboxModule,
//     MatChipsModule,
//     MatStepperModule,
//     MatDatepickerModule,
//     MatDialogModule,
//     MatDividerModule,
//     MatExpansionModule,
//     MatGridListModule,
//     MatIconModule,
//     MatInputModule,
//     MatListModule,
//     MatMenuModule,
//     MatNativeDateModule,
//     MatPaginatorModule,
//     MatProgressBarModule,
//     MatProgressSpinnerModule,
//     MatRadioModule,
//     MatRippleModule,
//     MatSelectModule,
//     MatSidenavModule,
//     MatSliderModule,
//     MatSlideToggleModule,
//     MatSnackBarModule,
//     MatSortModule,
//     MatTableModule,
//     MatTabsModule,
//     MatToolbarModule,
//     MatTooltipModule,
//     MatTreeModule,
//   ]
// })
@NgModule({
  imports: [ 
    BrowserModule// ,     
    // MatNativeDateModule
  ],
  declarations: [ 
    AppComponent ,
    InterestComponent,
    NetWorthComponent
    // ,MatButtonModule 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }