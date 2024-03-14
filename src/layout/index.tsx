import { ReactNode } from "react";

import Navbar from "./navbar";
import { Box } from "@mui/material";

export default function MainLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <>
      <Navbar />
      <Box sx={styles.mainLayout}>{children}</Box>
    </>
  );
}

const styles = {
  mainLayout: {
    minHeight: "calc(100vh - 107px)",
    overflow: "hidden",
    padding: "12px 0",
  },
};
