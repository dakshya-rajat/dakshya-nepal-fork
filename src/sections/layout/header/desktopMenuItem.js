import React from "react"
import Button from "../../../components/button"
import { Link } from "gatsby"

export default props => {
  return (
    <Link to={props.item.url} style={{ margin: "auto 0" }}>
      {props.item.label.includes(":") ? (
        <Button ka as="div" label="क" />
      ) : (
        <Button
          as="div"
          label={props.item.label}
          active={props.active === props.item.label.toLowerCase()}
        />
      )}
    </Link>
  )
}
