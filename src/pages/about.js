import React from 'react';
import { About, Layout } from '@components';
import { mixins, Main } from '@styles';
import styled from 'styled-components';

const AboutContainer = styled(Main)`
    ${mixins.sidePadding};
`;

const AboutPage = () => (
    <Layout>
        <AboutContainer id="content">
            <About />
        </AboutContainer>
    </Layout>
);

export default AboutPage;
