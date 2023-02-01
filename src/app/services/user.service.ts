import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];

  ngOnInit(): void { }

  onGet() {
    return JSON.parse(localStorage.getItem('Users') || '[]');
  }

  onAdd(user: User) {
    this.users.push(user);
    let users: any[] = [];
    users = JSON.parse(localStorage.getItem('Users') || '[]');
    users.push(user);
    localStorage.setItem('Users', JSON.stringify(users));
  }
  
  onDelete(id: string) {
    let users: any[] = [];
    users = JSON.parse(localStorage.getItem('Users') || '[]');
    let user = users.find((x) => x.id === id)!;
    let ind = users.indexOf(user);
    if (users.length > ind) {
      users.splice(ind, 1);
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }

}
