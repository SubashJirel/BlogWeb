'use client';

const Button = ({ label, color }) => {
  return (
    <button
      type="submit"
      className={`bg-${color}-200 mx-2 border-2 py-2 px-4 rounded-md  focus:outline-none `}
    >
      {label}
    </button>
  );
};

export default Button;
