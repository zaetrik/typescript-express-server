import supertest from "supertest";

describe("API Controller", () => {
  const api = supertest(`localhost:${process.env.PORT}`);

  it("gets all data from repository", async () => {
    const response = await api.get("/api");

    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
  });
});
