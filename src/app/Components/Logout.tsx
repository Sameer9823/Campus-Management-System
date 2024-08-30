'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Clear local storage or session storage
        localStorage.removeItem('auth-token'); // Adjust based on your implementation
        sessionStorage.removeItem('auth-token'); // Adjust based on your implementation

        // Notify user of successful logout
        toast.success('Successfully logged out!', {
          position: 'top-right',
          autoClose: 5000,
        });

        // Redirect to login page or home page
        router.push('/login');
      } else {
        const errorData = await response.json();
        toast.error(`Logout failed: ${errorData.message || 'Please try again.'}`, {
          position: 'top-right',
          autoClose: 5000,
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
      });
    }
  };

  return (
    <button
      className="text-gray-600 hover:text-gray-400 cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;