import { Routes } from '@angular/router';
import { Form } from './form/form';
import { Home } from './home/home';
import { AddProduct } from './add-product/add-product';

export const routes: Routes = [
    {path: '', component: Home},
    { path: 'form', component: Form},
    {path: 'add-product', component: AddProduct}
];
