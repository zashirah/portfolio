import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const BlogPage = styled.div`
  margin: 0px auto 35px;
  padding-top: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  /* @media screen and (max-width: 767px) {
    height: 88vh;
  } */
`

const StyledLink = styled(Link)`
  color: var(--olive);
  text-decoration: none;
  text-transform: uppercase;
  /* font-size: 24px; */
  &&:hover {
    text-decoration: underline;
  }
`

const BlogTitle = styled.h2``

const BlogPostCount = styled.h4``

const blog = ({ data }) => {
  return (
    <Layout>
      <BlogPage>
        <BlogTitle>Zach Shirah's Blogs</BlogTitle>
        <BlogPostCount>{data.allMarkdownRemark.totalCount} Posts</BlogPostCount>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <StyledLink key={node.id} to={`${node.fields.slug}`}>
            {node.frontmatter.title} - {node.frontmatter.date}
          </StyledLink>
        ))}
      </BlogPage>
    </Layout>
  )
}

export default blog

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
