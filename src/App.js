import homeBanner from "./assest/home-banner.png";
import homeRight from "./assest/home-right.webp";
import Heading from "./Component/Heading";
import Footer from "./Component/Footer";
import featureImg from "./assest/features.webp";
import borderLgImg from "./assest/borderlg.webp";
import borderXlImg from "./assest/borderxl.webp";
import feedbackImg from "./assest/feedback.webp";
import impressImg from "./assest/impress.webp";
import iconImg from './assest/xlogo.webp';
import trendImg from "./assest/trend.webp";
import trendBanner from "./assest/trend-banner.webp";
import ImageSection from "./Component/ImageSection";
import Section from "./Component/Section";
import Navbar from "./Component/Navbar";
import Slider from "react-slick";
function App() {
  const settings = {
    className: "center",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 976,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  return (
    <div className="App text-black-700">
      {/* start nav */}
      <Navbar />
      {/* end nav */}
      {/* start header */}
      <header
        className="py-10 md:py-24"
        style={{
          backgroundImage: `url(${homeBanner})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="md:flex justify-between items-center">
            <div className="md:w-1/2">
              <h1 className="text-2xl md:text-5xl font-light text-slate-100 mb-6">
                Mass People <br />
                Oriented Software
              </h1>
              <p className="text-sm max-w-sm font-bold mb-3 text-slate-100">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim. sed do eiusmod tempor incididunt.
              </p>
              <div>
                <button className="border px-4 py-2 rounded-xl text-slate-100 hover:text-slate-900 hover:bg-slate-100">
                  Get Started
                </button>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2">
              <img src={homeRight}  alt="img right"/>
            </div>
          </div>
        </div>
      </header>
      {/* end header */}
      {/* start Features */}
      <section className="py-24" id="features">
        <div className="container">
          <Heading
            span="EXCLUSIVE STUNNING FEATURES"
            heading="A Complete Software Based Website"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation"
            btn="free trail now"
          />
          <div className="md:flex justify-between items-center space-x-6 mt-10">
            <div className="md:w-1/2">
              <img src={featureImg} alt="featureImg"/>
            </div>
            <div className="md:w-1/2 mt-6">
              <div className="box mb-6">
                <div className="flex space-x-4 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3>Stunning Visuals</h3>
                </div>
                <p className="max-w-lg">
                  Here, I focus on a range of items and features that we use in
                  life without giving them a second thought such as Coca Cola.
                </p>
              </div>
              <div className="box mb-6">
                <div className="flex space-x-4 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3>Stunning Visuals</h3>
                </div>
                <p className="max-w-lg">
                  Here, I focus on a range of items and features that we use in
                  life without giving them a second thought such as Coca Cola.
                </p>
              </div>
              <div className="box mb-6">
                <div className="flex space-x-4 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3>Stunning Visuals</h3>
                </div>
                <p className="max-w-lg">
                  Here, I focus on a range of items and features that we use in
                  life without giving them a second thought such as Coca Cola.
                </p>
              </div>
              <div className="box mb-6">
                <div className="flex space-x-4 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3>Stunning Visuals</h3>
                </div>
                <p className="max-w-lg">
                  Here, I focus on a range of items and features that we use in
                  life without giving them a second thought such as Coca Cola.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end Features */}
      {/* start trends */}
      <section
        className="py-24"
        style={{ backgroundImage: `url(${trendBanner})`, height: "100%" }}
      >
        <div className="container">
          <div className="md:flex justify-between space-x-8">
            <div className="md:w-1/2">
              <span className="uppercase font-medium">
                modern daesign trends
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 mt-4">
                We Believe that <br />
                Inner beauty Lasts Long
              </h3>
              <p className="max-w-lg">
                inappropriate behavior is often laughed off as “boys will be
                boys,” women face higher conduct standards especially in the
                workplace. That’s why it’s crucial that as women.
              </p>
              <button className="mt-5 px-6 py-2 curosr-pointer rounded-sm bg-main text-slate-100">
                learn more
              </button>
            </div>
            <div className="md:w-1/2">
              <img src={trendImg} alt="trendimg"/>
            </div>
          </div>
        </div>
      </section>
      {/* end trends */}

      <section className="py-24">
        <div className="container">
          <Heading
            span="FEATURES SPECIFICATIONS"
            heading="Amazing Features That Make It Awesome!"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <div className="md:flex justify-between space-x-8  mt-24 relative">
            <Section
              span="MODERN DAESIGN TRENDS"
              text="inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that as women."
              heading="We Believe that"
              restHead="Inner beauty Lasts Long"
              btn="learn more"
              className="order-2 md:px-8"
            />
            <ImageSection image={trendImg} />
            <div className="hidden md:block absolute left-[45%] border-dashed h-full border"></div>
            <img
              src={borderLgImg}
              alt="borderimg"
              className="hidden md:block absolute left-[45%] top-1/3 -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src={borderXlImg}
              alt="borderimg"
              className="hidden md:block absolute left-[45%] top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src={borderLgImg}
              alt="borderimg"
              className="hidden md:block absolute left-[45%] top-[60%] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="md:flex justify-between space-x-8  mt-24 relative">
            <Section
              span="MODERN DAESIGN TRENDS"
              text="inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that as women."
              heading="We Believe that"
              restHead="Inner beauty Lasts Long"
              btn="learn more"
              className="order-1 md:px-8"
            />
            <ImageSection image={trendImg} />
            <div className="hidden md:block absolute left-[45%] border-dashed h-full border"></div>
            <img
              src={borderLgImg}
              alt="borderimg"
              className="hidden md:block absolute left-[45%] top-1/3 -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src={borderXlImg}
              alt="borderimg"
              className="hidden md:block absolute left-[45%] top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src={borderLgImg}
              alt="borderimg"
              className="hidden md:block absolute left-[45%] top-[60%] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </section>

      {/* start feedback */}
      <section className="py-24">
        <div className="container">
          <Heading
            span="USER FEEDBACK"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            heading="What Our Clients Say About Us"
          />
          <div className="text-center mt-10">
            <div className="flex justify-center"><img src={feedbackImg} alt="feedbackImg"/></div>
            <span className="font-bold text-slate-900">Fancy Spencer</span>
            <p className="max-w-sm mx-auto mt-8 font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
        </div>
      </section>
      {/* end feedback */}

      <section>
        <div className="container">
        <Slider {...settings}>
          <div className="flex justify-center">
            <img src={iconImg} alt="iconimg"/>
          </div>
          <div className="flex justify-center">
            <img src={iconImg} alt="iconimg"/>
          </div>
          <div className="flex justify-center">
            <img src={iconImg} alt="iconimg"/>
          </div>
          <div className="flex justify-center">
            <img src={iconImg} alt="iconimg"/>
          </div>
          <div className="flex justify-center">
            <img src={iconImg} alt="iconimg"/>
          </div>
          <div className="flex justify-center">
            <img src={iconImg} alt="iconimg"/>
          </div>
        </Slider>
        </div>
      </section>

      <section className="py-24 flex items-center" style={{backgroundImage: `url(${impressImg})`, height:"700px"}}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl mb-4 mt-4 font-bold text-slate-800">Got Impressed to our features?</h2>
          <p className="text-slate-100 mb-5 mt-5 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <button className="bg-white rounded-sm text-slate-900 px-8 py-4 uppercase font-semibold hover:text-slate-100 hover:bg-slate-900 transition-all shadow-md">rquest free demo</button>
        </div>
      </section>
      
        <Footer />


    </div>
  );
}

export default App;
