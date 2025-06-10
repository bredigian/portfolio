import {
  FaFileArrowDown,
  FaGithub,
  FaInstagram,
  FaTelegram,
} from 'react-icons/fa6';

import { BsLinkedin } from 'react-icons/bs';
import { TSocial } from '@/types/social.types';

export const SOCIAL: TSocial[] = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://instagram.com/gianlucabredice.dev',
  },
  {
    name: 'Telegram',
    icon: FaTelegram,
    url: 'tg://resolve?domain=bredigian',
  },
  {
    name: 'LinkedIn',
    icon: BsLinkedin,
    url: 'https://www.linkedin.com/in/gianluca-bredice-vivarelli/',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/bredigian',
  },
  {
    name: 'Download CV',
    name_es: 'Descargar CV',
    icon: FaFileArrowDown,
    url: './Gianluca_Bredice_Vivarelli-CV_English.pdf',
    url_es: './Gianluca_Bredice_Vivarelli-CV.pdf',
  },
];
