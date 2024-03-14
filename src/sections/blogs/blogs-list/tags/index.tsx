import { Box, Typography } from "@mui/material";

interface PropsTypes {
  tag: string;
  selectedTag: string;
  handleClick: () => void;
}

export default function Tag(props: PropsTypes) {
  const { tag, selectedTag, handleClick } = props;
  return (
    <Box onClick={handleClick} sx={{ cursor: "pointer" }}>
      <Typography
        sx={{
          ...styles.tagStyle,
          color: selectedTag === tag ? "#fff" : "#1C2025",
          background: selectedTag === tag ? "#2C2727" : "#EEEEEE",
        }}
      >
        {tag}
      </Typography>
    </Box>
  );
}

const styles = {
  tagStyle: {
    transition: ".5s",
    borderRadius: 20,
    fontSize: "12px",
    letterSpacing: "1px",
    padding: "5px 16px",
  },
};
