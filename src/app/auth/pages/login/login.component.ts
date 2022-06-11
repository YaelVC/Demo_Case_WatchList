import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies/service/movies.service';
MoviesService
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  linkToken: string = '';
  token: string = '';
  disabled: boolean = true;
  disabledSesion: boolean = false;
  sessionId: string = '';
  constructor(
    private service: MoviesService
  ) { }


  getToken() {
    this.service.getToken().subscribe(
      (data:any) =>{
        this.token = data.request_token;
        this.linkToken = `https://www.themoviedb.org/authenticate/${this.token}`;
        this.disabled = false;
        this.disabledSesion = true;
      }
    )
  }

  initSession() {
    this.service.getSessionId(this.token).subscribe((data:any) => {
      this.sessionId = data.session_id;
      this.disabledSesion = false;
      localStorage.setItem('id_session', this.sessionId);
    })
  }
}
