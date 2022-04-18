import Nav from "./components/nav";
import black from './assets/black.jpg';
import binoculars from './assets/binoculars.png';
import mission from './assets/mission.png';
import Footer from "./components/footer";

function Home() {
    return(
        <>
        <header>
            <Nav />
        </header>
        <main>
            <img src={black} alt="" className="w-full h-60 my-10" />

            <div className="flex flex-row-reverse my-3">
                <button className="text-white bg-red-700 px-6 py-3 rounded-l-full">
                    <svg className="w-5 h-5 inline-block mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
                    </svg>
                    <p className="inline-block">info@prisonfellowship.ug</p>
                </button>
            </div>

            <div className="container mx-auto my-10 w-2/3">
                <p className="text-lg lg:text-2xl text-left lg:text-center">
                    PFU intends to support the Church, government of Uganda and other Civil Society Organizations
                    to reduce crime and its impact in Society.
                </p>
            </div>

            <div className="w-2/3 md:w-11/12 lg:w-2/3 text-xs md:text-base lg:text-base md:border md:rounded-lg md:border-red-800 lg:border lg:rounded-lg lg:border-red-800 mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 lg:grid-cols-2 lg:gap-0 gap-5">
                    <div 
                        className="bg-cover rounded-lg md:border-0 md:rounded-none order-1"
                        style={{backgroundImage: "url('assets/black.jpg')"}}
                    >
                    </div>
                    <div className="text-center p-5 rounded-lg md:rounded-none md:border-0 border order-2">
                        <img src={binoculars} alt="" className="w-14 h-10 md:rounded-none lg:w-16 lg:h-16 mx-auto" />
                        <p className="m-2 font-semibold">VISION</p>
                        <p className="text-sm">
                            Committed to be a Christ centered; ministry reconciling prisoners ex-prisoners
                            and their families with God and victims of crime for the transformation and
                            restoration of hope to all those involved and affected by crime within and outside Uganda
                        </p>
                        <button className="bg-red-600 p-4 m-3">LEARN MORE</button>
                    </div>
                    <div className="text-center p-5 rounded-lg border md:border-0 md:rounded-none order-4 md:order-3 lg:order-3">
                        <img src={mission} alt="" className="w-16 h-16 mx-auto" />
                        <p className="m-2 font-semibold">MISION</p>
                        <p>
                            To proclaim the good news by demonstrating Gods love justice mercy compassion
                            reconciliation and restoration of hope to prisoners,
                            ex-prisoners and their families with victims of crime within and outside Uganda.
                        </p>
                        <button className="bg-red-600 p-4 m-3">LEARN MORE</button>
                    <div
                        className="bg-cover rounded-lg md:border-0 md:rounded-none order-3 md:order-4 lg:order-4"
                        style={{backgroundImage: "url('assets/black.jpg')"}}
                    ></div>
                    </div>
                </div>
            </div>

            <div className="my-20 w-full bg-red-700 p-8 flex">
                <div className="mx-auto">
                    <div className="text-white inline-block">
                        <p className="text-sm lg:text-lg font-semibold">STAY CONNECTD WITH NATIONAL PRISON FELLOWSHIP</p>
                        <p className="text-sm lg:text-base">
                            Sign up to receive transformational stories, ministry news, and
                            information about getting involved.
                        </p>
                    </div>
                    <button className="inline-block bg-white px-4 py-2 rounded-lg mx-4">
                        SIGN UP
                    </button>
                </div>
            </div>

            <div className="text-center w-2/3 mx-auto font-semibold">
                <p className="text-lg">RESTORING HOPE FOR MORE THAN FOUR DECADES</p>
                <p>
                    PF Uganda was chartered in 1987 with the mission of responding to the physical and
                    spiritual needs of inmates and their families. With the help of
                    over 267 dedicated volunteers, lives have been and continue to be transformed.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 my-5">
                    <img src={black} className="" alt="" />
                    <img src={black} className="" alt="" />
                    <img src={black} className="" alt="" />
                </div>
            </div>

            <div className="text-center text-white font-semibold bg-red-600 p-10 my-20">
                <div className="w-2/3 mx-auto">
                    <p className="text-lg">FOR THE CHILDREN</p>
                    <p className="text-sm">
                        We have over 150 children registered but due to resource limitations we are
                        able to support 25 of them at the moment. Of the 25 we have 21 that we live with full time.
                        The rest are supported while staying with their relatives and guardians.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 my-5">
                        <img src={black} className="" alt="" />
                        <img src={black} className="" alt="" />
                        <img src={black} className="" alt="" />
                    </div>
                </div>
            </div>

            <div id="carouselExampleControls" className="carousel slide relative my-20" data-bs-ride="carousel">
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <div className="w-3/4 grid grid-cols-1 gap-8 lg:grid-cols-10 mx-auto items-center">
                            <div className="inline-block lg:col-span-7 p-8 bg-red-200 border border-red-800 rounded-lg">
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tincidunt massa, dolor in ac congue. Feugiat leo consequat,
                                    porttitor varius. Morbi metus amet nisl tincidunt felis.
                                    Iaculis sagittis tortor massa mattis. Purus massa nullam ac
                                    elementum sit eget dolor sagittis.”
                                </p>
                            </div>
                            <div className="inline-block lg:col-span-3 mx-auto p-5">
                                <img src={black} className="m-2 rounded-full w-20 h-20" alt="" />
                                <p>JOHN DOE</p>
                                <p className="text-xs">SOFTWARE ENGINEER</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className="w-3/4 grid grid-cols-1 gap-8 lg:grid-cols-10 mx-auto items-center">
                            <div className="inline-block lg:col-span-7 p-8 bg-red-200 border border-red-800 rounded-lg">
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tincidunt massa, dolor in ac congue. Feugiat leo consequat,
                                    porttitor varius. Morbi metus amet nisl tincidunt felis.
                                    Iaculis sagittis tortor massa mattis. Purus massa nullam ac
                                    elementum sit eget dolor sagittis.”
                                </p>
                            </div>
                            <div className="inline-block lg:col-span-3 mx-auto p-5">
                                <img src={black} className="m-2 rounded-full w-20 h-20" alt="" />
                                <p>NTWALI RAY</p>
                                <p className="text-xs">SOFTWARE ENGINEER</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className="w-3/4 grid grid-cols-1 gap-8 lg:grid-cols-10 mx-auto items-center">
                            <div className="inline-block lg:col-span-7 p-8 bg-red-200 border border-red-800 rounded-lg">
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tincidunt massa, dolor in ac congue. Feugiat leo consequat,
                                    porttitor varius. Morbi metus amet nisl tincidunt felis.
                                    Iaculis sagittis tortor massa mattis. Purus massa nullam ac
                                    elementum sit eget dolor sagittis.”
                                </p>
                            </div>
                            <div className="inline-block lg:col-span-3 mx-auto p-5">
                                <img src={black} className="m-2 rounded-full w-20 h-20" alt="" />
                                <p>CHILL BANGER</p>
                                <p className="text-xs">SOFTWARE ENGINEER</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-black bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-black bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <footer>
                <Footer/>
            </footer>
        </main>
        </>
    );
}

export default Home;