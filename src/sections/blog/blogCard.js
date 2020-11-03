import React from "react"
import { Box } from "grommet"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Text from "../../components/text"
import Heading from "../../components/heading"

export default ({ mobile, title, image, minRead, link, category }) => {
  return (
    <Box width={mobile ? "98%" : "33.33%"} round="4px" border={{ color: "w2" }}>
      <Link style={{ textDecoration: "none", color: "inherit" }} to={link}>
        <Box>
          <Img fluid={image} alt={title} />
        </Box>
        <Box pad={{ horizontal: "16px", top: "16px", bottom: "40px" }}>
          <Box direction="row">
            <Text code="sub-r" color="g1">
              {minRead} min read
            </Text>
            <Box flex="grow">
              <Text
                code="sub-r"
                color="g1"
                alignSelf="end"
                style={{ textTransform: "capitalize" }}
              >
                #{category}
              </Text>
            </Box>
          </Box>
          <Heading code={4} margin={{ top: "8px" }}>
            {title}
          </Heading>
        </Box>
      </Link>
    </Box>
  )
}
