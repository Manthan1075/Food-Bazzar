import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';

function Product() {
  const location = useLocation();
  const { foodChoice } = location.state || { foodChoice: 'burger' };
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodChoice}`;

  const fetchapi = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      if (data.meals) {
        const mealsWithPrices = data.meals.map(meal => ({
          ...meal,
          price: Math.floor(Math.random() * 500) + 1 // Generate random price under 500₹
        }));
        setMeals(mealsWithPrices);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.error("Error fetching the API:", error);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchapi();
  }, [foodChoice]);

  return (
    <div className='product-page'>
      {loading && (
       <div class="loader">

       </div>
      )}
      {!loading && (
        <>
          <h3 className='search-input'>Searched for: {foodChoice}</h3>
          <section className='home-img-container'>
            {meals.length > 0 ? (
              meals.map(meal => (
                <div className='home-img' key={meal.idMeal}>
                  <img alt={meal.strMeal} src={meal.strMealThumb} />
                  <p className='food-name'>{meal.strMeal}</p>
                  <p className='price'>{meal.price}₹</p>
                </div>
              ))
            ) : (
              <p className='unavaliable'> Currently Not Avaliable Sorry..</p>
            )}
          </section>
        </>
      )}
    </div>
  );
}

export default Product;
