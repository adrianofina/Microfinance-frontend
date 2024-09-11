'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../bars/sidebar';
import Formprogress from '../bars/progress'; // Assuming this is your progress component

const AddCustomerForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: '',
    address: '',
    gender: '',
    occupation: '',
    maritalStatus: '',
    loanAmount: '',
    loanPurpose: '',
    loanStatus: 'Pending',
    loanId: '',
    contract: null,
  });

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? e.target.files[0] : value,
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation: check if all required fields are filled
    if (
      formData.firstName === '' ||
      formData.surname === '' ||
      formData.phoneNumber === '' ||
      formData.email === '' ||
      formData.dateOfBirth === '' ||
      formData.address === '' ||
      formData.gender === '' ||
      formData.occupation === '' ||
      formData.maritalStatus === '' ||
      formData.loanAmount === '' ||
      formData.loanPurpose === ''
    ) {
      alert('Please fill in all required fields.');
      return; // Prevent form submission
    }

    // Submit form data to the server
    console.log('Form data submitted:', formData);
    // Redirect after submission
    router.push('/loan-officer');
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4 mt-20 ">Add New Customer</h1>
        <div className="flex items-start">
          <div className="ml-4">
            <Formprogress step={step} totalSteps={totalSteps} />
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white px-14 py-8 rounded-lg shadow-md w-1/3 mx-auto"
          >
            {step === 1 && (
              <>
                <div className="mb-4 mt-2">
                  <label
                    htmlFor="firstName"
                    className="block mb-3 text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="surname"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Surname
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                   type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="dateOfBirth"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="occupation"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Occupation
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="maritalStatus"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Marital Status
                  </label>
                  <input
                    type="text"
                    id="maritalStatus"
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="loanId"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Loan ID
                  </label>
                  <input
                    type="text"
                    id="loanId"
                    name="loanId"
                    value={formData.loanId}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <div className="mb-4">
                    <label
                      htmlFor="loanAmount"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Loan Amount (TZS)
                    </label>
                    <input
                      type="number"
                      id="loanAmount"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="loanPurpose"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Loan Purpose
                    </label>
                    <input
                      type="text"
                      id="loanPurpose"
                      name="loanPurpose"
                      value={formData.loanPurpose}
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="loanStatus"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Loan Status
                    </label>
                    <select
                      id="loanStatus"
                      name="loanStatus"
                      value={formData.loanStatus}
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="contract"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Upload Contract
                  </label>
                  <input
                    type="file"
                    id="contract"
                    name="contract"
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerForm;