/* eslint-disable linebreak-style */
import FavoriteResIdb from '../../data/favoriteres-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content container">
      <h2 class="content__heading">Favorite Restaurant List</h2>
      <div id="restaurants" class="restaurants container-content">

      </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurants');

    try {
      const restaurantList = await FavoriteResIdb.getAllRes();
      console.log(restaurantList);
      restaurantContainer.innerHTML = '';

      restaurantList.forEach((restaurantItem) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurantItem);
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default Favorite;
