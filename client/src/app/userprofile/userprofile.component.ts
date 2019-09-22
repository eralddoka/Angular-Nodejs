import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  private repos: any;
  private user: any;
  private authenticated: boolean;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.user = JSON.parse(localStorage.getItem('userdata'));
    this.authenticated = JSON.parse(localStorage.getItem('auth'));
    if(!this.authenticated)
    this.router.navigate(["/login"]);
  }

  private getRepos(){
    let options = {
      headers: new HttpHeaders({ "content-type": "application/json" })
    };
    
    this.httpClient.get("http://localhost:3000/userStarredRepos/" + this.user.login, options)
      .subscribe(
          result => {
            this.repos = result;
            if(this.repos.length ==0)
            alert('User has no starred repos!');
          },
        error => {
          console.log("Error", error);
        }
      );
  }

  private logout(){
   localStorage.removeItem('userdata');
   localStorage.removeItem('auth');
  }
  ngOnInit() {
  }

}
