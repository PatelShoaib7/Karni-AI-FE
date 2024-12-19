import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Serach from "../Components/Serach";
import { useDispatch, useSelector } from "react-redux";
import { getAllItemsList } from "../Stores/Action-Types";
import "./Home.css"; // Importing the CSS file

const Home = () => {
    const dispatch = useDispatch();

    // Access the state from Redux
    const state = useSelector((state) => state.EcommerceRducer);
    const { isLoading, itemList, isError } = state;
    console.log("--state--", state);

    // Fetch items when the component mounts
    useEffect(() => {
        dispatch(getAllItemsList());
    }, [dispatch]);

    return (
        <div className="home-container">

            <h2 className="home-title"></h2>
            <Serach />

            <div className="items-container">
                {isLoading && <p className="loading">Loading...</p>}
                {isError && <p className="error">An error occurred. Please try again.</p>}
                itemList
                {itemList && itemList.length > 0 ? (
                    <ul className="items-list">
                        {itemList.map((item) => (
                            <li key={item._id} className="item-card">
                                <img
                                    src={item["Image Src"]}
                                    alt={item.Title}
                                    className="item-image"
                                />
                                <h3 className="item-title">{item.Title}</h3>
                                <p className="item-price">Price: ${item["Variant Price"]}</p>
                                <p className="item-tags">Tags: {item.Tags}</p>
                                <p className="item-tags">SKU: {item['Variant SKU']}</p>
                                {/* <p className="item-vendor">Vendor: {item.Vendor}</p> */}
                                <button className="buy-now-btn">Buy Now</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    !isLoading && <p className="no-items">No items found.</p>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Home;
