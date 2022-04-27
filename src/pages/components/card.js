function Card({ title }) {
  return (
    <section className="">
      <div className="box-border w-full bg-red-700 text-center p-8 md:p-10 lg:p-12">
        <p className="text-white text-xl font-bold">{title}</p>
      </div>
    </section>
  );
}

export default Card;
