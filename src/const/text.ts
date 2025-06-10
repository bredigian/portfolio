import { getAge } from '@/lib/utils';

const age = getAge(new Date(2002, 3, 21));

export const TEXT = {
  ENG: {
    NAVBAR: {
      OPTIONS: 'Options',
      ENG_MODE: 'English',
      DARK_MODE: 'Dark mode',
    },
    HOME: {
      TITLE: "Hi! I'm",
      SUBTITLE: [
        'My name is ',
        'Gianluca Bredice Vivarelli',
        `, I'm ${age} and I'm from Argentina`,
      ],
      DESCRIPTION:
        'I live in La Plata and I study Systems Engineering. I started my career in systems in 2020 and at the beginning of 2022 I started my path as a web developer. Taking different courses and studying independently, I learned and specialized in the different technologies that are used today.',
    },
    EDUCATION: {
      TITLE: 'Education',
      SUBTITLE: 'Training I took to become who I am today.',
    },
    SKILLS: {
      TITLE: 'Skills',
      SUBTITLE:
        'Technologies in which I specialize and use every day to carry out my projects.',
    },
    PROJECTS: {
      TITLE: 'Experience',
      SUBTITLE:
        'Works and personal projects that I have developed throughout my career that have led me to the current level of experience.',
      TOOLTIP: 'Select one to display more information about it.',
      DEPLOY: 'Deploy',
      NO_DEPLOY: 'Coming soon...',
    },
    ABOUT: {
      TITLE: 'Me',
      SUBTITLE: 'This is me.',
      DESCRIPTION:
        'Organized, responsible and constantly learning. Music fanatic (mostly electronic music). I speak Spanish natively and I have basic English that allows me to understand texts and dialogues. Nowadays I work as a freelancer, but I am still open to new possibilities in which I can contribute my skills to the work team and also learn from them.',
      LABEL: 'Contact me',
      FORM: {
        NAME: 'Name',
        EMAIL: 'Email',
        MESSAGE: 'Message',
        SUBMIT: 'Submit',
        SUBMITTING: 'Submitting',
        ATTRIBUTE_REQUIRED: 'Attribute is required or is not valid.',
      },
      CV_LINK: './Gianluca_Bredice_Vivarelli-CV_English.pdf',
    },
    FOOTER: {
      TITLE: 'Made by Gianluca Bredice Vivarelli',
    },
  },
  ESP: {
    NAVBAR: {
      OPTIONS: 'Opciones',
      ENG_MODE: 'Inglés',
      DARK_MODE: 'Modo oscuro',
    },
    HOME: {
      TITLE: '¡Hola! Soy',
      SUBTITLE: [
        'Mi nombre es ',
        'Gianluca Bredice Vivarelli',
        `, tengo ${age} años y soy de Argentina`,
      ],
      DESCRIPTION:
        'Vivo en La Plata y estudio Ingeniería en Sistemas en la UTN. Inicié mi carrera orientada a sistemas en 2020 y a principios del 2022 emprendí camino como desarrollador web. Tomando diferentes cursos y estudiando de forma autónoma, fui aprendiendo y especializandome en las diferentes tecnologías que se utilizan hoy en día.',
    },
    EDUCATION: {
      TITLE: 'Educación',
      SUBTITLE: 'Formación que realicé para llegar a quien soy hoy en día.',
    },
    SKILLS: {
      TITLE: 'Habilidades',
      SUBTITLE:
        'Tecnologías en las que me especializo y utilizo día a día para llevar a cabo mis proyectos.',
    },
    PROJECTS: {
      TITLE: 'Experiencia',
      SUBTITLE:
        'Trabajos y proyectos personales que he desarrollado a lo largo de mi carrera que me han llevado al nivel actual de experiencia.',
      TOOLTIP: 'Seleccione el que desee para ver información acerca del mismo.',
      DEPLOY: 'Link',
      NO_DEPLOY: 'Proximamente...',
    },
    ABOUT: {
      TITLE: 'Yo',
      SUBTITLE: 'Este soy yo.',
      DESCRIPTION:
        'Organizado, responsable y en constante aprendizaje. Fanático de la música (más que nada electrónica). Hablo español nativo y tengo un inglés básico que me permite comprender textos y diálogos. Hoy en día trabajo como freelance, pero sigo abierto a nuevas posibilidades en las cuales pueda aportar mis habilidades al equipo de trabajo y también aprender de ellos.',
      LABEL: 'Contactame',
      FORM: {
        NAME: 'Nombre',
        EMAIL: 'Email',
        MESSAGE: 'Mensaje',
        SUBMIT: 'Enviar',
        SUBMITTING: 'Enviando',
        ATTRIBUTE_REQUIRED: 'El atributo es requerido o no es válido.',
      },
      CV_LINK: './Gianluca_Bredice_Vivarelli-CV.pdf',
    },
    FOOTER: {
      TITLE: 'Hecho por Gianluca Bredice Vivarelli',
    },
  },
};
