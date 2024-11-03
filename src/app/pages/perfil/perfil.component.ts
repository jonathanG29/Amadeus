import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlideshowComponent } from '../../components/slideshow/slideshow.component';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import axios from 'axios';

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

  // Método para realizar una solicitud HTTP utilizando Axios
  fetchData() {
    axios.get('https://api.example.com/data')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}

