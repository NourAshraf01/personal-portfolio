import { Button, IconButton, Link, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () => {
    return (<>
        <Box sx={{ display: 'flex', gap: '5rem', padding: '0 1rem', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1>Contact</h1>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5rem', padding: '5rem' }}>
                <h3 style={{textAlign:'center'}}>Feel free to reach out to me via email or connect with me on LinkedIn:</h3>

                <Box sx={{display:'grid',gap:'5rem'}}>
                    <Paper elevation={3} sx={{ padding: '10px',borderRadius:'15px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column',alignItems:'center',justifyContent:'center',gap:'10px' }}>
                            <h2>Mail:</h2>
                            <Link sx={{ display: 'flex',alignSelf:'start',  alignItems: 'center', textDecoration: 'none',fontSize:'1.2rem' }} target="_blank" href="mailto:nourashraf225@gmail.com">
                                <IconButton href="mailto:nourashraf225@gmail.com" >
                                    <EmailIcon />

                                </IconButton>
                                <Typography sx={{fontSize:'2.2rem',alignSelf:'center'}}>nourashraf225@gmail.com</Typography>

                            </Link>
                        </Box>

                    </Paper>

                    <Paper elevation={3} sx={{ padding: '10px',borderRadius:'15px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column',alignItems:'center',justifyContent:'center',gap:'10px' }}>
                            <h2 style={{textAlignLast:'center'}}>LinkedIn:</h2>
                            <Link sx={{ display: 'flex',alignSelf:'start', alignItems: 'center', textDecoration: 'none',fontSize:'1.2rem' }} target="_blank"  href="https://www.linkedin.com/in/nour-abdelmaksoud-287393178/">
                                <IconButton href="https://www.linkedin.com/in/nour-abdelmaksoud-287393178/" target="_blank" >
                                    <LinkedInIcon />

                                </IconButton>
                                <Typography sx={{fontSize:'2.2rem'}}>Nour Abdelmaksoud</Typography>

                            </Link>
                        </Box>

                    </Paper>

                </Box>
            </Box>
        </Box>
    </>)
}

export default Contact;