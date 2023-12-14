import Carousel from "./Carousel";
import Description from "./Description";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const Main = () => {
    return (
        <main className="main">
            <div id="banner" className="banner">
                <h1 id="banner__panel" className="banner__panel">Developpeur Web Developpeur Web Developpeur Web </h1>
            </div>
            <Description />
            {/* <section id="container" className="container"> */}
                {/* <div className="button">
                    <PrevButton />
                    <NextButton />
                </div> */}
                <Carousel />
            {/* </section> */}
        </main>
    )
}
export default Main;