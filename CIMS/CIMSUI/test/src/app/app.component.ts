import { AuthService } from 'src/app/services/Authentication/auth.service';
import { Component } from '@angular/core';

import { MatDialogConfig, MatDialog } from '@angular/material';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';
import { MatTabsModule } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CIMSUI';
  isLoggedIn: Observable<boolean>;
  constructor(private authService: AuthService){
    
  }
  
  ngOnInit() {
    this.isLoggedIn = this.authService.showheader();
let currentUrl = this.router.url;
	console.log(currentUrl);
  }
}
