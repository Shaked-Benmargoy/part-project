import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { checkIsAdmin } from "../services/sharepointApi";

interface AdminContextType {
  isAdmin: boolean;
  editMode: boolean;
  toggleEditMode: () => void;
}

const AdminContext = createContext<AdminContextType>({
  isAdmin: false,
  editMode: false,
  toggleEditMode: () => {},
});

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    checkIsAdmin().then(setIsAdmin).catch(() => setIsAdmin(false));
  }, []);

  const toggleEditMode = () => setEditMode((prev) => !prev);

  return (
    <AdminContext.Provider value={{ isAdmin, editMode, toggleEditMode }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdminContext() {
  return useContext(AdminContext);
}
