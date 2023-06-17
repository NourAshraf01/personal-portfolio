import { Box } from '@mui/material';
import ProjectComponent from '../../components/ProjectComponent';
import './index.css'

const Projects = () => {
    return (<>
        <div className="projects-wrapper">
            <h1>Projects</h1>
            <Box sx={{display:'flex',flexDirection:'column', width:'100%',paddingTop:'10px',alignItems:'center',gap:'50px'}}>
                <ProjectComponent techStack={['next js','type script','tRPC','prisma','tailwind']} githubURL='https://github.com/NourAshraf01/nft-distro' previewURL='https://nft-distro.vercel.app/' title='NFT Market Place' imgPreview='nft_distro.png' description='NFT Distro is the ultimate destination for NFT enthusiasts, offering a dynamic marketplace to buy and sell unique digital assets. Explore a vast collection of NFTs, connect with artists and collectors worldwide, and experience the future of digital creativity. Join us today and embark on an exciting NFT journey.'/>
                <ProjectComponent techStack={['node js','type script','angular','s a s s']} githubURL='https://github.com/NourAshraf01/grit' previewURL='https://grit-azure.vercel.app/' title='Retail Website' imgPreview='grit.png' description='Discover Grit, your ultimate online fashion destination. Shop a wide selection of clothing, bags, accessories, and more for women, men, and youth. With Grit, redefine your style effortlessly and embrace fashion that reflects your unique personality. Start your fashion journey with us today.' />
            </Box>
        </div>
    </>)
}

export default Projects;