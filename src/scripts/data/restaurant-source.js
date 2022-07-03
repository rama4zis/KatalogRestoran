import API_ENDPOINT from '../global/api-endpoint';

class RestaurantSource {
    static async getRestaurantList() {
        const response = await fetch(API_ENDPOINT.LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async getRestaurantDetail(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }


}

export default RestaurantSource;