import React from "react";
import marker from "./marker.png";


export default function Entry({ data }) {
    return (
        <>
            <article className="entry-container">
                <div className="entry-img-container">
                    <img src={data.img.src} alt={data.img.alt} className="entry-fuji-img" />
                </div>
                <div className="entry-content">
                    <div className="entry-maps-container">
                        <img src={marker} alt="marker element" className="marker" />
                        <span>{data.country}</span>
                        <a href={data.googleMapsLink} target="_blank">
                            View on google maps
                        </a>
                    </div>
                    <div className="main-content">
                        <h1>
                            {data.title}
                        </h1>
                        <span className="entry-date">
                            {data.dates}
                        </span>
                        <div className="para">
                            {data.text}
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}