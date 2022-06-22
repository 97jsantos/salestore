import { useNavigate } from "react-router-dom"
import { NewProductForm } from "../components/NewProductForm"

export function NewProduct() {
    const navigate = useNavigate()

    function createPost(product) {

        fetch(`http://localhost:5000/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate(`/${product.category.url}`)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <NewProductForm productData={[]} handleSubmit={createPost} />
        </div>
    )
}