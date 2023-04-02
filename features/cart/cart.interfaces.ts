export interface ICartItem {
  id: number
  name: string
  price: number
  qty: number
  img: string
}

export interface ICartInitialState {
  cartItems: ICartItem[]
}
