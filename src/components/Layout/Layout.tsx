// importing libraries
import { ReactNode } from "react";

// prop type
type LayoutProp = {
  children: ReactNode;
};

// layout component
export default function Layout({ children }: LayoutProp) {
  return <div className="layout">{children}</div>;
}
