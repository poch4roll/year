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
      "ANOTHER MONTH WE ONLY HAVE ONE PIC TGT. Okay but this month is excusable because we each spent almost all of it in JAPAN!! and I'm sure you had lots of fun there like I did (I wanna go back urghh) "
      + "We DID go to one place together, and that was Daizu! which has arguably the best mentai fries because they were just so LOADED.",
    image: "/jul.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "August",
    description:
      "We have a ton of pictures in August because we did SO MANY things but I chose this one because I don't remember this one, and it looks really nice?? "
      + "There was girlfriend dayyy and there was your birthdayyy and we even went to JB together for the 4th time! "
      + "On our JB trip we stayed at puteri harbour (my first time) for TWO nights (our longest stay yet) and we ate sooo much food this trip such as Arashi, HDL and Rockefellas isit?? "
      + "OH and we also went to SKY HELIX and caught a reallyy nice sunset because we professionally timed it hehe (so many nice photos here too)",
    image: "/aug.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "September",
    description:
      "In September we took that really nice mirror selfie but the mirror ruined it with its smudges HAHAHA. You got to try ShakeShack for the first time (thinking about it we haven't been back there in a while...), and we celebrated an early bf day!! "
      + "We had Tipo which we had for gf day also I'm pretty sure? and we finally took our first polaroid together which turned out nicely horr (of course I had to use it). We also have a photo of us teaching BT which I thought was nice to commemorate it.",
    image: "/sep.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "October",
    description:
      "I think October was really snoozee, we barely have any pictures, let alone of ourselves. But there are a few pictures of us chilling at MBS, oh and you were wearing THAT blue dress, and this is the time we tried something new..",
    image: "/oct.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "November",
    description:
      "Ooo I really like this picture actually, it's really CUTE. It's from the day we had a date at Bugis, where we had dinner at Huevos, Monarchs and Milkweed gelato, and you custom made your butterfly necklace! I also got a big fat fukufuku from you for my birthday hehe and we put up my house christmas tree together!",
    image: "/nov.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "December",
    description:
      "We did SO many things in December, also because it was FINALLY Winter break (as I write this winter break is literally ending 😭). We built a ton of lego during the break, went on our first IKEA date, saw the christmas lights at orchard road, took pictures with cinnamoroll at marina square, went on a thrift date (we walked so much that day), had fluff stack for the first time, went to kurasu for a matcha date, "
      + "and we even had a half day in JB where I got to try Kinsahi and we watched the bad aquaman in the next most awesome cinema in JB. On the LAST day of the year, we went on extra long adventure along orchard road, took some nice pictures with one of the remaining christmas trees, and then we went to woodlands to see your FIRST EVER countdown live!!",
    image: "/dec.png",
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
