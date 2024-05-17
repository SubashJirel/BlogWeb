// 'use client';
import CreateBlogForm from '@/components/CreateBlogForm';

// import React, { useEffect, useState } from 'react';

// import Input from '@/components/Input';
// import Link from 'next/link';

// import TextArea from '@/components/TextArea';
// import demoImage from '@/public/img/demo_image.jpg';
// import Image from 'next/image';

// const initialState = {
//   title: '',
//   description: '',
//   excerpt: '',
//   quote: '',
//   category: 'Songbirds',
//   photo: '',
// };

// const CreateBlog = () => {
//   const [text, setText] = useState('');
//   const handleChange = (e) => {
//     setText(e.target.value);
//   };
//   function handleSubmit(e) {
//     e.preventdefault();
//   }
//   return (
//     <section className="container max-w-3xl">
//       <h2 className="mb-5">
//         <span className="special-word">Create</span> Blog
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-5">
//         <Input
//           label="Title"
//           type="text"
//           name="title"
//           placeholder="Write you title here..."
//           onChange={handleChange}
//           value={text}
//         />

//         <TextArea
//           label="Description"
//           rows="4"
//           name="description"
//           placeholder="Write you description here..."
//           onChange={handleChange}
//           value={state.description}
//         />

//         <TextArea
//           label="Excerpt"
//           rows="2"
//           name="excerpt"
//           placeholder="Write you excerpt here..."
//           onChange={handleChange}
//           value={state.excerpt}
//         />

//         <TextArea
//           label="Quote"
//           rows="2"
//           name="quote"
//           placeholder="Write you quote here..."
//           onChange={handleChange}
//           value={state.quote}
//         />

//         <div>
//           <label className="block">Select an option</label>
//           <select
//             name="category"
//             onChange={handleChange}
//             value={state.category}
//             className="block rounded-lg w-full p-3 bg-primaryColorLight"
//           >
//             <option value="Songbirds">Songbirds</option>
//             <option value="Waterfowl">Waterfowl</option>
//             <option value="Parrots">Parrots</option>
//             <option value="Seabirds">Seabirds</option>
//             <option value="Gamebirds">Gamebirds</option>
//           </select>
//         </div>

//         <div>
//           <label className="block mb-2 text-sm font-medium">Upload Image</label>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default CreateBlog;

/****** */

function CreateBlog() {
  return (
    <>
      <CreateBlogForm />;
    </>
  );
}
export default CreateBlog;
