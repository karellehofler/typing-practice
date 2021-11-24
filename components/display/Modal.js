import React from 'react';

export default function Modal({ children, handleChange, ...props }) {

    const [ open, setOpen ] = useState(false);

    const toggleOpen = () => setOpen(prev => !prev);

    return (
        <>
            <div id="modal-bg"
            onClick={handleChange}
            className={open ? "bg-gray-900 bg-opacity-50" : "hidden"}>
                <div id="modal-container">

                </div>
            </div>
        </>
    )
}