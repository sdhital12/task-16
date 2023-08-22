


import React, { useState } from 'react';
import DisplayInfo from './DisplayInfo';



function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowInfo(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-grey-100">
      <div className="p-8 bg-blue-100 rounded shadow-md">
        <h1 className="mb-4 text-3xl font-semibold">Registration Form</h1>
        <form onSubmit={handleSubmit}>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder='Enter your full name ...'
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder='Enter Email ...'
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block mb-2 font-medium">
              Address
            </label>
            <input
              type="string"
              id="address"
              placeholder='Enter Address ...'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 font-medium">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              value={phone}
              placeholder='Enter Phone no ...'
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:border-primary"
              required
            />
          </div>

          <button
          
            type="submit"
            className="px-4 py-2 text-white rounded bg-primary me-3 hover:bg-secondary"
          >
             Submit
           
          </button>

          <button
            type="delete"
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-secondary"
          >
            Cancel
          </button>
        </form>
        </form>
        {showInfo && <DisplayInfo name={name} email={email} />}
      </div>
    </div>
  );
}

export default App;





