import { Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

export default function Details(): JSX.Element {
  const { postId } = useParams();
  return (
    <>
      <div>BlogDetails of post {postId}</div>
      <Button variant="contained">Login</Button>
      <br />
      <br />
      <Button variant="contained" color="secondary">
        Login
      </Button>
      <br />
      <br />
      <TextField id="filled-basic" placeholder="First Name" variant="outlined" />
    </>
  );
}
