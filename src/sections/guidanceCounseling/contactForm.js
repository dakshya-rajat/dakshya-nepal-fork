import React from "react"
import { Box, ResponsiveContext, Image, Select } from "grommet"
import Heading from "../../components/heading"
import FormSideImage from "../../../static/illustrations/Guidance Counseling.svg"
import FormField from "../../components/formField"
import Button from "../../components/button"
import Text from "../../components/text"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  const [value, setValue] = React.useState("")
  return (
    <Box
      pad={
        mobile
          ? { top: "64px", horizontal: "16px" }
          : { top: "90px", horizontal: "131.5px" }
      }
    >
      <Box direction={mobile ? "column" : "row"} justify="between">
        <Heading code={2}>
          Lets start learning with Guidance Counseling sessions
        </Heading>
        <Box
          margin={{ top: "16px" }}
          background="h1"
          justify="center"
          pad="16px"
          style={{ borderRadius: "8px" }}
        >
          <Heading code={4} color="#ffffff" size="small">
            First Session On Us!
          </Heading>
        </Box>
      </Box>
      <Box
        margin={{ vertical: "32px" }}
        direction="row"
        border={{ color: "w2", size: "2px" }}
        round="8px"
      >
        <Box width={mobile ? "100%" : "50%"}>
          <Box margin={{ vertical: "24px", horizontal: "16px" }}>
            <Box>
              <Text margin={{ bottom: "8px" }} size="small">
                Need guidance as
              </Text>
              <Select
                placeholder="Select one"
                size="small"
                options={["Student", "Parent"]}
                value={value}
                onChange={({ option }) => setValue(option)}
              />
            </Box>
            <FormField label="Your Name" placeholder="Input your name" />
            <FormField label="Address" placeholder="Your Address" />
            <FormField
              label="Contact Number *"
              required="true"
              placeholder="Input your phone number"
            />
            <FormField
              label="School Name"
              placeholder="Your school name as applicable"
            />
            <Box>
              <Text margin={{ bottom: "8px" }} size="small">
                Nature of Counseling you are seeking
              </Text>
              <Select
                placeholder="Select one"
                size="small"
                options={["Academics", "Relationship", "Social Life, others"]}
                value={value}
                onChange={({ option }) => setValue(option)}
              />
            </Box>
            <FormField
              label="Describe the hardships you are facing in few words"
              placeholder="Your hardships"
            />
            <Box>
              <Text margin={{ bottom: "8px" }} size="small">
                Available for Counseling via
              </Text>
              <Select
                placeholder="Select one"
                size="small"
                options={["Phone Call", "Video Call"]}
                value={value}
                onChange={({ option }) => setValue(option)}
              />
            </Box>
            <Box margin={{ top: "24px" }} width="small">
              <Button primary label="Book Your Session" />
            </Box>
          </Box>
        </Box>
        <Box
          width={mobile ? "0%" : "50%"}
          background="p1-l"
          alignContent="end"
          justify="end"
        >
          <Image src={FormSideImage} fill="horizontal" />
        </Box>
      </Box>
    </Box>
  )
}
