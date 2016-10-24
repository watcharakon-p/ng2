import {Component,OnInit} from '@angular/core'

import {Peple} from '../../services/peple/peples.model'
import {PepleService} from '../../services/peple/peple.service'

@Component({
    selector: 'app-home',
    templateUrl: './app/components/home/home.component.html',
    styleUrls: ['./app/components/home/home.component.css']
})

export class HomeComponent implements OnInit {

    peples: Peple[]

    constructor(private pepleService: PepleService){}

    ngOnInit(){
        this.getPeples();
    }    

    getPeples() {
        this.peples = this.pepleService.getPeples();
    }
}