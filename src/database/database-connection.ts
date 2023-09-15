import pg from 'pg';

const { Pool } = pg;

const databaseConfig = {
  connectionString: 'postgres://postgres:postgres123@localhost:5432/ts-practice'
}

export const db = new Pool(databaseConfig);