// ClientDetailModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ClientDetailModal = ({ showModal, handleCloseModal, client, updateClientDetails }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    // Update local state when the client prop changes
    if (client) {
      setName(client.name);
      setEmail(client.email);
      setPhoneNumber(client.phoneNumber);
      setNotes(client.notes || '');
    }
  }, [client]);

  const handleSaveDetails = () => {
    if (client) {
      // Update the client details and close the modal
      updateClientDetails(client.id, { name, email, phoneNumber, notes });
      handleCloseModal();
    }
  };

  const handleDeleteNotes = () => {
    // Delete the client notes and close the modal
    updateClientDetails(client.id, { notes: '' });
    handleCloseModal();
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{client && client.name}'s Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" value={name} readOnly />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={email} readOnly />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control type="tel" value={phoneNumber} readOnly />
        </Form.Group>
        <Form.Group controlId="notes">
          <Form.Label>Notes:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Add notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveDetails}>
          Save Details
        </Button>
        <Button variant="danger" onClick={handleDeleteNotes}>
          Delete Notes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ClientDetailModal;
