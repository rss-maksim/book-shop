export interface BookModel {
  id: number
  name: string
  description: string
  price: number
  category: Category
  createDate: number
  isAvailable: boolean
}

export enum Category {
  Javascript,
  Node,
  Angular,
  React,
  Vue
}
