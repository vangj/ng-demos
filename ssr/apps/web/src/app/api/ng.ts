import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { SocialInfo } from "./model";
import { LuckyService } from "./service";

@Injectable({providedIn: 'root'})
export class DefaultResolver implements Resolve<Observable<SocialInfo>> {
    constructor(private readonly luckySerivce: LuckyService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SocialInfo> | Observable<Observable<SocialInfo>> | Promise<Observable<SocialInfo>> {
        return this.luckySerivce.getSocial();
    }
    
}