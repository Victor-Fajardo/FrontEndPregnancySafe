import { Mother } from './mother';
import { Obstetrician } from './obstetrician';

export class MedicalAppointment {
  id: number;
  affair: string;
  description: string;
  date: string;
  firstNameMothe: string;
  lastNameMother: string;
  firstNameObste: string;
  lastNameObste: string;
  obstetrician: Obstetrician;
  mother: Mother;
}
