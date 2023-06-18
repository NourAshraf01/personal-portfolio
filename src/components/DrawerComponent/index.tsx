import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import ConstructionIcon from '@mui/icons-material/Construction';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
const DrawerComponent = () => {

    const [open, setOpen] = useState(false);

    return (<>
        <IconButton sx={{ fontSize: 'inherit' }} onClick={() => { setOpen(true) }}>
            {<MenuIcon />}
        </IconButton>
        <Drawer open={open} anchor={'right'} sx={{ fontSize: '32px', zIndex: 9999, width: '50%' }}>
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

                <ListItem sx={{ padding: 0 }}>
                    <ListItemButton download={true} href={process.env.PUBLIC_URL+'/Nour_Abdelmaksoud_CV.pdf'} onClick={() => setOpen(false)}>
                        <ListItemIcon>
                            <FileDownloadIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Resume
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider sx={{ paddingTop: '20px' }}>
                <Typography>Social</Typography>
            </Divider>
            <List>
                <ListItemButton href='https://github.com/NourAshraf01' target='_blank'>
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Github
                    </ListItemText>
                </ListItemButton>
                <ListItemButton href='https://www.linkedin.com/in/nour-abdelmaksoud-287393178/' target='_blank'>
                    <ListItemIcon>
                        <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText>
                        LinkedIn
                    </ListItemText>
                </ListItemButton>
            </List>
        </Drawer>
    </>)
}

export default DrawerComponent;