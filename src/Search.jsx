import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import { fetchAdsData, fetchCompanyData } from "./redux/actionCreator";
export const Search = () => {
    const metaData = useSelector(state => state.metaAdsData);
    const getCompanyData = useSelector(state => state.companyInfo);
    const dispatch = useDispatch();
    const [filteredData, setFilteredData] = useState(metaData);
    const handleSearch = (value) => {
        const temp = metaData.filter((data) => {
            return data.headline.toLowerCase().includes(value.toLowerCase());
        })
        setFilteredData([...temp]);
    };
    const debounce = (callback, delay) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null
                callback.apply(context, args)
            }, delay)
        }
    };
    const debouncedSearch = useCallback(debounce(handleSearch, 1000), []);
    useEffect(() => {
        dispatch(fetchCompanyData())
        dispatch(fetchAdsData())
    }, [])
    useEffect(()=>{
        setFilteredData(metaData)
    },[metaData])
    return (
        <>
            <input
                placeholder="Search by heading"
                type="text"
                className="search-bar m-5"
                onChange={(e) => handleSearch(e.target.value)}
            />
            <div className=" justify-content-around m-5">
                {filteredData.map((ad) => {
                    console.log(ad);
                    console.log(getCompanyData);
                    return <Card id={ad._id}
                        companyInfo={getCompanyData[ad.companyId]} 
                        primaryText={ad.primaryText} 
                        headline={ad.headline} 
                        description={ad.description} 
                        CTA={ad.CTA} 
                        imageUrl={ad.imageUrl} 
                        />
                })}
            </div>
            {!filteredData.length && <h5>no result found</h5>}
        </>
    )
}