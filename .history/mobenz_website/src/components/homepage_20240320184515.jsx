import React from "react";
import Herobanner from "./herobanner/herobanner";
import mirror from '../media/mobenz_mirror.webp'
import Content from "./content/content";
import WorkCarousel from "./work/work";
import Preview from "./preview/preview";

const Homepage = () => {

    return (
        <div className="homepage-container">
            <Herobanner/>
            <Content
            image={mirror}
            imageId='mirror'
            />
            <WorkCarousel/>

            <Preview/>
            
        </div>
    )
}

export default Homepage