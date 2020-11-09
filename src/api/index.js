import qs from 'qs';

const API = 'https://bp-interview.herokuapp.com';

const appendSearchParams = (url, searchParams) => {
  if (Object.keys(searchParams).length > 0) {
    return `${url}?${qs.stringify(searchParams)}`
  }

  return url;
};

const apiRequest = ({
  url,
  searchParams = {}
}) => {
  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  });

  const request = new Request(appendSearchParams(url, searchParams), {
    headers,
    method: 'GET'
  });

  return fetch(request)
    .then(response => response.json())
    .catch(error => error);
};

const fetchRoute = {
  category: categoryId =>
    apiRequest({
      url: `${API}/categories/${categoryId}`
    }),
  categoriesList: () =>
    apiRequest({
      url: `${API}/categories`
    }),
  product: productId =>
    apiRequest({
      url: `${API}/products/${productId}`
    }),
  productsList: (categoryId, searchParams) =>
    apiRequest({
      url: `${API}/categories/${categoryId}/products`,
      searchParams
    })
};

export default fetchRoute;