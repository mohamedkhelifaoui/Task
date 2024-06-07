import React, { useState } from 'react';
import Modal from 'react-modal';
import './Modall.css';

Modal.setAppElement('#root');

function Modall() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="Modall">
      <div className="form-container">
        <h1>Créer une concession</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom">Nom de la concession:</label>
            <input type="text" id="nom" name="nom" required />
          </div>
          <div className="form-group">
            <label htmlFor="matiere">Matière:</label>
            <input type="text" id="matiere" name="matiere" required />
          </div>
          {/* Ajoutez ici les autres champs du formulaire selon votre image */}
          <button type="submit">Créer</button>
        </form>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation de soumission"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Formulaire soumis</h2>
        <p>Votre formulaire a été soumis avec succès.</p>
        <button onClick={closeModal}>Fermer</button>
      </Modal>
    </div>
  );
}

export default Modall;
