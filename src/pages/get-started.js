import Footer from "./components/footer";
import Nav from "./components/nav";

function Get_Started() {
    return(
        <><header>
            <Nav />
        </header>
        <main>
            <div className="w-full h-96 bg-black grid grid-cols-2 content-end py-5">
                <div className="mx-10">
                    <p className="text-white">
                        VOLUNTEER WITH PRISON FELLOWSHIP
                    </p>
                </div>
                <div className="flex flex-row-reverse my-5">
                    <button className="text-white bg-red-700 px-6 py-3 rounded-l-full">
                        <svg className="w-5 h-5 inline-block mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/>
                        </svg>
                        <p className="inline-block">info@prisonfellowship.ug</p>
                    </button>
                </div>
            </div>

            {/* Get started section */}
            <section className="my-10">
                <p className="text-center block text-2xl font-semibold my-5">GET STARTED</p>
                <div className="flex container mx-auto text-center text-xl">
                    <div className="w-1/4 m-5 p-12 border rounded-lg">
                        <p className="font-semibold">1</p>
                        <p className="font-semibold">SELECT YOUR INTERESTS</p>
                        <p className="font-light">
                            Select the volunteer options below that match your areas of interest.
                        </p>
                    </div>
                    <div className="w-1/4 m-5 p-12 border rounded-lg">
                        <p className="font-semibold">2</p>
                        <p className="font-semibold">GET FEEDBACK</p>
                        <p className="font-light">
                            We will email you information about each area of interest.
                        </p>
                    </div>
                    <div className="w-1/4 m-5 p-12 border rounded-lg">
                        <p className="font-semibold">3</p>
                        <p className="font-semibold">GET TRAINED</p>
                        <p className="font-light">
                            Gain the knowledge, skills, and confidence you need to volunteer.    
                        </p>
                    </div>
                    <div className="w-1/4 m-5 p-12 border rounded-lg">
                        <p className="font-semibold">4</p>
                        <p className="font-semibold">MAKE A DIFFERENCE</p>
                        <p className="font-light">
                            Join others in your area to help restore people and communities.
                        </p>
                    </div>
                </div>
            </section>

            {/* volunteer opportunities */}
            <section className="my-16">
                <p className="text-center block text-2xl font-semibold my-5">
                    SELECTED VOLUNTEER OPPORTUNITIES
                </p>
                <div className="grid grid-cols-2 gap-8 container mx-auto">
                    <button className="border bg-red-400 p-8 text-xl font-semibold">
                        PREACH
                    </button>
                    <button className="border bg-blue-300 p-8 text-xl font-semibold">
                        PRAY
                    </button>
                    <button className="border bg-orange-300 p-8 text-xl font-semibold">
                        TEACH
                    </button>
                    <button className="border bg-green-200 p-8 text-xl font-semibold">
                        COUNSEL
                    </button>
                </div>
            </section>
            <Footer />
        </main>
        </>
    );
}

export default Get_Started;