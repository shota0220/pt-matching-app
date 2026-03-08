import { defineConfig } from '@prisma/config';
import 'dotenv/config'; 

export default defineConfig({
  datasource: {
    // .env の DATABASE_URL ("file:./dev.db") を読み込む
    url: process.env.DATABASE_URL,
  },
});