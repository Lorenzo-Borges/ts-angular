import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  imports: [FormsModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produtos {
  
  produtos: string[] = ["Crack", "Maconha", "Cocaina"]
  quantidades: number[] = [4, 7, 15]
  valores: number[] = [2, 10, 20]
 
  nome: string = "";
  quantidade: number = 0;
  valor: number = 0;


  salvar(): void {

    if (this.indiceParaEditar === -1) {
      this.cadastrar();
    } else {
      this.editar();
    }
    this.nome = "";
    this.quantidade = 0;
    this.valor = 0;
  }

  cadastrar(): void {
    this.produtos.push(this.nome);
    this.quantidades.push(this.quantidade);
    this.valores.push(this.valor)

    alert("Produto cadastrado com sucesso");
  }

  editar(): void {
    this.produtos[this.indiceParaEditar] = this.nome;
    this.quantidades[this.indiceParaEditar] = this.quantidade;
    this.valores[this.indiceParaEditar] = this.valor;

    alert("Produto editado")

    this.indiceParaEditar = -1;
  }

  indiceParaEditar: number = -1;

  apagar(nomeProdutos: string, quantidadeProdutos: number, valorProdutos: number): void {
    let indiceNomeProduto = this.produtos.indexOf(nomeProdutos);
    let indiceQuantidadeProduto = this.quantidades.indexOf(quantidadeProdutos);
    let indiceValorProduto = this.valores.indexOf(valorProdutos);

    this.produtos.splice(indiceNomeProduto, 1);
    this.quantidades.splice(indiceQuantidadeProduto, 1);
    this.valores.splice(indiceValorProduto, 1);
  }

  preencherCamposParaEditar(nomeProdutos: string, quantidadeProdutos: number, valorProdutos: number): void {
    this.indiceParaEditar = this.produtos.indexOf(nomeProdutos);

    this.nome = nomeProdutos;
    this.quantidade = quantidadeProdutos;
    this.valor = valorProdutos;
  }
}
