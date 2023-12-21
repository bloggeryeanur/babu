import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItem = [
  {
    path: '/home',
    name : 'Home',
    id: 1,
  },
  {
    path: '/research',
    name : 'research',
    id: 2,
  },
  {
    path: '/education',
    name : 'Education',
    id: 3,
  },{
    path: '/project',
    name : 'Project',
    id: 4,
  },{
    path: '/about',
    name : 'About',
    id: 5,
  },{
    path: '/contacts',
    name : 'Contact',
    id: 6,
  },
]

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="https://i.ibb.co/C9cfqZL/babuicon.jpg" />
        </Stack>
      </Typography> 
      <Divider />
      <List>
        {navItem.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={item.path}>
              <ListItemText primary={item.name} /></Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/src/assets/photos/babuicon.png" />
            </Stack>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            {/* User Profile photos */}
            <Stack direction="row" spacing={2}>
          <Link to={'/'}>
          <  Avatar alt="Remy Sharp" src="/src/assets/photos/icon.png" /></Link>
            </Stack>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItem.map((item) => (
              <Link to={item.path} key={item.id}>
              <Button  sx={{ color: "#fff" }}>
                {item.name}
              </Button></Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </nav> 
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
            
        </Typography>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
