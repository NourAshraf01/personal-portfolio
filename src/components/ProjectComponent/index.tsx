import { Box, IconButton, Paper, Tooltip, Typography, useTheme,useMediaQuery } from "@mui/material";
import thumbnail from '../../assets/tesla_home.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import './index.css';
import { useEffect, useState } from "react";

type ProjectComponentProps = {
    description: string;
    title: string;
    imgPreview: string;
}

const ProjectComponent = ({title,description,imgPreview}:ProjectComponentProps) => {
    const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    // console.log(isMobile)
    return (<>
        <Paper sx={{ maxWidth: '1000px', minHeight: '400px', borderRadius: '10px' }} className="project-wrapper" elevation={3}>

            <Box sx={{ height: '50%' }}>
                <ProjectPreview imgPreview={imgPreview} />
            </Box>
            <Box sx={{ height: '50%',display:'flex',flexDirection:'column',gap:'10px',alignItems:'center',justifyContent:'center',padding:'2rem 1rem' ,maxWidth:'40%'}}>
                <Typography>{title}</Typography>
                <Typography color={'primary'} sx={{ fontSize: '1.5rem',textAlign:'center',textJustify:'auto' }}>
                   {description}

                </Typography>

            </Box>

        </Paper>

    </>)
}
export default ProjectComponent;


type ProjectPreviewProps = {
    imgPreview: string;
}
const ProjectPreview = ({imgPreview}:ProjectPreviewProps) => {
    const [profile, setProfile] = useState('');

    useEffect(() => {
        import(`../../assets/${imgPreview}`).then(obj => { console.log(obj); setProfile(obj.default) }).catch(err => console.log(err))
    }, [])
    return (<>

        <Box sx={{ position: 'relative', height: '100%', width: '100%', borderRadius: '10px', overflow: 'hidden',display:'flex',alignItems:'center',justifyContent:'center' }} className="project-preview">
            <Box sx={{ fontSize: '44px', width: '100%', height: '100%', position: 'absolute', top: 0, padding: '10px' }} className="project-overlay">
                <Box className="actions" sx={{ display: 'flex', gap: '20px', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Tooltip sx={{ fontSize: 'inherit', color: 'white' }} title={'View code'}>
                        <IconButton >
                            <GitHubIcon fontSize="inherit" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip sx={{ fontSize: 'inherit', color: 'white' }} title={'Preview'}>
                        <IconButton>
                            <VisibilityIcon fontSize="inherit" />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
            <img style={{maxWidth:'100%'}} src={profile} ></img>
        </Box>

    </>)
}