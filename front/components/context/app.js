import { createContext, useContext, useState } from "react";

const app = createContext();

export function AppProvider({ children }) {

  const [category, setCategory] = useState()

  const value = {
    cartProducts: [],
    setCategory: (category) => setCategory(category)
  }
  return (<AppProvider value={value}>{children}</ AppProvider>)
}

export function useAppContext() {
  return useContext(app)
} 