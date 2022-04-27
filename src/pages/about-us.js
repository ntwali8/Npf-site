import Card from "./components/card";
import Footer from "./components/footer";
import Nav from "./components/nav";

import binoculars from "../assets/binoculars.png";
import mission from "../assets/mission.png";
import spectacles from "../assets/spectacles.png";
import board from "../assets/board.png";
import board2 from "../assets/board2.png";
import board3 from "../assets/board3.png";
import board4 from "../assets/board4.png";
import board5 from "../assets/board5.png";
import board6 from "../assets/board6.png";
import mgt from "../assets/mgt.png";
import mgt2 from "../assets/mgt7.png";
import mgt3 from "../assets/mgt2.png";
import mgt4 from "../assets/mgt3.png";
import mgt5 from "../assets/mgt4.png";
import mgt6 from "../assets/mgt5.png";
import mgt7 from "../assets/mgt6.png";

function About() {
  return (
    <>
      <header>
        <Nav page="about-us" />
      </header>
      <main>
        <Card title="ABOUT US" />
        <div className="dark:bg-gray-400 dark:text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-20 lg:px-36 pt-28">
            <p className="inline-block text-xl order-2 md:order-1 lg:order-1">
              Prison Fellowship Uganda is committed to be a Christ centered;
              ministry reconciling prisoners ex-prisoners and their families
              with God and victims of crime for the transformation and
              restoration of hope to all those involved and affected by crime
              within and outside Uganda
            </p>
            <div className="inline-block text-center max-w-lg mx-auto order-1 md:order-2 lg:order-2">
              <p className="font-bold text-2xl p-5">OUR VISION</p>
              <img
                alt=""
                src={binoculars}
                className="mx-auto my-5 h-auto"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-row-reverse py-5">
            <button className="text-white bg-red-700 px-6 py-3 rounded-l-full">
              <svg
                className="w-5 h-5 inline-block mx-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
              </svg>
              <p className="inline-block">info@prisonfellowship.ug</p>
            </button>
          </div>
        </div>

        <div
          className="dark:text-black dark:bg-slate-600 grid grid-cols-1 gap-10 md:grid-cols-2 
        lg:grid-cols-2 items-center p-20 bg-gray-400"
        >
          <div className="inline-block text-center max-w-lg mx-auto">
            <p className="font-bold text-2xl m-5">OUR MISSION</p>
            <img
              alt=""
              src={mission}
              className="mx-auto my-5 h-auto lg:w-4/5"
              loading="lazy"
            />
          </div>
          <p className="inline-block text-xl lg:text-right">
            To proclaim the good news by demonstrating Gods love justice mercy
            compassion reconciliation and restoration of hope to prisoners,
            ex-prisoners and their families with victims of crime within and
            outside Uganda.
          </p>
        </div>

        <div
          className="dark:text-black dark:bg-gray-400 grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-2 gap-8 items-center justify-between px-16 py-16"
        >
          <div className="inline-block text-center lg:mx-10">
            <p className="font-bold text-2xl m-5">OUR HISTORY</p>
            <div className="max-w-lg">
              <img
                alt=""
                src={spectacles}
                className="mx-auto my-5 w-3/5 md:w-3/5 lg:w-2/5 h-auto"
                loading="lazy"
              />
            </div>
            <p className="text-left text-xl">
              Prison Fellowship was founded in the United States in 1976 by
              Charles W. Colson, following his release from prison after serving
              a sentence for a "Watergate" related crime. Prior to his
              imprisonment, Mr. Colson had served as chief counsel for President
              Richard Nixon.
              <br />
              <br />
              During his own imprisonment, Mr. Colson had seen and experienced
              the difference that faith in Jesus Christ makes in the lives of
              people and he became convinced that the real solution to crime is
              found through spiritual renewal.
            </p>
          </div>
          <p className="inline-block text-xl text-left lg:mx-10">
            Three years after the formation of Prison Fellowship in the United
            States, representatives from similar organizations in England,
            Australia, Canada, New Zealand and the Bahamas met to form Prison
            Fellowship International as an association of national Prison
            Fellowship organizations.
            <br />
            <br />
            The purpose of PFI was to develop and serve national Prison
            Fellowship organizations. Since 1979, Prison Fellowship
            International has grown to encompass national PF organizations in
            over 115 countries around the world.
            <br />
            <br />
            Most of this growth has occurred under the leadership of Ron Nikkel,
            the President of PFI, who for more than 25 years has traveled
            throughout the world promoting and supporting the organization's
            work.
          </p>
        </div>

        <div className="px-10 py-10 dark:text-black dark:bg-slate-600 bg-gray-400">
          <div className="text-center">
            <p className="font-bold text-xl m-5">BOARD OF DIRECTORS</p>
            <p className="text-lg font-semibold">
              The Prison Fellowship Board of Directors draws on the wisdom and
              experience of its diverse members to move the ministry forward
              with integrity and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 m-5">
            <img
              alt=""
              src={board}
              className="w-4/5 h-auto mx-auto"
              loading="lazy"
            />
            <img
              alt=""
              src={board2}
              className="w-4/5 h-auto mx-auto"
              loading="lazy"
            />
            <img
              alt=""
              src={board3}
              className="w-4/5 h-auto mx-auto"
              loading="lazy"
            />
            <img
              alt=""
              src={board4}
              className="w-4/5 h-auto mx-auto"
              loading="lazy"
            />
            <img
              alt=""
              src={board5}
              className="w-4/5 h-auto mx-auto"
              loading="lazy"
            />
            <img
              alt=""
              src={board6}
              className="w-4/5 h-auto mx-auto"
              loading="lazy"
            />
          </div>
        </div>

        <div className="dark:text-black dark:bg-gray-400 px-10 py-10">
          <div className="text-center">
            <p className="font-bold text-xl m-5">MANAGEMENT COMMITTEE</p>
            <p className="text-lg font-semibold m-5">
              Prison Fellowship's Leadership is composed of seasoned experts,
              leading the ministry with collaboration, transparency, and
              accountability.
            </p>
            <div className="text-center lg:m-4">
              <img
                alt=""
                src={mgt}
                className="w-4/5 md:w-2/5 h-auto mx-auto lg:w-1/4"
                loading="lazy"
              />
              <p className="font-bold text-lg">Mr. Rukundo Solomon </p>
              <p className="font-semibold">Chair</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 m-5">
            <div className="text-center lg:m-4">
              <img
                alt=""
                src={mgt2}
                className="w-4/5 h-auto mx-auto"
                loading="lazy"
              />
              <p className="font-bold text-lg">Ms. Namwano Irene</p>
            </div>
            <div className="text-center m-4">
              <img
                alt=""
                src={mgt3}
                className="w-4/5 h-auto mx-auto"
                loading="lazy"
              />
              <p className="font-bold text-lg">Mr. Martin Munialo</p>
            </div>
            <div className="text-center m-4">
              <img
                alt=""
                src={mgt4}
                className="w-4/5 h-auto mx-auto"
                loading="lazy"
              />
              <p className="font-bold text-lg">Mrs. Angella Alimwenda</p>
            </div>
            <div className="text-center m-4">
              <img
                alt=""
                src={mgt5}
                className="w-4/5 h-auto mx-auto"
                loading="lazy"
              />
              <p className="font-bold text-lg">Mr. Robert Wanambwa</p>
            </div>
            <div className="text-center m-4">
              <img
                alt=""
                src={mgt6}
                className="w-4/5 h-auto mx-auto"
                loading="lazy"
              />
              <p className="font-bold text-lg">Ms. Kevin Okwera</p>
            </div>
            <div className="text-center m-4">
              <img
                alt=""
                src={mgt7}
                className="w-4/5 h-auto mx-auto"
                loading="lazy"
              />
              <p className="font-bold text-lg">Mr. Dickson Washitwaya</p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default About;
