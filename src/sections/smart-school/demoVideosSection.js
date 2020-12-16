import React from "react"
import { Box, ResponsiveContext, Grid } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"
import Button from "../../components/button"
import Video from "./video"
import videoData from "./videoData.json"
import Slider from "react-slick"

const MobileSwitcher = props => {
  const settings = {
    dots: false,
    infinite: false,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "16px",
  }

  return (
    <ResponsiveContext.Consumer>
      {size =>
        size === "small" ? (
          <Slider {...props} {...settings}>
            {props.children}
          </Slider>
        ) : (
          <Grid direction="row" columns="30%">
            {props.children}
          </Grid>
        )
      }
    </ResponsiveContext.Consumer>
  )
}

export default () => {
  const [activeClass, setActiveClass] = React.useState(videoData[0])
  const [active, setActive] = React.useState(0)

  const handleSwap = index => {
    setActiveClass(videoData[index])
    setActive(index)
  }

  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      pad={
        mobile
          ? { top: "64px", horizontal: "16px" }
          : { top: "90px", horizontal: "131.5px" }
      }
    >
      <Heading code={2}>Demo Videos</Heading>

      <Box
        gap="medium"
        margin={{ top: "32px" }}
        border={mobile ? null : { color: "w2", size: "2px" }}
        direction={mobile ? "column" : "row"}
        height={mobile ? null : "536px"}
      >
        <Box
          width={mobile ? "100%" : "15%"}
          pad={{ left: "24px", top: "24px" }}
          overflow="auto"
          className="noScrollBar"
          gap="small"
          direction={mobile ? "row" : "column"}
        >
          {videoData.map((data, index) => (
            <Box flex="grow">
              <Button
                style={{ borderRadius: "8px", paddingRight: "35px" }}
                ghost
                alignSelf="start"
                label={`Class ${index + 1}`}
                key={index + 20}
                onClick={() => handleSwap(index)}
                active={active === index}
              />
            </Box>
          ))}
        </Box>
        <Box flex="grow" pad={{ top: "24px", right: "24px" }}>
          <MobileSwitcher>
            {activeClass.map((data, index) => (
              <Box key={data} gap="small" pad={{ right: "medium" }}>
                <Video
                  videoSrcURL={data.link}
                  videoTitle={`class ${index + 1} ${data.sub} video`}
                />
                <Heading code={4}>{data.sub}</Heading>
                <Text code="sub-r" color="b2" margin={{bottom:"24px"}}>
                  {data.description}
                </Text>
              </Box>
            ))}
          </MobileSwitcher>
        </Box>
      </Box>
    </Box>
  )
}
