// importing libraries
import { ReactNode } from "react";

// importing custom components
import Navbar from "../Navbar/Navbar";

// prop type
type LayoutProp = {
  children: ReactNode;
};

// layout component
export default function Layout({ children }: LayoutProp) {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  );
}
