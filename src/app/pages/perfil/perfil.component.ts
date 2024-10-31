import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlideshowComponent } from '../../components/slideshow/slideshow.component';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink, SlideshowComponent, UserFormComponent, HttpClientModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  slideIndex: number = 1;

  onSlideChange(newIndex: number) {
    this.slideIndex = newIndex;
  }
}

