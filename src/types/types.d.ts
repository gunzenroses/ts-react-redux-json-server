module '*.scss';

declare module '*.png' {
  const value: any;
  export default value;
}

type Theme = 'dark' | 'light';

type AuthInfo = {
  id: string;
  email: string;
}

type UserInfo = {
  email: string;
  password: string;
};

type User = UserInfo & {
  id: string
}