import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserFormComponent } from './user-form.component';
import { FormValidationService } from '../../services/form-validation.service';
import { DestinoService } from '../../servicios/destino.service';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  // Configurar el módulo de pruebas para UserFormComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [UserFormComponent],
      providers: [FormValidationService, DestinoService]
    }).compileComponents();
  });

  // Crear la instancia del componente y activar la detección de cambios
  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Probar si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Probar si la validación del nombre funciona correctamente
  it('should validate name correctly', () => {
    component.nombre.setValue('John Doe');
    component.verificarNomb(new Event('keyup'));
    expect(component.estadoCorreo).toBe('');
  });

  // Probar si la validación del correo electrónico funciona correctamente
  it('should validate email correctly', () => {
    component.correo.setValue('test@example.com');
    component.verificarCorreo(new Event('keyup'));
    expect(component.estadoCorreo).toBe('');
    expect(component.controlBoton).toBe(false);
  });

  // Probar si el botón se desactiva para un correo electrónico no válido
  it('should disable button for invalid email', () => {
    component.correo.setValue('invalid-email');
    component.verificarCorreo(new Event('keyup'));
    expect(component.estadoCorreo).not.toBe('');
    expect(component.controlBoton).toBe(true);
  });

  // Probar si los datos del usuario se establecen correctamente
  it('should set user data correctly', () => {
    component.nombre.setValue('John Doe');
    component.correo.setValue('test@example.com');
    component.slideIndex = 2;
    component.datosUsuario();
    expect(component.destinoService.nombreS).toBe('John Doe');
    expect(component.destinoService.correoS).toBe('test@example.com');
    expect(component.destinoService.avatar).toBe('../../../assets/img/img-avatar/ava12.png');
  });
});
