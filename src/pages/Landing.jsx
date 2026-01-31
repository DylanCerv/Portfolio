import React from "react";
import Card from "../share/components/Card/Card";
import LayoutMain from "../share/layouts/LayoutMain/LayoutMain";
import { SOBRE_MI } from "../share/data/General";
import { REDES } from "../share/data/Icons_links";
import { Link } from "react-router-dom";
import { FaDiscord, FaRegFilePdf } from "react-icons/fa";
import { EXPERIENCIA_LABORAL } from "../share/data/Experiencia";
import { SKILLS_TECHNICAL } from "../share/data/Skills";
import { IconContext } from "react-icons";
import CarruselContainer from "../share/components/Carrusel/CarruselContainer";
import CarruselCard from "../share/components/Carrusel/CarruselCard";
import { PROYECTOS } from "../share/data/Proyectos";
import Footer from "../share/components/Footer/Footer";
import { CONTACT_INFO } from "../share/data/Contact";
import Contact from "../share/components/Contact/Contact";
import { IoIosMail } from "react-icons/io";

export default function Landing() {
  return (
    <LayoutMain>
      <section id='sobre-mi' className="grid grid-cols-2 sm:grid-cols-4 gap-5 lg:grid-cols-8">
        <Card className="flex flex-col gap-4 lg:gap-4 col-span-3 sm:col-span-4 md:col-span-2 sm:row-span-2 lg:col-span-4">
          <div className="text-3xl font-bold lg:text-4xl">
            <h1 className="font-semibold lg:font-bold color-azul !text-sky-300">
              {SOBRE_MI.name}
            </h1>
            <h1>{SOBRE_MI.position}</h1>
          </div>
          <div className="flex flex-row gap-2 items-center">
            {REDES.map((data, index) => (
              <Link key={index} to={data.href} className="hover:text-[#20c7c5]">
                {data.icon}
              </Link>
            ))}
            <a
              className="flex flex-row items-center gap-1 bg-sky-300 text-black hover:bg-[#20c7c5] rounded-lg font-medium px-3 py-1 ml-2"
              href={"/file/cvs/Dylan_Espana_Cervantes_Software_Engineer.pdf"}
              download
            >
              <FaRegFilePdf /> Descargar CV
            </a>
          </div>
          <p className="font-medium text-gray-300">Email: <span className="font-normal text-gray-400 lg:leading-7">{CONTACT_INFO.mail}</span></p>
          <div>
            <p className="text-gray-400 lg:leading-7">{SOBRE_MI.description}</p>
            <p className="text-gray-400 lg:leading-7">{SOBRE_MI.phrase}</p>
          </div>
        </Card>
        <Card className="flex flex-col items-center justify-center text-center gap-2 col-span-3 sm:col-span-2 lg:col-span-2 lg:row-span-2">
          <div className="relative w-fit">
            <h1 className="color-azul !text-sky-300 text-2xl sm:text-3xl lg:text-4xl font-bold">
              Ecuador
            </h1>
            <img
              className="absolute -top-5 -right-5"
              src="/icons/flag-ecuador.svg"
              alt=""
            />
          </div>
        </Card>
        <Card className="!px-2 !py-8 flex flex-col items-center justify-center text-center gap-4 col-span-3 sm:col-span-2 lg:col-span-2 lg:row-span-2">
          <h1 className="color-azul !text-sky-300 text-xl sm:text-xl lg:text-2xl font-semibold">
            Backend Architecture
          </h1>
          <h1 className="color-azul !text-sky-300 text-xl sm:text-xl lg:text-2xl font-semibold">
            APIs & Security
          </h1>
          <h1 className="color-azul !text-sky-300 text-xl sm:text-xl lg:text-2xl font-semibold">
            Data Optimization
          </h1>
        </Card>
        <Card className="!p-0 overflow-hidden col-span-3 sm:col-span-2 lg:col-span-3">
          <img className="h-full w-full" src="/img/grid/setup.webp" alt="" />
        </Card>
        <Card className="tech flex flex-col gap-2 col-span-3 sm:col-span-4 lg:col-span-5 lg:row-span-3">
          <h1 className="text-2xl font-bold color-azul !text-sky-300">
            Habilidades Técnicas
          </h1>
          <section>
            {SKILLS_TECHNICAL.map((data, index) => (
              <article key={index} className="pt-5">
                <h1 className="text-xl font-semibold mt-5 mb-3">{data.title}</h1>
                <p className="text-gray-400 leading-7 mb-5">{data.description}</p>
                <section className="flex flex-wrap gap-8">
                  <IconContext.Provider
                    value={{ className: "icon-skill", size: 30 }}
                  >
                    {data.skills.map((tech, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center"
                      >
                        <div>{tech.icon}</div>
                        <p className="text-gray-400 font-medium">{tech.name}</p>
                      </div>
                    ))}
                  </IconContext.Provider>
                </section>
              </article>
            ))}
          </section>
        </Card>
      </section>
      <section id='experiencia' className="flex flex-col gap-10">
        <article>
          <h1 className="font-bold text-3xl">Experiencia</h1>
          <p className="text-gray-400 mt-3">Software Engineer con 3+ años de experiencia diseñando y manteniendo sistemas en producción para plataformas B2B, SaaS y fintech. Fuerte enfoque en lógica de negocio, diseño de APIs, seguridad, modelado de datos y optimización de rendimiento en entornos de alto volumen. Experiencia trabajando en startups, participando en decisiones técnicas, migraciones de bases de datos y construcción de soluciones escalables y mantenibles. Capaz de adaptarse a distintos stacks y colaborar estrechamente con equipos de producto y frontend.
          </p>
        </article>
        <ol className="relative border-s border-gray-200 sm:ml-10 md:ml-20">
          {EXPERIENCIA_LABORAL.map((data, index) => (
            <li className="mb-10 ms-4 -mt-3" key={index}>
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full mt-1.5 -start-1.5 sm:-start-[8px] border border-white"></div>
              <time className="mb-1 text-[28px] font-bold leading-none text-white">
                {data.Position_Held}
              </time>
              <h3 className="text-xl font-semibold color-azul !text-sky-300">
                {data.Company}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{data.Period}</p>
              <ul className="list-disc list-inside">
                {data.Performed_Activities.map((activity, index) => (
                  <li key={index} className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                    {activity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
      <section id='proyectos' className="flex flex-col gap-10">
        <article>
          <h1 className="text-4xl font-bold">Proyectos</h1>
          <p className="text-gray-400 mt-3">Mi enfoque principal es el desarrollo backend y la construcción de sistemas confiables en producción. Utilizo el frontend como herramienta para validar, integrar y presentar soluciones completas.</p>
        </article>
        <CarruselContainer className={'space-x-6'}>
          {PROYECTOS.map((data, index) => (
            <CarruselCard
              key={index}
              src={data.src}
              title={data.title}
              description={data.description}
              URL={data.URL}
              URL_Github={data.URL_Github}
              tools={data.tools}
            />
          ))}
        </CarruselContainer>
      </section>
      <Card id='contacto' className="flex flex-col col-span-3 gap-5">
        <header className="flex flex-row items-center gap-3">
          <IoIosMail color="#fff" size={40} />
          <h1 className="text-3xl lg:text-4xl font-bold color-azul !text-white">
            Contacto
          </h1>
        </header>
        <Contact text={CONTACT_INFO.mail} linkSend={`mailto:${CONTACT_INFO.mail}`} />
        <header className="flex flex-row items-center gap-3">
          <FaDiscord color="#fff" size={40} />
          <h1 className="text-3xl lg:text-4xl font-bold color-azul !text-white">
            Discord
          </h1>
        </header>
        <Contact text={CONTACT_INFO.discord} linkSend={`https://discord.com/channels/@me`} />
      </Card>
      <Footer />
    </LayoutMain>
  );
}
