import react from "react";
import main from '../../public/mobenz-main.webp'
import './herobanner.css'

const Herobanner = () => {


    return (
        <section className="herobanner-container">
            <h2 className="herobanner-title">
                Muhammad Bensalim Training
            </h2>
            <img src={main}
            />
            <div className="hero-description">

           
            <p >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, perspiciatis?
            </p>
            <button>
                Free Training
            </button>
            </div>
        </section>
    )
}

export default Herobanner

