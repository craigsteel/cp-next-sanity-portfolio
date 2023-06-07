'use client'
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { motion } from "framer-motion";

const BlogNavbar = () => {
  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="flex center justify-between"
    >
      <Navbar className="mb-5 text-lg opacity-70 hover:opacity-100 transition duration-300">
        <Navbar.Brand className="fj-navbar-brand">
          <Link href="/">Craig Parfitt UI/UX Designer - 0786 656 2170</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              as={() => (
                <Link href="/" className="fj-navbar-item fj-navbar-link">
                  Home
                </Link>
              )}
            />
            <Nav.Link
              as={() => (
                <Link href="/about" className="fj-navbar-item fj-navbar-link">
                  About
                </Link>
              )}
            />
            <Nav.Link
              as={() => (
                <Link
                  href="mailto:craig@craigsteel-design.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fj-navbar-item fj-navbar-link"
                >
                  Contact
                </Link>
              )}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </motion.div>
  );
}
export default BlogNavbar;
