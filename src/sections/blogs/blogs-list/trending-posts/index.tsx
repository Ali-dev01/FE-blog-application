import { Avatar, Box, Typography } from "@mui/material";

export default function TrendingPosts({ itemNum }: { itemNum: number }) {
  return (
    <Box display="flex" gap="10px">
      <Typography variant="h3" color="#EEEEEE" fontWeight={600}>
        0{itemNum}
      </Typography>
      <Box>
        <Box display="flex" gap="12px" alignItems="center">
          <Avatar sx={{ width: 22, height: 22, fontSize: "10px" }}>AD</Avatar>
          <Typography variant="body2" color="#434D5B" fontWeight={500}>
            ali dev @ 15 jan
          </Typography>
        </Box>
        <Typography sx={{ color: "#1C2025", fontSize: "18px" }} mt={1}>
          The Brightest start in the Darkest Sky
        </Typography>
      </Box>
    </Box>
  );
}
