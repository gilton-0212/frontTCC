import { TipoestabelecimentoService } from './tipoestabelecimento.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tipoestabelecimento',
  templateUrl: './tipoestabelecimento.component.html',
  styleUrls: ['./tipoestabelecimento.component.css']
})
export class TipoestabelecimentoComponent implements OnInit {

  formulario!: FormGroup;


  constructor(private tipoestabelecimentoService : TipoestabelecimentoService) { }

  ngOnInit(): void {
  }

}
