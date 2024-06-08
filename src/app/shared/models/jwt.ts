export interface JWT {
  firstName: string;
  lastName: string;
  role: string;
  exp: number;
  iat: number;
  iss: string;
}