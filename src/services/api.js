const API_URL = 'https://cors-anywhere.herokuapp.com/https://skincare-api.herokuapp.com/product?q='

export const api = {
    search: (query) => {
        return fetch(API_URL + query).then(res => res.json());
    }
  };
  