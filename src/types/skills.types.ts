import { IconType } from 'react-icons';

export type TSkillType =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Infrastructure'
  | 'DevOps'
  | 'Control'
  | 'Design';

export type STSkillType =
  | 'Frontend'
  | 'Backend'
  | 'Bases de datos'
  | 'Infraestructura'
  | 'DevOps'
  | 'Control'
  | 'Diseño';

export type TSkill = {
  name: string;
  icon: IconType;
  category: TSkillType;
  category_es: STSkillType;
};
