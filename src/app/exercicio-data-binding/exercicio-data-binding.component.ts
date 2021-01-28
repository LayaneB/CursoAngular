import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {
  
  imageURL = "https://observatoriodeseries.uol.com.br/wp-content/uploads/2020/06/https___hypebeast.com_image_2020_01_netflix-orders-one-piece-live-action-series-tomorrow-studios-info-001-1200x675-1-696x392.jpg"; 
  initialValue = "Valor inicial";
  isDisabled = true;
  accessibilityText="ok"
  
  @Input() palavra!: string;

  constructor() { 
    setTimeout(() => {
      this.isDisabled = false;
    },3000);
    

  }
  
  
  
  ngOnInit(): void {
  }

}
