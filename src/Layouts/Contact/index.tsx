import { Button, FormControl, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GithubFill, LinkedinBoxFill } from "akar-icons";

const Contact = () => {
    return (<>
        <Box sx={{ display: 'flex', gap: '5rem', padding: '0 1rem', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h5">Contact</Typography>

            <Paper elevation={3} sx={{ padding: '5%', borderRadius: '10px' }}>
                <form action="mailto:nourashraf225@gmail.com" method="post" encType="text/plain">
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                            <TextField label="First Name" placeholder="Enter first name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField label="Last Name" placeholder="Enter last name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField type={'email'} label="Email" placeholder="Enter email" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label="Message" placeholder="Type your message here" multiline rows={4} variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <Button type="submit" defaultValue={'Send'} variant="outlined" color="primary" fullWidth>Submit</Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Box>
    </>)
}

export default Contact;