export type Product={
    id:number
    title: string
    description: string
    type?: string
    capacity: number
    price: number
}
// ми описали тип одного продукту


export const productsArray:Product[]=[{
    // тут ми показуємо, що productsArray це масив з Product
    id:1,
    title: 'iPhone 15 Pro',
    description: 'This is iPhone 15 Pro',
    type: 'phone',
    capacity: 128,
    price: 1000,
},{
    id:2,
    title: 'iPhone 14 Pro',
    description: 'This is iPhone 14 Pro',
    type: 'phone',
    capacity: 28,
    price: 2000,
},{
    id:3,
    title: 'iPhone 13 Pro',
    description: 'This is iPhone 13 Pro',
    type: 'phone',
    capacity: 8,
    price: 3000,
},{
    id:4,
    title: 'iPhone 12 Pro',
    description: 'This is iPhone 12 Pro',
    type: 'phone',
    capacity: 82,
    price: 4000,
},{
    id:5,
    title: 'iPhone 11 Pro',
    description: 'This is iPhone 11 Pro',
    type: 'phone',
    capacity: 821,
    price: 5000,
},{
    id:6,
    title: 'iPhone 10 Pro',
    description: 'This is iPhone 10 Pro',
    type: 'phone',
    capacity: 88,
    price: 6000,
}]