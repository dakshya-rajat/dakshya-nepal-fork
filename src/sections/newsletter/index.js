import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import Card from "../../components/card"
import FormField from "../../components/formField"
import Button from "../../components/button"
import { Formik } from "formik"
import Notification from "../notification"
import submitForm from "../../utils/submitForm"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  const url = "/api/forms/submit/emailSubscriber"

  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)

  return (
    <Box
      pad={
        mobile
          ? { top: "64px", horizontal: "16px" }
          : { top: "90px", horizontal: "131px" }
      }
    >
      <Heading code={2}>Get updated</Heading>
      <Card
        pad={mobile ? { vertical: "24px", horizontal: "16px" } : "32px"}
        margin={
          mobile
            ? { top: "32px", bottom: "70px" }
            : { top: "40px", bottom: "140px" }
        }
        direction={mobile ? "column" : "row"}
        gap="large"
      >
        <Heading code={4}>
          Subscribe to our news letter for blogs, news and updates.
        </Heading>
        <Formik
          initialValues={{
            email: "",
            for: "Email Updates",
          }}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            if (await submitForm(values, url)) {
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
              <Box
                direction={mobile ? "column" : "row"}
                gap="small"
                flex="grow"
              >
                <Box>
                  <FormField
                    placeholder="Your Email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.email}
                    required={true}
                  />
                </Box>
                <Box>
                  <Button
                    primary
                    disabled={isSubmitting}
                    label="Send me updates"
                    type="submit"
                  />
                </Box>
              </Box>
            </form>
          )}
        </Formik>
        {success && (
          <Notification
            message="Message Sent Successfully"
            closeMain={setSuccess}
          />
        )}
        {error && (
          <Notification
            message="Could not send message. Please try again!"
            error
            closeMain={setError}
          />
        )}
      </Card>
    </Box>
  )
}
