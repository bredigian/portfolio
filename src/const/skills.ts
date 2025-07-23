import {
  FaAws,
  FaDigitalOcean,
  FaDocker,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa6';
import {
  SiAdobeillustrator,
  SiAngular,
  SiC,
  SiFigma,
  SiJavascript,
  SiLinux,
  SiMicrosoftazure,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNginx,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiRedux,
  SiShadcnui,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import { BsGit } from 'react-icons/bs';
import { TSkill } from '@/types/skills.types';
import { TbBrandNextjs } from 'react-icons/tb';

export const SKILLS: TSkill[] = [
  {
    name: 'JavaScript',
    icon: SiJavascript,
    category: 'Frontend',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    category: 'Frontend',
  },
  {
    name: 'React.js',
    icon: FaReact,
    category: 'Frontend',
  },
  {
    name: 'React Native',
    icon: FaReact,
    category: 'Frontend',
  },
  {
    name: 'Next.js',
    icon: TbBrandNextjs,
    category: 'Frontend',
  },
  {
    name: 'Angular',
    icon: SiAngular,
    category: 'Frontend',
  },
  {
    name: 'TailwindCSS',
    icon: SiTailwindcss,
    category: 'Frontend',
  },
  {
    name: 'shadcn/ui',
    icon: SiShadcnui,
    category: 'Frontend',
  },
  {
    name: 'Redux',
    icon: SiRedux,
    category: 'Frontend',
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    category: 'Backend',
  },
  {
    name: 'Nest.js',
    icon: SiNestjs,
    category: 'Backend',
  },
  {
    name: 'Python',
    icon: SiPython,
    category: 'Backend',
  },
  {
    name: 'C',
    icon: SiC,
    category: 'Backend',
  },
  {
    name: 'Java',
    icon: FaJava,
    category: 'Backend',
  },
  {
    name: 'Spring Boot',
    icon: SiSpringboot,
    category: 'Backend',
  },
  {
    name: 'Prisma ORM',
    icon: SiPrisma,
    category: 'Database',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    category: 'Database',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    category: 'Database',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    category: 'Database',
  },
  {
    name: 'Postman',
    icon: SiPostman,
    category: 'Backend',
  },
  {
    name: 'AWS',
    icon: FaAws,
    category: 'Infrastructure',
  },
  {
    name: 'Azure',
    icon: SiMicrosoftazure,
    category: 'Infrastructure',
  },
  {
    name: 'DigitalOcean',
    icon: FaDigitalOcean,
    category: 'Infrastructure',
  },
  {
    name: 'NGINX',
    icon: SiNginx,
    category: 'DevOps',
  },
  {
    name: 'Git',
    icon: BsGit,
    category: 'Control',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    category: 'Control',
  },
  {
    name: 'Docker',
    icon: FaDocker,
    category: 'DevOps',
  },
  {
    name: 'Linux',
    icon: SiLinux,
    category: 'DevOps',
  },
  {
    name: 'Figma',
    icon: SiFigma,
    category: 'Design',
  },
  {
    name: 'Illustrator',
    icon: SiAdobeillustrator,
    category: 'Design',
  },
];
