// https://script.google.com/macros/s/AKfycbzizNsDC7QlcfnsyNN3pcZv9GXAFk3_Uzt3jH4B0grFSkhqc2GFie49ZAnQ_4EVsZvV7Q/exec


// src/App.js
// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';
//     const payload = new FormData();
//     payload.append('name', formData.name);
//     payload.append('email', formData.email);
//     payload.append('message', formData.message);

//     try {
//       await axios.post(scriptURL, payload);
//       alert('Data saved successfully!');
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           type="text"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
//         />
//         <input
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//         />
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Message"
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
