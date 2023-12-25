// // SendAMessage.js
// import React, { useState } from 'react';
// import { Modal, Button, Form, FormGroup, FormCheck } from 'react-bootstrap';

// const SendAMessage = ({ clients, showModal, handleClose }) => {
//   const [selectedClients, setSelectedClients] = useState([]);

//   const handleClientSelection = (clientId) => {
//     setSelectedClients((prevSelectedClients) =>
//       prevSelectedClients.includes(clientId)
//         ? prevSelectedClients.filter((id) => id !== clientId)
//         : [...prevSelectedClients, clientId]
//     );
//   };

//   const handleSendMessage = () => {
//     // TODO: Implement sending a message to selected clients
//     // You can use the selectedClients array to identify the chosen clients
//     console.log('Sending a message to clients:', selectedClients);
//     handleClose();
//   };

//   return (
//     <Modal show={showModal} onHide={handleClose}>
//       {/* ... (existing code) */}
//       <Modal.Body>
//         <Form>
//           <FormGroup>
//             <Form.Label>Select Clients:</Form.Label>
//             {clients.map((client) => (
//               <FormCheck
//                 key={client.id}
//                 type="checkbox"
//                 label={client.name}
//                 checked={selectedClients.includes(client.id)}
//                 onChange={() => handleClientSelection(client.id)}
//               />
//             ))}
//           </FormGroup>
//           {/* ... (existing code) */}
//         </Form>
//       </Modal.Body>
//       {/* ... (existing code) */}
//     </Modal>
//   );
// };

// export default SendAMessage;
