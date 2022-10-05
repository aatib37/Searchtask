import React from "react";
export const Card = ({id,companyInfo,primaryText,headline,description,CTA,imageUrl})=>{
    return(
        <>
        <div className="border p-5 card">
            <h3>{primaryText}</h3>
            <div>
                <img src={imageUrl} className="img-fluid" />
            </div>
            <h2>{headline}</h2>
            <p>{description}</p>
            <div className="d-flex justify-content-between">
                <div>
                    <a href={companyInfo.url}>{companyInfo.name}</a>
                </div>
                <div>
                    <button>{CTA}</button>
                </div>
            </div>
        </div>
        </>
    )    
}