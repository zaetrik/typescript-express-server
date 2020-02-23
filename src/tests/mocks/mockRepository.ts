// Types
import { Repository } from "repository";

export const mockRepository: Repository = {
  getAllData: () =>
    new Promise((resolve, reject) => {
      resolve([]);
    })
};
