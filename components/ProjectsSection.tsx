import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "ToDo App",
    description:
      "Création d'une application ToDo tout en utilisant Redux pour gérer l'état global. L'utilisateur doit être capable d'ajouter, supprimer et marquer des tâches comme terminées.",
    image: "/image1.png",
    github: "https://github.com/Osman1899/ToDo-App.git",
    link: "https://github.com/Osman1899/ToDo-App.git",
  },
  {
    name: "Application Film",
    description: "Création d'une application de film dans laquelle nous pouvons présenter vos films ou émissions de télévision préférés.",
    image: "/image2.png",
    github: "https://github.com/Osman1899/projet-film2.git",
    link: "https://github.com/Osman1899/projet-film2.git",
  },
  {
    name: "Test Express Routage",
    description:
      "Création d'une application web contenant des pages.",
    image: "/image3.png",
    github: "https://github.com/Osman1899/Express-Routing.git",
    link: "https://github.com/Osman1899/Express-Routing.git",
  },
]

const ProjectsSection = () => {
  return (
    <section id="Mes Projets">
      <h1 className="my-10 text-center font-bold text-4xl">
        Mes Projets
        <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
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
                    <div className="flex flex-row align-bottom space-x-4">
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
                    </div>
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
