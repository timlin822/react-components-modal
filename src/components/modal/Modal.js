import {FaTimes} from 'react-icons/fa';

import './Modal.css';

const Modal=({modalIsOpen,modalCloseHandler})=>{
    return (
		<div className={modalIsOpen?"modal modal-open":"modal"}>
			<div className="modal-title">Hello World<FaTimes className="modal-close" onClick={modalCloseHandler} /></div>
			<div className="modal-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laboriosam quidem, perferendis a voluptatem doloremque amet tenetur non eaque? Tempore quis explicabo facilis tempora. Rerum illo ratione nostrum nobis magni.</div>
		</div>
    );
}

export default Modal;