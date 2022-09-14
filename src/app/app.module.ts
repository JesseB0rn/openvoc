import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import {
  provideFirestore,
  getFirestore,
  connectFirestoreEmulator,
} from '@angular/fire/firestore';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { FooterModule } from './components/footer/footer.module';
import { HomeModule } from './pages/home/home.module';
import { CreateModule } from './pages/create/create.module';
import { SettingsModule } from './pages/settings/settings.module';
import { DeckStore } from './states/deck.state';
import { AuthState } from './states/auth.state';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LandingModule } from './pages/landing/landing.module';
import { LearnModule } from './pages/learn/learn.module';
import { LoginModule } from './pages/login/login.module';

const importedComponents: any[] = [ToolbarModule, FooterModule];
const pages: any[] = [
  HomeModule,
  CreateModule,
  SettingsModule,
  LandingModule,
  LearnModule,
  LoginModule,
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      const auth = getAuth();
      if (environment.useEmu)
        connectAuthEmulator(auth, 'http://localhost:9099');
      return auth;
    }),
    provideFirestore(() => {
      const firestore = getFirestore();
      if (environment.useEmu)
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      return firestore;
    }),
    NgxsModule.forRoot([DeckStore, AuthState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    MatSnackBarModule,
    ...importedComponents,
    ...pages,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
