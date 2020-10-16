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
      gap="medium"
    >
      <Box
        direction={mobile ? "column" : "row"}
        justify="between"
        alignContent="center"
        gap="small"
      >
        <Heading code={2}>
          Lets start learning with Guidance Counseling sessions
        </Heading>
        <Box background="h1" pad="16px" round={{ size: "8px" }}>
          <Heading code={4} color="#ffffff" size="small" alignSelf="center">
            First Session On Us!
          </Heading>
        </Box>
      </Box>
      <Box direction="row" border={{ color: "w2", size: "2px" }} round="8px">
        <Box width={mobile ? "100%" : "50%"} pad="16px" gap="medium">
          <Box gap="small">
            <Box gap="xsmall">
              <Text size="small">Need guidance as</Text>
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
            <Box gap="xsmall">
              <Text size="small">Nature of Counseling you are seeking</Text>
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
            <Box gap="xsmall">
              <Text size="small">Available for Counseling via</Text>
              <Select
                placeholder="Select one"
                size="small"
                options={["Phone Call", "Video Call"]}
                value={value}
                onChange={({ option }) => setValue(option)}
              />
            </Box>
          </Box>
          <Box width={mobile ? "100%" : "small"}>
            <Button primary label="Book Your Session" />
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
