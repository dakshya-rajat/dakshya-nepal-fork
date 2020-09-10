import React from "react"
import { Box, Image } from "grommet"
// importing illustrations
import image1 from "../images/illustrations/Girl on a chair.svg"
import image2 from "../images/illustrations/guidance form.svg"
import image3 from "../images/illustrations/Online classes.svg"

export default {
  title: "Design/Illustrations",
}

export const sampleIllustration = () => {
  return (
    <Box direction="row" gap="medium" wrap>
      <Image src={image1} />
      <Image src={image2} />
      <Image src={image3} />
    </Box>
  )
}
