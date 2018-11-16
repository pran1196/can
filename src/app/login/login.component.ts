import { Component, OnInit, Injectable,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { APP_CONFIG, IAppConfig } from '../app.config';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
@Injectable()  export class LoginComponent implements OnInit {
   public token:any;
    constructor(private http: Http,public router: Router,
    @Inject(APP_CONFIG) private config: IAppConfig
        ) {}
    private baseUrl = this.config.apiEndpoint;
    private user={'Username':null,'Password':null};
    
    ngOnInit() {}
    createAuthorizationHeader(headers: Headers,user) {
        var authdata = btoa(user.Username + ':' + user.Password);
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', 'Basic ' + authdata);
        
    }
    onLoggedin() {
        const url = this.baseUrl + 'api/Auth/Token';
        this.user.Username="admin";
        this.user.Password="admin@123"
        const headers = new Headers();
        this.createAuthorizationHeader(headers,this.user);
        const options = new RequestOptions({ headers: headers });
           const data=""
        this.http.post(url,data,options)
            .subscribe((res:any)=>{
              console.log(res);
              this.token=res._body;
              alert(this.token)
            });
    
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
    }
}
