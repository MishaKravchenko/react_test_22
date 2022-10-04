import React from 'react';
import Notebook from "../Notebook/Notebook";

let notebooks = [
    {
        id: 1,
        brand: "Apple",
        model: "Pro",
        cost: "100$",
        url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653493200207",
        alt: "Apple pro"
    },
    {
        id: 2,
        brand: "HP",
        model: "15s",
        cost: "1000$",
        url: "https://img.moyo.ua/img/gallery/5141/91/1363303_middle.jpg?1650986128",
        alt: "HP 15s"
    },
    {
        id: 3,
        brand: "Dell",
        model: "Inspiron5584",
        cost: "10$",
        url: "https://www.startech.com.bd/image/cache/catalog/laptop/dell/5584/inspiron-5584-i3-4-500x500.jpg",
        alt: "Dell Inspiron5584"
    },
]

const Notebooks = () => {
    return (
        <div>
            {
                notebooks.map(item => <Notebook key={item.id} notebook={item}/>)
            }
        </div>
    );
};

export default Notebooks;