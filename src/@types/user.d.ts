type User = {
  authenticated: boolean;
};
type LoginRes = {
  user: User;
  token: string;
};