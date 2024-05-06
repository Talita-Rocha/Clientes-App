import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Cliente } from "../models/cliente.model";

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    //método construtor
    constructor(
        private httpClient: HttpClient
    ) { }


    // método para realizar uma chamada HTTP GET para consulta de clientes

    consultar(): Observable<Cliente[]> {

        return this.httpClient.get<Cliente[]>(environment.clientesApi);
    }

}



