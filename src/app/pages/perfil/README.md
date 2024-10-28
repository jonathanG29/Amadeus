# Sección de Perfil
Esta sección de perfil permite a los usuarios actualizar su información y personalizar su experiencia a través de una interfaz visual interactiva. 
Incluye una galería de `imágenes de avatar` y campos para introducir datos básicos, como `nombre` y `correo electrónico`.

![image](https://github.com/user-attachments/assets/f0626549-5586-4548-8169-35dcc857e373)



## Índice
1. [Descripción General](#descripción-general)
2. [Características Principales](#características-principales)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Componentes](#componentes)
5. [Configuración](#configuración)

---

## Descripción General
   En esta seccion lo que se busca es que el usuario deposite los diferentes datos que le son pedidos, y tenga la posibilidad de añadir y/o cambiar sus
   apariencias de avatar, a el que más le guste, y para nosotros será un punto de partida para perfilar quien es mediante sus datos y tratarlos de la manera
   en la cual nos aporte más beneficio.

## Características Principales

### Galería de Avatares 
Los usuarios pueden elegir entre varias imágenes de avatar. La galería es navegable mediante botones de "Anterior" y "Siguiente", y ofrece puntos de selección para acceder directamente a una imagen.

### Formulario de Perfil
- `Campo de Nombre`: Permite al usuario ingresar su nombre, con validación en tiempo real.
- `Campo de Correo Electrónico`: Incluye validación y una alerta que se muestra en caso de que el correo no sea válido.
- `Botón de Navegación`: El botón "¡Próxima aventura!" permite al usuario continuar a la siguiente sección, habilitándose solo cuando los datos son válidos.

## Estructura del Proyecto
- `perfil.component.html`: Define la estructura HTML del componente de perfil, incluyendo la galería de imágenes de avatar, el formulario de entrada de datos, y los botones de navegación​(perfil.component).
- `perfil.component.ts:`: Contiene la lógica en TypeScript para manejar eventos como cambiar de imagen, validar datos y gestionar el estado de los botones.

## Componentes
*`container__main__card__avatar`:* Presenta las imágenes de avatar en forma de carrusel.

*`container__main__card__data`*: Contiene los campos de entrada y el botón de acción.

## Funciones de TipoScript

`plusSlides` y `currentSlide`: Controlan la navegación del carrusel de imágenes. Estos son llamados cada vez que se hace click en la flecha para cambiar la imagen del slider.

`verificarNomb` y `verificarCorreo`: Validan el nombre y el correo electrónico ingresados por el usuario. Estos son llamados cada vez que la acción de (keyup) se dispara en el
elemento del HTML actualizando de manera constante los datos.

`datosUsuario`: Recoge los datos ingresados y redirige a la siguiente sección.

## Configuración
Para hacer **cambios** en las imagenes se debe realizar dos cambios, el primero de ellos es realizar la respectiva modificación del `enum` que se encuentra en el archivo: `perfil.component.ts` 
en donde se actulice la ruta de la nueva imagen, despues de esto se debe agregar la imagen estrictamente en `assets` para seguir la convencion del proyecto.

![image](https://github.com/user-attachments/assets/67e4c84f-108c-487a-a132-06d7d83e6e5a)

---

