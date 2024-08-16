import { Component, OnInit } from '@angular/core';
import { DestinoService } from '../../servicios/destino.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-destino',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './destino.component.html',
  styleUrl: './destino.component.css'
})
export class DestinoComponent {

  constructor(public destinoService: DestinoService){}

  america:String = "";
  europa:String = "";


  srcA = "";
  srcE = "";
  datosA:string [] = [];
  datosE:string [] = [];

  control: boolean = true;

  ngOnInit(): void {
    this.destino();
  }


  destino(){
    if(this.destinoService.destinoA == "Playa del Carmen"){

      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/PlayaDelCarmen.jpg"
      this.srcE = "../../../assets/img/Santorini.jpg"
      this.datosA = ["México","Español","Chichén-Itzá","Salbutes"];
      this.datosE = ["Grecia","Griego","Oia","Hummus de Fava"];

    } else if (this.destinoService.destinoA == "Tulum"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/Tulum.jpg"
      this.srcE = "../../../assets/img/ibiza.jpg"
      this.datosA = ["México","Español","Cenote Calavera","Ceviche de Pescado"];
      this.datosE = ["España","Castellano/Catalán","Islote Es Vedrá","Sofrit pagès"];

    } else if (this.destinoService.destinoA == "Honolulu"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/Honolulu.jpg"
      this.srcE = "../../../assets/img/Malta.jpg"
      this.datosA = ["Hawái","Ingles/Hawaiano","Playa Hapuna","Saimin"];
      this.datosE = ["Malta","Ingles/Maltés","La Valeta","Aljotta"];

    } else if (this.destinoService.destinoA == "Cartagena"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/Cartagena.jpg"
      this.srcE = "../../../assets/img/Barcelona.jpg"
      this.datosA = ["Colombia","Español","Castillo San Felipe","Cazuela de Mariscos"];
      this.datosE = ["España","Castellano/Catalán","Sagrada Familia","Pa amb tomàquet"];

    } else if (this.destinoService.destinoA == "San Juan"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/SanJuan.jpg"
      this.srcE = "../../../assets/img/niza.jpg"
      this.datosA = ["Puerto Rico","Español","Viejo San Juan","Mofongo"];
      this.datosE = ["Francia","Frances","Vielle Ville","La socca"];

    } else if (this.destinoService.destinoA == "Río de Janeiro"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/RioDeJaneiro.jpg"
      this.srcE = "../../../assets/img/lisboa.jpg"
      this.datosA = ["Brasil","Portugués","Cristo Redentor","Feijoada"];
      this.datosE = ["Portugal","Portugués","Tranvía 28","Pasteles de Belem"];

    } else if (this.destinoService.destinoA == "Punta Cana"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/puntaCana.jpg"
      this.srcE = "../../../assets/img/algarve.jpg"
      this.datosA = ["México","Español","Chichén-Itzá","Salbutes"];
      this.datosE = ["Grecia","Griego","Oia","Hummus de Fava"];

    } else if (this.destinoService.destinoA == "Ushuaia"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/ushuaia.jpg"
      this.srcE = "../../../assets/img/reykjavik.jpg"
      this.datosA = ["México","Español","Chichén-Itzá","Salbutes"];
      this.datosE = ["Grecia","Griego","Oia","Hummus de Fava"];

    } else if (this.destinoService.destinoA == "Aspen"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/Aspen.jpg"
      this.srcE = "../../../assets/img/innsbruck.jpg"
      this.datosA = ["México","Español","Chichén-Itzá","Salbutes"];
      this.datosE = ["Grecia","Griego","Oia","Hummus de Fava"];

    } else if (this.destinoService.destinoA == "Bariloche"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/Bariloche.jpg"
      this.srcE = "../../../assets/img/interlaken.jpg"
      this.datosA = ["México","Español","Chichén-Itzá","Salbutes"];
      this.datosE = ["Grecia","Griego","Oia","Hummus de Fava"];

    } else if (this.destinoService.destinoA == "Banff"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/banff.jpg"
      this.srcE = "../../../assets/img/zermatt.jpg"
      this.datosA = ["México","Español","Chichén-Itzá","Salbutes"];
      this.datosE = ["Grecia","Griego","Oia","Hummus de Fava"];

    } else if (this.destinoService.destinoA == "Cusco"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/cusco.jpg"
      this.srcE = "../../../assets/img/Granada.jpg"
      this.datosA = ["México","Español","Chichén-Itzá","Salbutes"];
      this.datosE = ["Grecia","Griego","Oia","Hummus de Fava"];

    } else if (this.destinoService.destinoA == "Machu Picchu"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/MachuPicchu.jpg"
      this.srcE = "../../../assets/img/Chamonix.jpg"
      this.datosA = ["México","Español","Chichén-Itzá","Salbutes"];
      this.datosE = ["Grecia","Griego","Oia","Hummus de Fava"];

    } else if (this.destinoService.destinoA == "Los Angeles"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/LosAngeles.jpg"
      this.srcE = "../../../assets/img/roma.jpg"
      this.datosA = ["México","Español","Chichén-Itzá","Salbutes"];
      this.datosE = ["Grecia","Griego","Oia","Hummus de Fava"];

    } else if (this.destinoService.destinoA == "Toronto"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/toronto.jpg"
      this.srcE = "../../../assets/img/berlin.jpg"
      this.datosA = ["México","Español","Chichén-Itzá","Salbutes"];
      this.datosE = ["Grecia","Griego","Oia","Hummus de Fava"];

    } else if (this.destinoService.destinoA == "Ciudad de México"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/ciudadMexico.jpg"
      this.srcE = "../../../assets/img/madrid.jpg"
      this.datosA = ["México","Español","Chichén-Itzá","Salbutes"];
      this.datosE = ["Grecia","Griego","Oia","Hummus de Fava"];

    } else if (this.destinoService.destinoA == "Nueva York"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/NuevaYork.jpg"
      this.srcE = "../../../assets/img/paris.jpg"
      this.datosA = ["México","Español","Chichén-Itzá","Salbutes"];
      this.datosE = ["Grecia","Griego","Oia","Hummus de Fava"];

    } else if (this.destinoService.destinoA == "Miami"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/miami.jpg"
      this.srcE = "../../../assets/img/viena.jpg"
      this.datosA = ["México","Español","Chichén-Itzá","Salbutes"];
      this.datosE = ["Grecia","Griego","Oia","Hummus de Fava"];

    } else if (this.destinoService.destinoA == "Chicago"){
      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/chicago.jpg"
      this.srcE = "../../../assets/img/londres.jpg"
      this.datosA = ["México","Español","Chichén-Itzá","Salbutes"];
      this.datosE = ["Grecia","Griego","Oia","Hummus de Fava"];

    } else if (this.destinoService.destinoA == "Bora Bora"){

      this.control = false;

      this.america = this.destinoService.destinoA;
      this.europa = this.destinoService.destinoE;
      this.srcA = "../../../assets/img/BoraBora.jpg"
      this.srcE = "../../../assets/img/dubai.jpg"
      this.datosA = ["Polinesia Francesa","Español","Chichén-Itzá","Salbutes"];
      this.datosE = ["Emiratos Árabes","Griego","Oia","Hummus de Fava"];
    }

    this.destinoService.srcA = this.srcA;
    this.destinoService.srcE = this.srcE;

  }


}