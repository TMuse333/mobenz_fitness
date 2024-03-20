import react from "react";
import main from '../../../public/mobenz-main.webp'
import './herobanner.css'

const Herobanner = () => {


    return (
        <section className="herobanner-container">
            <h1 className="herobanner-title">
                Muhammad Bensalim
            </h1>
            <img src={main}
            />
        </section>
    )
}

export default Herobanner

