module '*.scss';
module '*.svg';

declare module '*.png' {
  const value: any;
  export default value;
}

type Theme = 'dark' | 'light';

type UserInfo = {
  id: string;
  email: string;
  name: string;
  surname: string;
}

type AuthInfo = {
  email: string;
  password: string;
};

type User = UserInfo & {
  password: string;
};

type Contact = {
  id: string;
  list: string[];
}