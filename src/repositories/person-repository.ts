import { Person } from "../protocols/person-protocol";
import { db } from "../database/database-connection";

export async function readRepo () {
  return await db.query<Person>(`SELECT * FROM people WHERE id = 1000;`);
};