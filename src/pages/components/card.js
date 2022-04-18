
function Card({title}) {
    return(
        <section className="my-24">
            {/* bg-[#d21144] h-[163px] should work */}
            <div className="box-border w-full bg-red-700 text-center p-12">
                <p className="text-white text-xl font-bold">{ title }</p>
            </div>
        </section>
    );
}

export default Card;
