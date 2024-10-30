import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlideshowComponent } from './slideshow.component';
import { Renderer2 } from '@angular/core';

describe('SlideshowComponent', () => {
  let component: SlideshowComponent;
  let fixture: ComponentFixture<SlideshowComponent>;

  // Configurar el módulo de pruebas para SlideshowComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlideshowComponent],
      providers: [Renderer2]
    }).compileComponents();
  });

  // Crear la instancia del componente y activar la detección de cambios
  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Probar si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Probar si el índice de la diapositiva cambia correctamente
  it('should change slide index correctly', () => {
    component.plusSlides(1);
    expect(component.slideIndex).toBe(2);
    component.plusSlides(-1);
    expect(component.slideIndex).toBe(1);
  });

  // Probar si la diapositiva actual se establece correctamente
  it('should set current slide correctly', () => {
    component.currentSlide(3);
    expect(component.slideIndex).toBe(3);
  });

  // Probar si el evento de cambio de diapositiva se emite correctamente
  it('should emit slide change event', () => {
    spyOn(component.slideChange, 'emit');
    component.plusSlides(1);
    expect(component.slideChange.emit).toHaveBeenCalledWith(2);
  });
});
