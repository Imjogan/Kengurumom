import './PopularItem.css';
import { PRODUCT_PAGE } from '../../config/links';
import { Link, useHistory } from 'react-router-dom';

// export default function PopularItem({id, src, name, priceSale, sale = false, new: isNew = false}){
//   return (
//     <figure className={`popular__item ${isNew && 'popular__item_new'}`}>
//       <img src={src} alt={name} className="popular__item-img"/>
//       <button className="popular__item-cart" alt="В корзину"></button>
//       <figcaption className="popular__item-title">name</figcaption>
//       <div className="popular__item-price">price
//         {priceSale && <p className="popular__item-price-sale">{priceSale}</p>}
//       </div>
//     </figure>
//   );
// }

//'new' prop is reserved, rename to isNew
<<<<<<< HEAD
export default function PopularItem({id, photos, name, price, sale = false, new: isNew = false, onPopupAddCartOpen}) {
  let history = useHistory();
  
=======
export default function PopularItem({
  id,
  photos,
  name,
  price,
  sale = false,
  new: isNew = false,
  onPopupAddCartOpen,
  component,
}) {
  let history = useHistory();

>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
  const handleClick = () => {
    history.push(`${PRODUCT_PAGE}/${id}`);
  };

  const handlePopupAddCartOpen = () => {
    onPopupAddCartOpen({
<<<<<<< HEAD
      src: photos[0],
      title: name,
      price: sale ? Math.floor(price - (price * sale) / 100) : price
    });
  }

  return (
    <figure className={`popular__item ${isNew && 'popular__item_new'}`}>
      <img
        onClick={handleClick}
        src={photos?.[0]}
        alt={name}
        className="popular__item-img"
      />
      <button className="popular__item-cart" alt="В корзину" onClick={handlePopupAddCartOpen}></button>
      {/* <figcaption className="popular__item-title">{name}</figcaption> */}
      <Link className="popular__item-title" to={`${PRODUCT_PAGE}/${id}`}>
        {name}
      </Link>
      <div className="popular__item-price">
        {sale ? Math.floor(price - (price * sale) / 100) : price}
        {sale && (
          <p className="popular__item-price-sale">{price}</p>
        )}
=======
      id: id,
      src: photos[0],
      title: name,
      num: 1,
      price: sale ? Math.floor(price - (price * sale) / 100) : price
    });
  };

  return (
    <figure
      className={`${component}__item ${isNew && component + '__item_new'}`}
    >
      <img
        onClick={handleClick}
        src={photos[0]}
        alt={name}
        className={`${component}__item-img`}
      />
      <button
        className={`${component}__item-cart`}
        alt="В корзину"
        onClick={handlePopupAddCartOpen}
      ></button>
      {/* <figcaption className="popular__item-title">{name}</figcaption> */}
      <Link className={`${component}__item-title`} to={`${PRODUCT_PAGE}/${id}`}>
        {name}
      </Link>
      <div className={`${component}__item-price`}>
        {sale ? Math.floor(price - (price * sale) / 100) : price}
        {sale && <p className={`${component}__item-price-sale`}>{price}</p>}
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
      </div>
    </figure>
  );
}
