import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, price, description, tags, image }) => {
  return (
    <article className="ba br2 pa3 mv2">
      <Link to={`/product/${id}`} className="no-underline black">
        <div className="flex">
          <div style={{width: 100, height: 100, background: '#f4f4f4', marginRight: 12}}>
            {image ? <img src={image} alt={title} style={{width: '100%', height: '100%', objectFit: 'cover'}} /> : null}
          </div>
          <div>
            <h2 className="f5 mv0">{title}</h2>
            <p className="mv1 grey">${price?.toFixed ? price.toFixed(2) : price}</p>
            <p className="mv1 f7">{description?.slice(0, 90)}{description && description.length > 90 ? '...' : ''}</p>
            <div className="mt2">
              {tags && tags.map((t, i) => (
                <span key={i} className="f7 mr2 pv1 ph2 ba b--black-10 br2">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Card;
