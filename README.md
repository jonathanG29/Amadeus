# Amadeus

## Descripción
**Amadeus** es un proyecto Angular diseñado para describir el viaje de tus sueños. Este proyecto incluye varios componentes y servicios que permiten a los usuarios seleccionar avatares, ingresar información personal y visualizar datos relevantes.

## Estructura del Proyecto
La estructura de **Amadeus** está organizada de la siguiente manera:

### Carpeta `src/app`
Contiene los componentes, servicios y módulos principales de la aplicación.

### Carpeta `components`
Almacena todos los componentes de la aplicación:

- **Perfil**
  - **`perfil.component.ts`**: Contiene la lógica del componente `PerfilComponent`.
  - **`perfil.component.html`**: Define la plantilla HTML del componente `PerfilComponent`.
  - **`perfil.component.css`**: Incluye los estilos CSS para el componente `PerfilComponent`.

- **Slideshow**
  - **`slideshow.component.ts`**: Contiene la lógica del componente `SlideshowComponent`.
  - **`slideshow.component.html`**: Define la plantilla HTML del componente `SlideshowComponent`.
  - **`slideshow.component.css`**: Incluye los estilos CSS para el componente `SlideshowComponent`.

- **User Form**
  - **`user-form.component.ts`**: Contiene la lógica del componente `UserFormComponent`.
  - **`user-form.component.html`**: Define la plantilla HTML del componente `UserFormComponent`.
  - **`user-form.component.css`**: Incluye los estilos CSS para el componente `UserFormComponent`.

### Carpeta `services`
Contiene los servicios de la aplicación:

- **`data.service.ts`**: Define el servicio `DataService`, que realiza solicitudes HTTP para obtener datos desde una API externa.

### Archivos Principales
- **`app.component.ts`**: Contiene la lógica de la página principal de la aplicación.
- **`app.module.ts`**: Configura el módulo principal de la aplicación, incluyendo las rutas y componentes.
- **`main.ts`**: Configura el arranque inicial de la aplicación.
- **`styles.css`**: Contiene los estilos globales de la aplicación.

### Carpetas `src/assets` y `src/environments`
- **`src/assets`**: Almacena archivos estáticos como imágenes y configuraciones.
- **`src/environments`**: Contiene archivos de configuración de entorno.

## Componentes Principales
- **PerfilComponent**: Permite a los usuarios seleccionar un avatar y proporcionar información personal. Incluye un slideshow de avatares y un formulario de usuario.
- **SlideshowComponent**: Muestra un slideshow de avatares.
- **UserFormComponent**: Contiene un formulario para ingresar información del usuario.

## Servicios
- **DataService**: Servicio para realizar solicitudes HTTP a una API externa y obtener datos.

## Instalación
Para instalar y configurar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/amadeus.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd amadeus
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Ejecuta el proyecto:
   ```bash
   ng serve
   ```

Luego, abre tu navegador y navega a http://localhost:4200/ para descubrir tu viaje.

Y listo ya esta en condiciones para funcionar de manera adecuada

## Pruebas
Para ejecutar las pruebas unitarias, utiliza el siguiente comando:
   ```bash
   ng test
   ```

## Estructura de Rutas
El proyecto utiliza el módulo de enrutamiento de Angular para definir las rutas. La configuración de las rutas se encuentra en app-routing.module.ts e incluye la ruta para el componente de perfil:

   ```typescript
   const routes: Routes = [
     { path: 'perfil', component: PerfilComponent },
     // Otras rutas
   ];
   ```

## Contribuciones
Las contribuciones son bienvenidas. Para contribuir, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama:
   ```bash
   git checkout -b nombre-rama
   ```

Realiza tus cambios.
Haz un commit:
   ```bash
   git add .
   git commit -m "Comentario" 
   ```

Sube tus cambios:
   ```bash
   git push origin nombre-rama
   ```

Crea una solicitud de pull:
   ```bash
   git pull origin master
   ```


