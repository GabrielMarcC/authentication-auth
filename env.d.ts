declare global {
  module NodeJS {
    interface ProcessEnv{
      URL: string,
      
    }
  }
}

export {}