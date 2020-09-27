import React from "react"
import Text from "../../../components/text"
import { Box, Collapsible, ResponsiveContext } from "grommet"
import chevDown from "../../../components/icons/chevron-down"
import chevUp from "../../../components/icons/chevron-up"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  const [open, setOpen] = React.useState(props.active || Boolean(!mobile))
  const Icon = open ? chevDown : chevUp

  return (
    <Box
      direction="column"
      gap="medium"
      margin={mobile ? { bottom: "large" } : null}
      pad={{ bottom: "medium" }}
      border={mobile ? { side: "bottom", color: "b2" } : null}
    >
      <Box
        direction="row"
        fill="horizontal"
        onClick={mobile ? () => setOpen(!open) : null}
      >
        <Text code="body">{props.name}</Text>
        {mobile ? (
          <Box align="end" fill="horizontal">
            <Icon color="w2" />
          </Box>
        ) : null}
      </Box>
      <Collapsible open={open || Boolean(!mobile)} {...props}>
        <Box gap="small">
          {props.items.map((item, index) => (
            <Text code="subtext-r" color="g1" key={index} size="small">
              {item.label}
            </Text>
          ))}
        </Box>
      </Collapsible>
    </Box>
  )
}
