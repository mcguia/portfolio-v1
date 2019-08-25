import React, { Component } from 'react';
import { Link } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Headroom from 'react-headroom';
import styled from 'styled-components';
import { theme, media } from '@styles';
import { throttle } from '@utils';
import logo from '@images/logo.png';
const { colors, fontSizes, fonts } = theme;


const NavContainer = styled(Headroom)`
    .headroom {
        padding: 0 1.2em;
        @media ${media.md} {
            padding: 0 3em;
        }
        @media ${media.lg} {
            padding: 0 5em;
        }
        @media ${media.xl} {
            padding: 0 9.375em;
        }
    }
    .headroom--pinned {
        background: #fff;
    }

    position: absolute;
    top: 0;
    width: 100%;
    z-index: 11;
    height: 70px;
    transition: ${theme.transition};
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: ${fonts.HKGrotesk};
    z-index: 12;
    margin: 1em 0;
`;

const NavLinks = styled.div`
    align-items: center;
    display: flex;
`;

const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavListItem = styled.li`
    margin: 0 .8em;
    position: relative;
    font-size: ${fontSizes.sm};
    font-weight: 500;
    color: ${colors.lightGrey};
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${fontSizes.sm};
    font-weight: 600;
`;

const LogoImg = styled.img`
    width: 50px;
    height: auto;
    vertical-align: middle;
`;


class Navbar extends Component {

    state = {
        menuOpen: false,
        isMounted: false,
    };

    componentDidMount() {
        setTimeout(() => this.setState({ isMounted: true }), 100);
        window.addEventListener('resize', () => throttle(this.handleResize()));
        window.addEventListener('keydown', e => this.handleKeydown(e));
    }

    componentWillUnmount() {
        this.setState({ isMounted: false });
        window.removeEventListener('resize', () => this.handleResize());
        window.removeEventListener('keydown', e => this.handleKeydown(e));
    }


    render() {
        const { isMounted } = this.state;
        const { menuLinks } = this.props;

        return (
            <NavContainer>
                <Nav>
                <TransitionGroup>
                {isMounted &&
                    <CSSTransition classNames="fade" timeout={3000}>
                    <Logo style={{ transitionDelay: '100ms' }}>
                        <Link to={'/'}>
                            <LogoImg src={logo} />
                        </Link>
                    </Logo>
                    </CSSTransition>
                }
                </TransitionGroup>
                    <NavLinks>
                        <NavList>
                            <TransitionGroup style={{display: "flex"}}>
                            {isMounted && menuLinks &&
                                menuLinks.map(({ link, name }, i) => (
                                <CSSTransition key={i} classNames="fadedown" timeout={3000}>
                                <NavListItem key={i} style={{ transitionDelay: `${i * 100}ms`}}>
                                    <Link to={link} activeStyle={{ color: `${colors.darkGrey}` }}>{name}</Link>
                                </NavListItem>
                                </CSSTransition>
                            ))}
                            </TransitionGroup>
                        </NavList>
                    </NavLinks>
                </Nav>
            </NavContainer>

        );
    }
}

export default Navbar;
