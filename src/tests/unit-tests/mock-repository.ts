// Types
import { Repository } from "repository";

export const repository: Repository = {
  getAllData: () =>
    new Promise((resolve, reject) => {
      resolve([]);
    })
};
