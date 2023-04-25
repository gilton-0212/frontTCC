import { EstabelecimentoService } from './estabelecimento.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private estabelecimentoService : EstabelecimentoService) { }

  ngOnInit(): void {
  }

}
