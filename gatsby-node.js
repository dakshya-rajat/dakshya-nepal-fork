/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const _path = require(`path`)

exports.createPages = async ({ graphql, actions }) =>
  graphql(
    `
      {
        allGoogleDocs {
          nodes {
            path
          }
        }
      }
    `
  ).then(result => {
    result.data.allGoogleDocs.nodes.forEach(({ path }, index) => {
      actions.createPage({
        path: path,
        component: _path.resolve(`./src/templates/blog.js`),
      })
    })
  })
