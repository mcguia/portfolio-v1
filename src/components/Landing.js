import React from 'react';
import styled from 'styled-components';
import { Section } from '@styles';

const LandingContainer = styled(Section)`
    position: relative;
`;

const Landing = () => (
    <LandingContainer id="landing">
        <h1>Hi, I'm Austin.</h1>
        <div>I'm a software engineer with a knack for front end development and design.</div>
    </LandingContainer>
);

export default Landing;
