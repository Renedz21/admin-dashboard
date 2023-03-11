import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginDTO } from 'src/app/models/classes/login.dto';
import { Session } from 'src/app/models/classes/session.class';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;

  loginDto: LoginDTO = new LoginDTO();

  returnUrl: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getForm();
  }

  private getForm() {
    this.formGroup = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  login() {
    this.spinner.show();
    this.loginDto.email = this.formGroup.value.email;
    this.loginDto.password = this.formGroup.value.password;

    this.authService.login(this.loginDto).subscribe({
      next: (response: any) => {
        let session = new Session(response.token, response.user);
        this.authService.saveSession(session);

        if (this.authService.getSession()?.user?.isAdmin === false) {
          throw new Error(" You are not an admin");
        } else {
          if (this.returnUrl) {
            this.router.navigateByUrl(`${this.returnUrl}`);
          }
          this.redirectToHome();
        }

        this.spinner.hide();
      },
      error: (error) => {
        console.log(error);
        this.spinner.hide();
      },
      complete: () => { }
    })
  }

  redirectToHome() {
    this.router.navigate(['/dashboard']);
  }
}
