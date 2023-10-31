import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().required("required").email("Invalid email format"),
  password: yup.string().required("required"),
});

export const UploadSchema = yup.object().shape({
  videoUrl: yup.string().required("required"),
  title: yup.string().required("required"),
  author: yup.string().required("required"),
});
export const AddSubAdminSchema = yup.object().shape({
  name: yup.string().required("required"),
  phone: yup.string().required("required"),
  email: yup.string().required("required").email("Invalid email format"),
  password: yup.string().required("required"),
  repeat_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match") // Проверка на совпадение с полем 'password'
    .required("required"),
});
const priceDetailsSchema = yup.object().shape({
  Price: yup.string().required("required"),
  ExpectedPrice: yup.string().required("required"),
  BHK: yup.string().required("required"),
});
export const AddProjectSchema = yup.object().shape({
  devName: yup.string().required("required"),
  description: yup.string().required("required"),
  YearofExperience: yup.string().required("required"),
  projectName: yup.string().required("required"),
  state: yup.string().required("required"),
  city: yup.string().required("required"),
  locality: yup.string().required("required"),
  CarpetAreaRange: yup.string().required("required"),
  ConstructionStage: yup.string().required("required"),
  towers: yup.string().required("required"),
  units: yup.string().required("required"),
  ProjectArea: yup.string().required("required"),
  RERAID: yup.string().required("required"),
  LocationLink: yup.string().required("required"),
  EMI: yup.string().required("required"),
  //   devID: yup.string().required("required"),
  category: yup.string().required("required"),
  total_tower: yup.string().required("required"),
  type: yup.string().required("required"),
  OperatingCities: yup
    .array()
    .of(yup.string())
    .required("At least one operating city is required"),
  PriceDetails: yup.array().of(priceDetailsSchema),
  aboutdev: yup.string().required("required"),
});
const paragraphSchema = yup.object().shape({
  paragraphTitle: yup.string().required("required"),
  Paragraph: yup.string().required("required"),
});
export const AddBlogSchema = yup.object().shape({
  title: yup.string().required("required"),
  author: yup.string().required("required"),
  paragraph: yup.array().of(paragraphSchema),
  date: yup.date().required("required"),
});
