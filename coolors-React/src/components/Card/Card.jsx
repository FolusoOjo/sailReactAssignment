import './Card.css'

function Card({ images, intro, description }) {
  return (
    <>

      <div className='cardBackground'>
      <img src={images} alt="#" className="cardImage"/>

      <div>
        <h4>{intro}</h4>
        <p>{description}</p>
      </div>
      </div>
      
    </>
  );
}

export default Card;
