'use client';

import React from 'react';
import Input from './Input';
import Link from 'next/link';

const ContactUsForm = () => {
  return (
    <section className="container">
      <form className="border-2 border-paragraphColor rounded-lg max-w-sm mx-auto px-8 py-6 space-y-5">
        <h2 className="text-center special-word">Contact us</h2>

        <Input label="Name" type="text" name="name" />
        <Input label="Email" type="text" name="email" />
        <button>Get in touch</button>
      </form>
    </section>
  );
};

export default ContactUsForm;
