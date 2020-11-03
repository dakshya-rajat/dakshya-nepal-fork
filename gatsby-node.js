/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `CockpitBlog`) {
    const slug = `/${slugify(node.category.value)}/${slugify(node.title.value)}`
    createNodeField({ node, name: `path`, value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allCockpitBlog(filter: { lang: { eq: "en" } }) {
        edges {
          node {
            fields {
              path
            }
          }
        }
      }
    }
  `)
  result.data.allCockpitBlog.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.path,
      component: path.resolve(`./src/templates/blog.js`),
    })
  })
}
