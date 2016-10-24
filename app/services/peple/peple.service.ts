import {Injectable} from '@angular/core'

import {PEPLES} from './mock-peples'

@Injectable()

export class PepleService {
    getPeples() {
        return PEPLES;
    }
}