import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private input: any;
  
  constructor(private httpClient: HttpClient, private router: Router) {
    this.input = {
        "username": "",
        "password": ""
    };
}
private login() {
    if(this.input.username && this.input.password) {
        let options = {
          headers: new HttpHeaders({ "content-type": "application/json" })
        };
        let data = {
          name: this.input.username,
          pass: this.input.password
        };
        this.httpClient.post("http://localhost:3000/userAuth", JSON.stringify(data), options)
          .subscribe(
              result => {
                localStorage.setItem('userdata', JSON.stringify(result));
                localStorage.setItem('auth', JSON.stringify(true));
                this.router.navigate(["/userprofile"]);
              },
            error => {
              console.log("Error", error);
            }
          );
    }
}
  ngOnInit() {
  }

}
