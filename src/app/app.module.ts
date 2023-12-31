import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { FormsModule } from '@angular/forms';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { DeactivateGuard } from './servers/edit-server/can-deactive-guard.service';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ServerResolver } from './servers/server/server-resolver.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    UserComponent,
    ServerComponent,
    EditServerComponent,
    PageNotFoundComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServersService,AuthGuard,AuthService,DeactivateGuard,ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
