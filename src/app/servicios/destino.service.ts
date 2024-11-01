import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  constructor() { }
  
  indice:number = 0;
  destinoA:String = "";
  destinoE:String = "";
  respuestasSer:String[] = [];
  nombreS:String = "";
  correoS:String = "";
  avatar: String = "https://cdn-icons-png.flaticon.com/512/9187/9187532.png";
  srcA: String = "";
  srcE: String = "";

}
