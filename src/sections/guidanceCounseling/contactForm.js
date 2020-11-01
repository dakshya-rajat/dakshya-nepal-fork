import React from "react"
import { Box, ResponsiveContext, Image, Select } from "grommet"
import Heading from "../../components/heading"
import FormSideImage from "../../../static/illustrations/Guidance Counseling.svg"
import FormField from "../../components/formField"
import Button from "../../components/button"
import Text from "../../components/text"
import { Formik, Field } from "formik"

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
      <Formik
        initialValues={{
          name: "",
          address: "",
          phone: "",
          school: "",
          problems: "",
          type: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              direction="row"
              border={{ color: "w2", size: "2px" }}
              round="8px"
            >
              <Box width={mobile ? "100%" : "50%"} pad="16px" gap="medium">
                <Box gap="small">
                  <Box gap="xsmall">
                    <Text size="small">Need guidance as</Text>
                    <Select
                      placeholder="Select one"
                      size="small"
                      options={["Student", "Parent"]}
                      value={value}
                      onChange={({ option }) => handleChange(option)}
                    />
                  </Box>
                  <FormField
                    label="Your Name *"
                    placeholder="Input your name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.name}
                    required="true"
                  />
                  <FormField
                    label="Address"
                    placeholder="Your Address"
                    name="address"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.address}
                  />
                  <FormField
                    label="Contact Number *"
                    name="phone"
                    type="text"
                    placeholder="Input your phone number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.phone}
                    required="true"
                  />
                  <FormField
                    label="School Name"
                    placeholder="Your school name as applicable"
                    name="school"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.school}
                  />
                  <Box gap="xsmall">
                    <Text size="small">
                      Nature of Counseling you are seeking
                    </Text>
                    <Select
                      placeholder="Select one"
                      size="small"
                      options={[
                        "Academics",
                        "Relationship",
                        "Social Life, others",
                      ]}
                      value={value}
                      onChange={({ option }) => setValue(option)}
                    />
                  </Box>
                  <FormField
                    label="Describe the hardships you are facing in few words"
                    placeholder="Your hardships"
                    name="problems"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.problems}
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
                  <Button
                    primary
                    label="Book Your Session"
                    disabled={isSubmitting}
                    type="submit"
                  />
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
          </form>
        )}
      </Formik>
    </Box>
  )
}
