import React from "react";
import Card from "./card";
import '../styles/styles.scss';

const Content = () => {
    return (
        <div className="Content">
            <div className="Search-bar">
                <input type="text" className="input" placeholder="Название фильма"/>
                <button className="button">Поиск</button>
            </div>
            <Card />
        </div>
    )
}

export default Content;