import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetitionServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-petition-category',
  templateUrl: './petition-category.component.html',
  styleUrls: ['./petition-category.component.css']
})
export class PetitionCategoryComponent implements OnInit {

  constructor(
    private router: Router,
    private _petitionsService: PetitionServiceProxy
    ) { }

  ngOnInit(): void {
  }

  petitionfrom(category: string) {
    this._petitionsService.category = category; 
    this.router.navigateByUrl('app/addPetition');
  }

}
