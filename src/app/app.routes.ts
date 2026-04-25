import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "pacientes", loadComponent: () => import('./paciente/paciente').then(x => x.PacienteComponent)},
    {path: "calculadora", loadComponent: () => import('./calculadora/calculadora').then(x => x.Calculadora)},
    {path: "carro", loadComponent: () => import('./carro/carro').then(x => x.CarroComponent)},
    {path: "clientes", loadComponent: () => import('./clientes/clientes').then(x => x.Clientes)},
    {path: "produto", loadComponent: () => import('./produto/produto').then(x => x.Produtos)},
    {path: "imovel", loadComponent: () => import('./imovel/imovel').then(x => x.ImovelComponent)}
];
