import React from "react"
import { Layer } from "grommet"

import menuItems from "./menuItems.json"

import MobileMenu from "./mobileMenu"
import DesktopMenu from "./desktopMenu"

export default ({ active }) => {
  const [showLayer, setShowLayer] = React.useState(false)

  return (
    <div>
      <DesktopMenu
        setShowLayer={setShowLayer}
        active={active}
        menuItems={menuItems}
      />
      {showLayer && (
        <Layer full animation="fadeIn">
          <MobileMenu menuItems={menuItems} setShowLayer={setShowLayer} />
        </Layer>
      )}
    </div>
  )
}
