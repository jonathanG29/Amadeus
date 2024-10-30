import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlideshowComponent } from '../../components/slideshow/slideshow.component';
import { UserFormComponent } from '../../components/user-form/user-form.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink, SlideshowComponent, UserFormComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  slideIndex: number = 1;

  onSlideChange(newIndex: number) {
    this.slideIndex = newIndex;
  }
}

