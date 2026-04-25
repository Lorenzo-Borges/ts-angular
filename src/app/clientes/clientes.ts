import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
  clientes: string[] = ["Jorge Silva", "Abacat Batatinha", "Ronaldo Souza"]
  cpfs: string[] = ["230.923.857-48", "695.478.357-40", "840-968.679-76"]

  nome: string = "";
  cpf: string = "";

  salvar(): void {
    if (this.indiceParaEditar === -1) {
      this.cadastrar();
    } else {
      this.editar();
    }
    this.nome = "";
    this.cpf = "";
  }

  cadastrar(): void {
    this.clientes.push(this.nome);
    this.cpfs.push(this.cpf);

    alert("Cliente cadastrado com sucesso");
  }

  editar(): void {
    this.clientes[this.indiceParaEditar] = this.nome;
    this.cpfs[this.indiceParaEditar] = this.cpf;

    alert("Cliente editado")

    this.indiceParaEditar = -1;
  }

  indiceParaEditar: number = -1;

  apagar(nomeClientes: string): void {
    let indiceNomeCliente = this.clientes.indexOf(nomeClientes);

    this.clientes.splice(indiceNomeCliente, 1);
    this.cpfs.splice(indiceNomeCliente, 1);
  }

  preencherCamposParaEditar(nomeClientes: string, cpfCliente: string): void {
    this.indiceParaEditar = this.clientes.indexOf(nomeClientes);

    this.nome = nomeClientes;
    this.cpf = cpfCliente;
  }
}