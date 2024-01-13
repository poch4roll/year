import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "January",
    description:
      "Our first time to Marina Bay Sands together after getting together! It was the first time I saw you in THAT blue dress, and can you look how nicely I wore?? I was sweating my ass off for sure but it was all worth it."
      + " I got to show you the top of MBS which is so vibey horr and we sat there for a really long time and took some nice pictures, this one is one of my favourites.",
    image: "/jan.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://thankfulthoughts.io/",
  },
  {
    name: "February",
    description: "In February we of course had our first Valentines Day together but WE DONT HAVE A SINGLE PICTURE TOGETHER? Anyway, we went to Publico which was on your list of places you wanted to go"
    + " and I thought it was GOOD. Turns out it was just aight but its the company that mattered! "
    + "We also had our first trip to JB during recess week and we paid good money for this dog cafe so im using this picture HAHAHA",
    image: "/feb.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
  },
  {
    name: "March",
    description:
      "THIS IS OUR ONLY PHOTO TOGETHER IN MARCH. I guess cos we were in the middle of the sem and this sem was definitely NOT fun at least for me but you made it alot better. But I still really like this photo, I think you look very cute in it hehe and this fit?? gurll. I think that's why I asked to take a picture hehe",
    image: "/mar.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "April",
    description:
      "In April we had our first sleepover(s?) at my house since getting together hehe, (I think that's all I'll say here..)"
      + " We also went to the Van Gogh exhibit which we booked like on our first official date to the beach back in Jan?? I thought the exhibit was really nice and not bad for the price we paid." 
      + " We also took quite a few pictures there together which I really liked, and I think many turned out nicely (it was hard to choose), but this might be one of my favourite photos together and you were especially pretty it in.",
    image: "/apr.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "May",
    description:
      "WE DID QUITE A FEW THINGS IN MAY. We had our 2nd JB trip back in the SAME Airbnb because its the best Airbnb in JB and we ate SO MANY new things! We tried Keijometo, Molten Choc, Morihana, and even watched a movie at the sus KSL."
      + " We also went for a day trip with the group and I think this was officially when everyone knew we were together? Oh oh, and we COOKED quite a few times (my cheese intake definitely hasn't been higher) Lastly, we also had a nice beach date this month where the weather was so nice to just lie there the whole afternoon which we did.",
    image: "/may.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "June",
    description:
      "In June, we has our 3rd?! JB trip. This time we stayed at R&F Mall with the purpose of watching movies at the most amazing looking cinema ever, we were definitely not disappointed. We also baked for the first time! We made chocolate chip cookies which all expanded like crazy and then flatten themselves out HAHHHAAH but I thought they still tasted quite nice. OH and we also tried the 2x spicy Samyang.... which was DEATH.",
    image: "/jun.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "July",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "August",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "September",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "October",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "November",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "December",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Our Year
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    {/* <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div> */}
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
