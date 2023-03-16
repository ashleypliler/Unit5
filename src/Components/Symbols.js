import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = () => {
    let currentDispay = useSelector(selectDisplay);

    return (<div className="symbols">
        <div className="stack">
            <h2>Flag of {currentDispay.name.common}:</h2>
            {currentDispay.flags ? (
                <img src={currentDisplay.flags.png}></img>
            ) : (
                "(No Data Found)"
            )}
        </div>
        <div className="stack">
            <h2>Coat of Arms of {currentDispay.name.common}:</h2>
            {currentDispay.coatOfArms ? (
                <img src={currentDisplay.coatOfArms.png}></img>
            ) : (
                "(No Data Found)"
            )}
        </div>
    </div>
    );
};

export default Symbols;