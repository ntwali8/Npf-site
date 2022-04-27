import Footer from "./components/footer";
import Nav from "./components/nav";
import Card from "./components/card";

function Donate() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Card title="DONATE" />
      <main className="mx-10 md:mx-16 lg:mx-32">
        <div className="my-16">
          <p className="font-semibold">YOUR GIFT MAKES A DIFFERENCE</p>
          <p>
            Thank you for your interest in supporting Prison Fellowship! Your
            gift enables Prison Fellowship and our church partners to share the
            Gospel with prisoners, ex-prisoners and their children, and to
            advocate for second chances. Lives are changed, families are
            reunited and God is glorified. What a great investment!
          </p>
        </div>
        <div className="py-8 lg:py-16 border-y-2 border-y-red-500">
          <p>YOUR GIFT</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:px-24 pt-5 lg:pt-10">
            <button className="bg-red-500 p-8 text-white rounded-lg">
              One-Time
            </button>
            <button className=" p-8 border-2 border-black dark:border-white rounded-lg">
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
            <button className=" p-8 border-2 border-black dark:border-white rounded-lg">
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
                <button className="px-24 py-8 rounded-md text-bold dark:text-black bg-cyan-400">
                  PAYPAL
                </button>
                <button className="px-24 py-8 rounded-md text-bold dark:text-black bg-orange-200">
                  MOBILE MONEY
                </button>
              </div>
              <div className="my-10">
                <input
                  className="w-full border-2 border-black dark:bg-slate-800 dark:text-white p-5 text-black font-bold"
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Credit Card Number"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 my-10">
                <p className="text-lg font-semibold text-center my-auto">
                  Expiration Date<span className="text-red-700">*</span>
                </p>
                <input
                  className="border-2 border-black p-5 text-black font-bold dark:bg-slate-800 dark:text-white"
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="March"
                />
                <input
                  className="border-2 border-black p-5 text-black font-bold dark:bg-slate-800 dark:text-white"
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="2022"
                />
                <input
                  className="border-2 border-black p-5 text-black font-bold dark:bg-slate-800 dark:text-white"
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="CVV"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-16 py-10 border-t-2 border-red-500">
          <p className="text-xl my-5">YOUR INFORMATION</p>
          <div className="mx-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
              <input
                className="border-2 border-black p-5 text-black font-bold dark:bg-slate-800 dark:text-white"
                type="text"
                id="fname"
                name="FirstNmae"
                placeholder="First Name"
                required
              />
              <input
                className="border-2 border-black p-5 text-black font-bold dark:bg-slate-800 dark:text-white"
                type="text"
                id="lname"
                name="LastName"
                placeholder="Last Name"
                required
              />
              <input
                className="border-2 border-black p-5 text-black font-bold md:col-span-2 lg:col-span-2 dark:bg-slate-800 dark:text-white"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="border-2 dark:bg-slate-800 dark:text-white border-black p-5 text-black font-bold md:col-span-2 lg:col-span-2"
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                required
              />
              <input
                className="border-2 border-black p-5 text-black dark:bg-slate-800 dark:text-white font-bold"
                type="text"
                id="city"
                name="city"
                placeholder="City"
                required
              />
              <input
                className="border-2 border-black p-5 text-black font-bold dark:bg-slate-800 dark:text-white"
                type="text"
                id="country"
                name="country"
                placeholder="Country"
                required
              />
            </div>
            <div className="my-10 flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-10 h-12 inline-block my-auto mx-5 text-white"
              >
                <path
                  d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 
              144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 
              512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 
              192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"
                />
              </svg>
              <p className="inline-block text-sm lg:text-lg">
                By clicking DONATE your credit card will be securely processed.
                You are making a one-time donation in the amount of $25.00.
              </p>
            </div>
            <div className="text-center">
              <button className="dark:bg-red-700 font-bold text-center bg-red-300 border-2 border-red-700 px-14 py-6 rounded-md">
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
