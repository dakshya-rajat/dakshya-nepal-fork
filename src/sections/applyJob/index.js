import React from "react"
import { Box, Image, Layer, TextArea } from "grommet"
import Heading from "../../components/heading"
import FormField from "../../components/formField"
import Button from "../../components/button"
import Exit from "../../components/icons/exit"

export default props => {
  return (
    <Layer
      animation="slide"
      position="center"
      onClickOutside={() => props.setApply(false)}
      onEsc={() => props.setApply(false)}
    >
      <Box direction="row" width="large" elevation="d1">
        <Box pad="24px" gap="medium" width="50%">
          <Image alignSelf="start" src="/images/logo-horizontal.svg" />
          <Heading code={3}>Apply for a position</Heading>
          <form>
            <FormField label="Your Name *" placeholder="Jane Doe" type="text" />
            <FormField
              label="Your Email*"
              placeholder="email@domain.com"
              type="text"
            />
            <label
              style={{
                fontSize: "14px",
                lineHeight: "normal",
              }}
              htmlFor="message"
            >
              Messages (If any)
            </label>
            <TextArea
              placeholder="Input your message"
              size="small"
              name="message"
              style={{ border: "2px solid #EAEAEA" }}
            />
            <Box gap="xsmall">
              <label
                style={{
                  fontSize: "14px",
                  lineHeight: "normal",
                }}
                htmlFor="resume"
              >
                Your Resume
              </label>
              <input type="file" name="resume" />
            </Box>
            <Box pad={{ top: "small" }}>
              <Button alignSelf="start" primary label="Submit" />
            </Box>
          </form>
        </Box>
        <Box background="p1-l" width="50%" justify="end">
          <Box
            style={{ position: "absolute", top: "24px", right: "24px" }}
            onClick={() => props.setApply(false)}
          >
            <Exit />
          </Box>
          <Box height="medium" alignSelf="end">
            <Image src="/illustrations/guidance form.svg" fit="contain" />
          </Box>
        </Box>
      </Box>
    </Layer>
  )
}
