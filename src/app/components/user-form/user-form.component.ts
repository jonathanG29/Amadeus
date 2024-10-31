import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormValidationService } from '../../services/form-validation.service';
import { DestinoService } from '../../servicios/destino.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, HttpClientModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() slideIndex: number = 1; // Propiedad de entrada para recibir el índice del slide
  nombre = new FormControl(); // Control de formulario para el nombre del usuario
  correo = new FormControl(); // Control de formulario para el correo del usuario
  estadoCorreo = ""; // Variable para almacenar el estado de validación del correo
  controlBoton = true; // Variable para controlar el estado deshabilitado del botón

  constructor(private formValidationService: FormValidationService, public destinoService: DestinoService) {}

  // Método para establecer los datos del usuario en el servicio de destino
  datosUsuario() {
    this.destinoService.nombreS = this.nombre.value;
    this.destinoService.correoS = this.correo.value;

    // Establecer el avatar basado en el índice del slide
    switch(this.slideIndex) {
      case 1: {
        this.destinoService.avatar = "../../../assets/img/img-avatar/ava11.png";
        break;
      }
      case 2: {
        this.destinoService.avatar = "../../../assets/img/img-avatar/ava12.png";
        break;
      }
      case 3: {
        this.destinoService.avatar = "../../../assets/img/img-avatar/ava13.png";
        break;
      }
      case 4: {
        this.destinoService.avatar = "../../../assets/img/img-avatar/ava14.png";
        break;
      }
    }
  }

  // Método para validar el nombre del usuario
  verificarNomb(event: Event) {
    this.estadoCorreo = this.formValidationService.validateName(this.nombre.value);
  }

  // Método para validar el correo del usuario
  verificarCorreo(event: Event) {
    this.estadoCorreo = this.formValidationService.validateEmail(this.correo.value);
    this.controlBoton = this.estadoCorreo !== ""; // Deshabilitar el botón si el correo es inválido
  }
}
