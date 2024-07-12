// i18next-parser.config.ts (à la racine du projet)
import { UserConfig } from "i18next-parser";

const config: UserConfig = {
  locales: ['en', 'fr'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  input: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  sort: true,
  verbose: true,
};


export default config;