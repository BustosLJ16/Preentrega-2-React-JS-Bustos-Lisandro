import { Link } from 'react-router-dom'
import './ProductCard.css'
import React from 'react'

export default function ProductCard({ product }) {
  return (
    <div className="col-3 card-container">
      <div className="card border-0">
        <Link to={`/item/${product.id}`}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-text text-center">{product.title}</h5>
          <p className="card-text text-center text-danger">
            ${product.price} ARS
          </p>
          <p className="text-center">
            <button className="btn btn-dark rounded-pill">
              <Link to={`/item/${product.id}`} className='text-decoration-none text-light'> Ver Más <i className="bi bi-info-circle"></i>
              </Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
