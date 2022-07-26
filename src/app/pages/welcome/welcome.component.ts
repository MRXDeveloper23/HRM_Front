import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  isCollapsed = false;

  constructor(
    private permissionService: NgxPermissionsService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const perm = ['ADMIN'];
    this.permissionService.loadPermissions(perm);
    this.http.get('url').subscribe((permissions) => {
      this.permissionService.loadPermissions(perm);
    });
  }
}
