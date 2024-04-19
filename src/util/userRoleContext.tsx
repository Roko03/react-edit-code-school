import React, { createContext, useContext, useState } from "react";

const RoleManagerContext = createContext<{
  role: string;
  setRole: React.Dispatch<React.SetStateAction<"user" | "admin">>;
} | null>(null);

export const userRoleManager = () => {
  const roleManager = useContext(RoleManagerContext);

  if (!roleManager) {
    throw new Error(`useRoleManager must be used within a RoleManagerProvider`);
  }

  return roleManager;
};

export const UserRoleManagerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [role, setRole] = useState<"user" | "admin">("user");

  return (
    <RoleManagerContext.Provider value={{ role, setRole }}>
      {children}
    </RoleManagerContext.Provider>
  );
};
