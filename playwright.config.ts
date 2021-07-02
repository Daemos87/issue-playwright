import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  maxFailures: 1,
  workers: 2,
  use: {
    headless: true,
  },
  reporter: [["list"], ["json", { outputFile: "report.json" }]],
  timeout:40000,
  outputDir:`${process.cwd()}/output`
};

export default config;
