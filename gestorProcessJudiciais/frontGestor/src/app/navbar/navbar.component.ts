import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  parametro: string = '';
  tipoUser: number = 0;

  constructor(
    private route: ActivatedRoute,
    private navbarService: NavbarService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.parametro = params.get('usuario') ?? '';
    });

    this.navbarService.cargoUsuario(this.parametro).subscribe(
      (resultado) => {
        if (resultado.cargo !== undefined) {
          this.tipoUser = resultado.cargo;
        }      
      }
    );

  }

}
