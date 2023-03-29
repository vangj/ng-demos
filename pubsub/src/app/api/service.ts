import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class EventService {
    global: Subject<any>;

    constructor() {
        this.global = new Subject<any>();
    }
}