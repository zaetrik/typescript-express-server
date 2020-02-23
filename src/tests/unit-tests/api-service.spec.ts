import ApiServiceSetup from "../../services/apiService";

// Mocks
import { mockRepository } from "../mocks/mockRepository";
import { mockEventEmitter } from "../mocks/mockEventEmitter";
import { mockLogger } from "../mocks/mockLogger";

describe("API service", () => {
  const ApiService = ApiServiceSetup(
    mockRepository,
    mockEventEmitter,
    mockLogger
  );

  it("gets all data from repository", async () => {
    const data = await ApiService.getAllDataFromRepository();
    expect(data).toBeDefined();
  });
});
