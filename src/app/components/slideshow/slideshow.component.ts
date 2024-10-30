import { Component, Input, Output, EventEmitter, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements AfterViewInit {
  @Input() slideIndex: number = 1; // Índice de la diapositiva actual
  @Output() slideChange = new EventEmitter<number>(); // Evento que se emite cuando cambia la diapositiva

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    this.showSlides(this.slideIndex); // Mostrar la diapositiva inicial después de que la vista se haya inicializado
  }

  plusSlides(n: number): void {
    this.slideIndex += n; // Incrementar o decrementar el índice de la diapositiva
    this.showSlides(this.slideIndex); // Mostrar la diapositiva correspondiente
    this.slideChange.emit(this.slideIndex); // Emitir el evento de cambio de diapositiva
  }

  currentSlide(n: number): void {
    this.slideIndex = n; // Establecer el índice de la diapositiva actual
    this.showSlides(this.slideIndex); // Mostrar la diapositiva correspondiente
    this.slideChange.emit(this.slideIndex); // Emitir el evento de cambio de diapositiva
  }

  showSlides(n: number): void {
    let i: number;
    const slides = this.el.nativeElement.querySelectorAll(".container__main__card__avatar--img"); // Obtener todas las diapositivas
    const dots = this.el.nativeElement.querySelectorAll(".dot"); // Obtener todos los puntos de navegación
    if (n > slides.length) { this.slideIndex = 1 } // Si el índice es mayor que el número de diapositivas, volver al inicio
    if (n < 1) { this.slideIndex = slides.length } // Si el índice es menor que 1, ir a la última diapositiva
    for (i = 0; i < slides.length; i++) {
      this.renderer.setStyle(slides[i], 'display', 'none'); // Ocultar todas las diapositivas
    }
    for (i = 0; i < dots.length; i++) {
      this.renderer.removeClass(dots[i], 'active'); // Quitar la clase 'active' de todos los puntos
    }
    this.renderer.setStyle(slides[this.slideIndex - 1], 'display', 'block'); // Mostrar la diapositiva actual
    this.renderer.addClass(dots[this.slideIndex - 1], 'active'); // Añadir la clase 'active' al punto correspondiente
  }
}
