import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({ data = [] }) => {
  const limit = 10;

  // filteredData is the list after applying tag search
  const [filteredData, setFilteredData] = useState(data);

  // offset controls which page (start index)
  const [offset, setOffset] = useState(0);

  // products for the current page
  const [products, setProducts] = useState(() => data.slice(0, limit));

  // When the incoming data prop changes (or on mount) keep filteredData synced:
  useEffect(() => {
    setFilteredData(data);
    setOffset(0);
  }, [data]);

  // Whenever offset or filteredData changes, update the current page slice
  useEffect(() => {
    const slice = filteredData.slice(offset, offset + limit);
    setProducts(slice);
  }, [offset, filteredData]);

  // Filter function: searchValue is a string
  const filterTags = (searchValue) => {
    const q = (searchValue || '').trim().toLowerCase();
    if (q === '') {
      setFilteredData(data);
      setOffset(0);
      return;
    }

    const filtered = data.filter(product => {
      if (!product.tags || !Array.isArray(product.tags)) return false;
      return product.tags.some(tag => tag.toLowerCase().includes(q));
    });

    setFilteredData(filtered);
    setOffset(0);
  };

  // Unified pagination handler
  const changePage = (direction) => {
    if (direction === 'next') {
      // prevent going past end
      if (offset + limit < filteredData.length) {
        setOffset(prev => prev + limit);
      }
    } else if (direction === 'prev') {
      if (offset - limit >= 0) {
        setOffset(prev => prev - limit);
      } else {
        setOffset(0);
      }
    }
  };

  const atStart = offset <= 0;
  const atEnd = offset + limit >= filteredData.length;

  return (
    <section>
      <Search handleSearch={filterTags} />

      <div className="cf pa2">
        <div className="mt2 mb2">
          {products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            products.map(product => (
              <Card key={product.id} {...product} />
            ))
          )}
        </div>
      </div>

      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => changePage('prev')} disabled={atStart} />
        <div className="pa2">
          <span>Showing {Math.min(filteredData.length, offset + 1)} - {Math.min(filteredData.length, offset + limit)} of {filteredData.length}</span>
        </div>
        <Button text="Next" handleClick={() => changePage('next')} disabled={atEnd || filteredData.length === 0} />
      </div>
    </section>
  );
};

export default CardList;
