import Carousel from "./Carousel";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const Main = () => {
    return (
        <main className="main">
            <div id="banner" className="banner"><h1 id="banner__panel" className="banner__panel">Developpeur Web Developpeur Web Developpeur Web </h1></div>
            <section id="container" className="container">
                <div id="container__carousel" className="container__carousel"></div>
                <div className="button">
                    <PrevButton />
                    <NextButton />
                </div>
                <Carousel />
            </section>
        </main>
    )
}
export default Main;