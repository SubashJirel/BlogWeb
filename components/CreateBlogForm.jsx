'use client';
import { useRef, useState } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';

function CreateBlogForm() {
  const [formData, setFormData] = useState({
    imageUrl: '',
    title: '',
    category: '',
    description: '',
  });
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    alert('Form has been clicked');
    e.preventDefault();
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs.push(formData);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    formRef.current.reset();

    console.log('Form data saved to local storage:', blogs);
  };

  return (
    <section className="container">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="border-2 border-paragraphColor max-w-md mx-auto mt-8 p-8 rounded shadow-md"
      >
        <h2 className="text-2xl special-word border-paragraphColor font-semibold mb-6">
          Create a New Blog Post
        </h2>
        <Input
          label="Upload Image Link"
          type="text"
          name="imageUrl"
          placeholder="Enter Image url"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <Input
          label="Title"
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={handleChange}
        />
        <Input
          label="Category"
          type="text"
          name="category"
          placeholder="Enter Category"
          value={formData.category}
          onChange={handleChange}
        />
        <TextArea
          rows={5}
          label="description"
          name="description"
          placeholder="description"
          value={formData.description}
          onChange={handleChange}
        />
        <Button label="Submit" />
      </form>
    </section>
  );
}

export default CreateBlogForm;
