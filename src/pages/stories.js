import Card from "./components/card";
import Footer from "./components/footer";
import Nav from "./components/nav";

import stories1 from "../assets/prison-stories.png";
import stories2 from "../assets/prison-stories2.png";
import stories3 from "../assets/prison-stories3.png";

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
            <p className="lg:text-lg">03 March 2034</p>
          </figcaption>
        </section>

        <section className="w-3/4 mx-auto my-10">
          <img src={stories2} alt="" className="w-fullh-full" loading="lazy" />
          <figcaption className="w-1/2 ml-auto text-right">
            <p className="font-semibold text-xl lg:text-2xl">
              Four year Denis has both parents in prison
            </p>
            <p className="text-lg">03 March 2034</p>
          </figcaption>
        </section>

        <section className="w-3/4 mx-auto my-10">
          <img src={stories3} alt="" className="w-full h-full" loading="lazy" />
          <figcaption className="w-1/2 ml-auto text-right">
            <p className="font-semibold text-xl lg:text-2xl">
              Sharon (8 years). Father is in prison and mother's whereabouts are
              not known
            </p>
            <p className="text-lg">03 March 2034</p>
          </figcaption>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default Stories;
