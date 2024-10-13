import React, { useState, useEffect } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const buypage = (food, price, src) => {
    navigate("/buy", { state: { food, price, source: src } });
  };

  useEffect(() => {
    const handleClick = (e) => {
      const foodElement = e.target.closest('.home-img');
      if (foodElement) {
        const foodname = foodElement.querySelector('.food-name').textContent;
        const price = foodElement.querySelector('.price').textContent;
        const source = e.target.src;
        buypage(foodname, price, source);
      }
    };

    // Update querySelector and add event listeners after data loading
    const updateEventListeners = () => {
      const images = document.querySelectorAll('.home-img img');
      images.forEach((image) => {
        image.addEventListener('click', handleClick);
      });

      return () => {
        images.forEach((image) => {
          image.removeEventListener('click', handleClick);
        });
      };
    };

    // Simulate data loading
    setTimeout(() => {
      setLoading(false);
      updateEventListeners();
    }, 1000); // Adjust the timeout as needed
  }, []);

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate("/product", { state: { foodChoice: search } });
    }
  };

  const handleSearchClick = () => {
    navigate("/product", { state: { foodChoice: search } });
  };

  return (
    <div className='homepage'>
      {loading && (
        <div className="loader"></div>
      )}
      {!loading && (
        <>
          <section className='search-container'>
            <select>
              <option>Food</option>
              <option>Restaurant</option>
            </select>
            <input 
              type='search' 
              value={search}
              onChange={handleSearchInput}
              onKeyDown={handleKeyDown} 
              placeholder='What Would You Want To Eat...' 
              id='search-input' 
              list='search-option'
            />
            <datalist id="search-option">
              <option>Burger</option> 
              <option>Pizza</option> 
              <option>Panner</option> 
              <option>Chapati</option> 
              <option>Lassi</option> 
              <option>Momos</option> 
              <option>VadaPav</option> 
              <option>Paratha</option> 
              <option>Sandwich</option> 
              <option>French Fries</option> 
              <option>Manchurian</option> 
              <option>Samosha</option> 
              <option>Pasta</option> 
              <option>Dosa</option> 
              <option>Noodle</option> 
              <option>Cake</option> 
              <option>Naan</option> 
            </datalist> 
            <button onClick={handleSearchClick}>
              <span className="material-symbols-outlined">
                search
              </span> 
            </button>    
          </section>

          <section className='home-img-container'>
            {[
              { src: 'https://th.bing.com/th/id/OIP.n-x0aGScXztEGuUuN356nQHaE8?w=302&h=200&c=7&r=0&o=5&dpr=1.4&pid=1.7', food: 'Burger', price: '149₹' },
              { src: 'https://th.bing.com/th/id/OIP.nOKnXrxXJEXgajGX-SZVLQHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7', food: 'Margrita Pizza', price: '300₹' },
              { src: 'https://th.bing.com/th/id/OIP.lakDTIW6t4pfY1oo6d6DjwHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.4&pid=1.7', food: 'Lachha Paratha', price: '139₹' },
              { src: 'https://th.bing.com/th/id/OIP.dEyEvqfGH62TNJfiOrLy2gHaE8?w=296&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7', food: 'Chicken SandWich', price: '₹49' },
              { src: 'https://th.bing.com/th/id/OIP.tTcYoXd1_zhBcrjVvD4AQAHaHa?pid=ImgDet&w=197&h=197&c=7&dpr=1.4', food: 'Cheese Pizza', price: '499₹' },
              { src: 'https://th.bing.com/th/id/OIP.Jmg8k0E-E_Zy1dSj_tjYjgHaE8?w=306&h=204&c=7&r=0&o=5&dpr=1.4&pid=1.7', food: 'French Fries', price: '₹80' },
              { src: 'https://th.bing.com/th/id/OIP.y30GiRwfCGzCTIrhH1KVlgHaE6?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', food: 'Veg SandWich', price: '₹69' },
              { src: 'https://th.bing.com/th/id/OIP.IWm9rTKEUQsVoE2tpORnDwHaKA?w=144&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7', food: 'Aaloo Paratha', price: '₹99' },
              { src: 'https://th.bing.com/th/id/OIP.tXeX-3DTKJ2qatxZCACLbQHaE8?w=296&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7', food: 'Veg Manchurian', price: '₹70' },
              { src: 'https://th.bing.com/th/id/OIP.q5ZQpqlRyNHzk35IWThyJgHaFj?w=232&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', food: 'Rice Manchurian', price: '₹130' },
              { src: 'https://th.bing.com/th/id/OIP.KKy9ZCREBVx8-frwswcJHgHaFj?w=231&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7', food: 'Non-Veg Manchurian', price: '₹180' },
              { src: 'https://th.bing.com/th/id/OIP.Xp2RQVjyCr3kN1G8VhcK_wHaE_?w=292&h=197&c=7&r=0&o=5&dpr=1.4&pid=1.7', food: 'Samosha', price: '₹35' },
              { src: 'https://th.bing.com/th/id/OIP.XrQBPIAzY67HCLGEP4Zi_gAAAA?w=189&h=233&c=7&r=0&o=5&dpr=1.4&pid=1.7', food: 'Lassi', price: '₹49' },
              { src: 'https://th.bing.com/th/id/OIP.XmI7ISwdmLyYWTItEVgMhQHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', food: 'Panner Butter Masala', price: '₹250' },
              { src: 'https://th.bing.com/th/id/OIP.wbvwl16k5WWimU4Mlg9H1QHaE8?w=251&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7', food: 'NonVeg Samosha', price: '₹50' },
              { src: 'https://th.bing.com/th/id/OIP.tsYLQALs_ypA3ncgTybMagHaE7?w=274&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7', food: 'Tandoori Naan', price: '₹70' },
              { src: 'https://th.bing.com/th/id/OIP.iODMe_JSRwBsCFMaQ41o0AHaLH?w=198&h=297&c=7&r=0&o=5&dpr=1.3&pid=1.7', food: 'plain Pasta', price: '₹79' },
              { src: 'https://th.bing.com/th/id/OIP.jBiVcKhTWR3RYrr8OVtcDwHaLH?w=198&h=297&c=7&r=0&o=5&dpr=1.3&pid=1.7', food: 'Noodle', price: '₹60' },
              { src: 'https://th.bing.com/th/id/OIP.AAeMOleCsTZ6bN_MA_cQqQHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.4&pid=1.7', food: 'masala dosa', price: '₹110' },
              { src: 'https://th.bing.com/th/id/OIP.X5jrHl7hlD3QkqT6Cc5hjgHaFj?w=266&h=200&c=7&o=5&dpr=1.4&pid=1.7', food: 'Vada Pav', price: '₹65' },
              { src: 'https://th.bing.com/th/id/OIP.ploDcPHuMifYSMeASKYWfgHaHV?w=188&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7', food: 'Pastry', price: '₹75' }
            ].map((item, index) => (
              <div key={index} className='home-img'>
                <img alt={item.food} src={item.src} />
                <p className='food-name'>{item.food}</p>
                <p className='price'>{item.price}</p>
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  )
}

export default Home;
