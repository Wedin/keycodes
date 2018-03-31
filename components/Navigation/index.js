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
  width: 100%;
`;

const NavList = styled.ul`
  list-style: none;
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
