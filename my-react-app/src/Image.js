// Image //

import React from 'react';
import productData from './product';

function Image() {
  return (
    <img src={productData.image} alt="Product" />
  );
}

export default Image;