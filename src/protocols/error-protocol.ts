export type Error = {
  name: string;
  message: string;
};

export function errorNotFound (subject: string = 'Item') {
  return { 
    name: "NotFound",
    message: `${subject} Not found`
  };
};