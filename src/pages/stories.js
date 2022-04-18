import Card from "./components/card";
import Footer from "./components/footer";
import Nav from "./components/nav";
import black from "./assets/black.jpg";

function Stories() {
    return(
        <><header>
            <Nav />
        </header>
        <main>
            <Card title='STORIES' />
            <section className="w-3/4 mx-auto my-10">
                <img src={ black } alt="" className="w-full h-80" />
                <figcaption className="w-1/2 ml-auto text-right">
                    <p className="font-semibold text-xl lg:text-2xl">John has his mother in prison</p>
                    <p className="lg:text-lg">03 March 2034</p>
                </figcaption>
            </section>

            <section className="w-3/4 mx-auto my-10">
                <img src={ black } alt="" className="w-full h-80" />
                <figcaption className="w-1/2 ml-auto text-right">
                    <p className="font-semibold text-xl lg:text-2xl">Four year Denis has both parents in prison</p>
                    <p className="text-lg">03 March 2034</p>
                </figcaption>
            </section>

            <section className="w-3/4 mx-auto my-10">
                <img src={ black } alt="" className="w-full h-80" />
                <figcaption className="w-1/2 ml-auto text-right">
                    <p className="font-semibold text-xl lg:text-2xl">Sharon (8 years). Father is in prison and mother's whereabouts are not known</p>
                    <p className="text-lg">03 March 2034</p>
                </figcaption>
            </section>

            <Footer /> 
        </main>
        </>
    );
}

export default Stories;