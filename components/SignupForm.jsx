'use client';

import React from 'react';
import Input from './Input';
import Link from 'next/link';

const SignupForm = () => {
  return (
    <section className="container">
      <form className="border-2 border-paragraphColor rounded-lg max-w-sm mx-auto px-8 py-6 space-y-5">
        <h2 className="text-center special-word">Sign up</h2>

        <Input label="Name" type="text" name="name" />
        <Input label="Email" type="text" name="email" />
        <Input label="Password" type="password" name="password" />

        <p className="text-center">
          Already a user?{' '}
          <Link href={'/login'} className="text-primaryColor">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default SignupForm;
