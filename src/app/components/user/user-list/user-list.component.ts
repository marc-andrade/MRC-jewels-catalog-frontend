import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  ELEMENT_DATA: User[] = [
    {
      id: 1,
      name: 'Marcos Andrade',
      email: 'marcos@email.com',
      password: '123',
      roles: ['0']
    }
  ]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','perfil','acoes'];
  dataSource = new MatTableDataSource<User>(this.ELEMENT_DATA);
  
  constructor() { }

  ngOnInit(): void {
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}


