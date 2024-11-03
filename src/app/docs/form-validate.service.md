# FormValidationService Documentation

## Overview

The `FormValidationService` is an Angular service that provides methods for validating user input, such as email addresses and names.

## Files

- `form-validation.service.ts`: The main service file.

## Service Details

### form-validation.service.ts

This file contains the logic for the `FormValidationService`.

#### Methods

- `validateEmail(email: string): string`: Validates the given email address and returns a validation message.
  - If the email is empty, it returns 'Escribe un correo electrónico'.
  - If the email format is invalid, it returns 'Escriba un Correo Valido'.
  - If the email is valid, it returns an empty string.

- `validateName(name: string): string`: Validates the given name and returns a validation message.
  - If the name is empty, it returns 'Escribe su nombre'.
  - If the name is valid, it returns an empty string.

## Usage

To use the `FormValidationService`, inject it into your component's constructor and call the validation methods as needed.

```typescript
import { FormValidationService } from 'path-to-service/form-validation.service';

constructor(private formValidationService: FormValidationService) {}

validateUserInput() {
  const emailValidationMessage = this.formValidationService.validateEmail(this.email);
  const nameValidationMessage = this.formValidationService.validateName(this.name);
}
