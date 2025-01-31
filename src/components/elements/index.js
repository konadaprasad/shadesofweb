import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GridItems from "../GridItem";
import "./index.css";

const images = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/63d7/ee76/d8f29a63cbe6ca2632d60940409e2b8e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mrtqDIe7ifgWcqGRNTtNhugGxnSYX0viLZ2rniOElqQuArD0OxjLEOiCTbA8ye3qOfCfDtGGPtOv1rj3Z8Y40hDMDKVfOuaTtGJxzr~MvEjyhKNCD7ajbmLiY6CmLGZRmE6ZQ5ZDKOvpoj48f1fnjInsP3ZHo78Nwbwd8SkBMNraeo58NxjiYLRbCI7J16yRtMqTLgTfY4Ma0Cc6Q81tsBtHmGcdh-QZJvvcrZNLei1kV~-pv-Vxuk9Nb-yyPrtDBTkqZNAPB7VuatHKsp-AxsNdA4LXNiL29TXUbypKqJDixdXYRFdZbM3UjvfG7gybVRURGWjMQdOawgqpwua7CQ__",
    id: 1,
    content:
      "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desert scape.The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.",
    heading: "Arabian Ranches",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/558d/33b9/23b61b111163c0357ee96e0aa9e335ab?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZFhGz-FHQb2EhVqVxUdgMA40uON2H6RFJTTv0HpSVttC4nrOOImk17T306m6ypcrF7lp9X~TcjmCWKHEL5H8T6~MSsNt2u04zo6B1p-IOqzlyDQYT20jrLM4vY0obIOT4y58RhxKMCN~eojLJP8EBEHSIIb9o1t3pb9pTRW1IkEKhPs1LPQjxvpgmphTIakb~ubA5pvsFCZUPv2Eg2U7yz5ZFc47EL9-OxWVlAHw7axDRnkpqA5r0WPCGgbS4lthbNH1nQ9UmH0QFi8CSwvfiCMlGZig4g7cWflj6T5Q8-sEkk5HfIHxGOHUh7wbe6SkHEO3oZ7GLd0vZBjcTlZ9lA__",
    id: 2,
    content:
      "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.",
    heading: "Arabian Ranches II",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/a94f/d875/9b7a3750cfb0c9acea21af96b5346b8a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HJynAEjVmourF8m~Xy5vyBiDTnIRMEN3MJ1Renbd9g5S52lxKtiw0Zy7ofhEyGsrRZzm9muWUwxlLQCqq3c7iHKk4Uxo4Sl8mY1Y9y1MOlflaVqs4feYayCNSaJEnIdeD2YKEVQtBvjJLMRT-e7-Ec-0srUnYNoK8vYVHs1vizkptBeY0XG2B5MYBCoD3C94axCBY2AeMlvLpXsgLFpWDR-m1pBieNcJ4mNY7iMBtPx36Jwqr-EV~roB2fI3q~HWJD86WpS1XAMnRYp2-lthyGfm3PYfBMO94Si2yjs-cgY4uCn5CVDfUp65WxhijzD4bqUTMfKmCmFED4wDSLkrTw__",
    id: 3,
    content:
      "The Centre of Now. The most prestigious square kilometre in the world. Downtown Dubai is no stranger to such accolades, and yet it’s hard to overstate the prominence of this community.",
    heading: "Downtown Dubai",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/3138/056d/2d599e21f2a3faf2bf1c4ef79cdc52c8?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DPEl2I9IGJuPwyBjTedoDi2nqoo~wVWi8bOqu5WMjkP6HDrxCLFkbg~y8mCr83qfDsz0PRCJTLIh7-J6jnp4ZLl7kIMJXn1LRHv-qTXw6xdXjCDO7JmWYfxRVABi2aXHYJzKICbSOqqrg3nda-CeUXMtYjtJOy6DeyIDZpG1kdD~Dw2gIXBEKmtbxKE48ruWbk4zsS04WyI4IluEMJ4027mWMtuUDbqWMi06LE-qtzQWFHg45oJScf2KaE-fmL--O3rN-Veytq8b0DSPqLubHyRCSwMfeXFWv9TM~O16vnsaNukrBIVlTI6LA79Be~4DZiHE2hWaD8zjtvY8TkyGeQ__",
    id: 4,
    content:
      "Sustainably designed, Dubai Hills Estate is a first of its kind destination. This masterfully-planned 2,700-acre multi-purpose development will form an integral part of the Mohammed Bin Rashid City.",
    heading: "Dubai Hills Estate",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/3d34/4548/b6df34bfaa48568da34d8f96e053846b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GMcn6iztD3-JWkLaBlRS9Y-TpeyWG9iGI7DVYKlQEgY6zeVCayTQ20EGroKKqbZ44KZVs9qmqZmu9vH~HYRS57Wn7q2BhZy04i8f9jMWfiZuEsko4lrhm0DCrzc6nYVSGUIBmjEJKDGGXlwltaAPh6C0AvKh6QH5~bdkMvl0KWt9v58C8GiyxUjv2~T4Q3ddj~vqJvMb0h6ekDZwJWykvmr1TSwxbWIXYwCop681tGDi3Kqa~IgWxiJfgSMIggRhoVzOOz4ZCaC~044Dcv2dvKuXTDra2GSv4R5M5WIG1I0xCxNh1MhixySyTqyIEuClpWJd4LAc93V-OXcg3I8l1w__",
    id: 5,
    content:
      "Dubai Marina is one of the world’s largest, most meticulously planned waterfront developments and offers the exhilaration and vibrancy of a chic, urban lifestyle together with all the advantages of living on the water.",
    heading: "Dubai Marina",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/ddef/46d0/f1ffb41189afefa603d67a2483169754?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X9uDMLDJWasUesddiJjNAxozqNKewdomHiqEBLMrGhL8k5QwgzQrmhfpOJKs8kYQXKjL3rDqUASMiNPc16-6~eJ4JQOIhlf~vpJKxDCSX0hmFACLjgoy1Ov1ie3dbl5k5xsW8diGGDP0KivLb0wNvDtwcf9HXzQbMKBZ-XcoaJxxh3YDeurzPo8nXbeXIAnGWCcSb4GVT2ye1IK1pNf-zH3OsvfMNxFu~qxJLN038EO7WQYLtAKBk8WxxaXBKfncpjsnAo93TjuSESybrI2YMCfV-CZjSkgQ-CuRcL0DbqJJqfvg2kZG7LJxkoHCOhfh43MFi~nJXXxwjYtQ-i~LKA__",
    id: 6,
    content:
      "Launched in 2003, Emirates Living is a modern lifestyle community focused on outdoor leisure. Emirates Living offers a serene nature-filled sanctuary, with 8,659 premium villas nestled within 52.2 million square feet of lush greenery.",
    heading: "Emirates Living ",
  },
];

function TwoItems() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft =
        currentIndex * (carouselRef.current.offsetWidth / 3);
    }
  }, [currentIndex]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container ">
      <div className="container1">
        {images.map((each) => (
          <GridItems itemsList={each} key={each.id} />
        ))}
      </div>

      <div className="container2 ">
        <h1 className="heading2">OUR SERVICES</h1>
        <Slider {...settings}>
          {images.map((each) => (
            <div key={each.id} background-image={each.image}>
              <img src={each.image} alt={each.id + 1} className="image1" />
              <h1 className="heading1">{each.heading}</h1>
            </div>
          ))}
        </Slider>
        <div className="absolute inset-y-0 flex space-x-4 justify-between w-full items-center">
          <button
            onClick={prevSlide}
            className="p-2 bg-gray-800 text-white rounded-full opacity-70 hover:opacity-90"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-gray-800 text-white rounded-full opacity-70 hover:opacity-90"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default TwoItems;
