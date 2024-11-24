import React, { FunctionComponent, ReactElement } from "react";

export const useModal = () => {

} //TODO

interface ModalProps {
    children?: ReactElement;
} //TODO

// TODO: custom hook, show model and hide model
const Modal: FunctionComponent<ModalProps> = ({children}) => {
    return ( 
        <div className="modal-container">
            {children}
        </div>
     );
}

export default Modal;