const Button = ({ message }) => {
  return (
    <div>
      <div className="md:px-12 md:py-4 px-8 py-2 md:text-[1rem] text-[0.75rem] border-black border-2 font-sans hover:bg-black hover:text-white transition-colors duration-400 ease-linear active:bg-black active:text-white cursor-pointer ">
        {message || "Learn More"}
      </div>
    </div>
  );
};

export default Button;
