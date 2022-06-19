import { ProductsPage } from "../components/ProductsPage"

import lazer from '../images/lazer.png'

export function Recreation() {
    return (
        <>
            <ProductsPage
            getFilter='lazer'
            image={lazer} />
        </>
    )
}