import * as React from "react";
import { styled } from "@mui/material/styles";
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {
  InputBase,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Menu,
  MenuItem,
} from "@mui/material";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CallIcon from "@mui/icons-material/Call";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useAuth } from "../../contexts/AuthContextProvider";
import LogoutIcon from "@mui/icons-material/Logout";

import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ICON_COLOR, MAIN_COLOR } from "../../helpers/consts";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  // borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  // color: `${MAIN_COLOR}`,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // color: `${MAIN_COLOR}`,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    // color: `${MAIN_COLOR}`,
  },
}));

export default function Navbar() {
  const { user, logout } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link className="menulink" to="/auth">
          LOGIN
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link className="menulink" to="/mytours">
          MY TOURS
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link className="menulink" to="/contactus">
          CONTACT US
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{ backgroundColor: "transparent" }}
    >
      <Link className="links" to="/">
        <MenuItem className="nav">HOME</MenuItem>
      </Link>
      <Link className="links" to="/tours">
        <MenuItem className="nav">PACKAGES</MenuItem>
      </Link>
      <Link className="links" to="/contactus">
        <MenuItem className="nav">CONTACT US</MenuItem>
      </Link>
      <Link className="links" to="/mytours">
        <MenuItem className="nav">MY TOURS</MenuItem>
      </Link>
      {/* {user === "admin@admin.com" ? (
        <Link className="links" to="/admin">
          <MenuItem className="nav">ADMIN</MenuItem>
        </Link>
      ) : null} */}
    </Menu>
  );

  return (
    <div className="cont">
      <Box
        sx={{
          flexGrow: 12,
          // marginBottom: 15,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            // background: "#ffffff",
            // opacity: 50,
            background: "rgba(255, 255, 255, 0.10)",
            backdropFilter: "blur(100px)",
            // boxShadow: "inset 0px -10px 100px rgba(255, 255, 255, 0.80)",
          }}
        >
          <Toolbar>
            <Box
              flexGrow={8}
              display="flex"
              alignContent="center"
              // backgroundColor="red"
            >
              <IconButton
                onClick={handleMobileMenuOpen}
                size="large"
                edge="start"
                aria-label="open drawer"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none", lg: "none", sm: "none" },
                }}
              >
                <MenuIcon />
              </IconButton>

              <Link to={"/"}>
                <Box
                  alignContent="center"
                  // backgroundColor="black"
                  component="img"
                  sx={{
                    height: 48,
                    display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
                  }}
                  alt="logo"
                  src={Logo}
                ></Box>
              </Link>
              <Box
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
              >
                <Typography
                  // color={`${ICON_COLOR}`}
                  sx={{
                    display: {
                      sm: "none",
                      xs: "none",
                      md: "block",
                      lg: "block",
                    },
                    fontFamily: "Montserrat",
                    fontWeight: { lg: 800, md: 800, sm: 400 },
                    variant: { md: "h6", lg: "h6", sm: "h4" },
                    fontSize: { md: 25, lg: 25, sm: 20, xs: 16 },
                    letterSpacing: ".05rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  SKY HIGH
                </Typography>
              </Box>
            </Box>
            <Box
              flexGrow={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                columnGap: { md: 1.5, sm: 0.5, lg: 2 },
                display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                // color: `${MAIN_COLOR}`,
                // color: "#284853",
              }}
            >
              <Link className="links" to="/">
                <MenuItem className="nav">HOME</MenuItem>
              </Link>
              <Link className="links" to="/tours">
                <MenuItem className="nav">PACKAGES</MenuItem>
              </Link>
              <Link className="links" to="/gallery">
                <MenuItem className="nav">GALLERY</MenuItem>
              </Link>
              <Link className="links" to="/mytours">
                <MenuItem className="nav">MY PLANTS</MenuItem>
              </Link>
              {user.email === "admin@admin.com" ? (
                <Link className="links" to="/admin">
                  <MenuItem className="nav">ADMIN</MenuItem>
                </Link>
              ) : null}
            </Box>

            <Box
              flexGrow={1}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  // value={search}
                  // onChange={(e) => {
                  //   setSearch(e.target.value);
                  // }}
                  sx={{
                    border: 0.1,
                    color: "#EFEFEF",
                    borderRadius: 50,
                    ":hover": {
                      // color: `${ICON_COLOR}`,
                      color: "white",
                      transition: "1s",
                      boxShadow: "5px 5px 10px #ccc",
                    },
                  }}
                />
              </Search>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Link className="links" to={"/contactus"}>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <CallIcon />
                  </IconButton>
                </Link>
              </Box>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Link className="links" to={"/mytours"}>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <ShoppingBagOutlinedIcon />
                  </IconButton>
                </Link>
              </Box>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {user ? (
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={logout}
                    color="inherit"
                  >
                    <LogoutIcon />
                  </IconButton>
                ) : (
                  <Link className="links" to={"/auth"}>
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      color="inherit"

                      // aria-controls={menuId}
                      // aria-haspopup="true"
                    >
                      <PermIdentityOutlinedIcon />
                    </IconButton>
                  </Link>
                )}
              </Box>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none", sm: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </div>
  );
}
