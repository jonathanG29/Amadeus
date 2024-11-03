# UserFormComponent Documentation

## Overview

The `UserFormComponent` is an Angular component that provides a user form for collecting user information such as name and email. It also allows the user to select an avatar based on the slide index.

## Files

- `user-form.component.ts`: The main component file.
- `user-form.component.spec.ts`: The test file for the component.
- `user-form.component.html`: The template file for the component.
- `user-form.component.css`: The stylesheet for the component.

## Component Details

### user-form.component.ts

This file contains the logic for the `UserFormComponent`.

#### Properties

- `@Input() slideIndex: number`: Input property to receive the slide index.
- `nombre: FormControl`: Form control for the user's name.
- `correo: FormControl`: Form control for the user's email.
- `estadoCorreo: string`: Variable to store the email validation status.
- `controlBoton: boolean`: Variable to control the disabled state of the button.

#### Methods

- `datosUsuario()`: Sets the user data in the `DestinoService` and selects the avatar based on the slide index.
- `verificarNomb(event: Event)`: Validates the user's name.
- `verificarCorreo(event: Event)`: Validates the user's email and controls the button state.

### user-form.component.spec.ts

This file contains the tests for the `UserFormComponent`.

#### Tests

- `should create`: Tests if the component is created correctly.
- `should validate name correctly`: Tests if the name validation works correctly.
- `should validate email correctly`: Tests if the email validation works correctly.
- `should disable button for invalid email`: Tests if the button is disabled for an invalid email.
- `should set user data correctly`: Tests if the user data is set correctly.

### user-form.component.html

This file contains the template for the `UserFormComponent`.

#### Template

- Input for the user's name with form control and keyup event.
- Input for the user's email with form control and keyup event.
- Label to display the email validation status.
- Button to submit the form, navigate to the next page, and is disabled based on the email validation.

### user-form.component.css

This file contains the styles for the `UserFormComponent`.

#### Styles

- `.container__main__card__data`: Styles for the main container.
- `.container__main__card__data--input`: Styles for the input fields.
- `.container__main__card__data--alert`: Styles for the validation alert label.
- `.container__main__card__data--button`: Styles for the submit button.
- `.container__main__card__info`: Styles for the info container.
- `.container__main__card__info--h2`: Styles for the info header.
- `.container__main__card__info--p`: Styles for the info paragraph.
