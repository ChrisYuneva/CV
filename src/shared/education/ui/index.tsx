import ExperienceCase from 'shared/experienceCase/ui';
import styles from './index.module.scss';

interface EducationProps {
  name: string;
  time: string;
  description: string;
}

function Education({ name, time, description }: EducationProps) {
  return <ExperienceCase name={name} time={time} description={description} />;
}

export default Education;
