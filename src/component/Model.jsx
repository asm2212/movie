import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Modal = props => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(props.active);
    }, [props.active]);

    return (
        <div id={props.id} className={`modal fixed inset-0 bg-black bg-opacity-50 transition-opacity ${active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div className="modal__container flex justify-center items-center h-full">
                {props.children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
}

export const ModalContent = props => {
    const contentRef = useRef(null);

    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if (props.onClose) props.onClose();
    }

    return (
        <div ref={contentRef} className="modal__content bg-white shadow-md rounded p-8">
            {props.children}
            <div className="modal__content__close text-gray-600 hover:text-gray-800 cursor-pointer absolute top-0 right-0 p-4" onClick={closeModal}>
                <i className="bx bx-x"></i>
            </div>
        </div>
    )
}

ModalContent.propTypes = {
    onClose: PropTypes.func
}

export default Modal;
