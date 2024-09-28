import ProductsList from '../ProductsList/ProductsList';
import './ItemListContainer.css';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
  const { category } = useParams(); // Obtengo la categoría de la URL

  return (
    <>
      <ProductsList category={category} /> {/* Paso mis productos y su correspondiente categoria*/}
    </>
  );
}
