import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  type TAcademicSemesterCodeMapper = {
    [key: string]: string;
  };
  const AcademicSemesterCodeMapper: TAcademicSemesterCodeMapper = {
    Autumn: "01",
    Summar: "02",
    Fall: "03",
  };

  if (AcademicSemesterCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid semester code");
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
