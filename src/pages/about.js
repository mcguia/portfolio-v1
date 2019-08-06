import React from 'react';
import { About, Experience, Footer, Layout, Skills } from '@components';
import { mixins, Main, Section } from '@styles';
import styled from 'styled-components';

const AboutContainer = styled(Main)`
    ${mixins.sidePadding};
`;
const SkillsSection = styled(Section)`

`;

const AboutPage = () => (
    <Layout>
        <AboutContainer id="content">
            <About />
            <SkillsSection>
                <Skills />
                <Experience />
            </SkillsSection>
            <Footer />
        </AboutContainer>
    </Layout>
);

export default AboutPage;
