import { Box } from '@mui/material';
import ProjectComponent from '../../components/ProjectComponent';
import './index.css'

const Projects = () => {
    return (<>
        <div className="projects-wrapper">
            <h1>Projects</h1>
            <Box sx={{display:'flex',flexDirection:'column', width:'100%',paddingTop:'10px',alignItems:'center',gap:'50px'}}>
                <ProjectComponent title='NFT Market Place' imgPreview='nft_marketplace.png' description='NFT Distro is the ultimate destination for NFT enthusiasts, offering a dynamic marketplace to buy and sell unique digital assets. Explore a vast collection of NFTs, connect with artists and collectors worldwide, and experience the future of digital creativity. Join us today and embark on an exciting NFT journey.'/>
                <ProjectComponent title='Tourism Website' imgPreview='tesla_home.png' description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquid dicta expedita deserunt nihil modi eaque nam facere dolorem deleniti, recusandae reiciendis fuga sequi cupiditate suscipit, quisquam quae, dignissimos quos.' />
            </Box>
        </div>
    </>)
}

export default Projects;