import './ProductsList.css';
import { useEffect, useState } from 'react';
import { getProducts } from '../../AsyncMock.js';
import ProductCard from '../../Views/ProductCard/ProductCard.jsx';

export default function ProductsList({ category }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        getProducts // Llamamos para obtener los productos
            .then(data => {
                // Filtramos si es que hay alguna categoría indicada
                if (category) {
                    const filteredProducts = data.filter(product =>
                        product.category.toLowerCase() === category.toLowerCase()
                    );
                    setProducts(filteredProducts); // Guardo los productos filtrados
                } else {
                    setProducts(data); // Si no hay categoría, guardamos todos los productos
                }
            })
            .catch(err => {
                setError(err); //Verificamos si hay algun error
            })
            .finally(() => {
                setLoading(false); // Terminamos de cargar
            });
    }, [category]); // En caso de que cambie la categoría iniciamos nuevamente

    // Mostramos un mensaje de carga 
    if (loading) return <p>Cargando productos...</p>;

    // Si hubiera un error, mostramos un mensaje de error
    if (error) return <p>Error al cargar productos: {error.message}</p>;

    return (
        <div className='container my-5'>
            <div className="row">
                {products.length > 0 ? (
                    products.map(product => <ProductCard key={product.id} product={product} />)
                ) : (
                    <p>No hay productos en esta categoría.</p>
                )}
            </div>
        </div>
    );
}
