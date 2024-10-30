import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  // Método para validar un correo electrónico
  validateEmail(email: string): string {
    // Verifica si el campo de correo electrónico está vacío
    if (email === "") {
      return 'Escribe un correo electrónico';
    } else {
      // Expresión regular para validar el formato del correo electrónico
      let regEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\��]{2,})$/;
      // Verifica si el correo electrónico cumple con el formato
      if (regEmail.test(email)) {
        return "";
      } else {
        return "Escriba un Correo Valido";
      }
    }
  }

  // Método para validar un nombre
  validateName(name: string): string {
    // Verifica si el campo de nombre está vacío
    if (name === "") {
      return 'Escribe su nombre';
    }
    return "";
  }
}
