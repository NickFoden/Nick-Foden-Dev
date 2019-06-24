import React from "react"
import styled from "styled-components"
import github from "../images/github.png"
import goodReads from "../images/goodReads.jpg"
import wordpress from "../images/wordpressicon.svg"
import twitter from "../images/twitter.png"

const StyledFooter = styled.footer`
  background-color: #222;
  bottom: 0px;
  display: flex;
  position: fixed;
  text-align: center;
  width: 100vw;
`

const DisplayContainer = styled.div`
  flex-direction: column;
  margin: 0 auto;
  & a {
    font-size: 0.75rem;
  }
  & img {
    width: 2rem;
    height: auto;
  }
`

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  & img {
    width: 2rem;
    height: auto;
  }
  & li {
    margin: 0 1rem;
  }
`

const Footer = () => (
  <StyledFooter>
    <DisplayContainer>
      <StyledUl>
        <li>
          <a
            href="https://www.goodreads.com/user/show/4866462-nick-foden"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={goodReads} alt="goodReads" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/NickFoden"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={github} alt="github" />
          </a>
        </li>
        <li>
          <a
            href="https://nickfoden.wordpress.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={wordpress} alt="wordpress" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/NickFoden"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={twitter} alt="twitter" />
          </a>
        </li>
      </StyledUl>

      <a href="https://twitter.com/nickfoden">
        © {new Date().getFullYear()}, Nick Foden
      </a>
    </DisplayContainer>
  </StyledFooter>
)

export default Footer
