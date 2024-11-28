import { FunctionComponent } from "react";
import { IceCream } from "../consts/types";

import "../css/iceCreamTop.scss";

interface IceCreamItemProps {
    item: IceCream;
    onClick?: () => void;
}

const IceCreamItem: FunctionComponent<IceCreamItemProps> = ({ item, onClick = () => {} }) => {

    const colorStyle = { "--top-color": item.color } as React.CSSProperties;

    return (
        <div {...{onClick}} className="ice-cream-top" style={colorStyle}></div>
    );
}

export default IceCreamItem;