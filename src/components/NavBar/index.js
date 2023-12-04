import { Typography } from "@mui/material";
import { Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="d-flex justify-content-between bg-white p-2 shadow align-items-center ">
      <Typography variant="button" fontWeight="bold">
        Resume BUILDER
      </Typography>
      {/* <div>
        <Button variant="outlined">Login</Button>
        <Button>SignUp</Button>
      </div> */}
    </div>
  );
};
export default NavBar;
