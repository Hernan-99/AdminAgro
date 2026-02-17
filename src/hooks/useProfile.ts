// src/hooks/useUser.ts
import { useEffect, useState } from "react";
import type { User } from "@/types/user";
import { userApi } from "@/mock/user.api.mock";

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    const data = await userApi.get();
    setUser(data);
    setLoading(false);
  };

  const updateUser = async (data: Partial<User>) => {
    if (!user) return;

    setLoading(true);

    const updated = await userApi.update(user.id, data);

    if (updated) {
      setUser(updated);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    loading,
    updateUser,
    refetch: fetchUser,
  };
};
