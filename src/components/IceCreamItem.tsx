import { FunctionComponent } from "react";
import { IceCream } from "../consts/types";

import "../css/iceCreamTop.scss";

interface IceCreamItemProps {
    item: IceCream;
}

const IceCreamItem: FunctionComponent<IceCreamItemProps> = ({ item }) => {

    const colorStyle = { "--top-color": item.color } as React.CSSProperties;

    return (
        <div className="ice-cream-top" style={colorStyle}></div>
    );
}

export default IceCreamItem;