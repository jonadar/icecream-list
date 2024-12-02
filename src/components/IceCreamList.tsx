import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";

import { IceCream } from "../consts/types";
import IceCreamItem from "./IceCreamItem";
import IceCreamModal from "./IceCreamModal";

import "../css/iceCreamList.scss";
import { useLocalStorageState } from "../consts/hooks";


interface IceCreamListProps {
    iceCreamList: IceCream[];
    updateIceCream: (index: number, newItem: IceCream) => void;
    removeIceCream: (index: number) => void;
}

const IceCreamList: FunctionComponent<IceCreamListProps> = ({ iceCreamList, updateIceCream, removeIceCream }) => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [iceCreamItem, setIceCreamItem] = useState<IceCream & { index: number }>();

    return (
        <div className="ice-cream-list-container">
            {
                iceCreamList.length > 0 &&
                iceCreamList.map((item, index) => <IceCreamItem onClick={
                    () => {
                        setIceCreamItem({ ...item, index });
                        setModalOpen(true);
                    }
                } item={item} key={item.title} />)
            }

            <Link to="/add">
                <button className="ice-cream-add-btn">+</button>
            </Link>

            <IceCreamModal isOpen={modalOpen} data={iceCreamItem} close={() => setModalOpen(false)} updateIceCream={updateIceCream} removeIceCream={removeIceCream} />
        </div>
    );
}

export default IceCreamList;