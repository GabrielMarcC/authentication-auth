declare global {
  module NodeJS {
    interface ProcessEnv {
      URL: string;
      TOKEN: string;
    }
  }
}

export {};
