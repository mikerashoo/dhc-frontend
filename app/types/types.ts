export interface IPagination {
  itemsPerPage: number;
  currentPage: number;
  totalItems: number;
  // prevLink: string | null,
  // nextLink: string | null,
  // from: number,
  // to: number
}
export interface IPermission {
  id: number;
  name_kk?: string;
  name_ru?: string;
  slug: string;
}
export interface IRole {
  id: number;
  name_kk?: string;
  name_ru?: string;
  permissions: Array<IPermission>;
  slug: string;
  status: string;
}
