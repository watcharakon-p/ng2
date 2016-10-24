// Module
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {routing} from './modules/routing.module'


// Component
import {AppComponent} from './app.component';
import {HeadComponent} from './components/layout/head/head.component'
import {HomeComponent} from './components/home/home.component'
import {AboutComponent} from './components/about/about.component'
import {ContactComponent} from './components/contact/contact.component'


// Services
import {PepleService} from './services/peple/peple.service'


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        routing,
    ],
    declarations: [
        AppComponent,
        HeadComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
    ],
    providers:[
        PepleService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}