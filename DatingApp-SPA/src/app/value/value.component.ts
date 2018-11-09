import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  // Déclaration de variable
  values: any;

  // Constructeur (Injection des dépendances)
  constructor(private http: HttpClient) { }

  // Intialisation des composants
  ngOnInit() {
    this.getValues();
  }

  // Get method
  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
