import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [FormsModule, Navbar, CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form implements OnInit{
  constructor(public myrouter: Router) {}

  ngOnInit(): void {
    console.log("Welcome to this page");
    this.delivery_details =  localStorage['delivery_details'] ? JSON.parse(localStorage['delivery_details']) : []
  }

  // Router
  first_name = "";
  last_name = "";
  email = "";
  phone_number = ""
  address= "";
  city = ""
  country = ""
  zip_code = "";
  additional_notes = "";

  delivery_details:any =[];

  // Interface

  register() {
    const delivery_info = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      phone_number: this.phone_number,
      address: this.address,
      city: this.city,
      country: this.country,
      zip_code: this.zip_code,
      additional_notes: this.additional_notes
    }

    this.delivery_details.push(delivery_info);

    localStorage.setItem('delivery_details', JSON.stringify(this.delivery_details));
    
    this.myrouter.navigate(['/'])
    
  }
}
