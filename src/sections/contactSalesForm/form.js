import React from "react"
import { Box, ResponsiveContext, TextArea } from "grommet"
import FormField from "../../components/formField"
import Button from "../../components/button"
import { Formik } from "formik"

export default ({ product }) => {
  const mobile = React.useContext(ResponsiveContext) === "small"
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
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
            <Button
              primary
              label="Contact Sales"
              alignSelf={mobile ? null : "start"}
              type="submit"
              disabled={isSubmitting}
            />
          </form>
        )}
      </Formik>
    </Box>
  )
}
