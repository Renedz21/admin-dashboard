import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { IUsers } from 'src/app/models/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: IUsers[] = [];

  headers = ['Nombre', 'Email', 'Dirección', 'Teléfono', 'DNI', 'Administrador', 'Acciones']

  data: any[][] = [];

  constructor(
    private usersService: UsersService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.spinner.show();
    this.usersService.getAll().subscribe({
      next: (users: IUsers[]) => {
        this.data = users.map((user: IUsers) => {
          return [
            user.name,
            user.email,
            user.address,
            user.phone,
            user.dni,
            user.isAdmin ? 'Es Administrador' : 'No es Administrador',
          ]
        })
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.spinner.hide();
      }
    })
  }

}
