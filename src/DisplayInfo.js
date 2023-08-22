import React from 'react';

const DisplayInfo = ({ name, email,address, phone }) => {
  return (
    <div className="p-6 mt-4 bg-white rounded shadow-md">
      <h2 className="mb-2 text-xl font-semibold">Contact Information</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
    </div>
  );
};

export default DisplayInfo;
