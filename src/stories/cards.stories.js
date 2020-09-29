import React from "react"
import Card from "../components/card"
import ProductCard from "../sections/productCard"

export default {
  title: "Design/Cards",
}

export const cardsWithPadding = () => {
  return (
    <>
      <Card>
        This is a card element. This has a default padding which is 16px.
      </Card>
      <p></p>
      <Card p24>This is a card element. This has a padding of 24px.</Card>
    </>
  )
}

export const cardWithShadow = () => {
  return (
    <>
      <Card elevation="d1">
        This card has a d1 shadow type according to the design
      </Card>
      <br />
      <br />
      <Card elevation="header">
        This card has a header shadow type according to the design
      </Card>
    </>
  )
}

export const productCard = () => {
  return (
    <ProductCard
      product={{
        name: "Online Classes",
        rate: "200",
        url: "#",
        image: "/illustrations/Girl on a chair.svg",
      }}
    />
  )
}
