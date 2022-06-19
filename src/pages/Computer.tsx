import { ProductsPage } from "../components/ProductsPage"

import informatica from '../images/informatica.png'

export function Computer() {
    return (
        <>
            <ProductsPage
            getFilter='informatica'
            image={informatica} />
        </>
    )
}


