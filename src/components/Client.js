// Clients.js
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ClientDetailModal from './ClientDetailModal'; // Import the new component

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });
  const [selectedClient, setSelectedClient] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const validateEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Basic phone number validation using a regular expression
    const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number
    return phoneRegex.test(phoneNumber);
  };
  const handleAddClient = () => {
    // Validate input fields
    if (!newClient.name || !newClient.email || !newClient.phoneNumber) {
      alert('Please fill in all required fields.');
      return;
    }

    // Additional validation for email and phone number
    if (!validateEmail(newClient.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validatePhoneNumber(newClient.phoneNumber)) {
      alert('Please enter a valid phone number (10 digits).');
      return;
    }

    // If all validations pass, add the new client
    setClients([...clients, newClient]);
    setNewClient({ name: '', email: '', phoneNumber: '' });
  };


  const handleDeleteClient = (index) => {
    // Show a confirmation dialog before deleting
    const shouldDelete = window.confirm('Are you sure you want to delete this client? This action is permanent.');

    if (shouldDelete) {
      const updatedClients = [...clients];
      updatedClients.splice(index, 1);
      setClients(updatedClients);
    }
  };

  const updateClientDetails = (clientId, details) => {
    // Your logic to update client details goes here
    console.log(`Updating details for client with id ${clientId}:`, details);
  };
  const handleClientClick = (client) => {
    setSelectedClient(client);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>Clients</h2>
      <div className="form-group">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          value={newClient.name}
          onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          value={newClient.email}
          onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
        />
      </div>
      <div className="form-group">
        <Form.Label>Phone Number:</Form.Label>
        <Form.Control
          type="tel"
          value={newClient.phoneNumber}
          onChange={(e) => setNewClient({ ...newClient, phoneNumber: e.target.value })}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddClient}>
        Add Client
      </button>

      <table className="table table-striped mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index} onClick={() => handleClientClick(client)} style={{ cursor: 'pointer' }}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phoneNumber}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDeleteClient(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ClientDetailModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        client={selectedClient}
        updateClientDetails={(clientId, details) => {
          // Update client details logic goes here
          console.log(`Updating details for client with id ${clientId}:`, details);
        }}
      />
    </div>
  );
};

export default Clients;
