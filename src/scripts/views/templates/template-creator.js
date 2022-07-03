import CONFIG from '../../global/config';

const createRestaurantItemTemplate = (result) => `
    <div class="card-item">
        <div class="card-item-image">
            <div class="card-item-image-wrap">
            <img src="${CONFIG.BASE_IMAGE_URL}large/${result.pictureId}" width="450" alt="${result.name}">
                <span class="image-tag">${result.city}</span>
            </div>
        </div>
        <div class="card-item-content">
            <h3 class="rating">Rating: ${result.rating}</h3>
            <h2 class="res-name"><a href="${`/#/detail/${result.id}`}">${result.name}</a></h2>
            <p class="res-desc">${result.description}</p>
        </div>
    </div>
`;

const createRestaurantDetailTemplate = (result) => `
    <h2 class="restaurant__title">${result.name}</h2>
    <div class="resto-detail-header">
        <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL}large/${result.pictureId}" alt="${result.name}" />
        <div class="resto__info">
            <h3><span class="material-icons">location_on</span>${result.address}</h3>
            <h3><span class="material-icons">menu_book</span>${result.categories.map((category) => `<span class=""> ${category.name}</span>`).join('')}</h3>
            <h3><span class="material-icons">star</span>${result.rating}</h3>
        </div>
    </div>
    <div class="resto__description">
        <h2>Detail</h2>
        <p>${result.description}</p>
    </div>

    <h2>Menu</h2>
    <div class="resto-menu">
        <div class="detail__food">
            <h3>Makanan</h3>
            ${result.menus.foods.map((food) => `<ul><li style="list-style:none;">${food.name}</li></ul>`).join('')}
        </div>
        <div class="detail__drink">
            <h3>Minuman</h3>
            ${result.menus.drinks.map((drink) => `<ul><li style="list-style:none;">${drink.name}</li></ul>`).join('')}
        </div>
    </div>

`;

const createReviewTemplate = (result) => `
    <div class="resto-review">
        <div class="resto-review-header">
            <div class="user-name">
                <span>${result.name}</span>
            </div>
            <div class="date-review">
                <span>${result.date}</span>
            </div>
        </div>
        <hr />
        <div class="resto-review-content">
            <p>
                "${result.review}"
            </p>
        </div>
    </div>  
`;

const createLikeButtonTemplate = () => `
<button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    createReviewTemplate
};