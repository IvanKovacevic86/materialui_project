import { Box, Switch } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontSharpIcon from '@mui/icons-material/StorefrontSharp';
import PersonIcon from '@mui/icons-material/Person';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightTwoToneIcon from '@mui/icons-material/ModeNightTwoTone';


const Sidebar = ({mode, setMode}) => {
  return (
    <Box flex={1} p={2} sx={{ display: {xs: "none", sm: 'block'}}}>
      <Box position="fixed">
       <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
               <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='##simple-list'>
              <ListItemIcon>
               <ArticleTwoToneIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              <ListItemIcon>
               <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              <ListItemIcon>
               <StorefrontSharpIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              <ListItemIcon>
               <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              <ListItemIcon>
               <SettingsTwoToneIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              <ListItemIcon>
               <AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              <ListItemIcon>
               <ModeNightTwoToneIcon/>
              </ListItemIcon>
              <Switch onChange={() => setMode(mode === "light" ? "dark" : "light") }/>
            </ListItemButton>
          </ListItem>
       </List>
       </Box>
    </Box >
  )
}

export default Sidebar
