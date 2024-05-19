import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  const handleLogin = () => {
    if (formData.userName && formData.password) {
      navigate("/", { state: formData });
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold m-4">Login</h2>
        <div className="mb-4">
          <input
            className="w-full p-2 border rounded-md"
            name="userName"
            value={formData.userName}
            placeholder="Enter your username"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <input
            className="w-full p-2 border rounded-md"
            type="password" 
            name="password"
            value={formData.password}
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 m-4 
            rounded hover:bg-blue-700"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
