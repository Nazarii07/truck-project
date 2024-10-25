'use client'
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/app/firebaseConfig';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    pickupDate: '',
    name: '',
    phone: '',
    email: '',
    agreePrivacy: false,
    receiveSMS: false,
  });

  console.log('formData',formData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), formData);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Failed to submit the form. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-formBg p-6 max-w-md ">
      <div className="mb-4">
        <label className="block text-black text-sm font-medium mb-1">From</label>
        <input
          type="text"
          name="from"
          value={formData.from}
          onChange={handleChange}
          className="w-full border-b border-gray-400 p-2 bg-gray-200 text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-medium mb-1">To</label>
        <input
          type="text"
          name="to"
          value={formData.to}
          onChange={handleChange}
          className="w-full border-b border-gray-400 p-2 bg-gray-200 text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-medium mb-1">Pickup Date</label>
        <input
          type="date"
          name="pickupDate"
          value={formData.pickupDate}
          onChange={handleChange}
          className="w-full border-b border-gray-400 p-2 bg-gray-200 text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border-b border-gray-400 p-2 bg-gray-200 text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-medium mb-1">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border-b border-gray-400 p-2 bg-gray-200 text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border-b border-gray-400 p-2 bg-gray-200 text-black"
        />
      </div>
      <div className="mb-4">
        <label className="flex text-black items-center">
          <input
            type="checkbox"
            name="agreePrivacy"
            checked={formData.agreePrivacy}
            onChange={handleChange}
            className="mr-2"
          />
          By clicking the Submit button, you agree to the Privacy Policy.*
        </label>
      </div>
      <div className="mb-6">
        <label className="flex text-black items-center">
          <input
            type="checkbox"
            name="receiveSMS"
            checked={formData.receiveSMS}
            onChange={handleChange}
            className="mr-2"
          />
          Would you like to receive information SMS about our services?
        </label>
      </div>
      {formData.agreePrivacy ?  <button
        disabled={false}
        type="submit"
          className="border-1 border-customBorder rounded-custom w-full font-montserrat text-buttonText font-semibold bg-headerBg hover:bg-customHover text-black hover:text-headerBg transition-colors text-buttonSize p-2 text-center cursor-pointer"
        >
          Submit
        </button>:  <button
        disabled={true}
        type="submit"
          className=" rounded-custom w-full font-montserrat text-buttonText font-semibold bg-disabledButton  text-disabledButtonText transition-colors text-buttonSize p-2 text-center"
        >
          Submit
        </button>}
    </form>
  );
};

export default ContactForm;
