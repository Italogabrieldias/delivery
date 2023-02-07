import { checkIsSelected } from "./helpers";
import ProductsCard from "./ProductCard";
import { Product } from "./types";
type Props = {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  selectedProduct: Product[];
};

function ProductsList({ products, onSelectProduct, selectedProduct }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map((product) => (
          <ProductsCard
            key={product.id}
            product={product}
            onSelectProduct={onSelectProduct}
            isSelected={checkIsSelected(selectedProduct,product)}
            
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
