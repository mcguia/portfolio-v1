import React, { Component } from 'react';
import Headroom from 'react-headroom';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
import { throttle } from '@utils';
const { fontSizes, fonts } = theme;


const NavContainer = styled(Headroom)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    margin-top: 2em;
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
        background-color: #fff;
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
    list-style: none;
`;

const NavListItem = styled.li`
    margin: 0 .8em;
    position: relative;
    font-size: ${fontSizes.sm};
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
