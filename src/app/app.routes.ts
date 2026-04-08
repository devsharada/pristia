import { Routes } from '@angular/router';
import { HomeComponent } from './Component/Home/home/home.component';
import { ProductComponent } from './Component/Product-details/product/product.component';
import { AboutUsComponent } from './Component/About/about-us/about-us.component';
import { ContactComponent } from './Component/Contactus/contact/contact.component';
import { HeroSectionComponent } from './Component/Products/hero-section/hero-section.component';
import { TermsAndConditionsComponent } from './Component/Core/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './Component/Core/privacy-policy/privacy-policy.component';
import { ReturnAndRefundPolicyComponent } from './Component/Core/return-and-refund-policy/return-and-refund-policy.component';
import { FaqComponent } from './Component/Core/faq/faq.component';
import { BlogComponent } from './Component/Blogs/blog/blog.component';
import { BlogDetailsComponent } from './Component/Blogs/blog-details/blog-details.component';
import { WishlistComponent } from './Component/Wishlist/wishlist/wishlist.component';
import { CartComponent } from './Component/Cart/cart/cart.component';
import { CheckoutLayoutComponent } from './Component/Checkout/checkout-layout/checkout-layout.component';
import { SizeGuideComponent } from './Component/size-guide/size-guide/size-guide.component';
import { RingSizeGuideComponent } from './Component/size-guide/ring-size-guide/ring-size-guide.component';
import { BangleSizeGuideComponent } from './Component/size-guide/bangle-size-guide/bangle-size-guide.component';
import { AccountComponent } from './Component/User/account/account.component';
import { ProfileComponent } from './Component/User/profile/profile.component';
import { AddressComponent } from './Component/User/address/address.component';
import { OrdersComponent } from './Component/User/orders/orders.component';
import { UserCartComponent } from './Component/User/user-cart/user-cart.component';
import { UserWishlistComponent } from './Component/User/user-wishlist/user-wishlist.component';
import { AdminLayoutComponent } from './Component/Admin-panel/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './Component/Admin-panel/admin-home/admin-home.component';
import { AdminSalesComponent } from './Component/Admin-panel/admin-sales/admin-sales.component';
import { AdminOrdersComponent } from './Component/Admin-panel/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './Component/Admin-panel/admin-products/admin-products.component';
import { ProductCollectionOccasionComponent } from './Component/Admin-panel/admin-products/product-collection-occasion/product-collection-occasion.component';
import { ProductTrackingComponent } from './Component/Admin-panel/admin-products/product-tracking/product-tracking.component';
import { AddProductComponent } from './Component/Admin-panel/add-product/add-product.component';
import { ProductGridComponent } from './Component/Admin-panel/product-grid/product-grid.component';
import { ProductListComponent } from './Component/Admin-panel/product-list/product-list.component';
import { AdminMarketsComponent } from './Component/Admin-panel/admin-markets/admin-markets.component';
import { AdminAnalyticsComponent } from './Component/Admin-panel/admin-analytics/admin-analytics.component';
import { OnlineStorePagesComponent } from './Component/Admin-panel/online-store-pages/online-store-pages.component';
import { AdminPanelSidebarComponent } from './Component/Admin-panel/admin-panel-sidebar/admin-panel-sidebar.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'products', component: HeroSectionComponent },
  { path: 'product-details', component: ProductComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  {
    path: 'return-and-refund-policy', component: ReturnAndRefundPolicyComponent,
  },
  { path: 'faq', component: FaqComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'blogs/blog-details', component: BlogDetailsComponent },
  {
    path: 'size-guide',
    component: SizeGuideComponent,
    children: [
      { path: '', redirectTo: 'ring', pathMatch: 'full' }, // default tab
      { path: 'ring', component: RingSizeGuideComponent },
      { path: 'bangle', component: BangleSizeGuideComponent },
    ],
  },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutLayoutComponent },
  { path: 'checkout', component: CheckoutLayoutComponent },

  {
    path: 'user',
    component: AccountComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'address', component: AddressComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'cart', component: UserCartComponent },
      { path: 'wishlist', component: UserWishlistComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
    ],
  },

  { path: 'admin-panel-sidebar', component: AdminPanelSidebarComponent },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    data: { admin: true },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AdminHomeComponent },
      { path: 'sales', component: AdminSalesComponent },
      { path: 'orders', component: AdminOrdersComponent },
      { path: 'products', component: AdminProductsComponent },
      {
        path: 'product-collection-occasion',
        component: ProductCollectionOccasionComponent,
      },
      { path: 'product-tracking', component: ProductTrackingComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'product-grid', component: ProductGridComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'markets', component: AdminMarketsComponent },
      { path: 'analytics', component: AdminAnalyticsComponent },
      { path: 'online-store-pages', component: OnlineStorePagesComponent },
    ],
  },
];
