import React, {useState} from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    useMediaQuery,
    Drawer,
    List,
    ListItemButton,
    ListItemText, Icon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import {Link, NavLink} from 'react-router-dom';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';

const StyledButton = styled(Button)`
    border-radius: 15px;
`;

const StyledNavLink = styled(NavLink)`
    &.active {
        color: red;
    }  
`;


function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 800px)')
    
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open)
    }
    
    return (
      
      <AppBar position="static">
          <Toolbar sx={{justifyContent: 'space-around', backgroundColor: '#fff'}}>
              <Typography variant="h6">
                  <Link to="/">
                      <span style={{color: 'red'}}>Z</span><span>-Shop</span>
                  </Link>
              </Typography>
              {isMobile ? (
                  <>
                  <IconButton
                      edge="start"
                      color="black"
                      aria-label="menu"
                      onClick={toggleDrawer(true)}
                      >
                      <MenuIcon/>
                  </IconButton>
                      
                      <Drawer 
                          anchor="right"
                          open={drawerOpen}
                          onClose={toggleDrawer(false)}
                          >
                          <Box
                          sx={{width: 250}}
                          role="presentation"
                          onClick={toggleDrawer(false)}
                          onKeyDown={toggleDrawer(false)}
                          >
                              <IconButton
                                  edge="end"
                                  color="black"
                                  aria-label="close"
                                  onClick={toggleDrawer(false)}
                                  sx={{position: 'absolute', right: '7px'}}
                              >
                                  <CloseIcon/>
                              </IconButton>
                          <List>
                              <ListItemButton style={{marginTop: '15px'}} component={StyledNavLink} to="/" activeClassName="active">
                                  <ListItemText primary="Home"/>
                              </ListItemButton>
                              
                              <ListItemButton component={StyledNavLink} to="/products" activeClassName="active">
                                  <ListItemText primary="Shop"/>
                              </ListItemButton>
                              
                              <ListItemButton component={StyledNavLink} to="/about" activeClassName="active">
                                  <ListItemText primary="About"/>
                              </ListItemButton>
                              
                              <ListItemButton component={StyledNavLink} to="/contact" activeClassName="active">
                                  <ListItemText primary="Contact"/>
                              </ListItemButton>

                              <ListItemButton component={StyledNavLink} to="/profile" activeClassName="active">
                                  <PermIdentityOutlinedIcon/>
                                  <ListItemText primary="Profile"/>
                              </ListItemButton>

                              <ListItemButton component={StyledNavLink} to="/cart" activeClassName="active">
                                  <ShoppingCartOutlinedIcon/>
                                  <ListItemText primary="Cart"/>
                              </ListItemButton>

                              <ListItemButton component={StyledNavLink} to="/login" activeClassName="active">
                                  <StyledButton variant="contained" className="login">
                                      Log In
                                  </StyledButton>
                              </ListItemButton>

                              <ListItemButton component={StyledNavLink} to="/signup" activeClassName="active">
                                  <StyledButton variant="outlined" className="signup">
                                      Sign Up
                                  </StyledButton>
                              </ListItemButton>
                              
                          </List>
                          </Box>
                      </Drawer>
                  </>

                  ) : (
                      <>
                      <Box sx={{display: 'flex',flexGrow: 1, justifyContent: 'center',gap: '16px'}}>
                          <StyledNavLink to="/" activeClassName="active">
                              <Typography>Home</Typography>
                          </StyledNavLink>
                          
                          <StyledNavLink to="/products" activeClassName="active">
                              <Typography>Shop</Typography>
                          </StyledNavLink>
                          
                          <StyledNavLink to="/about" activeClassName="active">
                              <Typography>About</Typography>
                          </StyledNavLink>

                          <StyledNavLink to="/contact" activeClassName="active">
                              <Typography>Contact</Typography>
                          </StyledNavLink>
                      </Box>
                  
                          <Box style={{display: 'flex', alignItems: 'center', columnGap: '16px'}}>
                              <StyledNavLink to="/profile" activeClassName="active">
                                 <PermIdentityOutlinedIcon/>
                              </StyledNavLink>
                              
                              <StyledNavLink to="/cart" activeClassName="active">
                                  <ShoppingCartOutlinedIcon/>
                              </StyledNavLink>
    
                              <StyledNavLink to="/login" activeClassName="active">
                                  <StyledButton variant="contained" className="login">
                                      Log In
                                  </StyledButton>
                              </StyledNavLink>
                              <StyledNavLink to="/register" activeClassName="active">
                                  <StyledButton variant="outlined" className="signup">
                                      Sign Up
                                  </StyledButton>
                              </StyledNavLink>
                          </Box>
                      </>
              )}
          </Toolbar>
      </AppBar>
            
        
    );
}

export default Header;
