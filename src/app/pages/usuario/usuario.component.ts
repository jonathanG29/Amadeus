import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DestinoService } from '../../servicios/destino.service';
import { filter, Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit, OnDestroy {

  private routerSubscription!: Subscription;

  avatar: any;

  constructor(public destinoService: DestinoService, public router: Router){
    console.log(destinoService);
    
  }

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        console.log("render");
        this.obtenerAvatar()
      });
  }

  obtenerAvatar(){
    this.avatar = this.destinoService.avatar;
  }


  ngOnDestroy(): void {
    // Nos aseguramos de cancelar la suscripción para evitar fugas de memoria
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

}
