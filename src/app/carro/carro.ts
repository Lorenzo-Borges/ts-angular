import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carro',
  imports: [FormsModule],
  templateUrl: './carro.html',
  styleUrl: './carro.css',
})
export class CarroComponent {
  modelo: string = '';
  marca: string = '';

  kmAnterior: number | null = null;
  precoLitro: number | null = null;
  valorTotal: number | null = null;
  kmAtual: number | null = null;

  get litros(): number {
    const preco = Number(this.precoLitro);
    const valor = Number(this.valorTotal);

    if (!preco || isNaN(preco) || isNaN(valor)) return 0;
    return valor / preco;
  }

  get kmRodados(): number {
    const atual = Number(this.kmAtual);
    const anterior = Number(this.kmAnterior);

    if (isNaN(atual) || isNaN(anterior)) return 0;
    return atual - anterior;
  }

  get media(): number {
    const litros = this.litros;
    const km = this.kmRodados;

    if (!litros || isNaN(litros)) return 0;
    return km / litros;
  }
}
