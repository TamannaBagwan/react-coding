import { useState } from 'react';

const OtpGenerator = () => {
  const [mobileNum, setMobileNum] = useState('');
  const [otp, setOtp] = useState('');

  const handleMobileNumberChange = (e) => {
    setMobileNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(generatedOtp);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">OTP Generator</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-gray-700 font-bold mb-2">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            value={mobileNum}
            onChange={handleMobileNumberChange}
            required
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Generate OTP
        </button>
      </form>
      {otp && (
        <div className="mt-6 bg-green-100 p-4 rounded shadow-md">
          <h3 className="text-xl font-semibold text-green-700">Your OTP is: {otp}</h3>
        </div>
      )}
    </div>
  );
};

export default OtpGenerator;
