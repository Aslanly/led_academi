import React from "react";

const ArrCat = [
    {
        name:"фильмы",
        id: 1
    },
    {
        name:"фильмы",
        id: 2
    },
    {
        name:"фильмы",
        id: 3
    },
    {
        name:"фильмы",
        id: 4
    },
    {
        name:"фильмы",
        id: 5
    },
    {
        name:"фильмы",
        id: 6
    }
]

const ArrGen = [
    {
        name:"комедии",
        id: 1
    },
    {
        name:"комедии",
        id: 2
    },
    {
        name:"комедии",
        id: 3
    },
    {
        name:"комедии",
        id: 4
    },
    {
        name:"комедии",
        id: 5
    },
    {
        name:"комедии",
        id: 6
    }
]

const NavigationMenu = () => {
    return (
        <div className="Navigation-menu">
            <div className="Categories">
                <h4>Категории</h4>
                {ArrCat.map((c) => (
                    <div key={c.id}>{c.name}</div>
                ))}
            </div>
            <div className="Genres">
                <h4>Жанры</h4>
                {ArrGen.map((g) => (
                    <div key={g.id}>{g.name}</div>
                ))}
            </div>
        </div>
    )
}

export default NavigationMenu;