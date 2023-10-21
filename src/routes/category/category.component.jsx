import { useContext, useState, useEffect, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";

import { CheckoutTitle, CheckoutContainer } from "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CheckoutTitle>{category.toUpperCase()}</CheckoutTitle>
      <CheckoutContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CheckoutContainer>
    </Fragment>
  );
};

export default Category;
