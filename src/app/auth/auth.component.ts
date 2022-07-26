import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;
  lang = 'ru';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('ru');
    translate.use('ru');
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      console.log('submit', this.loginForm.value);
    } else {
      console.log(this.loginForm.controls);
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  navigateToRegister() {
    this.router.navigate(['/signup']);
  }
  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
