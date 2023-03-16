import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";


const Overview = () => {
    let currentDispay = useSelector(selectDisplay);

    return (
        <div className="stack">
            <h1>{currentDispay.name.official}</h1>
            <h2>"{currentDispay.name.common}"</h2>

            <table>
                <tr>
                    <td>
                        {currentDispay.borders 
                            ? currentDispay.borders.map((e, i, arr) => {
                                if(i + 1 === arr.length) {
                                    return `${e}`;
                                }else {
                                    return `${e}, `;
                                }
                        }) : "N/A"}
                    </td>
                </tr>
                <tr>
                    <td>Capitol: </td>
                    {currentDispay.capital.map((e) => {
                        <td>{e}</td>
                    })}
                </tr>
                <tr>
                    <td>Population: </td>
                    <td>{currentDispay.population}</td>
                </tr>
                <tr>
                    <td>Continents: </td>
                    {currentDispay.continents.map((e) => {
                        <td>{e}</td>
                    })}
                </tr>
                <tr>
                    <td>Independent: </td>
                    <td>{currentDispay.independent ? "true" : "false"}</td>
                </tr>
                <tr>
                    <td>Landlocked: </td>
                    <td>{currentDispay.landlocked ? "true" : "false"}</td>
                </tr>
                <tr>
                    <td>Member of UN: </td>
                    <td>{currentDisplay.unMember ? "true" : "false"}</td>
                </tr>
            </table>
        </div>
    );
};

export default Overview;