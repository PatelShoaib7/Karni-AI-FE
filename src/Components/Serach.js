import React, { useEffect, useState } from "react";
import useDebounce from "../Hooks/useDebounce";
import "./Serach.css";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedItemsList } from "../Stores/Action-Types";

const Serach = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.EcommerceRducer);
    const { isLoading, searchedList, isError } = state;

    const [searchBy, setSearchBy] = useState("");
    const debounceSearchBy = useDebounce(searchBy, 1000);

    const handleSearchChange = (e) => {
        setSearchBy(e.target.value);
    };

    useEffect(() => {
        if (debounceSearchBy.length) {
            dispatch(getSearchedItemsList(debounceSearchBy));
        }
    }, [debounceSearchBy]);

    // Show results only when there are items and input
    const showResults =
        debounceSearchBy && (searchedList?.length > 0 || isLoading || isError);

    return (
        <div className="search-container">
            <input
                className="search-input"
                placeholder="Search Products Here"
                onChange={handleSearchChange}
                value={searchBy}
            />
            {showResults && (
                <div className={`search-results visible`}>
                    {isLoading && <p>Loading...</p>}
                    {isError && <p>Error occurred while fetching results.</p>}
                    {searchedList?.length > 0 ? (
                        searchedList.map((item, index) => (
                            <div className="search-result-item" key={index}>
                                <h4>Title : {item?.Title ? item?.Title : "Is Missig for Above Serach Try Another Item"}</h4>

                            </div>
                        ))
                    ) : (
                        <p>No results found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Serach;
