import { Dropdown, Nav, Navbar, Container } from "react-bootstrap";

const AppHeader = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-white border-bottom shadow-sm py-2 d-flex justify-content-start
"
      sticky="top"
    >
      <Container fluid className="px-4">

        {/* Logo */}
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center gap-2 fw-bold"
        >
          <span
            className="d-flex align-items-center justify-content-center rounded-3 text-white"
            style={{
              width: "40px",
              height: "40px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            }}
          >
            S
          </span>

          <span className="fs-5">
            Shop<span className="text-primary">ify</span>
          </span>
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle aria-controls="main-navbar " />

        <Navbar.Collapse id="main-navbar">
          {/* Navigation */}
          <Nav className="mx-auto gap-lg-2 mt-3 mt-lg-0">
            <Nav.Link
              href="/"
              className="px-3 rounded-3 d-flex align-items-center gap-2"
            >
              <i className="bi bi-house"></i>
              Home
            </Nav.Link>

            <Nav.Link
              href="/orders"
              className="px-3 rounded-3 d-flex align-items-center gap-2"
            >
              <i className="bi bi-bag"></i>
              Orders
            </Nav.Link>
          </Nav>

          {/* Profile */}
          <Dropdown align="end" className="mt-3 mt-lg-0">
            <Dropdown.Toggle
              variant="light"
              id="profile-dropdown"
              className="border-0 d-flex align-items-center gap-2 rounded-3 px-2 py-1 shadow-none"
            >
              {/* Avatar */}
              <span
                className="d-flex align-items-center justify-content-center rounded-circle text-white fw-semibold"
                style={{
                  width: "40px",
                  height: "40px",
                  background:
                    "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  fontSize: "13px",
                }}
              >
                SH
              </span>

              {/* User info */}
              <span className="text-start d-none d-sm-flex flex-column">
                <span className="fw-semibold text-dark">
                  Shakwat
                </span>

                <small className="text-secondary">
                  Admin
                </small>
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="border-0 shadow rounded-4 p-2 mt-2">
              <Dropdown.Item
                href="/profile"
                className="rounded-3 py-2 d-flex align-items-center gap-2"
              >
                <i className="bi bi-person"></i>
                My Profile
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item
                href="/logout"
                className="rounded-3 py-2 d-flex align-items-center gap-2 text-danger"
              >
                <i className="bi bi-box-arrow-right"></i>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;