// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Modal, Button, Form } from 'react-bootstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/en-gb';
import Clients from './components/Client'; // Update the import path
import SendAMessage from './components/SendAMessage'; // Import the new component

const localizer = momentLocalizer(moment);

const App = () => {
  const [events, setEvents] = useState([
    {
      title: 'Event 1',
      start: new Date(2023, 11, 25, 10, 0),
      end: new Date(2023, 11, 25, 12, 0),
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: new Date(),
    end: new Date(),
  });

  const [selectedNavItem, setSelectedNavItem] = useState('home');

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
    // Optionally, you can also hide the modal when changing the navigation item
    handleClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };

  const handleDateChange = (name, date) => {
    setNewEvent({
      ...newEvent,
      [name]: date,
    });
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    handleClose();
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Simply Fitt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => handleNavItemClick('home')} href="#home">
              Home
            </Nav.Link>
            <Nav.Link onClick={() => handleNavItemClick('clients')} href="#clients">
              Clients
            </Nav.Link>
            <Nav.Link onClick={() => handleNavItemClick('sendMessage')} href="#SendAMessage">
              Send a Message
            </Nav.Link>
            <Nav.Link onClick={() => handleNavItemClick('billing')} href="#Billing">
              Billing
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container mt-4">
        {selectedNavItem === 'home' && (
          <>
            <h1>Calendar</h1>
            <Button variant="primary" onClick={handleShow}>
              Add Event
            </Button>
            <Calendar
              localizer={localizer}
              events={events}
              views={['month', 'week', 'day']}
              defaultView="week"
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </>
        )}
        {selectedNavItem === 'clients' && <Clients />}
        {/* {selectedNavItem === 'sendMessage' && (
          <SendAMessage showModal={showModal} handleClose={handleClose} />
        )} */}
        {/* Add other components based on the selected navigation item */}
      </div>

      <Modal show={showModal} onHide={handleClose}>
        {/* ... (existing code) */}
      </Modal>
    </div>
  );
};

export default App;