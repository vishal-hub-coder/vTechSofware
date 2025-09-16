import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-6 py-4 flex justify-between items-center fixed'>
      {/* Left Logo Section */}
      <div className="flex items-center space-x-2">
        {/* <img src="/logo" alt="logo" className="h-10 w-10 cursor-pointer" /> */}
        <span className="text-xl font-bold cursor-pointer ">SAPEAGLE ERP</span>
      </div>

      <div className='hidden md:flex space-x-6'>
        <a href="#" className="hover:text-blue-400 transition">Home</a>
        <a href="#" className="hover:text-blue-400 transition">About</a>
        <a href="#" className="hover:text-blue-400 transition">Pricing</a>

        <div className="relative group">
          <button className="hover:text-blue-400 transition">Features</button>

          <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black rounded shadow-lg min-w-[150px]">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">CRM</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">ERP</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Menufecturing</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sales Managment</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Payroll Managment</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Service Management</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">ACM Management</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Inventory Management</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Accounting</a>
          </div>
        </div>

        <a href="#" className="hover:text-blue-400 transition">Contact</a>
      </div>

      <button className="bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded-lg shadow hover:scale-105 transition mr-30">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
