import React, { Component } from 'react';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import { theme, mixins, media } from '@styles';
import { throttle } from '@utils';
const { fontSizes, fonts } = theme;


const NavContainer = styled(Headroom)`
    .headroom--pinned {
        background: #fff;
    }

    position: absolute;
    top: 0;
    width: 100%;
    z-index: 11;
    height: 70px;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: ${fonts.HKGrotesk};
    z-index: 12;
    padding: .5em 1.2em;
    @media ${media.md} {
        padding: .5em 3em;
    }
    @media ${media.lg} {
        padding: .5em 5em;
    }
    @media ${media.xl} {
        padding: .5em 9.375em;
    }
`;

const NavLinks = styled.div`
    display: none;
    align-items: center;
    @media ${media.md} {
        display: flex;
    }
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
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${fontSizes.sm};
    font-weight: 600;
`;


class Navbar extends Component {

    state = {
        menuOpen: false,
    };

    componentDidMount() {
        window.addEventListener('resize', () => throttle(this.handleResize()));
        window.addEventListener('keydown', e => this.handleKeydown(e));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.handleResize());
        window.removeEventListener('keydown', e => this.handleKeydown(e));
    }

    toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

    handleResize = () => {
        if (window.innerWidth > 768 && this.state.menuOpen) {
            this.toggleMenu();
        }
    };

    handleKeydown = e => {
        if (!this.state.menuOpen) {
            return;
        }

        if (e.which == 27 || e.key === 'Escape') {
            this.toggleMenu();
        }
    };

    render() {
        const { menuOpen } = this.state;
        const { menuLinks } = this.props;

        return (
            <NavContainer>
                <Nav>
                    <Logo>
                        <Link to={'/'}>Austin McGuire</Link>
                    </Logo>
                    <NavLinks>
                        <NavList>
                            {menuLinks &&
                                menuLinks.map(({ link, name }, i) => (
                                <NavListItem key={i}>
                                    <a href={link}>{name}</a>
                                </NavListItem>
                            ))}
                        </NavList>
                    </NavLinks>
                </Nav>
            </NavContainer>

        );
    }
}

export default Navbar;
