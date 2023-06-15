import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import './index.css'
import { RoughEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import angular from '../../assets/skills/angular.svg';
import html from '../../assets/skills/html5.svg';
import js from '../../assets/skills/js.svg';
import css from '../../assets/skills/css3.svg';
import nodejs from '../../assets/skills/nodejs.svg';
import tailwind from '../../assets/skills/tailwind.svg';
import reactjs from '../../assets/skills/reactjs.svg';
import typescript from '../../assets/skills/typescript.svg';
import zod from '../../assets/skills/zod.svg';
import trpc from '../../assets/skills/tRPC.svg';
import python from '../../assets/skills/python.svg';
import prisma from '../../assets/skills/prisma.svg';
import postman from '../../assets/skills/postman.svg';
import java from '../../assets/skills/java.svg';
import nextjs from '../../assets/skills/nextjs.svg';
import flutter from '../../assets/skills/flutter.svg';
import docker from '../../assets/skills/docker.svg';
import firebase from '../../assets/skills/firebase.svg';
import pgsql from '../../assets/skills/postfresql.svg';

import profile from '../../assets/myimg.png';
import { useMediaQuery, useTheme } from '@mui/material';
import Skill from '../../components/Skill';


gsap.registerPlugin(TextPlugin, RoughEase, ScrollToPlugin);
const Home = () => {
    const words = ["Nour.", "A Msc. student.", "A Developer."]
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    let boxDims = isMobile ? 65 : 100;
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
            gsap.set(".skills-carousel .skill", {
                x: (i) => (i * boxDims)
            });



            let carouselWidth = (boxDims * 19); //Width of box * no. of boxes

            gsap.to('.skills-carousel .skill', {
                duration: 40,
                ease: "none",
                x: "+=" + (carouselWidth), //move each box by the carouselWidth to right
                modifiers: {
                    x: gsap.utils.unitize(x => (parseFloat(x) % (carouselWidth)) - boxDims) //force x value to be between 0 and carouselWidth using modulus
                },
                repeat: -1,
            });


        });
        return () => ctx.revert();

    }, [boxDims])

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
                        <Skill name='HTML'>
                            <div className='skill'>
                                <img width={boxDims} height={boxDims} src={html} alt="" />
                            </div>
                        </Skill>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={css} alt="" />
                        </div>

                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={js} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={tailwind} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={typescript} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={nodejs} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={reactjs} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={prisma} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={zod} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={trpc} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={python} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={postman} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={java} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={angular} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={docker} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={firebase} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={flutter} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={pgsql} alt="" />
                        </div>
                        <div className='skill'>
                            <img width={boxDims} height={boxDims} src={nextjs} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default Home;