import { jest } from "@jest/globals";
import userRepository from "../../src/repositories/userRepository";
import userService, { CreateUserData } from "../../src/services/userService";
import { conflictError } from "../../src/utils/errorUtils";

describe("User Service Unit Tests", () => {
  it("should thrown a conflict error given a duplicate email", async () => {
    const user: CreateUserData = {
      email: "fulaninho@email.com",
      password: "123",
    };

    jest.spyOn(userRepository, "findByEmail").mockResolvedValue({
      id: 1,
      ...user,
    });

    expect(userService.signUp(user)).rejects.toEqual(
      conflictError("Email must be unique")
    );
  });
});
