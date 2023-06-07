'use client'
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const BlogNavbar = () => {
  return (
    <Navbar className="fj-navbar fj-nav-base px-5" bg="black" expand="lg">
      <Navbar.Brand className="fj-navbar-brand">
        <Link href="/">
          <a>Craig Parfitt UI/UX Designer - 0786 656 2170</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={() => (
              <Link href="/"
                className="fj-navbar-item fj-navbar-link">Home
              </Link>
            )}
          />
          <Nav.Link
            as={() => (
              <Link href="/about"
                className="fj-navbar-item fj-navbar-link">About
              </Link>
            )}
          />
          <Nav.Link
            as={() => (
              <Link
                href="mailto:craig@craigsteel-design.com"
                target="_blank"
                rel="noopener noreferrer"
                className="fj-navbar-item fj-navbar-link">Contact
              </Link>
            )}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default BlogNavbar;
