import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CategoryDTO } from 'src/app/models/category';
import { Jewel } from 'src/app/models/jewel';
import { CategoryService } from 'src/app/services/category.service';
import { JewelService } from 'src/app/services/jewel.service';

@Component({
  selector: 'app-jewel-create',
  templateUrl: './jewel-create.component.html',
  styleUrls: ['./jewel-create.component.css']
})
export class JewelCreateComponent implements OnInit {

  selectedValue: string;

  jewel: Jewel = {
    name: "",
    imgUrl: "",
    description: "",
    weight: "",
    size: "",
    price: null,
    category: null
  }

  categories: CategoryDTO [] = [];

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  name: FormControl =  new FormControl(null, Validators.minLength(3));
  imgUrl: FormControl =  new FormControl(null, Validators.minLength(3));
  description: FormControl =  new FormControl(null, Validators.minLength(3));

  constructor(private service: JewelService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.findAllcategories();
  }


  validaCampos(): boolean {
    return this.name.valid && 
    this.imgUrl.valid;

  }

create():void{

}

findAllcategories(){
  this.categoryService.findAll().subscribe(resposta => {
    this.categories = resposta.content;
  })
}

}
