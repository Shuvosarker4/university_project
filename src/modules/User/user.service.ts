import config from "../../config";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../students/student.interface";
import { Student } from "../students/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, payLoad: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_pass as string);
  userData.role = "student";

  const admissionSemester: any = await AcademicSemester.findById(
    payLoad.admissionSemester
  );

  //set manually generated it
  userData.id = await generateStudentId(admissionSemester);

  // create a user
  const newUser = await User.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    payLoad.id = newUser.id;
    payLoad.user = newUser._id; //reference _id

    const newStudent = await Student.create(payLoad);
    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDB,
};
