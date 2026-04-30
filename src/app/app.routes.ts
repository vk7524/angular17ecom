import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UserProfile } from './user-profile/user-profile';
import { ContactUs } from './contact-us/contact-us';
import { AdminLogin } from './admin/admin-login/admin-login';
import { AdminDashboard } from './admin/admin-dashboard/admin-dashboard';
import { UserCrud } from './admin/admin/user-crud/user-crud';
import { Product } from './product/product';
import { SigninSignup } from './customer/signin-signup/signin-signup';
import { SellerDashboard } from './customer/seller/seller-dashboard/seller-dashboard';
import { Produc } from './shared/services/produc';
import { BuyerDashboard } from './customer/buyer/buyer-dashboard/buyer-dashboard';
import { Checkout } from './customer/buyer/checkout/checkout';
import { PageNotFound } from './shared/layouts/page-not-found/page-not-found';

export const routes: Routes = [
    { path: "", redirectTo: "/", pathMatch: "full" },
    { path: "", component: Home },
    { path: "user-profile", component: UserProfile },
    { path: "contact-use", component: ContactUs },
    // admin
    {
        path: '', children: [
            { path: "admin-login", component: AdminLogin }
        ]
    },
    {
        path: '', children: [
            { path: "admin-dashboard", component: AdminDashboard },
            { path: "admin/user", component: UserCrud },
            { path: "admin/product", component: Product },
        ]
    },
    {
        path: '', children: [
            {path:"sign-in", component: SigninSignup},
            {path:"sign-up", component: SigninSignup}
        ]
    },
    {
        path: '', children: [
            {path: "seller-dashboard", component: SellerDashboard},
            {path: "seller/product", component: Produc}
        ]
    },
    {path: '', children: [
        {path: "buyer-dashboard", component: BuyerDashboard},
        {path: "checkout", component: Checkout}
    ]},
    {path: "*", component:PageNotFound}
];
