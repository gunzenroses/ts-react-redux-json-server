module '*.scss';

declare module '*.png' {
  const value: any;
  export default value;
}

type Theme = 'dark' | 'light';