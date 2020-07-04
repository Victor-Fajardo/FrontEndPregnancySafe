import { Mother } from './mother';
import { Obstetrician } from './obstetrician';

export class MedicalExam {
  id: number;
  examType: string;
  description: string;
  priority: string;
  firstNameMother: string;
  lastNameMother: string;
  firstNameObste: string;
  lastNameObste: string;
  mother: Mother;
  obstetrician: Obstetrician;
}
