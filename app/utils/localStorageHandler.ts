export class LocalStorageHandler {
  public static getUserToken = () => {
    const token = localStorage.getItem(".AuthToken");
    return token ?? null;
  };

  public static setUserToken = (token: string) => {
    localStorage.setItem(".AuthToken", token);
  };

  public static clearUserToken = () => {
    localStorage.removeItem(".AuthToken");
  };

  public static getLisToken = () => {
    const token = localStorage.getItem(".LisToken");
    return token ?? null;
  };

  public static setLisToken = (token: string) => {
    localStorage.setItem(".LisToken", token);
  };

  public static clearLisToken = () => {
    localStorage.removeItem(".LisToken");
  };

  public static getUserRole = () => {
    const role = localStorage.getItem(".AuthRole");
    return role ?? null;
  };

  public static setUserRole = (role: string) => {
    localStorage.setItem(".AuthRole", role);
  };

  public static clearUserRole = () => {
    localStorage.removeItem(".AuthRole");
  };
}
