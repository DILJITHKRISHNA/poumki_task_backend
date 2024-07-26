declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        PORT?: string;
        DB_HOST: string;
        DB_USER: string;
        DB_PASS: string;
        JWT_SECRET: string;
        TOKEN_KEY: string; // Add this line
      }
    }
  }
  
  // Convert the script into a module by adding an empty export statement if necessary.
  export {}
  