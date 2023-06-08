import { Box } from '@mui/material';
import ProjectComponent from '../../components/ProjectComponent';
import './index.css'

const Projects = () => {
    return (<>
        <div className="projects-wrapper">
            <h1>Projects</h1>
            <Box sx={{display:'flex',flexDirection:'column', width:'100%',paddingTop:'10px',alignItems:'center'}}>
                <ProjectComponent />
            </Box>
        </div>
    </>)
}

export default Projects;