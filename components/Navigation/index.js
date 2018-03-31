import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { withRouter } from "next/router";
import PropTypes from "prop-types";

const NavLink = styled.a`
  color: #1d67fc;
  padding: 15px;

  &:hover {
    background: yellow;
  }
`;

const Nav = styled.nav`
  margin: 0 auto;
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 10px;

  @media (max-width: 768px) {
    background: #ffff004f;
    padding: 6px;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    width: 100%;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

class Navigation extends React.Component {
  render() {
    const { router } = this.props;
    const nextLink =
      router.pathname === "/" ? (
        <Link href="/from-keycode">
          <NavLink href="/from-keycode">Get key from key code instead</NavLink>
        </Link>
      ) : (
        <Link href="/">
          <NavLink href="/">Get the key code from key instead</NavLink>
        </Link>
      );
    return (
      <Nav>
        <NavList>
          <li>{nextLink}</li>
        </NavList>
      </Nav>
    );
  }
}

Navigation.propTypes = {
  router: PropTypes.any.isRequired,
};

export default withRouter(Navigation);
