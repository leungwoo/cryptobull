const Title = ({ title, subtitle, sub }) => {
  return (
    <div className="flex flex-col  text-center  p-10 gap-3 ">
      <h2 className="sm:text-xl text-lg capitalize text-slate-200 font-medium text-">
        {title}
      </h2>
      <h1 className="sm:text-5xl text-3xl text-slate-100 font-bold">
        {subtitle}
      </h1>
      <h3 className="sm:text-xl  text-lg text-center text-tertiary ">{sub}</h3>
    </div>
  );
};

export default Title;
