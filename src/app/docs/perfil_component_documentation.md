# PerfilComponent - File Documentation

### `perfil.component.html`
This file defines the HTML structure of the `PerfilComponent`. It includes a main form with two components:

- **`app-slideshow`**: Displays a slideshow.
- **`app-user-form`**: Displays a user form.

Both components are organized within a card container (`container__main__card`).

---

### `perfil.component.ts`
This file defines the logic for the `PerfilComponent` in Angular. It imports several necessary modules and components, such as:

- `RouterLink`
- `SlideshowComponent`
- `UserFormComponent`

**Properties and Methods**:
- `slideIndex`: Controls the index of the current slide.
- `onSlideChange`: Method that updates the slide index when it changes.
- `fetchData`: Method that uses **axios** to perform HTTP requests, fetch data from an API, and handle any errors that may occur.

---

### `perfil.component.spec.ts`
This file contains unit tests for the `PerfilComponent` using Angular’s testing framework. It sets up the testing environment, creates an instance of the component, and verifies that it is created correctly.

---

### `perfil.component.css`
This file defines the CSS styles for the `PerfilComponent`, including:

- **General styles**: For the main container and card.
- **Specific styles**: For the slideshow and user form components.
- **Responsive styles**: Adjusts the layout for smaller screens.
- **Additional styles**: For buttons and animations.
