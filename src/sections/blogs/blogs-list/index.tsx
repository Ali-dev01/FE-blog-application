import { Outlet } from "react-router-dom";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { Box, Divider, Grid, Typography } from "@mui/material";

import Tag from "./tags";
import SingleBlog from "./single-blog";
import useBlogsList from "./use-blog-list";
import { categories } from "../../../constants/categories";
import TrendingPosts from "./trending-posts";

export default function BlogLists(): JSX.Element {
  const { likeCount, selectedTag, handleTag, handleLikeCount } = useBlogsList();

  return (
    <Box sx={{ mx: { lg: "115px", md: "50px", sm: "20px", xs: "10px" } }}>
      <Typography variant="h6" sx={styles.titleStyle}>
        Home
      </Typography>
      <Grid container spacing={3}>
        <Grid item lg={8} xs={12}>
          <Box sx={styles.blogListWrapper}>
            {[1, 2, 3].map((item: number) => (
              <Box key={item} onClick={handleLikeCount}>
                <SingleBlog likeCount={likeCount} />
                <Divider sx={{ margin: "14px 0" }} />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Typography variant="h6" color="#1C2025" mb={2}>
            Categories
          </Typography>
          <Box display="flex" flexWrap="wrap" gap="10px">
            {categories.map((item: string) => (
              <Tag
                key={item}
                tag={item}
                selectedTag={selectedTag}
                handleClick={() => handleTag(item)}
              />
            ))}
          </Box>
          <Typography variant="h6" color="#1C2025" my={2}>
            Trending &nbsp;
            <HiOutlineArrowTrendingUp />
          </Typography>
          <Box sx={styles.tendingPosts}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Box key={item} mb={2}>
                <TrendingPosts itemNum={item} />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Outlet />
    </Box>
  );
}

const styles = {
  titleStyle: {
    color: "#1C2025",
    marginBottom: "20px",
    borderBottom: "2px solid #EEEEEE",
    width: "52px",
  },
  blogListWrapper: {
    maxHeight: "calc(100vh - 142px)",
    overflowY: "hidden",
    paddingRight: "10px",
    "&:hover": {
      overflowY: "scroll",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "8px",
      backgroundColor: "#C9C9C9",
    },

    "&::-webkit-scrollbar": {
      width: "4px",
    },
  },
  tendingPosts: {
    maxHeight: "calc(100vh - 358px)",
    overflowY: "hidden",
    paddingRight: "10px",
    "&:hover": {
      overflowY: "scroll",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "8px",
      backgroundColor: "#C9C9C9",
    },

    "&::-webkit-scrollbar": {
      width: "4px",
    },
  },
};
