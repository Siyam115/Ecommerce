import { ProductUpdateComponent } from './productDashboard/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';

import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { CollectionComponent } from './collection/collection.component';
import { SproductviewComponent } from './sproductview/sproductview.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductCreateComponent } from './productDashboard/product-create/product-create.component';
import { ProductListComponent } from './productDashboard/product-list/product-list.component';
import { CheakoutComponent } from './cheakout/cheakout.component';
import { WebSocketMessagingComponent } from './web-socket-messaging/web-socket-messaging.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ModeratorDashboardComponent } from './moderator-dashboard/moderator-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CategorycreateComponent } from './categorycreate/categorycreate.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { RegisterComponent } from './register/register.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderListComponent } from './order-list/order-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'log-in',component:LoginComponent},
  {path:'sign-up',component:SignupComponent},
  {path:'register',component:RegisterComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'shop',component:ShopComponent},
  {path:'contact',component:ContactComponent},
  {path:'blog',component:BlogComponent},
  {path:'cart',component:CartComponent},
  {path:'collection',component:CollectionComponent},
  {path:'pDash1',component:ProductDashboardComponent},
  {path:'pDash',component:ProductDashboardComponent},
  {path:'pCreate',component:ProductCreateComponent},
  {path:'pUpdate',component:ProductUpdateComponent},
  {path:'pList',component:ProductListComponent},
  {path:'checkout',component:CheakoutComponent},
  {path:'whatsapp',component:WhatsappComponent},
  {path:'sproduct',component:SproductviewComponent},
  {path:'webSocket',component:WebSocketMessagingComponent},
  {path:'uCreate',component:UserCreateComponent},
  {path:'uList',component:UserlistComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path:'catCreate',component:CategorycreateComponent},
  {path:'catList',component:CategorylistComponent},
  {path:'catUpdate',component:CategorylistComponent},
  {path:'payCreate',component:PaymentCreateComponent},
  {path:'payList',component:PaymentListComponent},
  {path:'orderCreate',component:OrderCreateComponent},
  {path:'orderList',component:OrderListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
