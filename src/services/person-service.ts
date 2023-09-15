import { errorNotFound } from "../protocols/error-protocol";
import { readRepo } from "../repositories/person-repository";

export async function readAllService () {
  const res = await readRepo();

  // const selected = Math.floor(Math.random() * res.rowCount);

  if(res.rowCount === 0) throw errorNotFound("Person");

  const id = Math.floor(Math.random() * res.rowCount);
  console.log(id);

  console.log(res.rows[id]);
  const person = res.rows[id];

  return person;
};