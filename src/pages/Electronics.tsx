import { ProductsPage } from "../components/ProductsPage"

import eletronicos from '../images/eletronicos.png'

export function Electronics() {
    return (
        <>
            <ProductsPage
            getFilter='eletronicos'
            image={eletronicos} />
        </>
    )
}