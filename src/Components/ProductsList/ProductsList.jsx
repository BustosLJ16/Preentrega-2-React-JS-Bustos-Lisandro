import './ProductsList.css'
import { useEffect, useState } from 'react';
import { getProducts } from '../../AsyncMock.js'
import ProductCard from '../../Views/ProductCard/ProductCard.jsx'

export default function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts.then(data => setProducts(data));
    }, []);


    return (
        <>
            <div className='container my-5'>
                <div className="row">
                    {products.map(product => <ProductCard key={product.id} product={product} />)}
                </div>
            </div>
        </>
    )
}
