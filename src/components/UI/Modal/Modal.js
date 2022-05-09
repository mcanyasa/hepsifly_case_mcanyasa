import { useBasket } from '../../../contexts/BasketContext';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';
import './Modal.scss';

const Modal = ({ title, text }) => {
  const { modalOpen, setModalOpen, confirmRemoving } = useBasket();
  return (
    <>
      {modalOpen && (
        <div className='modal' data-testid="modal-container">
          <div className='title'>
            <p data-testid="modal-id">{title}</p>
          </div>
          <div className='body'>{text}</div>
          <div className='footer'>
            <div className='footer-btns'>
              <Button
                text='Evet'
                type='success'
                click={() => confirmRemoving(true)}
                data-testid="confirmation"
              />
              <Button
                text='Hayır'
                type='reject'
                data-testid="reject"
                click={() => confirmRemoving(false)}
              />
            </div>
          </div>
        </div>
      )}
      <Backdrop visible={modalOpen} toggle={setModalOpen} />
    </>
  );
};

export default Modal;
