import React from 'react';

let firstUppercase = (string) => {
  if (string === undefined || string == null) {
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Product(props) {
  return (
    <div className='card'><div className="card-body"><h5 className="card-title">{firstUppercase(props.product.name)}</h5><h6 className="card-subtitle mb-2 text-muted">{firstUppercase(props.product.brand)}</h6></div></div>
  );
}

export default Product;
