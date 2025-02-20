import { Helmet } from "react-helmet";
import banner1 from '../../src/assets/hire1.jpg'
import banner2 from '../../src/assets/hire2.jpg'
import banner3 from '../../src/assets/hire3.png'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <div>
                    <h3 className="text-3xl font-bold text-center py-7">Seamless Online Interviews for Efficient Hiring!</h3>
                </div>
                <div className="carousel w-full mt-6">
                    <div id="slide1" className="carousel-item relative w-full max-h-96">
                        <img
                            src={banner1}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full max-h-96">
                        <img
                            src={banner2}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full max-h-96">
                        <img
                            src={banner3}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Home;