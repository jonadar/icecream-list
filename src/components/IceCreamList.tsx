import { ChangeEvent, FunctionComponent, useState } from "react";
import { IceCream } from "../consts/types";
import IceCreamItem from "./IceCreamItem";
import "../css/iceCreamList.scss";
import { Link } from "react-router-dom";

interface IceCreamListProps {
    iceCreamList: IceCream[];
}

const IceCreamList: FunctionComponent<IceCreamListProps> = ({ iceCreamList }) => {

    return (
        <div className="ice-cream-list-container">
            {
                iceCreamList.length > 0 &&
                iceCreamList.map(item => <IceCreamItem item={item} key={item.title} />)
            }

            <Link to="/add">
                <button className="ice-cream-add-btn">+</button>
            </Link>
        </div>
    );
}

export default IceCreamList;