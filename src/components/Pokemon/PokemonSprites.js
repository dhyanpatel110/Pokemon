import React from "react";
// ** Css
import "./styles.css";

const PokemonSprites = ({ sprites, types }) => {

    return (
        <div className="container-evolution mt-4 mb-4">
            <h4 className="w-100 mb-4 section-title">sprites</h4>
            <div className="w-100 d-flex flex-column flex-md-row flex-wrap justify-content-between g-45">
                <div className={`evolution-item ${types[0].type.name}`}>
                    <figure>
                        <img src={sprites?.back_default} className="sprites-img" />
                    </figure>
                </div>
                <div className={`evolution-item ${types[0].type.name}`}>
                    <figure>
                        <img src={sprites?.back_shiny} className="sprites-img" />
                    </figure>
                </div>
                <div className={`evolution-item ${types[0].type.name}`}>
                    <figure>
                        <img src={sprites?.front_default} className="sprites-img" />
                    </figure>
                </div>
                <div className={`evolution-item ${types[0].type.name}`}>
                    <figure>
                        <img src={sprites?.front_shiny} className="sprites-img" />
                    </figure>
                </div>
            </div>
        </div>
    )
};

export default PokemonSprites;
