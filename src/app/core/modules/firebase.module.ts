import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireFunctionsModule} from "@angular/fire/functions";
import {AngularFireMessagingModule} from "@angular/fire/messaging";

const FIREBASE = [
  AngularFirestoreModule,
  AngularFireAuthModule,
  AngularFireStorageModule,
  AngularFireFunctionsModule,
  AngularFireMessagingModule,
  AngularFireDatabaseModule,
]

@NgModule({
  imports: [
    CommonModule,
    ...FIREBASE
  ],
  exports: [
    ...FIREBASE
  ]
})
export class FirebaseModule {
}
