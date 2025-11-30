import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SingleView = ({ data = [] }) => {
  const { id } = useParams();
  const productId = Number(id);
  const product = data.find(p => Number(p.id) === productId);

  if (!product) {
    return (
      <div>
        <p>Product not found.</p>
        <Link to="/">Back</Link>
      </div>
    );
  }

  return (
    <article className="pa3 ba br2">
      <Link to="/" className="db mb3">← Back to products</Link>
      <h2 className="mv0">{product.title}</h2>
      <p className="grey mv1">${product.price?.toFixed ? product.price.toFixed(2) : product.price}</p>
      <div className="mb3">
        {product.image ? <img src={product.image} alt={product.title} style={{maxWidth: '100%'}} /> : null}
      </div>
      <p>{product.description}</p>
      <div className="mt3">
        <strong>Tags:</strong> {product.tags && product.tags.join(', ')}
      </div>
    </article>
  );
};

export default SingleView;
