import ExperienceComponent from '../../components/ExperienceComponent';
import './index.css'
const About = () => {
    return (<>
        <div className="about-wrapper">
            <div className="title-content-wrapper">
                <h1>About Me</h1>
                <span>Welcome to my portfolio! I'm a passionate full-stack web developer with a background in business informatics and a current focus on information systems in my master's program. I thrive on exploring the ever-evolving world of web development and finding innovative solutions to real-world challenges. From designing elegant user interfaces to building robust back-end systems, I aim to create seamless digital experiences that captivate users. Join me on this exciting journey as we shape the future of the web together!</span>
            </div>
            <div className="title-content-wrapper">
                <h1>Work Experience</h1>
                <div className='experiences'>
                    <ExperienceComponent description={`Working in `} img='webgen.png' jobTitle='Frontend Web Developer' companyName='WebGen Studio.' fromDate='July. 2020' toDate='Dec. 2021' location='Remote | Cairo, Egypt' type='Part Time'/>
                    <ExperienceComponent description={`Working in Wenda was a real eye opener for me, being embedded in an environment where a lot of requests need to be rolled out`} img='wendaSrl.svg' jobTitle='Full Stack Developer' companyName='Wenda S.r.l' fromDate='March 2022' toDate='On going' location='Remote | Bolognia, Italy' type='Part Time'/>

                    {/* <ExperienceComponent jobTitle='IT Specialist' companyName='PetroJet' fromDate='June 2018' toDate='Oct. 2018' location='Cairo, Egypt' type='Internship'/> */}

                </div>
            </div>
            <div className="title-content-wrapper">
                <h1>Education</h1>
                <div className='experiences'>
                    <ExperienceComponent description={`• Planing the application architecture from A to Z and deciding on the fitting technologies to use for the project.
• Develop, integrate and maintain microservices.
• Lead small teams through projects (Assigning tasks, assure that the tasks being submitted are of quality and ensuring they are finished within
their sprint)`} img='wwu.png' jobTitle='Information Systems Msc.' companyName='University of Münster (WWU)' fromDate='2022' toDate='On going' location='Münster, Germany' type='Masters'/>
                    <ExperienceComponent description={`• Planing the application architecture from A to Z and deciding on the fitting technologies to use for the project.
• Develop, integrate and maintain microservices.
• Lead small teams through projects (Assigning tasks, assure that the tasks being submitted are of quality and ensuring they are finished within
their sprint)`} img='GUCLogo.png' jobTitle='Business Informatics Bsc.' companyName='German University in Cairo (GUC)' fromDate='2017' toDate='2021' location='Cairo, Egypt' type='Bachelor'/>
                </div>
            </div>
        </div>
    </>)
}
export default About;