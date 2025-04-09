import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';

import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { CollectionComponent } from './collection/collection.component';
import { MenscollectionComponent } from './menscollection/menscollection.component';
import { WomencollectionComponent } from './womencollection/womencollection.component';
import { KidscollectionComponent } from './kidscollection/kidscollection.component';
import { SproductviewComponent } from './sproductview/sproductview.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductCreateComponent } from './productDashboard/product-create/product-create.component';
import { ProductUpdateComponent } from './productDashboard/product-update/product-update.component';
import { ProductListComponent } from './productDashboard/product-list/product-list.component';
import { CheakoutComponent } from './cheakout/cheakout.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { WebSocketMessagingComponent } from './web-socket-messaging/web-socket-messaging.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ModeratorDashboardComponent } from './moderator-dashboard/moderator-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { CategorycreateComponent } from './categorycreate/categorycreate.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { CategoryupdateComponent } from './categoryupdate/categoryupdate.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderUpdateComponent } from './order-update/order-update.component';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { CheakoutListComponent } from './cheakout-list/cheakout-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    ShopComponent,
    ContactComponent,
    BlogComponent,
    CartComponent,

    WhatsappComponent,
     CollectionComponent,
     MenscollectionComponent,
     WomencollectionComponent,
     KidscollectionComponent,
     SproductviewComponent,
     ProductDashboardComponent,
     ProductCreateComponent,
     ProductUpdateComponent,
     ProductListComponent,
     CheakoutComponent,
     UserCreateComponent,
     UserlistComponent,
     EditUserComponent,
     WebSocketMessagingComponent,
     AdminDashboardComponent,
     ModeratorDashboardComponent,
     UserDashboardComponent,
     RegisterComponent,
     CategorycreateComponent,
     CategorylistComponent,
     CategoryupdateComponent,
     OrderCreateComponent,
     OrderListComponent,
     OrderUpdateComponent,
     PaymentCreateComponent,
     PaymentListComponent,
     CheakoutListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
