import React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetaData } from "../../hooks"

const SEO = ({ title = "cadell", description = "Redfining Art Advisory" }) => {
  const { siteUrl } = useSiteMetaData()
  const image = `${siteUrl}/twitter.png`

  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO
