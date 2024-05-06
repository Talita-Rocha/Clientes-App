import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../service/cliente.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-consulta-clientes',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule
  ],
  templateUrl: './consulta-clientes.component.html',
  styleUrl: './consulta-clientes.component.css'
})
export class ConsultaClientesComponent implements OnInit {

  //atributo para definir os campos que serão exibidos na tabela
  columns = ['id', 'nome', 'cpf', 'telefone', 'email'];

  //atributo para armazenar a lista de clientes
  clientes: Cliente[] = [];

  //método construtor
  constructor(
    private clienteService: ClienteService
  ) {
  }

  //método executado ao abrir o componente
  ngOnInit(): void {
    this.clienteService.consultar()
      .subscribe({
        next: (data) => { this.clientes = data; },
        error: (e) => { console.log(e.error); }
      })
  }
}
