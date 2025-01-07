import { useMemo } from 'react';

/**
 * This hook will sort, filter, and search the passed array, which will be a product array.
 * used useMOmeo so save some performce
 */

const useSortedAndFilteredProducts = (products, query, priceOrder, ratingOrder) => {
  const sortAndFilterProducts = (products, query, priceOrder, ratingOrder) => {
    
    const filteredProducts = products.filter((product) => {
      if (!product.title) return false;
      return product.title.toLowerCase().includes(query.toLowerCase());
    });

    const sortedByPrice = filteredProducts.sort((a, b) => {
      if (priceOrder === 'asc') return a.price - b.price;
      if (priceOrder === 'desc') return b.price - a.price;
      return 0;
    });

    const sortedByRating = sortedByPrice.sort((a, b) => {
      if (ratingOrder === 'asc') return a.rating?.rate - b.rating?.rate || 0;
      if (ratingOrder === 'desc') return b.rating?.rate - a.rating?.rate || 0;
      return 0;
    });

    return sortedByRating;
  };

  return useMemo(() => sortAndFilterProducts(products, query, priceOrder, ratingOrder), [
    products,
    query,
    priceOrder,
    ratingOrder,
  ]);
};

export default useSortedAndFilteredProducts;

