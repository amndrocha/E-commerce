import Modal from "react-modal";
Modal.setAppElement('#root');

export const TWISTModal = (props) => (
    <Modal style={{
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
      }} isOpen={props.showModal}>
        {props.children}
    </Modal>
);