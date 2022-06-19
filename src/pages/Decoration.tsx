import { ProductsPage } from "../components/ProductsPage"

import decoracao from '../images/decoracao.png'

export function Decoration() {
    return (
        <>
            <ProductsPage
            getFilter='decoracao'
            image={decoracao} />
        </>
    )
}