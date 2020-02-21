import ApiServiceSetup from "../../services/apiService";
import { repository } from "./mock-repository";

describe("API service", () => {
  const ApiService = ApiServiceSetup(repository);

  it("gets all data from repository", async () => {
    const data = await ApiService.getAllDataFromRepository();
    expect(data).toBeDefined();
  });
});
