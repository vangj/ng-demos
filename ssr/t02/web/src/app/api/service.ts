import { DOCUMENT, isPlatformServer } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { makeStateKey, Meta, StateKey, Title, TransferState } from "@angular/platform-browser";
import { Observable, of, tap } from "rxjs";
import { Data, Lucky, SocialInfo } from "./model";


@Injectable({providedIn: 'root'})
export class StateService {
    isServer = false;
    constructor(@Inject(PLATFORM_ID) private readonly platformId: any, private readonly transferState: TransferState) {
        this.isServer = isPlatformServer(platformId);
    }

    getData(key: StateKey<string>, f: Observable<any>): Observable<any> {
        if (this.transferState.hasKey(key)) {
            console.log(`state | get | ${this.isServer} | ${key} | ${new Date().getTime()}`);
            const val = this.transferState.get(key, null);
            this.transferState.remove(key);
            return of(val);
        } else {
            return f.pipe(
                tap(data => {
                    if (this.isServer) {
                        console.log(`state | set | ${this.isServer} | ${key} | ${new Date().getTime()}`);
                        this.transferState.set(key, data);
                    }
                })
            );
        }
    }

    getKey(key: string): StateKey<string> {
        return makeStateKey<string>(key)
    }
}

@Injectable({providedIn: 'root'})
export class LuckyService {
    constructor(private readonly http: HttpClient, private readonly stateService: StateService) { }

    public getNumber(): Observable<Lucky> {
        const url = 'http://localhost:8000/api/lucky';
        const key = this.stateService.getKey(url);
        const f = this.http.get<Lucky>(url);

        return this.stateService.getData(key, f);
    }

    public getSocial(): Observable<SocialInfo> {
        const url = 'http://localhost:8000/api/social';
        const key = this.stateService.getKey(url);
        const f = this.http.get<SocialInfo>(url);

        return this.stateService.getData(key, f);
    }

    public getData(): Observable<Array<Data>> {
        const url = 'http://localhost:8000/api/data';
        const key = this.stateService.getKey(url);
        const f = this.http.get<Array<Data>>(url);

        return this.stateService.getData(key, f);
    }
}

@Injectable({providedIn: 'root'})
export class SocialService {
    constructor(private readonly meta: Meta, private readonly title: Title, @Inject(DOCUMENT) private readonly dom: any) { }

    public update(info: SocialInfo): void {
        this.title.setTitle(info.title);

        this.meta.updateTag({
            name: 'description',
            content: info.description
        });

        this.meta.updateTag({
            property: 'og:title',
            content: info.title
        });
        this.meta.updateTag({
            property: 'og:description',
            content: info.description
        });
        this.meta.updateTag({
            property: 'og:type',
            content: info.type
        });
        this.meta.updateTag({
            property: 'og:url',
            content: info.url
        });
    }
}