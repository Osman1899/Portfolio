import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "TypeScript" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "MongoDB" },
  { skill: "MySQL" },
  { skill: "Wordpress" },
  { skill: "Shopify" },
  { skill: "Canva" },
]

const AboutSection = () => {
  return (
    <section id="A Propos">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          A Propos de Moi
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Biographie! 😊
            </h1>
            <p>
              Salut, Ahmad Khaled Osman Je suis un{" "}
              <span className="font-bold">{"passioné, motivé"}</span> et{" "}
              <span className="font-bold">{"ambitieux"}</span> Développeur Full Stack basé au Sénégal.
            </p>
            <br />
            <p>
              J'ai obtenu ma Licence en informatique à l'Institut Africain de Management (IAM) en 2018.
            </p>
            <br />
            <p>
            J'ai toujours eu une passion pour la technologie et le design et j'ai commencé à apprendre à coder en 2015. La technologie et les tendances économiques m'ont également poussé à m'interressé au trading des actifs financiers.  J'aime aussi pratiquer des sports comme la musculation ou le football.
            </p>
            <br />
            <p>
              J'ai toujours cru au proverbe {" "}
              <span className="font-bold text-teal-500">
                LA REUSSITE VIENT DE LA PERSÉVÉRANCE
              </span>{" "}
              et c'est ce qui me motive au quotidien à repousser mes limites et à continuer à m'améliorer. Je suis toujours ouvert à de nouvelles opportunités.🤩
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Mes Compétences</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-blue-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/Avatar3.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block mr-4 mt-2 md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
