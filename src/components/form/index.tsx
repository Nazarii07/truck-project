'use client'
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/app/firebaseConfig';
import { useSnackbar } from 'notistack';

const ContactForm: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false)
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

  console.log('formData', formData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await addDoc(collection(db, 'contacts'), formData);
      enqueueSnackbar('Form submitted successfully!', { variant: 'success',anchorOrigin: { vertical: 'top', horizontal: 'right' }, });
      
      setFormData({
        from: '',
        to: '',
        pickupDate: '',
        name: '',
        phone: '',
        email: '',
        agreePrivacy: false,
        receiveSMS: false,
      });
      setIsLoading(false);
    } catch (error) {
      console.error('Error adding document: ', error);
      enqueueSnackbar('Failed to submit the form. Please try again.', { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'right' }, });
      setIsLoading(false);
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
      {formData.agreePrivacy && !isLoading ? (
        <button
          disabled={false}
          type="submit"
          className="border-1 border-customBorder rounded-custom w-full font-montserrat text-buttonText font-semibold bg-headerBg hover:bg-customHover text-black hover:text-headerBg transition-colors text-buttonSize p-2 text-center cursor-pointer"
        >
          Submit
        </button>
      ) : (
        <button
          disabled={true}
          type="submit"
          className="rounded-custom w-full font-montserrat text-buttonText font-semibold bg-disabledButton text-disabledButtonText transition-colors text-buttonSize p-2 text-center"
        >
          Submit
        </button>
      )}
    </form>
  );
};

export default ContactForm;
