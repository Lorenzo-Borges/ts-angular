import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-imovel',
  imports: [FormsModule],
  templateUrl: './imovel.html',
  styleUrl: './imovel.css',
})
export class ImovelComponent {
  area: number | null = null;
  valor: number | null = null;
  valorMetro: number | null = null;

  valorMetroQuadrado(): void {
    if(this.area === null){
      alert("Preencher o campo da AREA")
      return
    }
    if(this.valor === null){
      alert("Preenchar o campo do VALOR")
      return
    }

    this.valorMetro = this.valor / this.area
  }
}
