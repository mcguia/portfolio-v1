import React, { Component } from "react"
import { Link } from "gatsby"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import Headroom from "react-headroom"
import styled from "styled-components"
import { theme, media } from "@styles"
const { colors, fontSizes, fonts } = theme

const NavContainer = styled(Headroom)`
  .headroom {
    padding: 0 1.2em;
    @media ${media.md} {
      padding: 0 3em;
    }
    @media ${media.lg} {
      padding: 0 6em;
    }
    @media ${media.xl} {
      padding: 0 9em;
    }
  }

  position: absolute;
  top: 0;
  width: 100%;
  z-index: 11;
  height: 70px;
  transition: ${theme.transition};
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  font-family: ${fonts.HKGrotesk};
  z-index: 12;
`

const NavLinks = styled.div`
  align-items: center;
  display: flex;
`

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`

const NavListItem = styled.li`
  margin: 0 0.8em;
  position: relative;
  font-size: ${fontSizes.md};
  font-weight: 500;
`

const LogoType = styled(Link)`
  font-size: ${fontSizes.md};
  font-weight: 500;
`

class Navbar extends Component {
  state = {
    menuOpen: false,
    isMounted: false,
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 100)
  }

  componentWillUnmount() {
    this.setState({ isMounted: false })
  }

  render() {
    const { isMounted } = this.state
    const { menuLinks } = this.props

    return (
      <NavContainer>
        <Nav>
          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={3000}>
                <LogoType className="link__underline" to={"/"}>
                  Austin McGuire
                </LogoType>
              </CSSTransition>
            )}
          </TransitionGroup>
          <NavLinks>
            <NavList>
              <TransitionGroup style={{ display: "flex" }}>
                {isMounted &&
                  menuLinks &&
                  menuLinks.map(({ link, name }, i) => (
                    <CSSTransition key={i} classNames="fadedown" timeout={3000}>
                      <NavListItem
                        key={i}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <Link to={`${link}/`} className="link__underline">
                          {name}
                        </Link>
                      </NavListItem>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </NavList>
          </NavLinks>
        </Nav>
      </NavContainer>
    )
  }
}

export default Navbar
