import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import SemesterDetails from "./SemesterDetails.jsx";

const NAVIGATION = [
  { segment: "sem1", title: "Semester 1", icon: <MenuBookIcon /> },
  { segment: "sem2", title: "Semester 2", icon: <MenuBookIcon /> },
  { segment: "sem3", title: "Semester 3", icon: <MenuBookIcon /> },
  { segment: "sem4", title: "Semester 4", icon: <MenuBookIcon /> },
  { segment: "sem5", title: "Semester 5", icon: <MenuBookIcon /> },
  { segment: "sem6", title: "Semester 6", icon: <MenuBookIcon /> },
  { segment: "sem7", title: "Semester 7", icon: <MenuBookIcon /> },
  { segment: "sem8", title: "Semester 8", icon: <MenuBookIcon /> },
];

const demoTheme = createTheme({
  palette: {
    mode: "dark",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DashboardLayoutBranding(props) {
  const { window } = props;
  const router = useDemoRouter("/dashboard");

  const demoWindow = window !== undefined ? window() : undefined;

  const [selectedSegment, setSelectedSegment] = React.useState("sem1");
  const [semesterData, setSemesterData] = React.useState({
    sem1: [],
    sem2: [],
    sem3: [],
    sem4: [],
    sem5: [],
    sem6: [],
    sem7: [],
    sem8: [],
  });

  const handleSemesterDetailsChange = (semester, data) => {
    setSemesterData((prevData) => ({
      ...prevData,
      [semester]: data,
    }));
  };

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        title: "CIT.AI",
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout hideNavigation>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "16px",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              width: "250px",
              backgroundColor: "rgba(0, 0, 0, 0.85)",
              display: "flex",
              flexDirection: "column",
              padding: "16px",
              height: "100vh",
              color: "#fff",
            }}
          >
            {NAVIGATION.map((item) => (
              <Box
                key={item.segment}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px",
                  marginBottom: "8px",
                  cursor: "pointer",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  backgroundColor:
                    selectedSegment === item.segment ? "#333" : "inherit",
                  "&:hover": {
                    backgroundColor: "#333",
                    transform: "scale(1.05)",
                  },
                }}
                onClick={() => setSelectedSegment(item.segment)}
              >
                <MenuBookIcon
                  sx={{
                    marginRight: "8px",
                    opacity: selectedSegment === item.segment ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                />
                <Typography>{item.title}</Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              flex: 1,
              py: 4,
              display: "flex",
              flexDirection: "column",
              marginLeft: "16px",
            }}
          >
            <Typography variant="h4"></Typography>
            <SemesterDetails
              semester={selectedSegment}
              data={semesterData[selectedSegment]}
              onChange={handleSemesterDetailsChange}
            />
          </Box>
        </Box>
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBranding.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBranding;
