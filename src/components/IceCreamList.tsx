import { ChangeEvent, FunctionComponent, useState } from "react";
import { IceCream } from "../consts/types";
import IceCreamItem from "./IceCreamItem";
import "../css/iceCreamList.scss";

interface IceCreamListProps {
    items?: IceCream[];
}

const IceCreamList: FunctionComponent<IceCreamListProps> = ({ items }) => {
    const [icecreamList, setIcecreamList] = useState<IceCream[]>(items || []);

    const addIceCream = (newItem: IceCream) => {
        setIcecreamList([...icecreamList, newItem])
    }

    return (
        <div className="ice-cream-list-container">
            {
                icecreamList.length > 0 &&
                icecreamList.map(item => <IceCreamItem item={item} key={item.title} />)
            }

            <button className="ice-cream-add-btn">+</button>

            <NewIceCream onAdd={addIceCream}></NewIceCream>
        </div>
    );
}


interface NewIceCreamProps {
    onAdd: (newItem: IceCream) => void;
}

const NewIceCream: FunctionComponent<NewIceCreamProps> = ({ onAdd }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('#ff00ff');

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    const handleAddIceCream = () => {
        onAdd(
            {
                title,
                description,
                color: color as any
            }
        )
    }

    return (
        <div className="new-ice-cream-form">
            <div>
                <label htmlFor="title">title</label>
                <input type="text" name="title" id="title" onChange={handleTitleChange} value={title} />
            </div>
            <div>
                <label htmlFor="description">description</label>
                <input type="text" name="description" id="description" onChange={handleDescriptionChange} value={description} />
            </div>
            <div>
                <label htmlFor="color">color</label>
                <input type="color" name="color" id="color" onChange={handleColorChange} value={color} />
            </div>
            <button onClick={handleAddIceCream}>add</button>
        </div>
    );
}
export default IceCreamList;