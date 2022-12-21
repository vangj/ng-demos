import { DOCUMENT, isPlatformBrowser, isPlatformServer } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { makeStateKey, Meta, Title, TransferState } from "@angular/platform-browser";
import { Observable, of, tap } from "rxjs";
import { Lucky, SocialInfo } from "./model";

@Injectable({providedIn: 'root'})
export class LuckyService {
    constructor(private readonly http: HttpClient, @Inject(PLATFORM_ID) private readonly platformId: any, private readonly transferState: TransferState) { }

    public getNumber(): Observable<Lucky> {
        return this.http.get<Lucky>('http://localhost:8000/api/lucky');
    }

    public getSocial(): Observable<SocialInfo> {
        const key = makeStateKey<SocialInfo>('socialInfo');

        if (isPlatformServer(this.platformId)) {
            return this.http.get<SocialInfo>('http://localhost:8000/api/social').pipe(
                tap(socialInfo => this.transferState.set(key, socialInfo))
            );
        }

        if (isPlatformBrowser(this.platformId) && this.transferState.hasKey(key)) {
            const socialInfo = this.transferState.get<any>(key, null) as SocialInfo;
            this.transferState.remove(key);
            return of(socialInfo);
        }

        return this.http.get<SocialInfo>('http://localhost:8000/api/social');
    }
}

@Injectable({
    providedIn: 'root'
})
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