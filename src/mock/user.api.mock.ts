import type { User } from "@/types/user";
import { userMock } from "./user.mock";

let currentUser: User = { ...userMock };

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const userApi = {
  async get(): Promise<User> {
    await delay(500);
    return { ...currentUser };
  },

  async update(id: number, data: Partial<User>): Promise<User | null> {
    await delay(500);

    if (currentUser.id !== id) return null;

    currentUser = { ...currentUser, ...data };
    return { ...currentUser };
  },
};
