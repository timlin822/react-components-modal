import {FaTimes} from 'react-icons/fa';

import './Modal.css';

const Modal=({modalIsOpen,modalCloseHandler})=>{
    return (
		<div className={modalIsOpen?"bg-overlay bg-overlay-open":"bg-overlay"} onClick={modalCloseHandler}>
			<div className={modalIsOpen?"modal modal-open":"modal"} onClick={e=>e.stopPropagation()}>
				<div className="modal-title">Hello World<FaTimes className="modal-close" onClick={modalCloseHandler} /></div>
				<p className="modal-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laboriosam quidem, perferendis a voluptatem doloremque amet tenetur non eaque? Tempore quis explicabo facilis tempora. Rerum illo ratione nostrum nobis magni.</p>
			</div>
		</div>
    );
}

export default Modal;