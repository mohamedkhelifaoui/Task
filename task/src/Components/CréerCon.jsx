import React, {useState} from 'react';
import './CréerCon.css';
import Pic1 from '../Images/Icon.png';
import { useNavigate } from 'react-router-dom';


import Modal from 'react-modal';

Modal.setAppElement('#root');



function Cont() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/'); 
  };

  return (
    <div className="container">
      <div className='lista'>Créer une concession</div>
      <form className="concession-form">
        <div className='frm-grp'>
          <div className="form-groupp">
            <label>Nom de la concession</label>
            <input type="text" />
          </div>
          <div className="form-groupp">
            <label>Matière</label>
            <input type="text" />
          </div>
          
        </div>
        <div className='frm-grp'>
          <div className="form-groupp">
            <label>Date début de l'exploitation</label>
            <input type="date" />
          </div>
          <div className="form-groupp">
            <label>Date fin de l'exploitation</label>
            <input type="date" />
          </div>
        </div>
        <div className='frm-grp'>
          <div className="form-groupp">
            <label>Date début de l'investissement</label>
            <input type="date" />
          </div>
          <div className="form-groupp">
            <label>Date fin de l'investissement</label>
            <input type="date" />
          </div>
        </div>
        <div className="form-group">
          <label>Nombre maximum d'investisseur</label>
          <input type="number" />
        </div>
        <div className="form-group">
          <label>Montant minimum d'investissement</label>
          <input type="number" />
        </div>
        <div className="form-group">
          <label>Taux</label>
          <input type="number" />
        </div>
        <div className="form-group">
          <label>Montant total des investissement à atteindre</label>
          <input type="number" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea></textarea>
        </div>
        <div className="form-group">
          <label>Media</label>
          <div className="file-upload">
            <div><img src={Pic1} alt='#'/></div>
            <div className="file-drop">
              Glissez-déposez votre image ici
            </div>
            <div className="file-browse">
              <span>ou</span>
              <button type="button">Parcourir une fichier</button>
            </div>
          </div>
        </div>
        <button type="submit" className="submit-button" onClick={handleSubmit}>Créer</button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation de création"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Concession créée</h2>
        <p>La concession a été créée avec succès.</p>
        <button onClick={handleClick}>Fermer</button>
      </Modal>
    </div>
  );
}

export default Cont;
