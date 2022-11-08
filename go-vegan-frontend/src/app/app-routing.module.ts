import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodItem } from './common/food-item';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountComponent } from './components/account/account.component';
import { AllFootItemsListComponent } from './components/all-foot-items-list/all-foot-items-list.component';
import { FoodItemDetailsComponent } from './components/food-item-details/food-item-details.component';
import { FoodItemListComponent } from './components/food-item-list/food-item-list.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { ShoppingCartDetailsComponent } from './components/shopping-cart-details/shopping-cart-details.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SuccessComponent } from './components/success/success.component';
import { UpdateAccountAddressComponent } from './components/update-account-address/update-account-address.component';
import { UpdateAccountCreditComponent } from './components/update-account-credit/update-account-credit.component';
import { UpdateAccountUserComponent } from './components/update-account-user/update-account-user.component';
import { LoggedInGuardService } from './services/logged-in-guard.service';

const routes: Routes = [
  { path: 'update-account-user', component: UpdateAccountUserComponent, canActivate: [LoggedInGuardService] },
  { path: 'update-account-credit', component: UpdateAccountCreditComponent, canActivate: [LoggedInGuardService] },
  { path: 'update-account-address', component: UpdateAccountAddressComponent, canActivate: [LoggedInGuardService] },
  { path: 'account-detail/:id', component: AccountDetailsComponent, canActivate: [LoggedInGuardService], pathMatch: 'full' },
  { path: 'account', component: AccountComponent, canActivate: [LoggedInGuardService] },
  { path: 'register', component: RegisterAccountComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'orderDetails/:id', component: OrderDetailComponent },
  { path: 'allFoodItems/:id', component: AllFootItemsListComponent },
  { path: 'shopping-cart-details', component: ShoppingCartDetailsComponent },
  { path: 'foodItems/:id', component: FoodItemDetailsComponent },
  { path: 'category/:id', component: FoodItemListComponent },
  { path: 'foodItems', component: FoodItemListComponent },
  { path: 'notFound', component: PageNotFoundComponent },
  { path: '', redirectTo: '/foodItems', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
