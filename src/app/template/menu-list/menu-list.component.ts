import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { menu } from 'src/app/_global/global';
import { CampaniaService } from 'src/app/_service/Campania.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  public list = [
    {food:'pescado', porciones:60},
    {food:'gamba', porciones:80},
    {food:'carne', porciones:90},
    {food:'manzana', porciones:100}
  ];

  constructor(private campaniaService: CampaniaService, private route: Router, private paramRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  add(item) {
    this.paramRouter.params.subscribe(param => {
      menu.push({ type: param.data, food: item.food, g : item.porciones, p : 1});
      this.route.navigate(['data/menu']);
    });
  }
}
