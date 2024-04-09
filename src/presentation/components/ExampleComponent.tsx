// src/components/ExampleComponent.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../redux/actions';
import { RootState } from '../redux/reducers';

const ExampleComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.example);

  useEffect(() => {
    dispatch(fetchDataRequest());
    // Example async action
    fetch('https://660cd7753a0766e85dbebd01.mockapi.io/user')
      .then(response => response.json())
      .then(data => dispatch(fetchDataSuccess(data)))
      .catch(error => dispatch(fetchDataFailure(error.message)));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data.map(product => (
      <div key={product.id}>
        <h1>Product Name: {product.displayName}</h1>
        <h1>Product Name: {product.id}</h1>
      </div>
    ))}
    </div>
  );
};

export default ExampleComponent;
