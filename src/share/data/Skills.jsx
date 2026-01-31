import { FaAngular, FaAws, FaBootstrap, FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaLaravel, FaNodeJs, FaPhp, FaPython, FaReact, FaSass, FaSymfony, FaTrello } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiComposer, SiExpress, SiFirebase, SiGooglecloud, SiGooglecolab, SiMongodb, SiMysql, SiNumpy, SiPostman, SiSwagger, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";




export const SKILLS_TECHNICAL = [
    {
        title: "Tecnologías Principales",
        description: "JavaScript, TypeScript, Node.js, APIs REST, Arquitectura Backend, Lógica de Negocio",
        skills: [
            {name: "JavaScript", icon: <RiJavascriptFill />},
            {name: "TypeScript", icon: <BiLogoTypescript />},
            {name: "NodeJS", icon: <FaNodeJs />},
        ]
    },
    {
        title: "Backend & Datos",
        description: "Node.js, Express, Supabase (PostgreSQL, RLS), MongoDB, MySQL, Autenticación y Autorización (JWT), Optimización de Consultas, Migraciones de Datos, Indexación, PHP, Laravel, Symfony",
        skills: [
            {name: "NodeJS", icon: <FaNodeJs />},
            {name: "Express", icon: <SiExpress />},
            {name: "MongoDB", icon: <SiMongodb />},
            {name: "MySQL", icon: <SiMysql />},
            {name: "PHP", icon: <FaPhp />},
            {name: "Laravel", icon: <FaLaravel />},
            {name: "Symfony", icon: <FaSymfony />},
        ]
    },
    {
        title: "Frontend",
        description: "React, Next.js, React Native, Angular, HTML, CSS, SASS, TailwindCSS",
        skills: [
            {name: "React", icon: <FaReact />},
            {name: "Next.js", icon: <TbBrandNextjs />},
            {name: "Angular", icon: <FaAngular />},
            {name: "HTML", icon: <FaHtml5 />},
            {name: "CSS", icon: <FaCss3Alt />},
            {name: "SASS", icon: <FaSass />},
            {name: "TailwindCSS", icon: <SiTailwindcss />},
        ]
    },
    {
        title: "Cloud & Herramientas",
        description: "AWS, Stripe, Git, Postman, Firebase, Trello",
        skills: [
            {name: "AWS", icon: <FaAws />},
            {name: "Git", icon: <FaGitAlt />},
            {name: "Postman", icon: <SiPostman />},
            {name: "Firebase", icon: <SiFirebase />},
            {name: "Trello", icon: <FaTrello />},
            {name: "Figma", icon: <FaFigma />},
        ]
    },
]