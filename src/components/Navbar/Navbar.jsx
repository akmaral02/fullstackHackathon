import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../../images/logo.png";
import Image from "mui-image";
import { Link } from "react-router-dom";
import "./Navbar.css";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CallIcon from "@mui/icons-material/Call";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

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
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
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
      а
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
      sx={{ backgroundColor: "transparent" }}
    >
      <Link className="menulink" to={"/auth"}>
        <MenuItem onClick={handleMenuClose}>Login</MenuItem>
      </Link>
      <Link className="menulink" to={"/mytours"}>
        <MenuItem onClick={handleMenuClose}>My Tours</MenuItem>
      </Link>
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
      <Link className="menulink" to="/">
        <MenuItem className="nav">HOME</MenuItem>
      </Link>
      <Link className="menulink" to="/tours">
        <MenuItem className="nav">PACKAGES</MenuItem>
      </Link>
      <Link className="menulink" to="/gallery">
        <MenuItem className="nav">GALLERY</MenuItem>
      </Link>
      <Link className="menulink" to="/mytours">
        <MenuItem className="nav">MY TOURS</MenuItem>
      </Link>
    </Menu>
  );

  return (
    <div className="cont">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <IconButton
              onClick={handleMobileMenuOpen}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, display: { xs: "flex", md: "none", lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box flexGrow={3}>
              <Link to={"/"}>
                <Image src={Logo} height={48} width={89} />
              </Link>
            </Box>
            <Box flexGrow={15} alignContent={"center"}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Montserrat",
                  fontWeight: 800,
                  fontSize: 25,
                  letterSpacing: ".05rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                SKY HIGH
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 15,
                columnGap: 2,
                display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
                justifyContent: "center",
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
                <MenuItem className="nav">MY TOURS</MenuItem>
              </Link>
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconButton size="large" edge="end" color="inherit">
                <CallIcon />
              </IconButton>
            </Box>

            <Box sx={{ display: { xs: "none", md: "none", lg: "flex" } }}>
              <Link className="links" to={"/mytours"}>
                <IconButton size="large" edge="end" color="inherit">
                  <ShoppingBagOutlinedIcon />
                </IconButton>
              </Link>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "none", lg: "flex" },
              }}
            >
              {
                <Link className="links" to={"/auth"}>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    color="inherit"
                  >
                    <PermIdentityOutlinedIcon />
                  </IconButton>
                </Link>
              }
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none", sm: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
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
