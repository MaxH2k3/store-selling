// src/redux/exampleReducer.ts

interface ExampleState {
    // Define your state shape here
    data: Array<Product>;
    loading: boolean;
    error: string | null;
  }
  
  const initialState: ExampleState = {
    data: new Array<Product>,
    loading: false,
    error: null,
  };
  
  const exampleReducer = (state = initialState, action: any): ExampleState => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_DATA_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case 'FETCH_DATA_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export { exampleReducer };
  