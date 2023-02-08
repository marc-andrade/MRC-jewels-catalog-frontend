import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Jewel } from 'src/app/models/jewel';
import { JewelService } from 'src/app/services/jewel.service';

@Component({
  selector: 'app-jewel-card',
  templateUrl: './jewel-card.component.html',
  styleUrls: ['./jewel-card.component.css']
  
})
export class JewelCardComponent implements OnInit {

  ELEMENT_DATA: Jewel[] = [];

  dataSource = new MatTableDataSource<Jewel>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: JewelService) { }

  ngOnInit(): void {
    this.findAll();
    
  }

  
  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta.content;
      this.dataSource = new MatTableDataSource<Jewel>(resposta.content);
      this.dataSource.paginator = this.paginator;
      this.dataSource.paginator = this.paginator;
    })
  }

}
