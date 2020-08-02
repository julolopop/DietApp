import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menu } from 'src/app/_global/global';
import { CampaniaService } from 'src/app/_service/Campania.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public panelOpenState = false;
  public itemsPg;
  public itemsG;
  public itemsC;
  public itemsP;

  constructor(private campaniaService: CampaniaService, private route: Router) { }

  ngOnInit(): void {
    this.itemsPg = menu.filter(item => item.type == 'pg');
    this.itemsG = menu.filter(item => item.type == 'g');
    this.itemsC = menu.filter(item => item.type == 'c');
    this.itemsP = menu.filter(item => item.type == 'p');
  }

  add(data: string) {
    this.route.navigate(['data/list', { data: data }]);
  }

  change(item, number) {
    item.p += number;
  }
}
