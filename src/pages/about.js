import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { About, Experience, Footer, Skills } from '@components';
import { mixins, Main, Section } from '@styles';
import styled from 'styled-components';

const AboutContainer = styled(Main)`
    ${mixins.sideMargin};
`;
const SkillsSection = styled(Section)`

`;

const AboutPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <AboutContainer id="content">
            <TransitionGroup>
                {isMounted &&
                    <CSSTransition classNames="fade" timeout={3000}>
                        <About />
                    </CSSTransition>
                }
            </TransitionGroup>
                <SkillsSection>
                    <TransitionGroup>
                        {isMounted &&
                            <CSSTransition classNames="fade" timeout={3000}>
                                <Skills />
                            </CSSTransition>
                        }
                    </TransitionGroup>
                    <TransitionGroup>
                        {isMounted &&
                            <CSSTransition classNames="fade" timeout={3000}>
                                <Experience />
                            </CSSTransition>
                        }
                    </TransitionGroup>
                </SkillsSection>
            <Footer />
        </AboutContainer>
    )
};

export default AboutPage;
