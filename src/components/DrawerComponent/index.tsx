import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import ConstructionIcon from '@mui/icons-material/Construction';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
const DrawerComponent = () => {

    const [open, setOpen] = useState(false);

    return (<>
            <IconButton sx={{ fontSize: 'inherit' }} onClick={() => { setOpen(true) }}>
                {<MenuIcon  />}
            </IconButton>
            <Drawer open={open} anchor={'right'} sx={{ fontSize: '32px', zIndex: 9999 ,width:'50%'}}>
                <Divider>
                    <IconButton onClick={() => { setOpen(false) }} >
                        <CloseIcon fontSize='inherit' />
                    </IconButton>
                </Divider>
                <List>
                    <ListItem sx={{ padding: 0, fontSize: '32px' }}>
                        <ListItemButton href='#home' onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Home
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem sx={{ padding: 0 }}>
                        <ListItemButton href='#about' onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText>
                                About
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem sx={{ padding: 0 }}>
                        <ListItemButton href='#projects' onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <ConstructionIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Projects
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem sx={{ padding: 0 }}>
                        <ListItemButton href='#contact' onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Contact
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
    </>)
}

export default DrawerComponent;