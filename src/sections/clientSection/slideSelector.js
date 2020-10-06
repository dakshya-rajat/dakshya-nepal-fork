import React from "react"
import { Grid, ResponsiveContext, Box } from "grommet"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../styles/custom-slick-component.css"

export default props => {
  const settings = {
    dots: false,
    infinite: false,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: "0px",
    className: "component-slide",
    arrows: false,
    initialSlide: 1,
  }
  return (
    <ResponsiveContext.Consumer>
      {size =>
        size === "small" ? (
          <Box margin={{ top: "32px" }}>
            <Slider {...settings}>{props.children}</Slider>
          </Box>
        ) : (
          <Grid columns="xsmall" gap="medium" margin={{ top: "40px" }}>
            {props.children}
          </Grid>
        )
      }
    </ResponsiveContext.Consumer>
  )
}
