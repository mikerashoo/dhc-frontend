// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// export interface IAuth {
//   status: boolean;
//   message: string;
//   Details: {
//     email: string;
//     id: string;
//     name: string;
//     phone: string;
//     isAdmin: boolean;
//   } | null;
// }
// export const UseAuth = create<IAuth>(
//   persist(
//     (set) => ({
//       status: false,
//       message: "",
//       Details: null,
//     }),
//     { name: "Auth" }
//   )
// );
