import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content container">
      <h2 class="content__heading">Restaurant List</h2>
      <div id="restaurants" class="restaurants container-content">

      </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurants');

    try {
      const restaurantList = await RestaurantSource.getRestaurantList();
      // console.log(restaurantList);
      restaurantContainer.innerHTML = '';

      restaurantList.forEach(restaurantItem => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurantItem);
      });
    } catch (err) {
      // content.style.display = 'block';
      // load.style.display = 'none';
      // content.innerHTML = `<b>Error: Ooups.. please check your connection!!</b> ${err}`;
    }


  },
};

export default Home;