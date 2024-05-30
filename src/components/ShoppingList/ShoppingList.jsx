import React, { useState } from 'react';


export const fetchGrocery = () => {
  return axios.get('/api/groceries');
  };
  
  export const postGrocery = (groceryData) => {
  return axios.post('/api/groceries', groceryData);
  };
  
  export const deleteGrocery = (id) => {
    return axios.delete(`/api/groceries/${id}`);
  };
  
  export const updateGrocery = (id) => {
    return axios.put(`/api/groceries/${id}`);
  };






