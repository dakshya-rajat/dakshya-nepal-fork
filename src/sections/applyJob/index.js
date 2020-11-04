import React from "react"
import { Box, Image, Layer, TextArea, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import FormField from "../../components/formField"
import Button from "../../components/button"
import Exit from "../../components/icons/exit"
import { Formik } from "formik"
import Notification from "../notification"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  const url = process.env.GATSBY_API_URL + "/api/forms/submit/jobApplication"

  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)

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
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
              driveUrl: "",
              position: props.position,
            }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              const response = await fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Cockpit-Token": process.env.GATSBY_API_KEY,
                },
                mode: "cors",
                body: JSON.stringify({ form: values }),
              })

              console.log(response)

              if (response.ok) {
                setSuccess(true)
                setSubmitting(false)
                resetForm()
              } else setError(true)
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <FormField
                  label="Your Name *"
                  placeholder="Jane Doe"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  values={values.name}
                  required={true}
                />
                <FormField
                  label="Your Email*"
                  placeholder="email@domain.com"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  values={values.email}
                  required={true}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  values={values.message}
                />
                <FormField
                  label="Your Resume Link *"
                  placeholder="Google Drive Link"
                  type="text"
                  name="driveUrl"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  values={values.driveUrl}
                  required={true}
                />
                <input type="hidden" name="position" value={values.position} />
                <Box pad={{ top: "small" }}>
                  <Button
                    type="submit"
                    alignSelf="start"
                    primary
                    label="Submit"
                    disabled={isSubmitting}
                  />
                </Box>
              </form>
            )}
          </Formik>
          {success && <Notification message="Message Sent Successfully" />}
          {error && (
            <Notification
              message="Could not send message. Please try again!"
              error
            />
          )}
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
