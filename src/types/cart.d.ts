export interface Cart {
  //userId: number; // TODO add user id when auth will be implemented
  products: CartItem[] = [];
  totalPrice: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}
