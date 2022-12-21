import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Observable } from "rxjs";
import { Lucky, SocialInfo } from "./model";

@Injectable({providedIn: 'root'})
export class LuckyService {
    constructor(private readonly http: HttpClient) { }

    public getNumber(): Observable<Lucky> {
        return this.http.get<Lucky>('http://localhost:8000/api/lucky');
    }

    public getSocial(): Observable<SocialInfo> {
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