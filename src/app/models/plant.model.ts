export interface Plant {
    id: number,
    product_name: string,
    product_description: string,
    product_price: number,
    product_image: string,
    createdAt: Date,
    modifiedAt: Date,
    userUid: string
}