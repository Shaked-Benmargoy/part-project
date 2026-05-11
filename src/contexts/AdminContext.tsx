import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { checkIsAdmin } from "../services/sharepointApi";

interface AdminContextType {
  isAdmin: boolean;
  editMode: boolean;
  toggleEditMode: () => void;
  logoVersion: number;
  bumpLogoVersion: () => void;
}

const AdminContext = createContext<AdminContextType>({
  isAdmin: false,
  editMode: false,
  toggleEditMode: () => {},
  logoVersion: 0,
  bumpLogoVersion: () => {},
});

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [logoVersion, setLogoVersion] = useState(() => Date.now());

  useEffect(() => {
    checkIsAdmin().then(setIsAdmin).catch(() => setIsAdmin(false));
  }, []);

  const toggleEditMode = () => setEditMode((prev) => !prev);
  const bumpLogoVersion = useCallback(() => setLogoVersion(Date.now()), []);

  return (
    <AdminContext.Provider value={{ isAdmin, editMode, toggleEditMode, logoVersion, bumpLogoVersion }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdminContext() {
  return useContext(AdminContext);
}
