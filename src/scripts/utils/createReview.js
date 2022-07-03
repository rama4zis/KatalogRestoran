import RestaurantSource from '../data/restaurant-source';
import { createReviewTemplate } from '../views/templates/template-creator';

const createNewReview = {
    post(url) {
        const submit = document.querySelector('#submit');
        const userName = document.querySelector('#userName');
        const reviewContent = document.querySelector('#reviewContent');

        submit.addEventListener('click', async () => {
            const newReview = {
                id: url.id,
                name: userName.value,
                review: reviewContent.value,
            };

            if (!!newReview.name && !!newReview.review) {
                const reviewContainer = document.querySelector('.detail_review');
                try {
                    const response = await RestaurantSource.addReview(newReview);
                    RestaurantSource.getRestaurantDetail(url.id);
                    reviewContainer.innerHTML = '';
                    response.customerReviews.forEach(review => {
                        reviewContainer.innerHTML += createReviewTemplate(review);
                    });
                } catch (err) {
                    reviewContainer.innerHTML = `<b>Error: Ooups.. please check your connection!!</b> ${err}`;
                }
            }
            this._emptyForm();
        });
    },
    _emptyForm() {
        document.querySelector('#userName').value = '';
        document.querySelector('#reviewContent').value = '';
    },
};

export default createNewReview;