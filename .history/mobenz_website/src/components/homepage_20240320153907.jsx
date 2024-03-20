import React from "react";
import Herobanner from "./herobanner/herobanner";
import mirror from '../../public/mobenz_mirror.webp'
import Content from "./content/content";
import WorkCarousel from "./work/work";

const Homepage = () => {

    return (
        <div className="homepage-container">
            <Herobanner/>
            <Content
            image={mirror}
            imageId='mirror'
            />
            <WorkCarousel/>
            
        </div>
    )
}

export default Homepage