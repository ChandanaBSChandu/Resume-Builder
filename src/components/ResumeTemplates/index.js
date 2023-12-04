import { Button, Grid, LinearProgress, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";

const ResumeTemplates = ({}) => {
  const {
    state: { PersonalDetails, Employment, education, skills },
  } = useLocation();
  const renderSkills = () => {
    const temp = skills.filter((ele) => ele.isSelected);
    return temp.map((ele, ind) => {
      console.log(Number(ele.level.find((i) => i.isSelected).id) * 20);
      return (
        <div>
          <Typography fontSize={14}>{ele.label}</Typography>
          <LinearProgress
            value={Number(ele.level.find((i) => i.isSelected).id) * 20}
            variant="determinate"
          />
        </div>
      );
    });
  };
  const renderEmploymentDetails = () => {
    return Employment?.map((ele) => {
      return (
        <>
          <Typography fontSize={14} fontWeight={"bold"}>
            {ele.jobtitle} at {ele.employer}, {ele.city}
          </Typography>
          <Typography fontSize={13}>{ele.desc}</Typography>
        </>
      );
    });
  };
  const renderEducationDetails = () => {
    return education?.map((ele) => {
      return (
        <>
          <Typography fontSize={14} fontWeight={"bold"}>
            {ele.degree}, {ele.school}, {ele.city}
          </Typography>
          <Typography fontSize={13}>{ele.desc}</Typography>
        </>
      );
    });
  };
  return (
    <div
      className="container my-2 border border-1 rounded p-4"
      style={{
        minHeight: "90vh",
        maxHeight: "90vh",
        background: "#fcfcfc",
        overflow: "scroll",
      }}
    >
      <Typography fontSize={20} fontWeight="bold" sx={{ p: 0, m: 0 }}>
        {PersonalDetails?.firstName} {PersonalDetails?.lastName}
      </Typography>
      <Typography fontSize={12} sx={{ p: 0, m: 0 }}>
        {PersonalDetails?.jobTitle}
      </Typography>
      <Grid container spacing={4}>
        <Grid item sm={7}>
          <div className="d-flex ">
            <PersonIcon />
            <div>
              <Typography fontWeight="bold">Profile</Typography>
              <Typography fontSize={13}>
                {PersonalDetails.professionalSummary}
              </Typography>
            </div>
          </div>

          <div className="d-flex ">
            <BadgeIcon />
            <div className="my-1">
              <Typography fontWeight="bold">Employment History</Typography>
              {renderEmploymentDetails()}
            </div>
          </div>
          <div className="d-flex my-1">
            <SchoolIcon />
            <div>
              <Typography fontWeight="bold">Education</Typography>
              {renderEducationDetails()}
            </div>
          </div>
        </Grid>
        <Grid item sm={5}>
          <Typography fontWeight="bold">Details</Typography>
          <Typography fontSize={12}>{PersonalDetails?.city}</Typography>
          <Typography fontSize={12}>{PersonalDetails?.phone}</Typography>
          <Typography fontSize={12} className="text-primary">
            {PersonalDetails?.email}
          </Typography>
          <Typography fontWeight="bold">Skills</Typography>
          <div className="my-2">{renderSkills()}</div>
        </Grid>
      </Grid>
    </div>
  );
};
export default ResumeTemplates;
