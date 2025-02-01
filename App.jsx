import React from "react";
import Header from "./components/Header";
import Entry from "./components/MainContent";
import travelData from "./travelData";


export default function App() {
    return (
        <>
            <Header />

            <>
                {travelData.map((item) => (
                    <Entry key={item.id} data={item} />
                ))}
            </>


            
        </>
    );
}