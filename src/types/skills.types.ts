import { IconType } from 'react-icons';

export type TSkillType =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Infrastructure'
  | 'DevOps'
  | 'Control'
  | 'Design';

export type TSkill = {
  name: string;
  icon: IconType;
  category: TSkillType;
};
