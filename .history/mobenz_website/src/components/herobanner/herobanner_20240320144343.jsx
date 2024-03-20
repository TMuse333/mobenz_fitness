import react from "react";
import main from '../../../public/mobenz-main.webp'
import './herobanner.css'

const Herobanner = () => {


    return (
        <section className="herobanner-container">
            <h2 className="herobanner-title">
                Muhammad Bensalim Training
            </h2>
            <img src={main}
            />
            <h3 className="hero-description">
                lorem
            </h3>
        </section>
    )
}

export default Herobanner

