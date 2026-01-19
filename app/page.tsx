
import {lists} from "@/utils/items"
import table from "@/utils/table"
import table2 from "@/utils/table2"
import Image from "next/image"
import uplanetable from "@/public/uplanetable.avif"

import {PrimaryButton, SecondaryButton} from "@/app/components/ui/buttons"
import HamburgerButton from "@/app/components/ui/hamburgerButton"
import footer from "@/public/img.png"

import pftop from "@/public/blocks/pftop.png"

import bargrid from "@/public/bargrid.png"

import getstart from "@/public/getstart01.png"

import lefttopleft from "@/public/blocks/lefttopleft.png"
import lefttopright from "@/public/blocks/lefttopright.png"
import leftbottomleft from "@/public/blocks/leftbottomleft.png"
import leftbottomright from "@/public/blocks/leftbottomright.png"

import righttopleft from "@/public/blocks/righttopleft.png"
import righttopright from "@/public/blocks/righttopright.png"
import rightbottomleft from "@/public/blocks/rightbttomleft.png"
import rightbottomright from "@/public/blocks/rightbottomright.png"

import mobilegrad from "@/public/mobilegrad.png"
import HeroSection from "@/app/components/heroSection"

const social = [
    {
        icon: (
            <svg role="img" viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg">
                <title>X</title>
                <path
                    d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/>
            </svg>
        )
    },
    {
        icon: (
            <svg role="img" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
                <title>Facebook</title>
                <path
                    d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
            </svg>
        )
    }
]

const home = [
    {
        name: "Feature",
        key: "feature"
    },
    {
        name: "Testimonials",
        key: "testimonials"
    },
    {
        name: "Comparison",
        key: "comparison"
    },
    {
        name: "About Us",
        key: "about_us"
    },
    {
        name: "Why Uplane",
        key: "why_uplane"
    }
]

const productFeatures = [
    {
        name: "Market Research"
    },
    {
        name: "Ad Creation"
    },
    {
        name: "Landing Pages & Lead Capture"
    },
    {
        name: "Campaign Launch & Management"
    },
    {
        name: "Optimization & Learning Engine"
    },
    {
        name: "Reporting & Insights"
    },
    {
        name: "Chat Interface"
    },
]

