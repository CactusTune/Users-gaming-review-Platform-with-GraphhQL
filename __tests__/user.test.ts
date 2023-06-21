import server from "../server";
import { gql } from "apollo-server-express";

it("should validate the user correctly", async () => {
  const result = await server.executeOperation({
    query: gql`
      mutation {
        createUser(
          user: { name: "Segun Ojo", email: "segun@gmail.com", password: "" }
        )
      }
    `,
  });
  expect(result).toBeTruthy();
  expect(result.errors).toBeTruthy();
});

it("should validate the login correctly", async () => {
  const result = await server.executeOperation({
    query: gql`
      query {
        login(loginInput: { email: "segun@gmail.com", password: "" })
      }
    `,
  });

  expect(result).toBeTruthy();
  expect(result.errors).toBeTruthy();
});
