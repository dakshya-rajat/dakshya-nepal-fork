import React from "react"
import { Box, ResponsiveContext, Grid } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"
import Button from "../../components/button"
import Video from "./video"

export default props => {
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
        border={{ color: "w2", size: "2px" }}
        direction="row"
        height="536px"
      >
        <Box
          width="15%"
          pad={{ left: "24px", top: "24px" }}
          overflow="auto"
          className="noScrollBar"
          gap="small"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(data => (
            <Button
              style={{ borderRadius: "8px", paddingRight: "35px" }}
              ghost
              alignSelf="start"
              label={`Class ${data}`}
              key={data}
            />
          ))}
        </Box>
        <Box flex="grow" pad={{ top: "24px", right: "24px" }}>
          <Grid direction="row" columns="30%" gap="medium">
            {[1, 2, 3, 4, 5].map(data => (
              <Box key={data} gap="small">
                <Video
                  videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  videoTitle="Official Music Video on YouTube"
                />
                <Heading code={4}>Science</Heading>
                <Text code="sub-r" color="b2">
                  Student studies the same concept in studynlearn package
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
