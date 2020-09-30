import React from "react"
import { Box } from "grommet"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../styles/custom-slick.css"
import products from "../../templates/products.json"
import ProductCard from "../productCard"
import Dot from "./sliderDot"

export default ({ mobile }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    speed: 500,
    initialSlide: 1,
    centerPadding: "0px",
    variableWidth: true,
    dots: true,
    showNav: false,
    customPaging: function (i) {
      return (
        <a>
          <Dot key={i} />
        </a>
      )
    },
  }

  return (
    <Box
      width={mobile ? "100%" : "60%"}
      margin={mobile ? { top: "64px" } : null}
    >
      <Box
        width="96px"
        height="316px"
        style={{
          position: "absolute",
          zIndex: 999999,
          background:
            "linear-gradient(86.08deg, rgba(255, 252, 245, 0) 3.37%, #FFFDF8 50.18%)",
          transform: "matrix(-1, 0, 0, 1, 0, 0)",
          display: mobile ? "none" : "block",
        }}
      />
      <Slider {...settings}>
        {products.map((product, index) => (
          <ProductCard
            product={product}
            key={index}
            height={mobile ? "287px" : "308px"}
            width={mobile ? "medium" : "352px"}
            margin={mobile ? { right: "24px" } : { left: "24px" }}
          />
        ))}
      </Slider>
      <Box
        width="96px"
        height="316px"
        style={{
          position: "absolute",
          zIndex: 999999,
          background:
            "linear-gradient(90deg, rgba(255, 252, 245, 0) 0%, #FFFDF6 85.42%)",
          right: "131px",
          display: mobile ? "none" : "block",
        }}
      />
    </Box>
  )
}
