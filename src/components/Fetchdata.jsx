import React, { useEffect, useState } from 'react'
  import "../components/Fetchdata.css"
import { useCart } from './CartContext';
function Fetchdata() {
  const [maal, setMaal] = useState([]);

    const { addToCart } = useCart();

    const handleclick = (item) => {
      addToCart(item);
    };

  const url = "https://fakestoreapi.com/products";

  const fetchdata = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Getting error while fetching data");
      }
      const data = await res.json();
      setMaal(data);

      // console.log(data)
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="grid-box">
      {maal?.map((el, i) => (
        <div key={el.id} className="grid-child">
          <img className="img-size" src={el.image} alt={el.id} />

          <div>
            <p>{el.title}</p>
            <strong>
              <p>$ {el.price}</p>
            </strong>
            <button className="btn-cart" onClick={() => handleclick(el)}>
              Add to cart
            </button>{" "}
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default Fetchdata;