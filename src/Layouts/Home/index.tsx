import gsap, { Power3 } from 'gsap';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './index.css'
import { RoughEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import profile from '../../assets/me.png';
import profile2 from '../../assets/myimg.png';
import { Tooltip, useMediaQuery, useTheme } from '@mui/material';
import Skill from '../../components/Skill';
import { TweenLite } from 'gsap';
import { horizontalLoop } from '../../utils/gsap';
import { PointerEvent } from 'react';

gsap.registerPlugin(TextPlugin, RoughEase, ScrollToPlugin);
const Home = () => {
    const words = ["Nour.", "A Msc. student.", "A Developer."]
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    let boxDims = isMobile ? 65 : 100;
    const [img,setImg] = useState('');
    const skillsRef = useRef<TimelineLite | null>(null);
    const inertiaRef = useRef<TweenLite | null>(null);
    const deltaRef = useRef(0);
    const currentXRef = useRef(0);
    const isMouseDownRef = useRef(false);

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
            gsap.to('.cursor', { opacity: 0, ease: "power2.inOut", repeat: -1 })
            // let boxTl = gsap.timeline();
            // boxTl.to('.box',{})

            let masterTl = gsap.timeline({ repeat: -1 });
            words.forEach(word => {
                let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
                tl.to('.text', { duration: 1, text: word })
                masterTl.add(tl);
            })


            gsap.to(".img-wrapper svg rect", {
                opacity: 0,
                duration: 0.1,
                stagger: { amount: 1, from: "random" }
            });

        });
        return () => ctx.revert();


    }, [])

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const boxes = gsap.utils.toArray(".skills-carousel .skill");
            const loop = horizontalLoop(boxes, {paused: false, draggable: true,repeat:-1,speed:0.5});
            skillsRef.current = loop;
            // gsap.set(".skills-carousel .skill", {
            //     x: (i) => (i * boxDims)
            // });

            // const boxes = gsap.utils.toArray(".skills-carousel .skill");



            // let carouselWidth = (boxDims * 20); //Width of box * no. of boxes

            // skillsRef.current = gsap.to('.skills-carousel .skill', {
            //     duration: 40,
            //     ease: "none",
            //     x: "+=" + (carouselWidth), //move each box by the carouselWidth to right
            //     modifiers: {
            //         x: gsap.utils.unitize(x => (parseFloat(x) % (carouselWidth)) - boxDims) //force x value to be between 0 and carouselWidth using modulus
            //     },
            //     repeat: -1,
            // });



        });
        return () => ctx.revert();

    }, [boxDims])

    useEffect(()=>{
        setImg(profile);
        window.onpointerup = ()=>{
            onPointerUpHandler();
        }
    },[])

 


    function onPointerUpHandler(): void {
        if(inertiaRef.current)
            inertiaRef.current.timeScale(1).duration(0).kill()
        
        triggerIntertia();
        function triggerIntertia(){
            inertiaRef.current = gsap.from(skillsRef.current!, { timeScale: deltaRef.current, duration: 3, ease: Power3.easeOut });
            isMouseDownRef.current = false;
            deltaRef.current = 1;
        } 
    }
    
    function onPointerDownHandler(event: PointerEvent<HTMLDivElement>): void {
        currentXRef.current = event.clientX;
        isMouseDownRef.current = true;
    }
    
    function onPointerMoveHandler(event: PointerEvent<HTMLDivElement>): void {
        if (!isMouseDownRef.current) return;
        const delta = currentXRef.current - event.clientX ;
        deltaRef.current = delta;
        currentXRef.current = event.clientX;
    }

    return (
        <>
            <div className="content">
                <Tooltip title="" >
                    <div className="img-wrapper" >
                        <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_160_1231)">
                                <rect width="63" height="63" fill="#CEC3B8" />
                                <rect y="126" width="63" height="63" fill="#CEC3B8" />
                                <rect y="252" width="63" height="63" fill="#CEC3B8" />
                                <rect y="378" width="63" height="63" fill="#CEC3B8" />
                                <rect y="63" width="63" height="63" fill="#CEC3B8" />
                                <rect y="189" width="63" height="63" fill="#CEC3B8" />
                                <rect y="315" width="63" height="63" fill="#CEC3B8" />
                                <rect y="441" width="63" height="63" fill="#CEC3B8" />
                                <rect x="252" width="63" height="63" fill="#CEC3B8" />
                                <rect x="252" y="126" width="63" height="63" fill="#CEC3B8" />
                                <rect x="252" y="252" width="63" height="63" fill="#CEC3B8" />
                                <rect x="252" y="378" width="63" height="63" fill="#CEC3B8" />
                                <rect x="252" y="63" width="63" height="63" fill="#CEC3B8" />
                                <rect x="252" y="189" width="63" height="63" fill="#CEC3B8" />
                                <rect x="252" y="315" width="63" height="63" fill="#CEC3B8" />
                                <rect x="252" y="441" width="63" height="63" fill="#CEC3B8" />
                                <rect x="126" width="63" height="63" fill="#CEC3B8" />
                                <rect x="126" y="126" width="63" height="63" fill="#CEC3B8" />
                                <rect x="126" y="252" width="63" height="63" fill="#CEC3B8" />
                                <rect x="126" y="378" width="63" height="63" fill="#CEC3B8" />
                                <rect x="126" y="63" width="63" height="63" fill="#CEC3B8" />
                                <rect x="126" y="189" width="63" height="63" fill="#CEC3B8" />
                                <rect x="126" y="315" width="63" height="63" fill="#CEC3B8" />
                                <rect x="126" y="441" width="63" height="63" fill="#CEC3B8" />
                                <rect x="378" width="63" height="63" fill="#CEC3B8" />
                                <rect x="378" y="126" width="63" height="63" fill="#CEC3B8" />
                                <rect x="378" y="252" width="63" height="63" fill="#CEC3B8" />
                                <rect x="378" y="378" width="63" height="63" fill="#CEC3B8" />
                                <rect x="378" y="63" width="63" height="63" fill="#CEC3B8" />
                                <rect x="378" y="189" width="63" height="63" fill="#CEC3B8" />
                                <rect x="378" y="315" width="63" height="63" fill="#CEC3B8" />
                                <rect x="378" y="441" width="63" height="63" fill="#CEC3B8" />
                                <rect x="63" width="63" height="63" fill="#CEC3B8" />
                                <rect x="63" y="126" width="63" height="63" fill="#CEC3B8" />
                                <rect x="63" y="252" width="63" height="63" fill="#CEC3B8" />
                                <rect x="63" y="378" width="63" height="63" fill="#CEC3B8" />
                                <rect x="63" y="63" width="63" height="63" fill="#CEC3B8" />
                                <rect x="63" y="189" width="63" height="63" fill="#CEC3B8" />
                                <rect x="63" y="315" width="63" height="63" fill="#CEC3B8" />
                                <rect x="63" y="441" width="63" height="63" fill="#CEC3B8" />
                                <rect x="315" width="63" height="63" fill="#CEC3B8" />
                                <rect x="315" y="126" width="63" height="63" fill="#CEC3B8" />
                                <rect x="315" y="252" width="63" height="63" fill="#CEC3B8" />
                                <rect x="315" y="378" width="63" height="63" fill="#CEC3B8" />
                                <rect x="315" y="63" width="63" height="63" fill="#CEC3B8" />
                                <rect x="315" y="189" width="63" height="63" fill="#CEC3B8" />
                                <rect x="315" y="315" width="63" height="63" fill="#CEC3B8" />
                                <rect x="315" y="441" width="63" height="63" fill="#CEC3B8" />
                                <rect x="189" width="63" height="63" fill="#CEC3B8" />
                                <rect x="189" y="126" width="63" height="63" fill="#CEC3B8" />
                                <rect x="189" y="252" width="63" height="63" fill="#CEC3B8" />
                                <rect x="189" y="378" width="63" height="63" fill="#CEC3B8" />
                                <rect x="189" y="63" width="63" height="63" fill="#CEC3B8" />
                                <rect x="189" y="189" width="63" height="63" fill="#CEC3B8" />
                                <rect x="189" y="315" width="63" height="63" fill="#CEC3B8" />
                                <rect x="189" y="441" width="63" height="63" fill="#CEC3B8" />
                                <rect x="441" width="63" height="63" fill="#CEC3B8" />
                                <rect x="441" y="126" width="63" height="63" fill="#CEC3B8" />
                                <rect x="441" y="252" width="63" height="63" fill="#CEC3B8" />
                                <rect x="441" y="378" width="63" height="63" fill="#CEC3B8" />
                                <rect x="441" y="63" width="63" height="63" fill="#CEC3B8" />
                                <rect x="441" y="189" width="63" height="63" fill="#CEC3B8" />
                                <rect x="441" y="315" width="63" height="63" fill="#CEC3B8" />
                                <rect x="441" y="441" width="63" height="63" fill="#CEC3B8" />
                            </g>
                            <defs>
                                <clipPath id="clip0_160_1231">
                                    <rect width="500" height="500" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="img">
                            <img src={profile2} alt="" />
                        </div>
                    </div>
                </Tooltip>
                <div className='intro-text'>
                    <h2>
                        <span className='main-text'>Hi, I'm </span>
                        <span className='text'></span>
                        <span className='cursor'>_</span>
                    </h2>
                </div>
                <div className='skills' 
                    // onMouseEnter={onMouseEnterHandler}
                    onPointerDown={onPointerDownHandler}
                    onPointerMove={onPointerMoveHandler}
                    >
                    <span>Tech:</span>
                    <div className='skills-carousel'>
                        <Skill name='h t m l 5' dims={boxDims} />
                        <Skill name='c s s 3' dims={boxDims} />
                        <Skill name='java script' dims={boxDims} />
                        <Skill name='tail wind' dims={boxDims} />
                        <Skill name='s a s s' dims={boxDims} />
                        <Skill name='type script' dims={boxDims} />
                        <Skill name='node js' dims={boxDims} />
                        <Skill name='react js' dims={boxDims} />
                        <Skill name='prisma' dims={boxDims} />
                        <Skill name='zod' dims={boxDims} />
                        <Skill name='tRPC' dims={boxDims} />
                        <Skill name='python' dims={boxDims} />
                        <Skill name='postman' dims={boxDims} />
                        <Skill name='java' dims={boxDims} />
                        <Skill name='angular' dims={boxDims} />
                        <Skill name='docker' dims={boxDims} />
                        <Skill name='firebase' dims={boxDims} />
                        <Skill name='flutter' dims={boxDims} />
                        <Skill name='postgre s q l' dims={boxDims} />
                        <Skill name='next js' dims={boxDims} />
                    </div>
                </div>
            </div>
        </>)
}

export default Home;