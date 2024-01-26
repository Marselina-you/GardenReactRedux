export type CategoryType = {
    id: number
    title: string
    img: string
    status: string
    style: string
}
export type ProductType = {
    id: number
    name: string
    price: number
    img: string
    category: number
    liked: boolean
}
export type CommentType = {
    id: number
    name: string
    content: string
    time: string
}