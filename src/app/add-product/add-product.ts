import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  // modules, directives, standalone components, classes, dependencies

  builder = inject(FormBuilder);

  // productForm = new FormGroup({
  //   productName: new FormControl()
  // }) //used only when you need to receive inputs

  productForm = this.builder.group({
    productName: ['', [Validators.required, Validators.minLength(4)]],
    category: ['', [Validators.required, Validators.minLength(5)]],
    // password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$^')]]
  })

  addProduct() {

  }

  previewImages: any = [];

  chooseImages(event: any) {
    const files = event.target.files;

    // Check for data type
    const reader =  new FileReader; //creating a new instance of FileReader

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      // File Reader

     const reader = new FileReader();
     reader.onload = () => {}

     reader.readAsDataURL(file);
     
     this.previewImages.push(reader);

     
     
     
     
      
    }

    // console.log(this.previewImages);
    
    // Build the frontend features  - admin signup, admin login, admin dashboard (add product)

    // Route guards  | children routes | redirecting | wildcards
  }

}
