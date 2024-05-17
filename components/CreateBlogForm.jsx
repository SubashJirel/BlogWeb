'use client';
import { useRef } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';

function CreateBlogForm() {
  const formRef = useRef(null);

  return (
    <section className="container">
      <form
        ref={formRef}
        className="border-2 border-paragraphColor max-w-md mx-auto mt-8 p-8  rounded shadow-md "
      >
        <h2 className="text-2xl special-word border-paragraphColor font-semibold mb-6">
          Create a New Blog Post
        </h2>
        <Input
          label="Upload Image Link"
          type="text"
          name="ImageLink"
          placeholder="Enter Image url"
        />
        <Input
          label="Title"
          type="text"
          name="title"
          placeholder="Enter Title"
        />
        <Input
          label="Category"
          type="text"
          name="category"
          placeholder="Enter Category"
        />
        <TextArea
          rows={5}
          label="Description"
          name="Description"
          placeholder="Description"
        ></TextArea>
        <Button label="submit" color="green" />
      </form>
    </section>
  );
}

export default CreateBlogForm;
