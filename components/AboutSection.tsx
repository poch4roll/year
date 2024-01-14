"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Anniversary Message
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Dear BB,
            </h1>
            <p>
              Firstly, thank you for the last 1 year! Time has really flown by and everyday I spend with you
              just disappears HAHAHAHA
            </p>
            <br />
            <p>
              We have had tons of adventures together the past year including 5 trips to JB, seeing your first countdown,
              cooking, eating lots of sushi, we even taught a module together??
              and I&#39;m grateful to have experienced each of
              them with you! I look forward to the countless more which I&#39;m sure we&#39;ll have.
            </p>
            <br />
            <p>
              I hope you like this UNIQUE anniversary present hehe, and I hope it&#39;s something you can look at 
              anytime and anywhere you are! I&#39;ll like to remind you that I think you are the prettiest, most sweetest girl, and
              very very clever as well! &#40;A+ for Jap ? PLSS&#41; I know that sometimes things get hard and I may be difficult, 
              but I&#39;m grateful that we keep trying, and you should know that I will continue to do so.
            </p>
            <br />
            <p>
              Thank you for being patient with me and caring for me, especially when I am unwell. You are an amazing 
              gf, I love you so much, and I am so lucky to have you hehe. 
              I hope that I will be able to bring you lots of happiness! and more importantly be there when you need me.
            </p>
            <br />
            <p>
              Happy Anniversary BB !!
            </p>
            <p>
              - Yours 🩵
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            {/* <h1 className="text-2xl font-bold mb-6">New Years</h1> */}
            {/* <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div> */}
            <Image
              src="/message.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default AboutSection
