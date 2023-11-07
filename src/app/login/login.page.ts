import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private navCtrl: NavController, private storage: Storage) {}

  async login() {
    const loggedIn = await this.authService.login(this.username, this.password);
    if (loggedIn) {
      this.navCtrl.navigateRoot('/home');
    } else {
      console.log('Credenciales incorrectas',);
    }
  }

  async register() {
    const registered = await this.authService.register(this.username, this.password);
    if (registered) {
      console.log('Usuario registrado correctamente',this.username);
    } else {
      console.log('Error al registrar el usuario');
    }
  }
}
