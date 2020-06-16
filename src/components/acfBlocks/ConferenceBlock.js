/** @jsx jsx */
import { jsx, Grid, Container, Flex } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import stepLogo from "../../images/stepLogo.png"

export const fragment = graphql`
  fragment conferenceBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_ConferenceBlock {
    anchor
    conferences {
      subtitle
      content
      image {
        localFile {
          childImageSharp {
            fluid(toFormat: JPG, maxWidth: 1000, maxHeight: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export const ConferenceBlock = ({ anchor, conferences }) => {
  return (
    <section id={anchor || ""} className="management" sx={{ ...style }}>
      <Container sx={{ px: "30px !important" }}>
        <Flex className="conferences">
          {conferences &&
            conferences.map((conf, i) => {
              const { subtitle, content, image } = conf
              return (
                <div className="confWrap">
                  <div className="conf">
                    <Img fluid={image.localFile.childImageSharp.fluid} />
                    <div className="subtitle">{subtitle}</div>
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  </div>
                </div>
              )
            })}
        </Flex>
        <div className="info">
          <img src={stepLogo} alt="Step Logo" />
          <p className="subtitle">
            Cadell have also been speakers at STEP events in; Geneva, Zurich,
            Monaco, Guernsey, Jersey, IoM and Dubai.
          </p>
        </div>
      </Container>
    </section>
  )
}

const style = {
  my: 200,
  ".conferences": {
    flexWrap: "wrap",
    justifyContent: "center",
  },
  ".confWrap": {
    width: ["100%", "100%", "50%", "33%"],
    px: [0, 0, 25, 25],
    pb: [50, 50, 50, 0],
  },
  ".subtitle": {
    color: "black",
    fontSize: 15,
    fontStyle: "italic",
    fontWeight: "bold",
    my: 20,
  },
  ".content": {
    p: {
      fontSize: 15,
    },
  },
  ".info": {
    mt: 100,
    img: { mb: 0 },
    p: { my: 10 },
  },
}
