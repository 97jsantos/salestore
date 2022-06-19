import { ProductsPage } from "../components/ProductsPage"

import casa from '../images/casa.png'

export function House() {
    return (
        <>
            <ProductsPage
            getFilter='casa'
            image={casa} />
        </>
    )
}