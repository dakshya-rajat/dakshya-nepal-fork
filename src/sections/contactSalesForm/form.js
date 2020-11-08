import React from "react"
import { Box, ResponsiveContext, TextArea } from "grommet"
import FormField from "../../components/formField"
import Button from "../../components/button"
import { Formik } from "formik"
import Notification from "../notification"

export default ({ product }) => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  const url =
    process.env.GATSBY_API_URL +
    "/api/forms/submit/productContactForm?token=" +
    process.env.GATSBY_API_KEY

  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)

  return (
    <Box margin={{ vertical: "24px", horizontal: "16px" }} gap="xsmall">
      <Formik
        initialValues={{
          orgName: "",
          address: "",
          email: "",
          phone: "",
          message: "",
          product: product,
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.GATSBY_API_KEY}`,
            },
            mode: "no-cors",
            body: JSON.stringify({ form: values }),
          })

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
            <Box gap="small">
              <FormField
                label="Name of Organization *"
                placeholder="Input your organization name"
                name="orgName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.orgName}
                required="true"
              />
              <FormField
                label="Address"
                placeholder="Input your Address"
                name="address"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.address}
              />
              <FormField
                label="Your Email"
                placeholder="Input your email"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.email}
              />
              <FormField
                label="Contact Number *"
                placeholder="Input your phone number"
                name="phone"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.number}
                required="true"
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
              <input type="hidden" value={values.product} />
              <Box width={mobile ? "100%" : "small"}>
                <Button
                  primary
                  label="Contact Sales"
                  alignSelf={mobile ? null : "start"}
                  type="submit"
                  disabled={isSubmitting}
                />
              </Box>
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
  )
}
