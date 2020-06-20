export interface Product {
    id: number;
    name: string;
    photo: string;
    price: number;
    totalReviews: number;
}
export interface Review {
    review: string;
    score: number;
}