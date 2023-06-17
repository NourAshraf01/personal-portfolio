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
                    <ExperienceComponent description={`At Webgen Studio, my journey into web development took flight. Starting as an intern, I immersed myself in a vibrant environment for three months, honing my skills in an agile setting. Collaborating with Git for version control, embracing Scrum methodologies, and utilizing Redmine for efficient ticketing, I gained comprehensive knowledge of working practices. Impressed by my performance, Webgen Studio offered me a permanent position, enabling me to tackle more substantial projects and delve into intricate problem-solving. Fueled by my passion for dynamic animations, I excelled in creating captivating experiences using libraries such as anime.js, gsap, and PixiJS. Webgen Studio became the catalyst for my growth, providing invaluable experience, refining my abilities, and empowering me to thrive as a web developer, ready to tackle any challenge that comes my way.`} img='webgen.png' jobTitle='Frontend Web Developer' companyName='WebGen Studio.' fromDate='July. 2020' toDate='Dec. 2021' location='Remote | Cairo, Egypt' type='Part Time' />
                    <ExperienceComponent description={`My time at Wenda was truly transformative, immersing me in a fast-paced environment where I had to navigate multiple projects simultaneously. This experience broadened my role from a front-end developer to a full-stack developer, allowing me to deploy projects and gain a comprehensive understanding of the development process. I rapidly acquired new skills such as React, Typescript, Next.js, trpc, Express.js, and Dockerization, honing my abilities in a professional setting. Moreover, collaborating with a diverse team from different backgrounds and cultures not only contributed to my professional growth but also enriched me on a personal and social level. Wenda provided the perfect platform for exponential growth, propelling me to new heights in both my technical expertise and overall development.`} img='wendaSrl.svg' jobTitle='Full Stack Developer' companyName='Wenda S.r.l' fromDate='March 2022' toDate='On going' location='Remote | Bolognia, Italy' type='Part Time' />

                    {/* <ExperienceComponent jobTitle='IT Specialist' companyName='PetroJet' fromDate='June 2018' toDate='Oct. 2018' location='Cairo, Egypt' type='Internship'/> */}

                </div>
            </div>
            <div className="title-content-wrapper">
                <h1>Education</h1>
                <div className='experiences'>
                    <ExperienceComponent description={``} img='wwu.png' jobTitle='Information Systems Msc.' companyName='University of Münster (WWU)' fromDate='2022' toDate='On going' location='Münster, Germany' type='Masters' />
                    <ExperienceComponent description={``} img='GUCLogo.png' jobTitle='Business Informatics Bsc.' companyName='German University in Cairo (GUC)' fromDate='2017' toDate='2021' location='Cairo, Egypt' type='Bachelor' />
                </div>
            </div>
        </div>
    </>)
}
export default About;