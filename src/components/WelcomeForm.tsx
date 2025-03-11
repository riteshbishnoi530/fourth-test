"use client"
import React, { useEffect, useState } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

function WelcomeForm() {
  const formData = {
    firstName: '',
    lastName: '',
    email: ''
  };
  const [value, setValue] = useState(formData);
  const [error, setError] = useState(false);
  const rejex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
  interface UserData {
    firstName: string;
    lastName: string;
    email: string;
  }
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, []);

  const submitHandle = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email } = value;
    if (!firstName || !lastName || !email) {
      setError(true);
      return;
    }
    if (!rejex.test(email)) {
      setError(true);
      return;
    }
    const userData = { firstName, lastName, email };
    localStorage.setItem('formData', JSON.stringify(userData));
    setValue({ firstName: '', lastName: '', email: '' });
    setError(false);
    window.location.href = '/file-upload';
  };

  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Header />
      <div className='py-10 px-4'>
        <form className="max-w-[700px] w-full mx-auto flex flex-col gap-4">
          <div className="flex max-sm:flex-col gap-4 w-full">
            <div className='w-1/2 max-sm:w-full'>
              <input
                className="w-full border border-black p-4 outline-none rounded-md"
                type="text"
                placeholder="First Name"
                value={value.firstName}
                onChange={(e) => setValue({ ...value, firstName: e.target.value })}
              />
              {error && !value.firstName ? (
                <p className="text-red-500 text-base font-normal">
                  First name is required
                </p>
              ) : ""}
            </div>
            <div className='w-1/2 max-sm:w-full'>
              <input
                className="w-full border border-black p-4 outline-none rounded-md"
                placeholder="Last Name"
                type="text"
                value={value.lastName}
                onChange={(e) => setValue({ ...value, lastName: e.target.value })}
              />
              {error && !value.lastName ? (
                <p className="text-red-500 text-base font-normal">
                  Last name is required
                </p>
              ) : ""}
            </div>
          </div>
          <div>
            <input
              className="w-full border border-black p-4 outline-none rounded-md"
              placeholder="Email"
              type="email"
              value={value.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
            {error && !value.email ? (
              <p className="text-red-500 text-base font-normal">
                Email is required
              </p>
            ) : !rejex.test(value.email) && value.email.length > 0 ? <p className="text-red-500 text-base font-normal">
                Email is not valid
              </p> : ""}
          </div>
          <button onClick={submitHandle} className="bg-blue-500 hover:bg-blue-700 transition-all ease-in-out duration-300 text-white font-bold py-2 px-10 w-fit mx-auto rounded">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default WelcomeForm