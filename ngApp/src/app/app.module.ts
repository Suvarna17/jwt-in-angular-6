import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialComponent } from './special/special.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EventService } from './event.service';
import { Auth1Guard } from './auth1.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthserviceService } from './authservice.service';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular-6-social-login';


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([

    // {
    //   id: FacebookLoginProvider.PROVIDER_ID,
    //   provider: new FacebookLoginProvider("Your-Facebook-app-id")
    // },
    {
      id: GoogleLoginProvider.PROVIDER_ID,

      //provider: new GoogleLoginProvider("1092754136909-250693fpthv3bfdi9kot0mmln664icud.apps.googleusercontent.com")
      provider: new GoogleLoginProvider("291538523976-ibubqnukdlcnvqi5t50errgutijlfu7s.apps.googleusercontent.com")
    }
  ]);
  return config;
}

@NgModule({
  declarations: [

    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule

  ],
  providers: [AuthserviceService, Auth1Guard, EventService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
