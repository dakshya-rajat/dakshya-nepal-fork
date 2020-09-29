import React from "react"
import { Box } from "grommet"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../styles/custom-slick.css"
import Dot from "./sliderDot"
import products from "../../templates/products.json"
import ProductCard from "../productCard"

export default props => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    speed: 500,
    variableWidth: true,
    initialSlide: 1,
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
    <Box pad={{ horizontal: "131px", top: "80px" }}>
      <Box direction="row">
        <Box pad={{ vertical: "34px" }} width="40%">
          test test
        </Box>
        <Box width="60%">
          <Box
            width="96px"
            height="316px"
            style={{
              position: "absolute",
              zIndex: 999999,
              background:
                "linear-gradient(86.08deg, rgba(255, 252, 245, 0) 3.37%, #FFFDF8 50.18%)",
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
            }}
          />
          <Slider {...settings}>
            {products.map((product, index) => (
              <ProductCard
                product={product}
                key={index}
                height="308px"
                width="352px"
                margin={{ left: "24px" }}
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
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
