interface ILogger {
  log: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
}

const isDev = import.meta.env.VITE_MODE === "dev";

const logger: ILogger = {
  log: (...args): void => {
    if (isDev) {
      console.log(...args);
    }
  },
  error: (...args): void => {
    if (isDev) {
      console.error(...args);
    }
  },
};

export default logger;
