import Card from "./components/card";
import Footer from "./components/footer";
import Nav from "./components/nav";

import group from "../assets/group.png";
import prisonKids from "../assets/prison-kids.png";

function WeDo() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Card title="WHAT WE DO" />
        <section className="container mx-auto px-6">
          {/* discipleship in prison section */}
          <p className="text-2xl my-12 font-semibold">
            STRATEGIC INSTITUTIONAL PROGRAMS
          </p>
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="p-3 pl-0 flex">
              <img className=" w-full h-auto bg-cover" alt="" src={group} />
            </div>
            <div className="p-3">
              <p className="text-2xl font-semibold my-5">
                Evangelism/Discipleship in prisons
              </p>
              <p className="text-2xl font-semibold">
                We take the gosple of God's love to inmates as a tool that can
                bring healing and transformation in their lives.
              </p>
              <p className="font-semibold text-lg my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem est fugiat dolor molestias vel aspernatur
                quibusdam aliquam a cumque illum, sint, minima eligendi r
                eiciendis odit velit tenetur adipisci repellendus sed. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem est fugiat dolor molestias vel aspernatur
                quibusdam aliquam a cumque illum, sint, minima eligendi r
                eiciendis odit velit tenetur adipisci repellendus sed.
              </p>
              <button className="border border-pink-800 rounded-full bg-red-100 py-2 px-4">
                <p className="font-bold">Find out more &gt;</p>
              </button>
            </div>
            <div className="lg:my-8 p-3 order-4 md:order-4 lg:order-3">
              <p className="text-2xl font-semibold my-5">Prisoner's Children</p>
              <p className="text-2xl font-semibold">
                The men and women in prison have left behind children whose
                lives depended on them for their livelihood in every aspect.
              </p>
              <p className="font-semibold text-lg my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem est fugiat dolor molestias vel aspernatur
                quibusdam aliquam a cumque illum, sint, minima eligendi r
                eiciendis odit velit tenetur adipisci repellendus sed. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem est fugiat dolor molestias vel aspernatur
                quibusdam aliquam a cumque illum, sint, minima eligendi r
                eiciendis odit velit tenetur adipisci repellendus sed.
              </p>
              <button className="border border-pink-800 rounded-full bg-red-100 py-2 px-4">
                <p className="font-bold">Find out more &gt;</p>
              </button>
            </div>
            <div className="lg:my-8 p-3 pl-0 order-3 md:order-3 lg:order-4 flex">
              <img
                className=" w-full h-auto bg-cover"
                alt=""
                src={prisonKids}
              />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default WeDo;
