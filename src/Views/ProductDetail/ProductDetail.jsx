import { Link, useParams } from 'react-router-dom'
import './ProductDetail.css'
import React, { useEffect, useState } from 'react'
import { getProduct } from '../../AsyncMock';

export default function ProductDetail() {
  const [product, setProduct] = useState({})
  const { id } = useParams();
  useEffect(() => {
    setProduct(getProduct(id))
  }, [])



  return (
    <>
      <div className="container my-5">
        <p className="text-start">
          <button className="btn btn-dark rounded-pill">
            <Link to={'/'} className="text-decoration-none text-white">
              <i className="bi bi-arrow-left-circle"> Volver Al Inicio </i>
            </Link>
          </button>
        </p>
      </div>


      <div className="container my-5">
        <div className="row">
          <div className="col">
            <img src={product.image} className="img-fluid" alt={product.title} />
          </div>
          <div className="col">
            <h1>{product.title}</h1>
            <p className="text-danger fs-3">${product.price} ARS</p>
            <p>{product.description}</p>
            <p>Categoría/s: {product.category}, {product.type}</p>
            <p className="card-text">
              <h5>Hay Stock (6)</h5>
              <button className="btn btn-dark rounded-pill">Agregar al carrito <i className="bi bi-plus-circle"></i></button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
