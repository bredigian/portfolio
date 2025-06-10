type TRoute = {
  id: string;
  name: string;
  name_eng: string;
};

export const ROUTES: TRoute[] = [
  {
    id: 'projects',
    name: 'Proyectos',
    name_eng: 'Projects',
  },
  {
    id: 'skills',
    name: 'Habilidades',
    name_eng: 'Skills',
  },
  {
    id: 'education',
    name: 'Educación',
    name_eng: 'Education',
  },
  {
    id: 'me',
    name: 'Yo',
    name_eng: 'Me',
  },
  {
    id: 'options',
    name: 'Opciones',
    name_eng: 'Options',
  },
];
