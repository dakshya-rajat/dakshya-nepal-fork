import React from "react"
import { Box, Image, Layer, TextArea, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import FormField from "../../components/formField"
import Button from "../../components/button"
import Exit from "../../components/icons/exit"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Layer
      animation="slide"
      position="center"
      onClickOutside={() => props.setApply(false)}
      onEsc={() => props.setApply(false)}
      modal={true}
    >
      <Box direction="row" elevation="d1" align="center">
        <Box pad="24px" gap="medium" width={mobile ? "100%" : "50%"}>
          <Box direction="row">
            <Image alignSelf="start" src="/images/logo-horizontal.svg" />
            {mobile ? (
              <Box flex="grow" alignContent="end">
                <Box onClick={() => props.setApply(false)} alignSelf="end">
                  <Exit />
                </Box>
              </Box>
            ) : null}
          </Box>
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
        {mobile ? null : (
          <Box background="p1-l" width="50%">
            <Box
              style={{ position: "absolute", top: "24px", right: "24px" }}
              onClick={() => props.setApply(false)}
            >
              <Exit />
            </Box>
            <Box height="570px">
              <Image src="/illustrations/guidance form.svg" fit="cover" />
            </Box>
          </Box>
        )}
      </Box>
    </Layer>
  )
}
