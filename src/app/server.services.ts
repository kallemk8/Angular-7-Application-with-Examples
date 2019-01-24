import { Injectable } from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import { CookieService } from "angular2-cookie/services/cookies.service";


@Injectable()
export class serverServices{
    constructor(private http: Http, private cookie: CookieService){}
    getServerdata(){
       return this.http.get('http://localhost/rental/api/companies');
    }

    getLoginservice(server:any){
        console.log(server);
        let header = new Headers({'Content-Type': 'application/json'});
        
        let options: any = new RequestOptions({ headers: header});
        
        return this.http.post('http://localhost/angularapi/api/login',server)
    }
    getCookie(key: string){
        return this.cookie.get(key);
    }
    getLatestnews(){
        return this.http.get('http://35.154.179.55:3012/api/HomePageBannerStories?filter[where][date]=2018-06-08');
        
    }
}