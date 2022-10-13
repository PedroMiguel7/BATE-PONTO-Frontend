import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../../pessoas.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-pessoa',
  templateUrl: './detalhes-pessoa.component.html',
  styleUrls: ['./detalhes-pessoa.component.scss']
})
export class DetalhesPessoaComponent implements OnInit {
  @Input() pessoa!: Pessoa

  router: Router;
  constructor(router: Router) {
    this.router = router;
  }

  redirecionaPessoa() {
    console.log(this.pessoa)
    this.router.navigate([`/pessoas/${this.pessoa.id}`]);
  }

  ngOnInit(): void {
  }
}
