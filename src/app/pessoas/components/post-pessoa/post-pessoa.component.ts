import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-pessoa',
  templateUrl: './post-pessoa.component.html',
  styleUrls: ['./post-pessoa.component.scss']
})
export class PostPessoaComponent implements OnInit {
  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  ngOnInit(): void {
  }

}
