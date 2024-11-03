# SlideshowComponent Documentation

## Overview

The `SlideshowComponent` is an Angular component that provides a slideshow functionality. It allows users to navigate through different slides and emits events when the slide changes.

## Files

- `slideshow.component.ts`: The main component file.
- `slideshow.component.spec.ts`: The test file for the component.
- `slideshow.component.html`: The template file for the component.
- `slideshow.component.css`: The stylesheet for the component.

## Component Details

### slideshow.component.ts

This file contains the logic for the `SlideshowComponent`.

#### Properties

- `@Input() slideIndex: number`: Input property to receive the current slide index.
- `@Output() slideChange: EventEmitter<number>`: Output event emitter to notify when the slide changes.

#### Methods

- `ngAfterViewInit()`: Initializes the slideshow by showing the initial slide.
- `plusSlides(n: number)`: Changes the slide index by the given number and emits the slide change event.
- `currentSlide(n: number)`: Sets the current slide index and emits the slide change event.
- `showSlides(n: number)`: Displays the slide corresponding to the given index.

### slideshow.component.spec.ts

This file contains the tests for the `SlideshowComponent`.

#### Tests

- `should create`: Tests if the component is created correctly.
- `should change slide index correctly`: Tests if the slide index changes correctly.
- `should set current slide correctly`: Tests if the current slide is set correctly.
- `should emit slide change event`: Tests if the slide change event is emitted correctly.

### slideshow.component.html

This file contains the template for the `SlideshowComponent`.

#### Template

- Div elements for each slide with images.
- Navigation buttons to go to the previous and next slides.
- Dots for navigating to specific slides.

### slideshow.component.css

This file contains the styles for the `SlideshowComponent`.

#### Styles

- `.container__main__card__avatar`: Styles for the main container of the slideshow.
- `.container__main__card__avatar--img`: Styles for the slide images.
- `.container__main__card__select`: Styles for the navigation container.
- `.dot`: Styles for the navigation dots.
- `.prev, .next`: Styles for the navigation buttons.
- `.active`: Styles for the active navigation dot.
- `.fade`: Styles for the fading animation.
