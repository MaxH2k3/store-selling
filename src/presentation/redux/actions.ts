
// src/redux/actions.ts

export const fetchDataRequest = () => ({
    type: 'FETCH_DATA_REQUEST',
  });
  
  export const fetchDataSuccess = (data: Array<Product>) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
  });
  
  export const fetchDataFailure = (error: Array<Product>) => ({
    type: 'FETCH_DATA_FAILURE',
    payload: error,
  });
  