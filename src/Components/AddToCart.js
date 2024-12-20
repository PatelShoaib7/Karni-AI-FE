import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const AddToCart = () => {
  const { id } = useParams(); // Get the id from the route parameters
  console.log("--id---", id);

  const state = useSelector((state) => state.EcommerceReducer); // Access Redux state
  console.log("--state at cart --", state);

  // Find the item from the list that matches the id
//  const singleItem = itemList?.find((item) => item.id === id)
 // console.log("--singleItem--", singleItem);

  // Handle loading, error, or empty state
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error loading data.</div>;
  // if (!singleItem) return <div>Item not found.</div>;

  return (
    <div>
      <h2>Item Details</h2>
      <div>
        {/* <p><strong>ID:</strong> {singleItem.id}</p>
        <p><strong>Name:</strong> {singleItem.name}</p>
        <p><strong>Price:</strong> ${singleItem.price}</p>
        <p><strong>Description:</strong> {singleItem.description}</p> */}
      </div>
    </div>
  );
};

export default AddToCart;
