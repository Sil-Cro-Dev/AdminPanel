export interface Product {
  id: number;
  productTitle: string;
  productUrl: string;
  productPriceSet: ProductPrice[];
}
export interface ProductPrice {
  id: number;
  productPrice: number;
  updateDate: Date;
}