export default function Home() {
    return (
        <div className={`min-h-screen w-full bg-[#f5f5f5] flex flex-col items-center overflow-x-hidden`}>

            {/* Navbar */}
            <div
                className={`z-99 fixed h-[89px] bg-[#f5f5f5] w-full border-b border-[#e6e6e6] font-sans font-medium text-[16px]`}>
                <div className={`h-full max-w-[450px] md:max-w-[900px] lg:max-w-[1320px] mx-auto w-full`}>
                    <div className={`h-full w-full flex items-center justify-between md:px-[30px] lg:px-[40px]`}>
                        <div className={`flex items-center gap-x-[30px]`}>
                            <div>
                                <Image src={`/logo.png`} alt={`Logo`} height={30} width={123}/>
                            </div>
                            <ul className={`hidden lg:flex items-center gap-x-[22px]`}>
                                {
                                    lists.map((e, i) => (
                                        <li key={i}>
                                            <a>{e.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={`hidden h-[50px] w-[250px] lg:flex gap-x-[10px]`}>
                            <SecondaryButton text={"Login"}/>
                            <PrimaryButton text={"Get Started"}/>
                        </div>
                        <div className={`block lg:hidden`}>
                            <HamburgerButton/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <HeroSection/>

            {/* Bar */}
            <div className="relative w-full h-[41px]">
                <svg
                    className="absolute top-0 left-0 w-full h-[2px]"
                    viewBox="0 0 1439 2"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line x1="0" y1="0.5" x2="1439" y2="0.5" stroke="#D9D9D9"/>
                    <line x1="0" y1="1.5" x2="1439" y2="1.5" stroke="white"/>
                </svg>

                <svg
                    className="absolute bottom-0 left-0 w-full h-[2px]"
                    viewBox="0 0 1439 2"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line x1="0" y1="0.5" x2="1439" y2="0.5" stroke="#D9D9D9"/>
                    <line x1="0" y1="1.5" x2="1439" y2="1.5" stroke="white"/>
                </svg>

                <div className={`relative w-[450px] md:w-[800px] lg:w-[1120px] xl:w-[1240px] mx-auto h-[41px]`}>
                    <div className="absolute inset-0 z-0" />

                    <svg className={`z-10 absolute top-[-2px] left-[-3px]`} width="12" height="6" viewBox="0 0 12 6"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.86035 5.02893C7.11962 5.0289 8.29008 4.86725 9.1709 4.58655C9.60697 4.44756 10.0147 4.26579 10.3291 4.02893C10.6308 3.8015 10.9697 3.42395 10.9697 2.88928C10.9696 2.35461 10.6308 1.97702 10.3291 1.74963C10.0147 1.51276 9.60701 1.33101 9.1709 1.19202C8.29008 0.911313 7.11962 0.749666 5.86035 0.749634C4.60094 0.749634 3.42973 0.911285 2.54883 1.19202C2.11288 1.33097 1.70591 1.51286 1.3916 1.74963C1.10874 1.96276 0.792439 2.30775 0.753906 2.79065L0.75 2.88928L0.753906 2.98792C0.792307 3.47101 1.10867 3.81575 1.3916 4.02893C1.70591 4.26575 2.11284 4.44757 2.54883 4.58655C3.42973 4.86728 4.60094 5.02893 5.86035 5.02893Z"
                            fill="white" stroke="#E0E0E0" stroke-width="1.5"/>
                    </svg>

                    <svg className={`z-10 absolute bottom-[-2px] left-[-3px]`} width="12" height="6" viewBox="0 0 12 6"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.86035 5.02893C7.11962 5.0289 8.29008 4.86725 9.1709 4.58655C9.60697 4.44756 10.0147 4.26579 10.3291 4.02893C10.6308 3.8015 10.9697 3.42395 10.9697 2.88928C10.9696 2.35461 10.6308 1.97702 10.3291 1.74963C10.0147 1.51276 9.60701 1.33101 9.1709 1.19202C8.29008 0.911313 7.11962 0.749666 5.86035 0.749634C4.60094 0.749634 3.42973 0.911285 2.54883 1.19202C2.11288 1.33097 1.70591 1.51286 1.3916 1.74963C1.10874 1.96276 0.792439 2.30775 0.753906 2.79065L0.75 2.88928L0.753906 2.98792C0.792307 3.47101 1.10867 3.81575 1.3916 4.02893C1.70591 4.26575 2.11284 4.44757 2.54883 4.58655C3.42973 4.86728 4.60094 5.02893 5.86035 5.02893Z"
                            fill="white" stroke="#E0E0E0" stroke-width="1.5"/>
                    </svg>

                    <svg className={`z-10 absolute top-[-2px] right-[-3px]`} width="12" height="6" viewBox="0 0 12 6"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.86035 5.02893C7.11962 5.0289 8.29008 4.86725 9.1709 4.58655C9.60697 4.44756 10.0147 4.26579 10.3291 4.02893C10.6308 3.8015 10.9697 3.42395 10.9697 2.88928C10.9696 2.35461 10.6308 1.97702 10.3291 1.74963C10.0147 1.51276 9.60701 1.33101 9.1709 1.19202C8.29008 0.911313 7.11962 0.749666 5.86035 0.749634C4.60094 0.749634 3.42973 0.911285 2.54883 1.19202C2.11288 1.33097 1.70591 1.51286 1.3916 1.74963C1.10874 1.96276 0.792439 2.30775 0.753906 2.79065L0.75 2.88928L0.753906 2.98792C0.792307 3.47101 1.10867 3.81575 1.3916 4.02893C1.70591 4.26575 2.11284 4.44757 2.54883 4.58655C3.42973 4.86728 4.60094 5.02893 5.86035 5.02893Z"
                            fill="white" stroke="#E0E0E0" stroke-width="1.5"/>
                    </svg>

                    <svg className={`z-10 absolute bottom-[-2px] right-[-3px]`} width="12" height="6" viewBox="0 0 12 6"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.86035 5.02893C7.11962 5.0289 8.29008 4.86725 9.1709 4.58655C9.60697 4.44756 10.0147 4.26579 10.3291 4.02893C10.6308 3.8015 10.9697 3.42395 10.9697 2.88928C10.9696 2.35461 10.6308 1.97702 10.3291 1.74963C10.0147 1.51276 9.60701 1.33101 9.1709 1.19202C8.29008 0.911313 7.11962 0.749666 5.86035 0.749634C4.60094 0.749634 3.42973 0.911285 2.54883 1.19202C2.11288 1.33097 1.70591 1.51286 1.3916 1.74963C1.10874 1.96276 0.792439 2.30775 0.753906 2.79065L0.75 2.88928L0.753906 2.98792C0.792307 3.47101 1.10867 3.81575 1.3916 4.02893C1.70591 4.26575 2.11284 4.44757 2.54883 4.58655C3.42973 4.86728 4.60094 5.02893 5.86035 5.02893Z"
                            fill="white" stroke="#E0E0E0" stroke-width="1.5"/>
                    </svg>

                    <div className="z-0 relative w-full h-[41px]">
                        <div className={`h-full w-full opacity-50 bg-grid-texture`}>

                        </div>
                    </div>
                </div>
            </div>

            {/* Product Features */}
            <div className={`mt-[100px] w-full min-h-[1494px] flex flex-col items-center gap-y-[50px]`}>
                <div
                    className={`w-[450px] md:w-[800px] lg:w-[1020px] xl:w-[1240px] h-[228px] flex flex-col items-center gap-y-[14px]`}>
                    <div
                        className={`font-sans font-medium text-[16px] text-[#2476FF] leading-[1.2] tracking-[-0.02em]`}>Product
                        Features
                    </div>
                    <div className={`w-full h-[190px] flex flex-col items-center gap-y-[18px]`}>
                        <div
                            className={`font-inter font-semibold text-[34px] md:text-[52px] leading-[1.2] tracking-[-0.02em] text-center`}>All-in-one <br/> AI
                            marketing platform
                        </div>
                        <div
                            className={`text-[#52555B] md:w-[600px] font-sans font-medium text-[16px] leading-[1.5] tracking-[-0.02em] text-center`}>From
                            research to reporting, Uplane automates your entire performance marketing workflow, so
                            you can move faster, create smarter, and scale effortlessly.
                        </div>
                    </div>
                </div>

                <div
                    className="md:w-[800px] lg:w-[1240px] mx-auto min-h-[1216px] flex flex-col gap-y-[60px] items-center">

                    <div className={`flex w-full justify-center`}>
                        <div
                            style={{backgroundImage: `url(${pftop.src})`}}
                            className="w-[400px] md:w-[786px] h-[65px] bg-cover bg-center"
                        />
                    </div>

                    <div
                        className="w-full flex flex-col md:flex-row justify-center gap-y-[66px] md:gap-y-0 gap-x-[20px]">
                        <div className="relative h-[450px] lg:h-[564px] w-[440px] md:w-[390px] lg:w-[500px] xl:w-1/2">
                            {/* LEFT */}
                            <Image src={lefttopleft} alt={""} height={66} width={66}
                                   className={`absolute z-10 top-[-58px] left-[-58px] lg:top-[-58px] lg:left-[-58px] xl:top-[-58px] xl:left-[-58px]`}/>
                            <div className="absolute top-0 left-0 h-full">
                                <svg
                                    className="w-[3px] h-full"
                                    viewBox="0 0 3 568"
                                    preserveAspectRatio="none"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line x1="1.5" y1="0" x2="1.5" y2="568" stroke="#D6D6D6" strokeDasharray="5 5"/>
                                    <line x1="0.5" y1="0" x2="0.5" y2="568" stroke="white"/>
                                </svg>
                            </div>

                            {/* TOP */}
                            <Image src={lefttopleft} alt={""} height={66} width={66}
                                   className={`absolute md:hidden z-10 rotate-90 top-[-58px] right-[-58px] lg:top-[-58px] lg:right-[-58px] xl:top-[-58px] xl:right-[-58px]`}/>
                            <Image src={lefttopright} alt={""} height={66} width={66}
                                   className={`absolute hidden md:block z-10 top-[-58px] right-[-58px] lg:top-[-58px] lg:right-[-58px] xl:top-[-58px] xl:right-[-58px]`}/>
                            <div className="absolute top-0 left-0 w-full">
                                <svg
                                    className="w-full h-[3px]"
                                    viewBox="0 0 612 3"
                                    preserveAspectRatio="none"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line x1="0" y1="1.5" x2="612" y2="1.5" stroke="white"/>
                                    <line x1="0" y1="0.5" x2="612" y2="0.5" stroke="#D6D6D6" strokeDasharray="5 5"/>
                                </svg>
                            </div>

                            {/* RIGHT */}
                            <Image src={lefttopleft} alt={""} height={66} width={66}
                                   className={`absolute block md:hidden rotate-270 z-10 bottom-[-54px] left-[-58px] xl:bottom-[-54px] xl:left-[-58px]`}/>
                            <Image src={leftbottomleft} alt={""} height={66} width={66}
                                   className={`absolute hidden md:block z-10 bottom-[-54px] left-[-58px] xl:bottom-[-54px] xl:left-[-58px]`}/>
                            <div className="absolute top-0 right-0 h-full">
                                <svg
                                    className="w-[3px] h-full"
                                    viewBox="0 0 3 568"
                                    preserveAspectRatio="none"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line x1="1.5" y1="0" x2="1.5" y2="568" stroke="#D6D6D6" strokeDasharray="5 5"/>
                                    <line x1="0.5" y1="0" x2="0.5" y2="568" stroke="white"/>
                                </svg>
                            </div>

                            {/* BOTTOM */}
                            <Image src={lefttopleft} alt={""} height={66} width={66}
                                   className={`absolute block md:hidden rotate-180 z-10 bottom-[-54px] right-[-58px] xl:bottom-[-54px] xl:right-[-58px]`}/>
                            <Image src={leftbottomright} alt={""} height={66} width={66}
                                   className={`absolute z-10 hidden md:block bottom-[-54px] right-[-58px] xl:bottom-[-54px] xl:right-[-58px]`}/>
                            <div className="absolute bottom-0 left-0 w-full">
                                <svg
                                    className="w-full h-[3px]"
                                    viewBox="0 0 612 3"
                                    preserveAspectRatio="none"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line x1="0" y1="1.5" x2="612" y2="1.5" stroke="white"/>
                                    <line x1="0" y1="0.5" x2="612" y2="0.5" stroke="#D6D6D6" strokeDasharray="5 5"/>
                                </svg>
                            </div>

                            <div className={`bg-[#52555B]/5 h-full w-full flex flex-col p-2`}>
                                <div
                                    className={`relative h-[60%] lg:h-[55%] xl:h-[386px] w-full bg-white rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.08)]`}>
                                    <Image src="/images/first.png" fill alt={""} className={`p-6`}/>
                                </div>
                                <div
                                    className={`font-sans leading-[1.5] tracking-[-0.02em] flex-1 w-full px-[22px] pt-[20px] pb-[30px] flex flex-col gap-y-[20px]`}>
                                    <div className={`flex flex-col gap-y-1`}>
                                        <div className={`font-inter font-semibold text-x[22px]`}>Market Research</div>
                                        <div className={`text-[16px] text-[#52555B]`}>Automatically analyze competitor’s
                                            top ads, identify real-time trends, and leverage market insights to fuel
                                            smarter ideation.
                                        </div>
                                    </div>
                                    <div className={`flex items-center text-[#2476FF] text-[15px]`}>Learn More
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.16385 16.4623C7.75528 16.0537 7.75528 15.3906 8.16385 14.9804L11.6147 11.5312L8.16385 8.08029C7.76785 7.67015 7.77256 7.01644 8.17799 6.61258C8.58185 6.20715 9.23556 6.20244 9.64571 6.59844L13.8367 10.7894C14.2453 11.1996 14.2453 11.8627 13.8367 12.2713L9.64571 16.4623C9.23714 16.8709 8.57399 16.8709 8.16385 16.4623Z"
                                                fill="#2476FF"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[450px] lg:h-[564px] w-[440px] md:w-[390px] lg:w-[500px] xl:w-1/2">
                            {/* LEFT */}
                            <Image src={rightbottomleft} alt={""} height={66} width={66}
                                   className={`absolute block md:hidden z-10 rotate-90 top-[-58px] left-[-58px] lg:top-[-58px] lg:left-[-58px] xl:top-[-58px] xl:left-[-58px]`}/>
                            <Image src={righttopleft} alt={""} height={66} width={66}
                                   className={`absolute hidden md:block z-10 top-[-58px] left-[-58px] lg:top-[-58px] lg:left-[-58px] xl:top-[-58px] xl:left-[-58px]`}/>
                            <div className="absolute top-0 left-0 h-full">
                                <svg
                                    className="w-[3px] h-full"
                                    viewBox="0 0 3 568"
                                    preserveAspectRatio="none"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line x1="1.5" y1="0" x2="1.5" y2="568" stroke="#D6D6D6" strokeDasharray="5 5"/>
                                    <line x1="0.5" y1="0" x2="0.5" y2="568" stroke="white"/>
                                </svg>
                            </div>

                            {/* TOP */}
                            <Image src={rightbottomleft} alt={""} height={66} width={66}
                                   className={`absolute block md:hidden rotate-270 z-10 top-[-6px] right-[-58px] lg:top-[-58px] lg:right-[-58px] xl:top-[-58px] xl:right-[-58px]`}/>
                            <Image src={righttopright} alt={""} height={66} width={66}
                                   className={`absolute hidden md:block z-10 top-[-58px] right-[-58px] lg:top-[-58px] lg:right-[-58px] xl:top-[-58px] xl:right-[-58px]`}/>
                            <div className="absolute top-0 left-0 w-full">
                                <svg
                                    className="w-full h-[3px]"
                                    viewBox="0 0 612 3"
                                    preserveAspectRatio="none"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line x1="0" y1="1.5" x2="612" y2="1.5" stroke="white"/>
                                    <line x1="0" y1="0.5" x2="612" y2="0.5" stroke="#D6D6D6" strokeDasharray="5 5"/>
                                </svg>
                            </div>

                            {/* RIGHT */}
                            <Image src={rightbottomleft} alt={""} height={66} width={66}
                                   className={`absolute z-10 bottom-[-54px] left-[-58px] xl:bottom-[-54px] xl:left-[-58px]`}/>
                            <div className="absolute top-0 right-0 h-full">
                                <svg
                                    className="w-[3px] h-full"
                                    viewBox="0 0 3 568"
                                    preserveAspectRatio="none"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line x1="1.5" y1="0" x2="1.5" y2="568" stroke="#D6D6D6" strokeDasharray="5 5"/>
                                    <line x1="0.5" y1="0" x2="0.5" y2="568" stroke="white"/>
                                </svg>
                            </div>

                            {/* BOTTOM */}
                            <Image src={rightbottomright} alt={""} height={66} width={66}
                                   className={`absolute z-10 bottom-[-54px] right-[-58px] xl:bottom-[-54px] xl:right-[-58px]`}/>
                            <div className="absolute bottom-0 left-0 w-full">
                                <svg
                                    className="w-full h-[3px]"
                                    viewBox="0 0 612 3"
                                    preserveAspectRatio="none"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line x1="0" y1="1.5" x2="612" y2="1.5" stroke="white"/>
                                    <line x1="0" y1="0.5" x2="612" y2="0.5" stroke="#D6D6D6" strokeDasharray="5 5"/>
                                </svg>
                            </div>

                            <div className={`bg-[#52555B]/5 h-full w-full flex flex-col p-2`}>
                                <div
                                    className={`relative h-[60%] lg:h-[55%] xl:h-[386px] w-full bg-white rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.08)]`}>
                                    <Image src="/images/second.png" fill alt={""} className={`p-4`}/>
                                </div>
                                <div
                                    className={`font-sans leading-[1.5] tracking-[-0.02em] flex-1 w-full px-[22px] pt-[20px] pb-[30px] flex flex-col gap-y-[20px]`}>
                                    <div className={`flex flex-col gap-y-1`}>
                                        <div className={`font-inter font-semibold text-x[22px]`}>Ad Creation</div>
                                        <div className={`text-[16px] text-[#52555B]`}>Automatically generate
                                            high-performing ad creatives based on Uplane's market research,
                                            top-performing creatives, or your ideas.
                                        </div>
                                    </div>
                                    <div className={`flex items-center text-[#2476FF] text-[15px]`}>Learn More
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.16385 16.4623C7.75528 16.0537 7.75528 15.3906 8.16385 14.9804L11.6147 11.5312L8.16385 8.08029C7.76785 7.67015 7.77256 7.01644 8.17799 6.61258C8.58185 6.20715 9.23556 6.20244 9.64571 6.59844L13.8367 10.7894C14.2453 11.1996 14.2453 11.8627 13.8367 12.2713L9.64571 16.4623C9.23714 16.8709 8.57399 16.8709 8.16385 16.4623Z"
                                                fill="#2476FF"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`relative w-[440px] md:w-[800px] lg:w-[1020px] xl:w-[1240px] xl:h-[477px]`}>
                        {/* Left */}
                        <Image src={lefttopleft} alt={""} height={66} width={66}
                               className={`absolute z-10 rotate-0 top-[-58px] left-[-58px]`}/>
                        <div className="absolute top-0 left-0 h-full">
                            <svg
                                className="w-[3px] h-full"
                                viewBox="0 0 3 568"
                                preserveAspectRatio="none"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line x1="1.5" y1="0" x2="1.5" y2="568" stroke="#D6D6D6" strokeDasharray="5 5"/>
                                <line x1="0.5" y1="0" x2="0.5" y2="568" stroke="white"/>
                            </svg>
                        </div>

                        {/* Top */}
                        <Image src={lefttopleft} alt={""} height={66} width={66}
                               className={`absolute z-10 rotate-90 top-[-58px] right-[-56px]`}/>
                        <div className="absolute top-0 left-0 w-full">
                            <svg
                                className="w-full h-[3px]"
                                viewBox="0 0 612 3"
                                preserveAspectRatio="none"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line x1="0" y1="1.5" x2="612" y2="1.5" stroke="white"/>
                                <line x1="0" y1="0.5" x2="612" y2="0.5" stroke="#D6D6D6" strokeDasharray="5 5"/>
                            </svg>
                        </div>

                        {/* Right */}
                        <Image src={lefttopleft} alt={""} height={66} width={66}
                               className={`absolute z-10 rotate-270 bottom-[-56px] left-[-56px]`}/>
                        <div className="absolute top-0 right-0 h-full">
                            <svg
                                className="w-[3px] h-full"
                                viewBox="0 0 3 568"
                                preserveAspectRatio="none"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line x1="1.5" y1="0" x2="1.5" y2="568" stroke="#D6D6D6" strokeDasharray="5 5"/>
                                <line x1="0.5" y1="0" x2="0.5" y2="568" stroke="white"/>
                            </svg>
                        </div>

                        {/* Bottom */}
                        <Image src={lefttopleft} alt={""} height={66} width={66}
                               className={`absolute z-10 rotate-180 bottom-[-56px] right-[-58px]`}/>
                        <div className="absolute bottom-0 left-0 w-full">
                            <svg
                                className="w-full h-[3px]"
                                viewBox="0 0 612 3"
                                preserveAspectRatio="none"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line x1="0" y1="1.5" x2="612" y2="1.5" stroke="white"/>
                                <line x1="0" y1="0.5" x2="612" y2="0.5" stroke="#D6D6D6" strokeDasharray="5 5"/>
                            </svg>
                        </div>

                        <div className={`bg-[#52555B]/5 w-full h-full flex flex-col lg:flex-row`}>
                            <div
                                className={`w-full lg:w-1/2 flex-1 order-2 lg:order-1 p-[20px] md:p-[40px] xl:p-[60px] flex flex-col justify-center gap-y-[40px]`}>
                                <div className={`flex flex-col gap-y-[14px] leading-[1.2] tracking-[-0.02em]`}>
                                    <div className={`text-[14px] font-sans font-medium text-[#2476FF]`}>Chat Interface
                                    </div>
                                    <div className={`text-[38px] lg:text-[48px] font-inter font-semibold`}>Bring You
                                        Marketing Everywhere
                                    </div>
                                    <div className={`font-sans font-medium text-[16px] text-[#52555B]`}>Uplane is
                                        available everywhere, take control, drop ideas, ask for insights 24/7
                                    </div>
                                </div>

                                <div className={`flex justify-center md:justify-start gap-x-[10px] pb-2 lg:pb-0`}>
                                    <div
                                        className={`flex gap-x-2 items-center bg-white shadow-[0_6px_16px_rgba(0,0,0,0.08)] px-2 py-1 mb:py-[14px] mb:px-[20px] rounded-[10px]`}>
                                        <svg className={`w-[24px] h-[24px]`} viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_5_6225)">
                                                <path
                                                    d="M8.78587 12.7031C7.40128 12.7031 6.27487 13.8295 6.27487 15.2141V21.489C6.27487 22.8735 7.40128 24 8.78587 24C10.1705 24 11.2969 22.8736 11.2969 21.489V15.2141C11.2969 13.8295 10.1705 12.7031 8.78587 12.7031Z"
                                                    fill="#FF4340"/>
                                                <path
                                                    d="M4.86857 12.7031H2.43764C1.0972 12.7031 0.00669861 13.7937 0.00669861 15.1341C0.00669861 16.4745 1.09725 17.565 2.43764 17.565C3.77803 17.565 4.86857 16.4745 4.86857 15.1341V12.7031Z"
                                                    fill="#FF4340"/>
                                                <path
                                                    d="M0 8.7859C0 10.1705 1.12641 11.2969 2.511 11.2969H8.78583C10.1705 11.2969 11.2969 10.1705 11.2969 8.7859C11.2969 7.40131 10.1705 6.2749 8.78588 6.2749H2.511C1.12641 6.27486 0 7.40131 0 8.7859Z"
                                                    fill="#36C6FF"/>
                                                <path
                                                    d="M8.86594 4.86847H11.2969V2.43753C11.2969 1.09709 10.2063 0.0065918 8.86594 0.0065918C7.5255 0.0065918 6.435 1.09714 6.435 2.43753C6.435 3.77792 7.5255 4.86847 8.86594 4.86847Z"
                                                    fill="#36C6FF"/>
                                                <path
                                                    d="M15.2141 11.2969C16.5987 11.2969 17.7251 10.1705 17.7251 8.78588V2.511C17.7252 1.12641 16.5987 0 15.2141 0C13.8295 0 12.7031 1.12641 12.7031 2.511V8.78583C12.7031 10.1705 13.8295 11.2969 15.2141 11.2969Z"
                                                    fill="#0DC46E"/>
                                                <path
                                                    d="M19.1314 11.2969H21.5624C22.9028 11.2969 23.9933 10.2064 23.9933 8.866C23.9933 7.52556 22.9028 6.43506 21.5624 6.43506C20.222 6.43506 19.1314 7.52561 19.1314 8.866V11.2969Z"
                                                    fill="#0DC46E"/>
                                                <path
                                                    d="M24 15.2141C24 13.8295 22.8736 12.7031 21.489 12.7031H15.2141C13.8295 12.7031 12.7031 13.8295 12.7031 15.2141C12.7031 16.5987 13.8295 17.7251 15.2141 17.7251H21.489C22.8736 17.7252 24 16.5987 24 15.2141Z"
                                                    fill="#FDCB02"/>
                                                <path
                                                    d="M15.1341 19.1313H12.7031V21.5623C12.7031 22.9027 13.7937 23.9932 15.1341 23.9932C16.4745 23.9932 17.565 22.9027 17.565 21.5623C17.565 20.2219 16.4745 19.1313 15.1341 19.1313Z"
                                                    fill="#FDCB02"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5_6225">
                                                    <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div className={`font-sans font-medium text-[16px]`}>Slack</div>
                                    </div>

                                    <div
                                        className={`flex gap-x-2 items-center bg-white shadow-[0_6px_16px_rgba(0,0,0,0.08)] py-[14px] px-[20px] rounded-[10px]`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M20.166 8.61137C21.5573 8.61137 22.6891 7.47641 22.6891 6.08177C22.5506 2.72585 17.7811 2.72681 17.6429 6.08177C17.6429 7.47641 18.775 8.61137 20.166 8.61137Z"
                                                fill="#464EB8"/>
                                            <path
                                                d="M21.8299 9.29042H17.3263H17.3177C17.3165 9.29042 17.317 9.29042 17.3155 9.29042C17.046 9.29042 13.5223 9.29042 12.3864 9.29042V8.40722C12.5746 8.44058 12.7716 8.4629 12.9785 8.47154C13.0008 8.47178 13.0231 8.4701 13.0454 8.46986C13.1314 8.46842 13.2166 8.46434 13.3006 8.45714C13.3294 8.4545 13.3579 8.4521 13.3862 8.44874C13.483 8.43794 13.5785 8.42378 13.6726 8.4053C13.6783 8.4041 13.6846 8.40338 13.6903 8.40242C14.1362 8.31146 14.5567 8.13362 14.9304 7.88162C15.276 7.64858 15.5753 7.3529 15.8167 7.01402C15.8791 6.93218 15.936 6.84674 15.989 6.75938C15.9941 6.75074 15.9996 6.74258 16.0046 6.7337C16.0454 6.66482 16.0814 6.59354 16.1165 6.52154C16.1318 6.49034 16.1477 6.45914 16.1621 6.42746C16.199 6.34466 16.2331 6.26042 16.2631 6.17474C16.2658 6.16754 16.2684 6.16058 16.2708 6.15362C16.6133 5.1437 16.4566 3.95618 15.8686 3.06818C15.713 2.84042 15.5285 2.63474 15.3242 2.45042C15.282 2.4137 15.2417 2.37506 15.1973 2.34074C15.0259 2.19962 14.8409 2.07458 14.6443 1.96826C14.5459 1.91498 14.4449 1.86626 14.3412 1.82258C14.237 1.7765 14.1283 1.73858 14.0179 1.70426C13.9546 1.68482 13.8888 1.67042 13.824 1.65458C13.7666 1.64066 13.71 1.62554 13.6519 1.61474C13.6039 1.60562 13.5547 1.59986 13.5062 1.59266C13.4218 1.58066 13.3373 1.56962 13.2518 1.56362C13.2226 1.56146 13.193 1.56074 13.1635 1.5593C13.0766 1.55498 12.9895 1.55522 12.9024 1.55762C12.4032 1.58666 11.9602 1.69154 11.5721 1.85522C11.4929 1.89098 11.4127 1.92578 11.3381 1.96802C10.56 2.39186 9.9648 3.1133 9.69 3.95834C9.49944 4.5893 9.48312 5.27066 9.64512 5.9093C9.6468 5.9153 9.64824 5.92154 9.64992 5.92754C9.6576 5.95514 9.66552 5.98274 9.6732 6.01034C9.68256 6.04322 9.6936 6.07586 9.70392 6.1085C9.71328 6.1349 9.72312 6.16106 9.73296 6.18746H2.10576C1.42272 6.18746 0.866882 6.7433 0.866882 7.42634V16.4676C0.866882 17.1509 1.42272 17.7065 2.10576 17.7065H6.93504C6.94128 17.7348 6.9492 17.7622 6.95592 17.7903C7.62072 20.406 9.94704 22.2559 12.696 22.3227C14.9767 22.2672 16.9358 20.9496 17.9167 19.0606C17.9314 19.0659 17.9465 19.0697 17.9611 19.0747C20.4048 19.999 23.1816 18.0598 23.1322 15.4433V10.5893C23.1324 9.87314 22.548 9.29042 21.8299 9.29042Z"
                                                fill="#464EB8"/>
                                            <path
                                                d="M18.5866 10.6158C18.6031 9.90277 18.0377 9.30829 17.3263 9.29077C17.3235 9.29077 12.1827 9.29077 12.1827 9.29077C11.9933 9.29077 11.8397 9.44461 11.8397 9.63469V16.6175C11.8397 16.9396 11.5783 17.2014 11.257 17.2014H7.24777C7.14481 17.2014 7.04713 17.248 6.98209 17.3279C6.91705 17.4081 6.89113 17.5132 6.91201 17.6145C7.48009 20.3891 9.85153 22.3753 12.696 22.4447C16.0215 22.3631 18.6639 19.5853 18.5866 16.2606V10.6158Z"
                                                fill="#7B83EB"/>
                                            <path
                                                d="M12.9785 8.47159C13.0008 8.47183 13.0231 8.47015 13.0455 8.46991C13.1314 8.46871 13.2166 8.46439 13.3008 8.45719C13.3296 8.45455 13.3582 8.45215 13.3865 8.44879C13.483 8.43799 13.5787 8.42383 13.6728 8.40535C13.6786 8.40415 13.6848 8.40343 13.6906 8.40223C14.1365 8.31127 14.557 8.13343 14.9307 7.88143C15.2765 7.64839 15.5755 7.35271 15.8172 7.01383C15.8796 6.93199 15.9365 6.84655 15.9895 6.75919C15.9946 6.75055 16.0001 6.74239 16.0051 6.73351C16.0459 6.66463 16.0819 6.59311 16.117 6.52135C16.1323 6.49015 16.1482 6.45919 16.1626 6.42727C16.1995 6.34447 16.2339 6.26023 16.2636 6.17455C16.2663 6.16735 16.2689 6.16039 16.2713 6.15343C16.6138 5.14351 16.4571 3.95575 15.8691 3.06799C15.7135 2.84023 15.529 2.63455 15.3247 2.45023C15.2825 2.41351 15.2422 2.37487 15.1978 2.34055C15.0264 2.19943 14.8414 2.07439 14.6448 1.96807C14.5464 1.91479 14.4454 1.86607 14.3417 1.82239C14.2375 1.77631 14.1288 1.73839 14.0184 1.70407C13.9551 1.68463 13.8893 1.67047 13.8245 1.65439C13.7671 1.64047 13.7105 1.62535 13.6524 1.61455C13.6044 1.60543 13.5555 1.59967 13.5067 1.59247C13.4223 1.58047 13.3378 1.56943 13.2523 1.56343C13.2231 1.56127 13.1935 1.56055 13.1643 1.55911C13.0774 1.55527 12.9903 1.55551 12.9031 1.55791C12.4039 1.58695 11.9609 1.69159 11.5728 1.85551C11.4936 1.89127 11.4135 1.92607 11.3388 1.96831C10.5607 2.39239 9.9653 3.11383 9.69074 3.95887C9.50018 4.58983 9.48386 5.27119 9.64586 5.90983C9.64754 5.91583 9.64898 5.92207 9.65066 5.92807C9.65834 5.95567 9.66626 5.98327 9.67394 6.01087C9.6833 6.04375 9.69434 6.07639 9.70466 6.10903C9.71906 6.15007 9.73418 6.19063 9.74954 6.23143H9.74306C10.1691 7.42591 11.2474 8.39839 12.9785 8.47159Z"
                                                fill="#7B83EB"/>
                                            <path
                                                d="M11.1475 6.18799H2.10576C1.42272 6.18799 0.866882 6.74383 0.866882 7.42687V16.4681C0.866882 17.1514 1.42272 17.707 2.10576 17.707H11.1475C11.8306 17.707 12.3862 17.1512 12.3862 16.4681V7.42687C12.3864 6.74383 11.8308 6.18799 11.1475 6.18799Z"
                                                fill="#464EB8"/>
                                            <path
                                                d="M8.90615 8.70508H4.27895C4.09391 8.70508 3.94415 8.85508 3.94415 9.04012V9.88348C3.94415 10.0685 4.09391 10.2185 4.27895 10.2185H5.77175V14.9165C5.77175 15.1016 5.92151 15.2516 6.10655 15.2516H7.09871C7.28375 15.2516 7.43351 15.1016 7.43351 14.9165V10.2185H8.90615C9.09119 10.2185 9.24095 10.0685 9.24095 9.88348V9.04012C9.24095 8.85508 9.09119 8.70508 8.90615 8.70508Z"
                                                fill="white"/>
                                        </svg>

                                        <div className={`font-sans font-medium text-[16px]`}>Teams</div>
                                    </div>

                                    <div
                                        className={`flex gap-x-2 items-center bg-white shadow-[0_6px_16px_rgba(0,0,0,0.08)] py-[14px] px-[20px] rounded-[10px]`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_5_6253)">
                                                <path
                                                    d="M12.003 0H11.997C5.3805 0 0 5.382 0 12C0 14.625 0.846 17.058 2.2845 19.0335L0.789 23.4915L5.4015 22.017C7.299 23.274 9.5625 24 12.003 24C18.6195 24 24 18.6165 24 12C24 5.3835 18.6195 0 12.003 0Z"
                                                    fill="#4CAF50"/>
                                                <path
                                                    d="M18.9855 16.9455C18.696 17.763 17.547 18.441 16.6305 18.639C16.0035 18.7725 15.1845 18.879 12.4275 17.736C8.90101 16.275 6.63002 12.6915 6.45302 12.459C6.28352 12.2265 5.02802 10.5615 5.02802 8.83953C5.02802 7.11753 5.90252 6.27903 6.25502 5.91903C6.54452 5.62353 7.02302 5.48853 7.48202 5.48853C7.63052 5.48853 7.76402 5.49603 7.88402 5.50203C8.23652 5.51703 8.41352 5.53803 8.64602 6.09453C8.93552 6.79203 9.64051 8.51403 9.72451 8.69103C9.81001 8.86803 9.89552 9.10803 9.77552 9.34053C9.66302 9.58053 9.56401 9.68703 9.38701 9.89103C9.21001 10.095 9.04202 10.251 8.86502 10.47C8.70301 10.6605 8.52002 10.8645 8.72402 11.217C8.92802 11.562 9.63302 12.7125 10.671 13.6365C12.0105 14.829 13.0965 15.21 13.485 15.372C13.7745 15.492 14.1195 15.4635 14.331 15.2385C14.5995 14.949 14.931 14.469 15.2685 13.9965C15.5085 13.6575 15.8115 13.6155 16.1295 13.7355C16.4535 13.848 18.168 14.6955 18.5205 14.871C18.873 15.048 19.1055 15.132 19.191 15.2805C19.275 15.429 19.275 16.1265 18.9855 16.9455Z"
                                                    fill="#FAFAFA"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5_6253">
                                                    <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div className={`font-sans font-medium text-[16px]`}>WhatsApp</div>
                                    </div>
                                </div>
                            </div>

                            <div className={`w-full lg:w-1/2 aspect-square xl:h-full p-2 order-1 lg:order-2`}>
                                <div
                                    className={`w-full h-full p-1 bg-white rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.08)]`}>
                                    <div className={`w-full h-full rounded-xl relative overflow-hidden`}>
                                        <Image src={mobilegrad} alt={""} fill/>
                                        <Image src="/images/mobile.png" alt={""} width={300} height={300} className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[250px]  md:h-[700px] md:w-[500px] lg:w-[300px] lg:h-[300px]`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Start Scaling Faster */}
            <div
                className={`py-[60] md:py-[80px] relative w-[440px] md:w-[800px] lg:w-[1120px] xl:w-[1240px] flex flex-col items-center gap-y-[20px] mx-auto`}>
                {/* Left */}
                <div className="hidden md:block absolute top-0 left-0 h-full">
                    <svg
                        className="w-[3px] h-full"
                        viewBox="0 0 3 568"
                        preserveAspectRatio="none"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line x1="1.5" y1="0" x2="1.5" y2="568" stroke="#D6D6D6" strokeDasharray="5 5"/>
                        <line x1="0.5" y1="0" x2="0.5" y2="568" stroke="white"/>
                    </svg>
                </div>

                {/* Right */}
                <div className="hidden md:block absolute top-0 right-0 h-full">
                    <svg
                        className="w-[3px] h-full"
                        viewBox="0 0 3 568"
                        preserveAspectRatio="none"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line x1="1.5" y1="0" x2="1.5" y2="568" stroke="#D6D6D6" strokeDasharray="5 5"/>
                        <line x1="0.5" y1="0" x2="0.5" y2="568" stroke="white"/>
                    </svg>
                </div>

                {/* Bottom */}
                {/*<div className="hidden md:block absolute bottom-0 left-0 w-full">*/}
                {/*    <svg*/}
                {/*        className="w-full h-[3px]"*/}
                {/*        viewBox="0 0 612 3"*/}
                {/*        preserveAspectRatio="none"*/}
                {/*        fill="none"*/}
                {/*        xmlns="http://www.w3.org/2000/svg"*/}
                {/*    >*/}
                {/*        <line x1="0" y1="1.5" x2="612" y2="1.5" stroke="white" />*/}
                {/*        <line x1="0" y1="0.5" x2="612" y2="0.5" stroke="#D6D6D6" strokeDasharray="5 5" />*/}
                {/*    </svg>*/}
                {/*</div>*/}

                <div className={`font-sans font-medium text-[16px] text-[#2476FF] leading-[1.2] tracking-[-0.02em]`}>
                    Start Scaling Faster
                </div>

                <div
                    className={`font-inter font-semibold text-[32px] md:text-[52px] leading-[1.2] tracking-[-0.02em] text-center`}>
                    AI-powered marketing that builds, <br className={`hidden lg:inline`}/>
                    learns, and grows with you.
                </div>

                <div className={`self-center pt-[20px] xl:pt-[50px]`}>
                    <PrimaryButton text={"Talk to Founders"}/>
                </div>
            </div>

            {/* Bar */}
            <div className="relative w-full h-[41px]">
                <svg
                    className="absolute top-0 left-0 w-full h-[2px]"
                    viewBox="0 0 1439 2"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line x1="0" y1="0.5" x2="1439" y2="0.5" stroke="#D9D9D9"/>
                    <line x1="0" y1="1.5" x2="1439" y2="1.5" stroke="white"/>
                </svg>

                <svg
                    className="absolute bottom-0 left-0 w-full h-[2px]"
                    viewBox="0 0 1439 2"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line x1="0" y1="0.5" x2="1439" y2="0.5" stroke="#D9D9D9"/>
                    <line x1="0" y1="1.5" x2="1439" y2="1.5" stroke="white"/>
                </svg>

                <div className={`relative w-[450px] md:w-[800px] lg:w-[1120px] xl:w-[1240px] mx-auto h-[41px]`}>
                    <div className="absolute inset-0 z-0" />

                    <svg className={`z-10 absolute top-[-2px] left-[-3px]`} width="12" height="6" viewBox="0 0 12 6"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.86035 5.02893C7.11962 5.0289 8.29008 4.86725 9.1709 4.58655C9.60697 4.44756 10.0147 4.26579 10.3291 4.02893C10.6308 3.8015 10.9697 3.42395 10.9697 2.88928C10.9696 2.35461 10.6308 1.97702 10.3291 1.74963C10.0147 1.51276 9.60701 1.33101 9.1709 1.19202C8.29008 0.911313 7.11962 0.749666 5.86035 0.749634C4.60094 0.749634 3.42973 0.911285 2.54883 1.19202C2.11288 1.33097 1.70591 1.51286 1.3916 1.74963C1.10874 1.96276 0.792439 2.30775 0.753906 2.79065L0.75 2.88928L0.753906 2.98792C0.792307 3.47101 1.10867 3.81575 1.3916 4.02893C1.70591 4.26575 2.11284 4.44757 2.54883 4.58655C3.42973 4.86728 4.60094 5.02893 5.86035 5.02893Z"
                            fill="white" stroke="#E0E0E0" stroke-width="1.5"/>
                    </svg>

                    <svg className={`z-10 absolute bottom-[-2px] left-[-3px]`} width="12" height="6" viewBox="0 0 12 6"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.86035 5.02893C7.11962 5.0289 8.29008 4.86725 9.1709 4.58655C9.60697 4.44756 10.0147 4.26579 10.3291 4.02893C10.6308 3.8015 10.9697 3.42395 10.9697 2.88928C10.9696 2.35461 10.6308 1.97702 10.3291 1.74963C10.0147 1.51276 9.60701 1.33101 9.1709 1.19202C8.29008 0.911313 7.11962 0.749666 5.86035 0.749634C4.60094 0.749634 3.42973 0.911285 2.54883 1.19202C2.11288 1.33097 1.70591 1.51286 1.3916 1.74963C1.10874 1.96276 0.792439 2.30775 0.753906 2.79065L0.75 2.88928L0.753906 2.98792C0.792307 3.47101 1.10867 3.81575 1.3916 4.02893C1.70591 4.26575 2.11284 4.44757 2.54883 4.58655C3.42973 4.86728 4.60094 5.02893 5.86035 5.02893Z"
                            fill="white" stroke="#E0E0E0" stroke-width="1.5"/>
                    </svg>

                    <svg className={`z-10 absolute top-[-2px] right-[-3px]`} width="12" height="6" viewBox="0 0 12 6"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.86035 5.02893C7.11962 5.0289 8.29008 4.86725 9.1709 4.58655C9.60697 4.44756 10.0147 4.26579 10.3291 4.02893C10.6308 3.8015 10.9697 3.42395 10.9697 2.88928C10.9696 2.35461 10.6308 1.97702 10.3291 1.74963C10.0147 1.51276 9.60701 1.33101 9.1709 1.19202C8.29008 0.911313 7.11962 0.749666 5.86035 0.749634C4.60094 0.749634 3.42973 0.911285 2.54883 1.19202C2.11288 1.33097 1.70591 1.51286 1.3916 1.74963C1.10874 1.96276 0.792439 2.30775 0.753906 2.79065L0.75 2.88928L0.753906 2.98792C0.792307 3.47101 1.10867 3.81575 1.3916 4.02893C1.70591 4.26575 2.11284 4.44757 2.54883 4.58655C3.42973 4.86728 4.60094 5.02893 5.86035 5.02893Z"
                            fill="white" stroke="#E0E0E0" stroke-width="1.5"/>
                    </svg>

                    <svg className={`z-10 absolute bottom-[-2px] right-[-3px]`} width="12" height="6" viewBox="0 0 12 6"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.86035 5.02893C7.11962 5.0289 8.29008 4.86725 9.1709 4.58655C9.60697 4.44756 10.0147 4.26579 10.3291 4.02893C10.6308 3.8015 10.9697 3.42395 10.9697 2.88928C10.9696 2.35461 10.6308 1.97702 10.3291 1.74963C10.0147 1.51276 9.60701 1.33101 9.1709 1.19202C8.29008 0.911313 7.11962 0.749666 5.86035 0.749634C4.60094 0.749634 3.42973 0.911285 2.54883 1.19202C2.11288 1.33097 1.70591 1.51286 1.3916 1.74963C1.10874 1.96276 0.792439 2.30775 0.753906 2.79065L0.75 2.88928L0.753906 2.98792C0.792307 3.47101 1.10867 3.81575 1.3916 4.02893C1.70591 4.26575 2.11284 4.44757 2.54883 4.58655C3.42973 4.86728 4.60094 5.02893 5.86035 5.02893Z"
                            fill="white" stroke="#E0E0E0" stroke-width="1.5"/>
                    </svg>

                    <div className="z-0 relative w-full h-[41px]">
                        <div className={`h-full w-full opacity-50 bg-grid-texture`}>

                        </div>
                    </div>
                </div>
            </div>

            {/* Start Scaling Faster 02 */}
            <div className={`py-[60] px-0 lg:px-[85px] md:py-[80px] relative w-[450px] md:w-[800px] lg:w-[1120px] xl:w-[1240px] flex flex-col items-center md:items-start gap-y-[20px] mx-auto`}>

                <div className={`font-sans font-medium text-[16px] text-[#2476FF] leading-[1.2] tracking-[-0.02em]`}>
                    Start Scaling Faster
                </div>

                <div
                    className={`font-inter font-semibold text-[32px] md:text-[52px] leading-[1.2] tracking-[-0.02em] text-center md:text-start`}>
                    Why Uplane is the smarter way to <br className={`hidden lg:inline`}/> scale performance marketing
                </div>

                <div
                    className={`w-full flex flex-col gap-y-[30px] lg:gap-y-0 lg:flex-row justify-start lg:items-center lg:justify-between`}>
                    <div className={`text-[#52555B] font-sans font-medium text-center md:text-start`}>See how Uplane
                        replaces guesswork with automation at every step <br className={`hidden lg:inline`}/> of your
                        marketing funnel.
                    </div>
                    <div className={`self-center lg:self-end`}>
                        <PrimaryButton text={"Talk to Founders"}/>
                    </div>
                </div>
            </div>

            {/* table - sm, md */}
            <div className={`mb-30
                px-0
                relative
                w-[450px]
                md:w-[800px]
                lg:w-[1120px]
                xl:w-[1240px]
                mx-auto

                grid
                lg:hidden
                grid-cols-1
                md:grid-cols-2
                gap-[40px]`}>
                {
                    table.map((e, i) => (
                        <div key={i} className={`w-full flex flex-col gap-y-[30px]`}>
                            <div className={`w-full flex items-center gap-x-4`}>
                                <div className={`h-[60px] w-[60px] bg-white/70 border border-white p-1 rounded-2xl overflow-hidden`}>
                                    <div
                                        className={`h-full w-full bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),_0_0_0_1px_rgba(0,0,0,0.08)]`}>
                                    </div>
                                </div>
                                <div className={`text-[20px] font-semibold font-inter`}>{e.one}</div>
                            </div>
                            <div className={`flex-1 w-full rounded-2xl bg-[#52555B]/5`}>
                                <div className={`p-2`}>
                                    <div className={`p-3 flex flex-col gap-y-[20px]`}>
                                        <div className={`flex items-center gap-x-3`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                                 fill="#000000" viewBox="0 0 256 256">
                                                <path
                                                    d="M244.24,60a8,8,0,0,0-7.75-.4c-42.93,21-73.59,11.16-106,.78-34-10.89-69.25-22.14-117.95,1.64A8,8,0,0,0,8,69.24V189.17a8,8,0,0,0,11.51,7.19c42.93-21,73.59-11.16,106.05-.78,19.24,6.15,38.84,12.42,61,12.42,17.09,0,35.73-3.72,56.91-14.06a8,8,0,0,0,4.49-7.18V66.83A8,8,0,0,0,244.24,60ZM232,181.67c-40.6,18.17-70.25,8.69-101.56-1.32-19.24-6.15-38.84-12.42-61-12.42a122,122,0,0,0-45.4,9V74.33c40.6-18.17,70.25-8.69,101.56,1.32S189.14,96,232,79.09ZM128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM56,96v48a8,8,0,0,1-16,0V96a8,8,0,1,1,16,0Zm144,64V112a8,8,0,1,1,16,0v48a8,8,0,1,1-16,0Z"></path>
                                            </svg>
                                            <div className={`text-[18px] font-semibold font-inter`}>{e.two}</div>
                                        </div>
                                        <div
                                            className={`text-[#52555B] font-sans font-medium text-[16px]`}>{e.three}</div>

                                    </div>
                                    <div className={`p-5 bg-white rounded-xl flex flex-col gap-y-[20px]`}>
                                        <div className={`w-full flex items-center gap-x-4`}>
                                            <div
                                                className={`h-[50px] w-[50px] bg-gradient-to-b from-blue-500 to-blue-700 rounded-xl overflow-hidden`}>

                                            </div>
                                            <div className={`text-[18px] font-semibold font-inter`}>{e.four}</div>
                                        </div>
                                        <div
                                            className={`text-[#52555B] font-sans font-medium text-[16px]`}>{e.five}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>

            {/* table for lg, xl */}
            <div className="
                mb-30
                px-0
                relative
                hidden
                lg:block
                lg:w-[1120px]
                xl:w-[1240px]
                mx-auto
                "
            >
                <Image src={lefttopleft} alt={""} height={66} width={66} className={`absolute z-10 rotate-90 top-[-58px] right-[-58px] lg:top-[-58px] lg:right-[-58px] xl:top-[-58px] xl:right-[-58px]`}/>

                <Image src={lefttopright} alt={""} height={66} width={66} className={`absolute z-10 top-[-58px] left-[21.5%]`}/>

                <Image src={lefttopright} alt={""} height={66} width={66} className={`absolute z-10 top-[-58px] left-[61%]`}/>

                <Image src={lefttopleft} alt={""} height={66} width={66} className={`absolute z-10 rotate-0 top-[-58px] left-[-58px]`}/>

                <Image src={lefttopleft} alt={""} height={66} width={66} className={`absolute z-10 rotate-180 bottom-[-58px] right-[-58px]`}/>

                <Image src={lefttopright} alt={""} height={66} width={66} className={`absolute z-10 rotate-180 bottom-[-58px] left-[16.7%] xl:left-[17.2%]`}/>

                <Image src={lefttopright} alt={""} height={66} width={66} className={`absolute z-10 rotate-180 bottom-[-58px] left-[56.3%] xl:left-[56.8%]`}/>

                <Image src={lefttopleft} alt={""} height={66} width={66} className={`absolute z-10 rotate-270 bottom-[-58px] left-[-58px]`}/>

                <table className="font-sans w-full border border-[#D9D9D9] border-collapse">
                    <colgroup>
                        <col style={{ width: "22%" }} />
                        <col style={{ width: "39.5%" }} />
                        <col style={{ width: "39.5%" }} />
                    </colgroup>

                    <thead>
                    <tr>
                        <td className="p-6 border border-[#D9D9D9] text-[#52555B] text-[16px] font-medium">
                            Categories
                        </td>

                        <td className="p-6 border border-[#D9D9D9]">
                            <div className="flex items-center gap-x-4">
                                <div className="h-[42px] w-[42px] bg-black/15 border border-white rounded-xl overflow-hidden flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         fill="#000000" viewBox="0 0 256 256">
                                        <path
                                            d="M244.24,60a8,8,0,0,0-7.75-.4c-42.93,21-73.59,11.16-106,.78-34-10.89-69.25-22.14-117.95,1.64A8,8,0,0,0,8,69.24V189.17a8,8,0,0,0,11.51,7.19c42.93-21,73.59-11.16,106.05-.78,19.24,6.15,38.84,12.42,61,12.42,17.09,0,35.73-3.72,56.91-14.06a8,8,0,0,0,4.49-7.18V66.83A8,8,0,0,0,244.24,60ZM232,181.67c-40.6,18.17-70.25,8.69-101.56-1.32-19.24-6.15-38.84-12.42-61-12.42a122,122,0,0,0-45.4,9V74.33c40.6-18.17,70.25-8.69,101.56,1.32S189.14,96,232,79.09ZM128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM56,96v48a8,8,0,0,1-16,0V96a8,8,0,1,1,16,0Zm144,64V112a8,8,0,1,1,16,0v48a8,8,0,1,1-16,0Z"></path>
                                    </svg>
                                </div>
                                <div className="text-[16px] font-semibold font-inter">
                                    The Traditional Way
                                </div>
                            </div>
                        </td>

                        <td className="p-6 border border-[#D9D9D9]">
                            <div className="flex items-center gap-x-4">
                                <div className="h-[42px] w-[42px] bg-gradient-to-b from-blue-500 to-blue-700 rounded-xl"></div>
                                <div className="text-[16px] font-semibold font-inter">
                                    The Uplane Way
                                </div>
                            </div>
                        </td>
                    </tr>

                    </thead>

                    <tbody>
                    {table.map((e, i) => (
                        <tr key={i} className={`${i % 2 == 0 ? "bg-[#52555B]/5" : "bg-none"}`}>
                            <td className="relative border border-[#D9D9D9] p-6">
                                {
                                    i % 2 != 0 && (
                                        <svg
                                            className="h-full w-full absolute top-0 left-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="none"
                                        >
                                            <defs>
                                                <pattern
                                                    id="diagonal-stripes"
                                                    patternUnits="userSpaceOnUse"
                                                    width="6"
                                                    height="6"
                                                    patternTransform="rotate(-45)"
                                                >
                                                    <rect width="1" height="8" fill="#00000030" />
                                                </pattern>
                                            </defs>
                                            <rect width="100%" height="100%" fill="none" />
                                            <rect width="100%" height="10px" fill="url(#diagonal-stripes)" />
                                        </svg>
                                    )
                                }
                                <div className={`w-full flex flex-col gap-y-2`}>
                                    <div className={`h-[50px] w-[50px] bg-white/70 border border-white p-1 rounded-2xl overflow-hidden`}>
                                        <div
                                            className={`h-full w-full bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),_0_0_0_1px_rgba(0,0,0,0.08)]`}>
                                        </div>
                                    </div>
                                    <div className={`text-[16px] font-semibold font-inter`}>{e.one}</div>
                                </div>
                            </td>

                            <td className="relative border border-[#D9D9D9] p-6 align-top">
                                {
                                    i % 2 != 0 && (
                                        <svg
                                            className="h-full w-full absolute top-0 left-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="none"
                                        >
                                            <defs>
                                                <pattern
                                                    id="diagonal-stripes"
                                                    patternUnits="userSpaceOnUse"
                                                    width="6"
                                                    height="6"
                                                    patternTransform="rotate(-45)"
                                                >
                                                    <rect width="1" height="8" fill="#00000030" />
                                                </pattern>
                                            </defs>
                                            <rect width="100%" height="100%" fill="none" />
                                            <rect width="100%" height="10px" fill="url(#diagonal-stripes)" />
                                        </svg>
                                    )
                                }
                                <div className={`text-[13px] font-inter font-medium text-[#52555B]`}>{e.one.toUpperCase()}</div>
                                <div className={`pt-4 text-[#52555B] font-medium`}>{e.three}</div>
                            </td>

                            <td className="relative border border-[#D9D9D9] p-6 flex flex-col justify-start align-top">
                                {
                                    i % 2 != 0 && (
                                        <svg
                                            className="h-full w-full absolute top-0 left-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="none"
                                        >
                                            <defs>
                                                <pattern
                                                    id="diagonal-stripes"
                                                    patternUnits="userSpaceOnUse"
                                                    width="6"
                                                    height="6"
                                                    patternTransform="rotate(-45)"
                                                >
                                                    <rect width="1" height="8" fill="#00000030" />
                                                </pattern>
                                            </defs>
                                            <rect width="100%" height="100%" fill="none" />
                                            <rect width="100%" height="10px" fill="url(#diagonal-stripes)" />
                                        </svg>
                                    )
                                }
                                <div className={`relative border border-[#52555B]/50 self-start rounded-full h-[30px] flex items-center pl-3 text-[13px] font-inter font-medium text-[#52555B]`}>
                                    <div>{e.one.toUpperCase()}</div>
                                    <Image src={uplanetable} alt={``} height={30} width={70} className={`pl-2`} />
                                </div>
                                <div className={`pt-4 font-medium`}>{e.five}</div>
                            </td>
                        </tr>
                    ))}
                    </tbody>

                </table>
            </div>


            {/* Let's get started */}
            <div className={`relative mb-30 w-[450px] md:w-[800px] lg:w-[1120px] xl:w-[1240px] mx-auto`}>

                <div className={`w-full bg-white rounded-3xl p-1.5 shadow-[0_6px_16px_rgba(0,0,0,0.08)]`}>
                    <div
                        className={`relative bg-[#e8f1fe] md:bg-none w-full h-full rounded-2xl flex flex-col p-[40px] gap-y-[20px] overflow-hidden`}>
                    <div
                            className="hidden md:block absolute inset-0 z-0"
                            style={{
                                backgroundImage: `
                        radial-gradient(120% 80% at 50% 100%, rgba(173, 216, 255, 0.45), transparent 60%),
                        radial-gradient(80% 80% at 0% 100%, rgba(186, 210, 255, 0.35), transparent 60%),
                        radial-gradient(80% 80% at 100% 100%, rgba(186, 210, 255, 0.35), transparent 60%),
                        radial-gradient(140% 120% at 50% 20%, #ffffff 45%, #f8fbff 70%, #eef4ff 100%)
                        `,
                            }}
                        />
                        <Image
                            src={getstart}
                            alt=""
                            height={450}
                            width={450}
                            className="w-[600px] h-[600px] lg:w-[600px] lg:h-[600px] hidden md:block absolute right-0 top-0 object-cover"
                        />
                        <div
                            className={`z-10 self-center md:self-start font-sans font-medium text-[16px] text-[#2476FF] leading-[1.2] tracking-[-0.02em]`}>
                            Let's get started
                        </div>

                        <div
                            className={`z-10 font-inter font-semibold text-[32px] md:text-[52px] leading-[1.2] tracking-[-0.02em] text-center md:text-start`}>
                            Ready to upgrade
                            your marketing?
                        </div>

                        <div className={`text-[#52555B] z-10 font-sans font-medium text-center md:text-start`}>Let
                            Uplane handle the busywork, so you can focus on what matters.
                        </div>
                        <div className={`mt-6 z-10 self-center md:self-start`}>
                            <PrimaryButton text={"Talk to Founders"}/>
                        </div>

                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="relative w-full min-h-[793px] xl:h-[793px] md:h-[1063px] overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `
                        radial-gradient(120% 80% at 50% 100%, rgba(173, 216, 255, 0.45), transparent 60%),
                        radial-gradient(80% 80% at 0% 100%, rgba(186, 210, 255, 0.35), transparent 60%),
                        radial-gradient(80% 80% at 100% 100%, rgba(186, 210, 255, 0.35), transparent 60%),
                        radial-gradient(140% 120% at 50% 20%, #ffffff 45%, #f8fbff 70%, #eef4ff 100%)
                        `,
                    }}
                />
                <Image src={footer} alt={``} height={355} width={1234}
                       className={`absolute bottom-[-50px] md:bottom-[-70px] lg:bottom-[-100px] left-1/2 -translate-x-1/2 z-10`}/>

                <div
                    className={`relative pb-30 md:pb-0 z-30 h-full max-w-[450px] md:max-w-[900px] xl:max-w-[1320px] mx-auto px-[20px] md:px-[40px]`}>
                    <div className={`w-full pt-[50px] flex flex-col gap-y-[50px]`}>

                        <div
                            className={`w-full h-full xl:h-[333px] flex flex-col gap-y-[50px] xl:gap-y-0 xl:flex-row items-center`}>
                            <div className={`w-full xl:w-[532px] flex flex-col gap-y-[20px]`}>
                                <div className={`flex flex-col items-center xl:items-start gap-y-[20px]`}>
                                    <div>
                                        <Image src={`/logo.png`} alt={`Logo`} height={30} width={123}/>
                                    </div>
                                    <div
                                        className={`w-[332px] text-[17px] text-center xl:text-start font-sans text-[#52555B]`}>Next-gen
                                        performance marketing for your company
                                    </div>
                                </div>
                                <div>
                                    <div className={"flex justify-center xl:justify-start gap-x-[10px]"}>
                                        {
                                            social.map((e, i) => (
                                                <div key={i}
                                                     className={`h-[44px] w-[44px] rounded-[10px] flex items-center justify-center object-center border border-[#e6e6e6] hover:bg-[#e6e6e6]/40`}>
                                                    {e.icon}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div
                                    className={`w-full h-[151px] flex flex-col items-center xl:items-start gap-y-[20px]`}>
                                    <div className={`flex gap-x-[40px] items-center`}>
                                        <div className={`relative w-[141px] h-[83px]`}>
                                            <Image src="/footer_1.png" fill priority alt={""}
                                                   className={`object-center`}/>
                                        </div>
                                        <div className={`relative w-[91px] h-[57px]`}>
                                            <Image src="/footer_2.png" fill priority alt={""}
                                                   className={`object-center`}/>
                                        </div>
                                        <div className={`relative w-[126px] h-[57px]`}>
                                            <Image src="/footer_3.png" fill priority alt={""}
                                                   className={`object-center`}/>
                                        </div>
                                    </div>
                                    <div
                                        className={`text-justify lg:text-start w-full lg:w-[532px] text-[12px] font-sans text-[#8D929E]`}>
                                        The programme "EXIST - University-Based Business Startups" with its projects is
                                        funded by the Federal Ministry for Economic Affairs and Energy and the European
                                        Union through the European Social Fund Plus (ESF plus), on the basis of a
                                        decision by the German Bundestag.
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`w-full xl:w-[698px] pl-0 xl:pl-[166px] flex items-start lg:items-center font-sans`}>
                                <div className={`w-full lg:h-[250px] flex justify-start lg:justify-between`}>
                                    <div className={`w-1/2 lg:w-[262px] flex flex-col gap-y-[20px]`}>
                                        <div className={`text-[14px] text-[#5E5C70]`}>Home</div>
                                        <div className={`flex flex-col gap-y-2 text-[15px]`}>
                                            {
                                                home.map((e, i) => (
                                                    <div key={i}>{e.name}</div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={`w-1/2 lg:w-[233px] flex flex-col gap-y-[20px]`}>
                                        <div className={`text-[14px] text-[#5E5C70]`}>Product Features</div>
                                        <div className={`flex flex-col gap-y-2 text-[15px]`}>
                                            {
                                                productFeatures.map((e, i) => (
                                                    <div key={i}>{e.name}</div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`w-full h-[64px] font-sans font-medium flex flex-wrap-reverse justify-center lg:justify-between items-center border-t border-[#e6e6e6] text-[#8D929E]`}>
                            <div>© 2025 Uplane. All rights reserved.</div>
                            <div className={`flex items-center gap-x-3`}>
                                <div>Privacy Policy</div>
                                <svg width="1" height="16" viewBox="0 0 1 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.5" y1="-2.18557e-08" x2="0.500001" y2="15.0449" stroke="black"
                                          strokeOpacity="0.2"/>
                                </svg>
                                <div>Cookie Settings</div>
                                <svg width="1" height="16" viewBox="0 0 1 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.5" y1="-2.18557e-08" x2="0.500001" y2="15.0449" stroke="black"
                                          strokeOpacity="0.2"/>
                                </svg>
                                <div>Terms of Service</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
