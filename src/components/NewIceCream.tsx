import { ChangeEvent, FunctionComponent, useState } from "react";

import { HexColorString, IceCream } from "../consts/types";
import IceCreamItem from "./IceCreamItem";
import { useGoBack } from "../consts/hooks";

import "../css/newIceCream.scss";

interface NewIceCreamProps {
    onAdd: (newItem: IceCream) => void;
}

const NewIceCream: FunctionComponent<NewIceCreamProps> = ({ onAdd }) => {

    const { goBack } = useGoBack();

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [color, setColor] = useState<HexColorString>('#ffffff');

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value as HexColorString); //
    };

    const handleAddIceCream = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        onAdd({ title, description, color });
        goBack();
    }

    return (
        <form className="new-ice-cream-form" method="none" onSubmit={handleAddIceCream}>
            <div>
                <button onClick={goBack}>back</button>
            </div>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" onChange={handleTitleChange} value={title} placeholder="Title" maxLength={20} required />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" onChange={handleDescriptionChange} value={description} placeholder="Description" />
            </div>
            <div>
                <label htmlFor="color">Color</label>
                <div className="color-input-container">
                    <IceCreamItem item={{ title, description, color }} />
                    <input type="color" name="color" id="color" onChange={handleColorChange} value={color} />
                </div>
            </div>
            <div>
                <input type="submit" value="add"></input>
            </div>
        </form>
    );
}

export default NewIceCream;