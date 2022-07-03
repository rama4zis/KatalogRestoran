import UrlParser from '../../routes/url-parser';
import RestaurantSource from "../../data/restaurant-source";
import {
  createRestaurantDetailTemplate,
  createReviewTemplate
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurant from '../../data/favoriteres-idb';
import createNewReview from '../../utils/createReview';

const Detail = {
  async render() {
    return `
        <div id="restoMain" class="restoMain"></div>
        
        <h2 class="review-title">Review</h2>
        <div class="detail_review">

        </div>


        <h2 class="add-review-title">Add New Review</h2>
        <div class="review-form">
          <div class="input-form">
            <div class="review_form_name">
                <label for="name">Name</label><br>
                <input type="text" name="name" id="userName" placeholder="Input your name" required>
            </div>
            <div class="review_form_content">
                <label for="content">Review</label><br>
                <textarea name="content" id="reviewContent" placeholder="Input your review" required></textarea>
            </div>
          </div>
          <button class="submit" id="submit" aria-label="Review Now">Add Review</submit>
        </div>

        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoMain = document.querySelector('#restoMain');
    const reviewContainer = document.querySelector('.detail_review');
    createNewReview.post(url);
    try {
      const result = await RestaurantSource.getRestaurantDetail(url.id);
      restoMain.innerHTML = createRestaurantDetailTemplate(result.restaurant);

      const customerReviews = result.restaurant.customerReviews;
      customerReviews.forEach(review => {
        reviewContainer.innerHTML += createReviewTemplate(review);
      });

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        FavoriteRestaurant: FavoriteRestaurant,
        restaurant: {
          id: result.restaurant.id,
          name: result.restaurant.name,
          address: result.restaurant.address,
          city: result.restaurant.city,
          categories: result.restaurant.categories,
          menus: result.restaurant.menus,
          rating: result.restaurant.rating,
          pictureId: result.restaurant.pictureId,
          description: result.restaurant.description,
          customerReviews: result.restaurant.customerReviews,
        },
      });

    } catch (err) {
      // content.style.display = 'block';
      // load.style.display = 'none';
      // content.innerHTML = `<b>Error: Ooups.. please check your connection!!</b> ${err}`;
    }
  },
};

export default Detail;