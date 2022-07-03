import UrlParser from '../../routes/url-parser';
import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div id="restoMain" class="restoMain"></div>

        <h2 class="review-title">Review</h2>
        <div class="resto-review">
          <div class="resto-review-header">
            <div class="user-name">
              <span>Junaidi</span>
            </div>
            <div class="date-review">
              <span>20/10/2019</span>
            </div>
          </div>
          <hr />
          <div class="resto-review-content">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </p>
          </div>
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
          <button class="submit" id="submit" aria-label="Submit my review">Add Review</submit>
        </div>

        <button class="add-favorite">
          <span class="material-icons">favorite</span>
        </button>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoMain = document.querySelector('#restoMain');

    try {
      const result = await RestaurantSource.getRestaurantDetail(url.id);
      // console.log(result);
      restoMain.innerHTML = createRestaurantDetailTemplate(result.restaurant);

    } catch (err) {
      // content.style.display = 'block';
      // load.style.display = 'none';
      // content.innerHTML = `<b>Error: Ooups.. please check your connection!!</b> ${err}`;
    }
  },
};

export default Detail;