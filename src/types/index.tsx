import React, { ReactNode } from "react";

export interface ProductProps {
    id: number,
    name: string,
    code: string,
    category: string,
    provider: string,
    amount: number
}

export interface ProductListProps {
    productList : [ProductProps],
    product: ProductProps,
    setProduct: React.Dispatch<React.SetStateAction<any>>
    setProductList: React.Dispatch<React.SetStateAction<any[]>>
}

export interface TestProviderData {
    children: ReactNode
}

export interface UserData {
    username: string;
    password: string;
    email?: string;
}

export interface errorsProps {
    name: string,
    amount: string,
    code: string,
    category: string,
    provider: string
}
