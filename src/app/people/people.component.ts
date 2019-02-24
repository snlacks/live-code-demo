import { Component } from '@angular/core';
import { debug } from 'util';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';

class Person {
  name: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.less']
})
export class PeopleComponent {

  people = [
    {name: "Steven", phoneNumber: "1234567890"},
    {name: "Dave", phoneNumber: "1234567891"},
    {name: "Mary", phoneNumber: "1234567892"},
    {name: "Elizabeth", phoneNumber: "1234567893"},
  ];
  name: string;
  phoneNumber: string;
  current: Person|null;
  currentIndex: number|null;

  addPerson(person: Person) {
    this.people.push(person);
  }
  removePerson(index) {
    this.people.splice(index, 1);
  }
  editPerson(i, person) {
    if (person) {
      this.removePerson(this.currentIndex);
      this.people = [...this.people, this.current];
      this.current = null;
      this.currentIndex = null;
    } else {
      this.current =  Object.assign({}, this.people[i]);
      this.currentIndex = i;
    }
  }
}
