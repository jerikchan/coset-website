/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require("path")
const fs = require("fs")

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown content
  const result = await graphql(`
    {
      allMdx(filter: {frontmatter: {slug: {ne: "zkvm"}}}) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
    return
  }

  // Check if we have data
  if (!result.data || !result.data.allMdx || !result.data.allMdx.edges) {
    reporter.info('No MDX documents found')
    return
  }

  // Create pages for each markdown document
  const documents = result.data.allMdx.edges
  const documentTemplatePath = path.resolve('./src/pages/courses/zkvm-document.tsx')
  
  // Check if template exists
  if (!fs.existsSync(documentTemplatePath)) {
    reporter.panicOnBuild(`Template file not found: ${documentTemplatePath}`)
    return
  }
  
  reporter.info(`Found ${documents.length} documents to create pages for`)

  documents.forEach(({ node }, index) => {
    if (!node.frontmatter || !node.frontmatter.slug) {
      reporter.warn(`Document at index ${index} is missing slug frontmatter`)
      return
    }
    
    const pagePath = `/courses/zkvm/${node.frontmatter.slug}`
    reporter.info(`Creating page for ${pagePath}`)
    
    createPage({
      path: pagePath,
      component: `${documentTemplatePath}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        slug: node.frontmatter.slug,
      },
    })
  })
} 