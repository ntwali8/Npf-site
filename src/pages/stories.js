import Card from "./components/card";
import Footer from "./components/footer";
import Nav from "./components/nav";

import stories1 from "../assets/story1.jpg";
import stories2 from "../assets/story2.jpg";
import stories3 from "../assets/story3.jpg";
import stories4 from "../assets/story4.jpg";
import stories5 from "../assets/story5.jpg";
import visiting from "../assets/visiting.jpg";
import visiting2 from "../assets/visiting2.jpg";
import visiting3 from "../assets/visiting3.jpg";
import visiting4 from "../assets/visiting4.jpg";
import donate from "../assets/donate.jpg";

function Stories() {
  return (
    <>
      <header>
        <Nav page="stories" />
      </header>
      <main>
        <Card title="STORIES" />
        <section className="w-3/4 mx-auto my-10">
          <img src={stories1} alt="" className="w-full h-full" loading="lazy" />
          <figcaption className="w-1/2 ml-auto text-right">
            <p className="font-semibold text-xl lg:text-2xl">
              John has his mother in prison
            </p>
            <p className="lg:text-lg">03 March 2014</p>
          </figcaption>
        </section>

        <section className="w-3/4 mx-auto my-10">
          <img src={stories2} alt="" className="w-fullh-full" loading="lazy" />
          <figcaption className="w-1/2 ml-auto text-right">
            <p className="font-semibold text-xl lg:text-2xl">
              Four year Denis has both parents in prison.
            </p>
            <p className="text-lg">30 April 2020</p>
          </figcaption>
        </section>

        <section className="w-3/4 mx-auto my-10">
          <img src={stories3} alt="" className="w-full h-full" loading="lazy" />
          <figcaption className="w-1/2 ml-auto text-right">
            <p className="font-semibold text-xl lg:text-2xl">
              Sharon (8 years). Father is in prison and mother’s whereabouts are
              not known
            </p>
            <p className="text-lg">10 October 2019</p>
          </figcaption>
        </section>

        <section className="w-3/4 mx-auto my-10">
          <img src={stories4} alt="" className="w-full h-full" loading="lazy" />
          <figcaption className="w-1/2 ml-auto text-right">
            <p className="font-semibold text-xl lg:text-2xl">
              Morderns mother was murdered by his stepmother due to a family
              wrangel. Stepmother was imprisoned and the father could not
              support the family
            </p>
            <p className="text-lg">09 April 2016</p>
          </figcaption>
        </section>

        <section className="w-3/4 mx-auto my-10">
          <img src={stories5} alt="" className="w-full h-full" loading="lazy" />
          <figcaption className="w-1/2 ml-auto text-right">
            <p className="font-semibold text-xl lg:text-2xl">
              Children of Prisoners at home in Eastern Uganda.
            </p>
            <p className="text-lg">16 December 2018</p>
          </figcaption>
        </section>

        <section className="w-3/4 mx-auto my-10">
          <img src={visiting} alt="" className="w-full h-full" loading="lazy" />
          <figcaption className="w-1/2 ml-auto text-right">
            <p className="font-semibold text-xl lg:text-2xl">
              Visiting a family of Prisoners children
            </p>
            <p className="text-lg">08 February 2018</p>
          </figcaption>
        </section>

        <section className="w-3/4 mx-auto my-10">
          <img
            src={visiting2}
            alt=""
            className="w-full h-full"
            loading="lazy"
          />
          <figcaption className="w-1/2 ml-auto text-right">
            <p className="font-semibold text-xl lg:text-2xl">
              Visiting a family of Prisoners children
            </p>
            <p className="text-lg">10 November 2021</p>
          </figcaption>
        </section>

        <section className="w-3/4 mx-auto my-10">
          <img
            src={visiting3}
            alt=""
            className="w-full h-full"
            loading="lazy"
          />
          <figcaption className="w-1/2 ml-auto text-right">
            <p className="font-semibold text-xl lg:text-2xl">
              Visiting a family of Prisoners children
            </p>
            <p className="text-lg">23 March 2020</p>
          </figcaption>
        </section>

        <section className="w-3/4 mx-auto my-10">
          <img
            src={visiting4}
            alt=""
            className="w-full h-full"
            loading="lazy"
          />
          <figcaption className="w-1/2 ml-auto text-right">
            <p className="font-semibold text-xl lg:text-2xl">
              Visiting a family of Prisoners children
            </p>
            <p className="text-lg">28 March 2021</p>
          </figcaption>
        </section>

        <section className="w-3/4 mx-auto my-10">
          <img src={donate} alt="" className="w-full h-full" loading="lazy" />
          <figcaption className="w-1/2 ml-auto text-right">
            <p className="font-semibold text-xl lg:text-2xl">
              Donating Blanket and soap to children of prisoners
            </p>
            <p className="text-lg">25 May 2019</p>
          </figcaption>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default Stories;
