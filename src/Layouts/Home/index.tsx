import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import './index.css'
import { RoughEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import angular from '../../assets/skills/angular.png';
import html from '../../assets/skills/html5.svg';
import js from '../../assets/skills/js.svg';
import css from '../../assets/skills/css3.svg';
import nodejs from '../../assets/skills/nodejs.svg';
import tailwind from '../../assets/skills/tailwind.png';
import reactjs from '../../assets/skills/reactjs.svg';
import typescript from '../../assets/skills/typescript.png';
import zod from '../../assets/skills/zod.png';
import trpc from '../../assets/skills/tRPC.png';
import python from '../../assets/skills/python.png';
import prisma from '../../assets/skills/prisma.png';
import postman from '../../assets/skills/postman.png';
import java from '../../assets/skills/java.png';
import profile from '../../assets/myimg.png';


gsap.registerPlugin(TextPlugin, RoughEase, ScrollToPlugin);
const Home = () => {
    const words = ["Nour.", "A Msc. student.", "A Developer."]
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


            gsap.set(".skills-carousel .skill", {
                x: (i) => i * 100
            });

            let carouselWidth = 100 * 14; //Width of box * no. of boxes

            gsap.to('.skills-carousel .skill', {
                duration: 40,
                ease: "none",
                x: "+=" + (carouselWidth), //move each box 500px to right
                modifiers: {
                    x: gsap.utils.unitize(x => (parseFloat(x) % (carouselWidth))) //force x value to be between 0 and 500 using modulus
                },
                repeat: -1,
            });


            gsap.to(".img-wrapper svg rect", {
                opacity:0,
                duration: 0.1,
                stagger: { amount: 1, from: "random" }
              });

        });
        return () => ctx.revert();


    }, [])

    return (
        <>
            <div className="content">
                <div className="img-wrapper">
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
                        <img src={profile} alt="" />
                    </div>
                </div>
                <div className='intro-text'>
                    <h2>
                        <span className='main-text'>Hi, I'm </span>
                        <span className='text'></span>
                        <span className='cursor'>_</span>
                    </h2>
                </div>
                <div className='skills'>
                    <span>Tech:</span>
                    <div className='skills-carousel'>
                        <div className='skill'>
                            <img width={100} height={100} src={html} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={100} height={100} src={css} alt="" />
                        </div>

                        <div className='skill'>
                            <img width={100} height={100} src={js} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={100} height={100} src={tailwind} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={100} height={100} src={typescript} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={100} height={100} src={nodejs} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={100} height={100} src={reactjs} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={100} height={100} src={prisma} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={100} height={100} src={zod} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={100} height={100} src={trpc} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={100} height={100} src={python} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={100} height={100} src={postman} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={100} height={100} src={java} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={100} height={100} src={angular} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default Home;