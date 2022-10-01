import { HomeUserSsService } from './../../home-user-ss.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bate-ponto-user',
  templateUrl: './bate-ponto-user.component.html',
  styleUrls: ['./bate-ponto-user.component.scss'],
})
export class BatePontoUserComponent implements OnInit {
  @Input() IDUSER!: any;
  @Input() PONTOS!: any;

  constructor(private HomeUserSsService: HomeUserSsService) {}

  loading: boolean = false;

  ngOnInit(): void {}

  batendoPonto(IDUSER: any) {
    this.loading = true;
    this.HomeUserSsService.baterPonto(IDUSER, this.PONTOS)
      .then((pontos) => console.log(pontos))
      .catch((err) => console.log(err));
  }
}
