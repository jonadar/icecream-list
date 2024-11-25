import { ChangeEvent, FunctionComponent, useState } from "react";

import { HexColorString, IceCream } from "../consts/types";
import IceCreamItem from "./IceCreamItem";

import "../css/newIceCream.scss"

interface NewIceCreamProps {
    onAdd: (newItem: IceCream) => void;
}

const NewIceCream: FunctionComponent<NewIceCreamProps> = ({ onAdd }) => {

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [color, setColor] = useState<HexColorString>('#ff00ff');

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value as HexColorString); //
    };

    const handleAddIceCream = () => {
        onAdd({ title, description, color })
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
                <div className="color-input-container">
                    <IceCreamItem item={{ title, description, color }} />
                    <input type="color" name="color" id="color" onChange={handleColorChange} value={color} />
                </div>
            </div>
            <button onClick={handleAddIceCream}>add</button>
        </div>
    );
}

export default NewIceCream;