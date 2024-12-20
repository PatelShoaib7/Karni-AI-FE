import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom';

const AddToCart = () => {
  const { id } = useParams()
  console.log("--id---", id)
  const state = useSelector((state) => state.EcommerceRducer);
  console.log("--state at cart --", state)
  const { isLoading, itemList, isError } = state;
  return (
    <div>AddToCart</div>
  )
}

export default AddToCart