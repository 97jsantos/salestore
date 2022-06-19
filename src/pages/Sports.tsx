import { ProductsPage } from "../components/ProductsPage"

import esportes from '../images/esportes.png'

export function Sports() {
    return (
        <>
            <ProductsPage
            getFilter='esportes'
            image={esportes} />
        </>
    )
}