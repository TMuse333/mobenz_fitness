import react from "react";
import main from '../../../public/mobenz-main.webp'
import './herobanner.css'

const Herobanner = () => {


    return (
        <section className="herobanner-container">
            <h3 className="herobanner-title">
                Muhammad Bensalim Training
            </h1>
            <img src={main}
            />
        </section>
    )
}

export default Herobanner

