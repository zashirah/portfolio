import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components'

const BlogPage = styled.div`
  margin: 0px auto 35px;
  padding-top:100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  /* @media screen and (max-width: 767px) {
    height: 88vh;
  } */
`


export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout noShow={true}>
      <BlogPage>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogPage>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
