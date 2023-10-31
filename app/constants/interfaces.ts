export interface ILogin {
  email: string;
  password: string;
}
export interface ILoginForget {
  iin: number;
  email: string;
}

export interface IBreadscrumb {
  breadscrumb1?: {
    title: string;
    link?: string;
    current?: boolean;
  };
  breadscrumb2?: {
    title: string;
    link?: string;
    current?: boolean;
  };
  breadscrumb3?: {
    title: string;
    link?: string;
    current?: boolean;
  };
  breadscrumb4?: {
    title: string;
    link?: string;
    current?: boolean;
  };
}

export interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}
export interface Details {
  Users: Detail;
  Managers: Detail;
  Leads: Detail;
}
export interface Detail {
  total: string;
  thanLastMonth: string;
}
export interface IAddVideo {
  videoUrl: string;
  title: string;
  author: string;
  tags: string[];
}
export interface IAddSub {
  name: string;
  phone: string;
  email: string;
  password: string;
  repeat_password?: string;
  access: string[];
}
export interface IAddProject {
  devName: string;
  description: string;
  OperatingCities: string[];
  YearofExperience: string;
  projectName: string;
  state: string;
  city: string;
  locality: string;
  ApartmentType: string[];
  CarpetAreaRange: string;
  ConstructionStage: string;
  towers: string;
  units: string;
  ProjectArea: string;
  RERAID: string;
  LocationLink: string;
  amenities: number[];
  images: string[];
  PriceDetails: IPriceDetails;
  EMI: string;
  FloorPlans: FloorPlan[];
  devID: string;
  isTranding: boolean;
  isFeatured: boolean;
  category: string;
  total_tower: string;
  type: string;
}
export interface IPriceDetails {
  [key: string]: {
    Price: string;
    "Expected Price": string;
  };
}
interface FloorPlan {
  area: string;
  image: string;
  sf: string;
}
export interface IAddBlog {
  author: string;
  title: string;
  date: Date;
  imageUrl: string;
  paragraph: Paragraph[];
}
interface Paragraph {
  paragraphTitle: string;
  Paragraph: string;
}
