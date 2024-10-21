import Product from "../../Components/Product/Product";
import Product2 from "../../assets/product2.jpg";
import ProductImg from '../../assets/product.jpg'
import Product4 from '../../assets/product4.jpg'
import Product3 from '../../assets/product3.jpg'
import Product1 from '../../assets/product1.jpg'
import './ProductList.css'

function ProductList() {
  return (
    <>
      <div className="productListFlex">

        
        <Product
          imageUrl="https://www.nikonusa.com/c/cameras"
          images={Product2}
          productName="Nikon Camera"
          price="$2000"
          description="Nikon described the range as a premium line of compact cameras, which combines the high performance of Nikkor lenses with always-on smart device connectivity."
        />

        <Product
        imageUrl='https://didibeauty.com/'
        images={ProductImg}
        productName='Lip Gloss'
        price='$100'
        description='Didi Beauty exists to inspire and empower people to feel beautiful and confident in their own skin through our products and projects.'
        />


      <Product
      imageUrl='https://www.jumia.com.ng/'
      images={Product4}
      productName='Online Store'
      price='$10-$1000'
      description='Browse & discover millions of products. Read customer reviews and find best sellers.'

      />
      <Product
      imageUrl='https://www.apple.com/store'
      images={Product3}
      productName='Apple Store'
      price='$300- $4000'
      description='Shop the latest Apple products, accessories and offers. Compare models, get expert shopping help, plus flexible payment and delivery options.'
      
      />

      <Product
      imageUrl='https://beautybyad.com/'
      images={Product1}
      productName='Beauty by AD'
      price='$400'
      description='Real Beauty, Real Results.'
      />

      </div>
    </>
  );
}

export default ProductList;
