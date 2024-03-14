import { IoMdHeartEmpty } from "react-icons/io";
import { Avatar, Box, Typography } from "@mui/material";

import travelImage from "../../../../assets/travel.jpg";

interface PropsType {
  likeCount: number;
}

export default function SingleBlog(props: PropsType): JSX.Element {
  const { likeCount } = props;

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box>
        <Box display="flex" gap="12px" alignItems="center">
          <Avatar sx={{ width: 22, height: 22, fontSize: "10px" }}>AD</Avatar>
          <Typography variant="body2" color="#434D5B" fontWeight={500}>
            ali dev @ 15 jan
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="h6" sx={{ color: "#1C2025" }}>
            The Brightest start in the Darkest Sky
          </Typography>
          <Typography sx={{ color: "#434D5B", mt: "3px", fontFamily: "Lora serif" }}>
            New Zealand's Dark Sky project at lake Tekapo
          </Typography>
        </Box>

        <Box mt={2}>
          <Box display="flex" alignItems="center" gap="20px">
            <Typography sx={styles.tagStyle}>Travel</Typography>
            <Box display="flex" alignItems="center" gap="5px">
              <Box
                sx={{
                  ...styles.likIconStyle,
                  background: likeCount ? "#ffebee" : "transparent",
                }}
              >
                <IoMdHeartEmpty color={likeCount ? "#f44336" : "#434D5B"} size="20px" />
              </Box>
              <Typography variant="subtitle2" color="#434D5B">
                {likeCount}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <img style={{ width: "110px", height: "110px" }} src={travelImage} alt="" />
    </Box>
  );
}

const styles = {
  tagStyle: {
    borderRadius: 20,
    fontSize: "12px",
    color: "#1C2025",
    letterSpacing: "1px",
    padding: "5px 16px",
    background: "#EEEEEE",
  },
  likIconStyle: {
    cursor: "pointer",
    padding: "5px 4px 3px 4px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
