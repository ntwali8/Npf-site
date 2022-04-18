import Footer from "./components/footer";
import Nav from "./components/nav";
import Card from "./components/card";
import lock from "./assets/lock.png";

function Donate() {
    return(
        <><header>
            <Nav />
        </header>
        <Card title="DONATE" />
        <main className="mx-10 md:mx-16 lg:mx-32">
            <div className="my-16">
                <p className="font-semibold">
                    YOUR GIFT MAKES A DIFFERENCE
                </p>
                <p>
                    Thank you for your interest in supporting Prison Fellowship! Your gift enables 
                    Prison Fellowship and our church partners to share the Gospel with prisoners, 
                    ex-prisoners and their children, and to advocate for second chances. Lives are changed, 
                    families are reunited and God is glorified. What a great investment!
                </p>
            </div>
            <div className="py-8 lg:py-16 border-y-2 border-y-red-500">
                <p>YOUR GIFT</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:px-24 pt-5 lg:pt-10">
                    <button className="bg-red-500 p-8 text-white rounded-lg">
                        One-Time
                    </button>
                    <button className=" p-8 border-2 border-black rounded-lg">
                        Monthly
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 p-5 first-letter:lg:px-24 lg:p-10">
                    <button className="bg-red-500 p-8 text-white rounded-lg">
                        UGX 50,000
                    </button>
                    <button className="bg-red-500 p-8 text-white rounded-lg">
                        UGX 100,000
                    </button>
                    <button className="bg-red-500 p-8 text-white rounded-lg">
                        UGX 150,000
                    </button>
                    <button className="bg-red-500 p-8 text-white rounded-lg">
                        UGX 200,000
                    </button>
                    <button className="bg-red-500 p-8 text-white rounded-lg">
                        UGX 500,000
                    </button>
                    <button className=" p-8 border-2 border-black rounded-lg">
                        Other
                    </button>
                </div>
            </div>
            <div className="my-16">
                <p className="text-xl my-5">PAYMENT INFORMATION</p>
                <div>
                    <p className="font-semibold my-5">PAYMENT METHOD</p>
                    <div className="mx-16">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 border-b-2 border-b-black my-10">
                            <button className="px-24 py-8 rounded-md text-bold bg-red-500 text-white">
                                VISA
                            </button>
                            <button className="px-24 py-8 rounded-md text-bold bg-cyan-400">
                                PAYPAL
                            </button>
                            <button className="px-24 py-8 rounded-md text-bold bg-orange-200">
                                MOBILE MONEY
                            </button>
                        </div>
                        <div className="my-10">
                            <input className="w-full border-2 border-black p-5 text-black font-bold"
                                type="text" id="cardNumber" name="cardNumber" placeholder="Credit Card Number"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 my-10">
                            <p className="text-lg font-semibold text-center my-auto">
                                Expiration Date*
                            </p>
                            <input className="border-2 border-black p-5 text-black font-bold"
                                type="text" id="cardNumber" name="cardNumber" placeholder="March"
                            />
                            <input className="border-2 border-black p-5 text-black font-bold"
                                type="text" id="cardNumber" name="cardNumber" placeholder="2022"
                            />
                            <input className="border-2 border-black p-5 text-black font-bold"
                                type="text" id="cardNumber" name="cardNumber" placeholder="CVV"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-16 py-10 border-t-2 border-red-500">
                <p className="text-xl my-5">YOUR INFORMATION</p>
                <div className="mx-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
                        <input className="border-2 border-black p-5 text-black font-bold"
                            type="text" id="fname" name="FirstNmae" placeholder="First Name"
                        />
                        <input className="border-2 border-black p-5 text-black font-bold"
                            type="text" id="lname" name="LastName" placeholder="Last Name"
                        />
                        <input className="border-2 border-black p-5 text-black font-bold md:col-span-2 lg:col-span-2"
                            type="text" id="email" name="email" placeholder="Email"
                        />
                        <input className="border-2 border-black p-5 text-black font-bold md:col-span-2 lg:col-span-2"
                            type="text" id="address" name="address" placeholder="Address"
                        />
                        <input className="border-2 border-black p-5 text-black font-bold"
                            type="text" id="city" name="city" placeholder="City"
                        />
                        <input className="border-2 border-black p-5 text-black font-bold"
                            type="text" id="country" name="country" placeholder="Country"
                        />
                    </div>
                    <div className="my-10 flex ">
                        <img src={ lock } alt="" className="w-10 h-12 inline-block my-auto mx-5" />
                        <p className="inline-block text-lg">
                            By clicking DONATE your credit card will be securely processed.
                            You are making a one-time donation in the amount of $25.00.
                        </p>
                    </div>
                    <div className="text-center">
                        <button className=" font-bold text-center bg-red-300 border-2 border-red-700 px-14 py-6 rounded-md">
                            DONATE
                        </button>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
        </>
    );
}

export default Donate;