import React, { useState, useEffect } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Contact, Experience, Footer, Skills } from "@components"
import { mixins, Main, Section } from "@styles"
import styled from "styled-components"

const ContactContainer = styled(Main)`
  ${mixins.sideMargin};
`
const ContactPage = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <ContactContainer id="content">
      <TransitionGroup>
        {isMounted && (
          <CSSTransition classNames="fade" timeout={3000}>
            <Contact />
          </CSSTransition>
        )}
      </TransitionGroup>
      <Footer />
    </ContactContainer>
  )
}

export default ContactPage
