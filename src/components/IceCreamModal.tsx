import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { HexColorString, IceCream } from "../consts/types";

import "../css/iceCreamModal.scss";
import IceCreamItem from "./IceCreamItem";

interface ModalProps {
    isOpen?: boolean;
    data?: IceCream & { index: number };
    close: () => void;

    updateIceCream: (index: number, newItem: IceCream) => void;
    removeIceCream: (index: number) => void;
}

const IceCreamModal: FunctionComponent<ModalProps> = ({ data, isOpen = true, close, updateIceCream, removeIceCream }) => {

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
        setColor(event.target.value as HexColorString);
    };

    const handleUpdateIceCream = (event: React.FormEvent<HTMLFormElement>) => {

        console.log("update cream")
        event.preventDefault();
        if (data?.index == undefined) {
            return;
        }

        updateIceCream(data?.index, { title, description, color });

        close();
    }

    const handleRemoveIceCream = (event: any) => {
        if (data?.index == undefined) {
            return;
        }
        
        removeIceCream(data?.index);

        close();
    }

    useEffect(() => {
        setTitle(data?.title || '');
        setDescription(data?.description || '');
        setColor(data?.color || '#ffffff');
    }, [data])

    return (
        <div className="modal-container" onClick={close} style={{ display: isOpen ? "flex" : "none" }}>
            <div className="modal-content" onClick={(e) => {
                e.stopPropagation(); // prevent modal from closing when clicking inside the content
            }}>
                <div>
                    <button onClick={close}>back</button>
                    <button style={{ float: "right" }} onClick={handleRemoveIceCream}>delete</button>
                </div>

                <form className="new-ice-cream-form" method="none" onSubmit={handleUpdateIceCream}>
                    <label htmlFor="title">Title</label>
                    <div>
                        <input type="text" name="title" id="title" onChange={handleTitleChange} value={title} placeholder="Title" maxLength={20} required />
                    </div>
                    <label htmlFor="description">Description</label>
                    <div>
                        <input type="text" name="description" id="description" onChange={handleDescriptionChange} value={description} placeholder="Description" />
                    </div>
                    <div>
                        <div className="color-input-container">
                            <IceCreamItem item={{ title, description, color }} />
                            <input type="color" name="color" id="color" onChange={handleColorChange} value={color} />
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Update"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default IceCreamModal;