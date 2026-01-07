const Button2 = ({ message }) => {
  return (
    <div>
      <div className="md:px-12 md:py-4 px-8 py-2 md:text-[1rem] text-[0.75rem] border-[#decca8] border-2 font-sans hover:bg-[#decca8] hover:text-black transition-colors duration-400 ease-linear active:bg-[#decca8] active:text-black cursor-pointer ">
        {message || "Learn More"}
      </div>
    </div>
  );
};

export default Button2;
