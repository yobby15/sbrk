import 'dotenv/config';
import pg from 'pg';

pg.types.setTypeParser(1082, (v) => v); 

export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});
export const query = (text, params) => pool.query(text, params);