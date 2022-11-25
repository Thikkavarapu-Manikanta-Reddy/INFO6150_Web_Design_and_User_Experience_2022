import styled from "styled-components";

export const Sidebar = styled.aside`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0px;
    background-color: var(--tertiary-color);
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 9;
  nav {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    color: var(--primary-color);
    text-align: center;
    font-weight: 800;
  }
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    li {
      font-size: 1.6rem;
      position: relative;
      margin: 0 auto 20px;
      @media (max-width: 799px) {
        margin: 0 auto 20px;
      }
    }
    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
        width: 100%;
        padding: 3px 20px 20px;
    }
  }
`;