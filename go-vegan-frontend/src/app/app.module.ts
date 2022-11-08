import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodItemService } from './services/food-item.service';
import { FoodCategoryListComponent } from './components/food-category-list/food-category-list.component';
import { FoodItemListComponent } from './components/food-item-list/food-item-list.component';
import { FoodItemDetailsComponent } from './components/food-item-details/food-item-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartDetailsComponent } from './components/shopping-cart-details/shopping-cart-details.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllFootItemsListComponent } from './components/all-foot-items-list/all-foot-items-list.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { AccountComponent } from './components/account/account.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { UpdateAccountAddressComponent } from './components/update-account-address/update-account-address.component';
import { UpdateAccountUserComponent } from './components/update-account-user/update-account-user.component';
import { UpdateAccountCreditComponent } from './components/update-account-credit/update-account-credit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SuccessComponent } from './components/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodCategoryListComponent,
    FoodItemListComponent,
    FoodItemDetailsComponent,
    ShoppingCartComponent,
    ShoppingCartDetailsComponent,
    AllFootItemsListComponent,
    OrderDetailComponent,
    SignInComponent,
    RegisterAccountComponent,
    AccountComponent,
    AccountDetailsComponent,
    UpdateAccountAddressComponent,
    UpdateAccountUserComponent,
    UpdateAccountCreditComponent,
    PageNotFoundComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [FoodItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
