import './Product.css'

function Product({ productName, price, imageUrl, description, images }) {
  return (
    <>
      <div className='productFlex'>
      <a href={imageUrl} target='-blank'> 
          <img src={images} alt="Product Image" />
        </a>
        <p>{productName}</p>
        <p>{price}</p>
        <p className='descText'>{description}</p>
       
      </div>
    </>
  );
}
export default Product;
