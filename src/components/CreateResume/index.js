import {
  Alert,
  Grid,
  Icon,
  Modal,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import { CommitSharp, Flag, KeyboardArrowUp } from "@mui/icons-material";
import ResumeTemplates from "../ResumeTemplates";
import { useNavigate } from "react-router";

const level = [
  {
    label: "Novice",
    id: 1,
    isSelected: false,
    color: "#Fe7d8b",
    background: "#FEEAEC",
  },
  {
    label: "Beginner",
    id: 2,
    isSelected: false,
    color: "#F68559",
    background: "#FEEBE3",
  },
  {
    label: "SkillFul",
    id: 3,
    isSelected: false,
    color: "#EC9309",
    background: "#FFF1CC",
  },
  {
    label: "Experienced",
    id: 4,
    isSelected: false,
    color: "#48BA75",
    background: "##E6F4EC",
  },
  {
    label: "Expert",
    id: 5,
    isSelected: true,
    color: "#9BA1FB",
    background: "#F1F2FF",
  },
];
const educationObj = {
  school: "",
  degree: "",
  // startDate: "",
  // endDate: "",
  city: "",
  desc: "",
};
const employmentObj = {
  jobtitle: "",
  employer: "",
  // startDate: "",
  // endDate: "",
  city: "",
  desc: "",
};
const CreateResumeForm = ({
  open = false,
  handleClose = () => {},
  template = "",
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    minHeight: 100,
    maxHeight: 700,
    overflow: "scroll",
  };
  const [skills, setSkills] = useState([
    {
      label: "Effective Team Leader",
      isSelected: false,
      isExpanded: false,
      level,
    },
    {
      label: "Custom Relations",
      isSelected: false,
      isExpanded: false,
      level,
    },
    {
      label: "Flexibility and Adaptability",
      isSelected: false,
      isExpanded: false,
      level,
    },
    {
      label: "Business Development",
      isSelected: false,
      isExpanded: false,
      level,
    },
    {
      label: "Ability to Work In a Team",
      isSelected: false,
      isExpanded: false,
      level,
    },
    {
      label: "Dedicated Team Player",
      isSelected: false,
      isExpanded: false,
      level,
    },
    {
      label: "Highly Organized",
      isSelected: false,
      isExpanded: false,
      level,
    },
  ]);
  const [PersonalDetails, setPersonalDetails] = useState({
    jobTitle: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    professionalSummary: "",
  });
  const [Employment, setEmployment] = useState([]);
  const [education, setEducation] = useState([]);
  const [showTemplate, setShowTemplate] = useState(false);
  const navigate = useNavigate();

  const renderSelectedSkill = () => {
    const selectedSkills = skills.filter((ele) => ele.isSelected);
    return selectedSkills.map((ele) => {
      return (
        <div className="border border-1 rounded-2 p-2 my-2 ">
          <div className="d-flex justify-content-between align-items-center">
            <Typography>{ele.label}</Typography>
            <div>
              <DeleteIcon
                sx={{
                  color: "#838CA3",
                }}
                onClick={() => {
                  let temp = JSON.parse(JSON.stringify(skills));
                  temp = temp.map((item) => {
                    if (item.label == ele.label) {
                      return {
                        ...item,
                        isSelected: false,
                      };
                    } else
                      return {
                        ...item,
                      };
                  });
                  setSkills(temp);
                }}
              />
              {!ele.isExpanded ? (
                <KeyboardArrowDownIcon
                  fontSize="large"
                  sx={{
                    color: "#838CA3",
                  }}
                  onClick={() => {
                    let temp = skills;
                    temp = temp.map((item) => {
                      if (item.label == ele.label) {
                        return {
                          ...item,
                          isExpanded: !item.isExpanded,
                        };
                      } else {
                        return item;
                      }
                    });
                    setSkills(temp);
                  }}
                />
              ) : (
                <KeyboardArrowUp
                  fontSize="large"
                  sx={{
                    color: "#838CA3",
                  }}
                  onClick={() => {
                    let temp = skills;
                    temp = temp.map((item) => {
                      if (item.label == ele.label) {
                        return {
                          ...item,
                          isExpanded: !item.isExpanded,
                        };
                      } else {
                        return item;
                      }
                    });
                    setSkills(temp);
                  }}
                />
              )}
            </div>
          </div>
          {ele.isExpanded && (
            <div>
              <div className="d-flex justify-content-between align-items-end">
                <TextField
                  required
                  fullWidth
                  label="Skill"
                  variant="filled"
                  InputProps={{ disableUnderline: true }}
                  value={ele.label}
                  size="small"
                  onChange={(e) => {
                    let temp = skills;
                    temp = temp.map((item) => {
                      if (item.label == ele.label) {
                        return {
                          ...item,
                          label: e.target.value,
                        };
                      } else
                        return {
                          ...item,
                        };
                    });
                    setSkills(temp);
                  }}
                  style={{
                    marginRight: 20,
                  }}
                />
                <div>
                  <Typography className="d-flex" fontSize={12}>
                    Skill -
                    <Typography
                      fontSize={12}
                      style={{
                        color: ele.level.find((item) => item.isSelected).color,
                      }}
                    >
                      &nbsp;
                      {ele.level.find((item) => item.isSelected).label}
                    </Typography>
                  </Typography>
                  <div
                    className="d-flex rounded"
                    style={{
                      background: ele.level.find((item) => item.isSelected)
                        .background,
                      border: `0.5px solid ${
                        ele.level.find((ele) => ele.isSelected).color
                      }`,
                    }}
                  >
                    {ele.level.map((item, ind) => {
                      return (
                        <div
                          style={{
                            height: 50,
                            width: 50,
                            cursor: "pointer",
                            ...(item.isSelected && {
                              background: item.color,
                            }),
                            borderRight: "0.5px solid grey",
                          }}
                          onClick={() => {
                            const temp = JSON.parse(JSON.stringify(ele.level));
                            let allSkills = JSON.parse(JSON.stringify(skills));
                            const res = temp.map((item, index) => {
                              if (index == ind) {
                                return {
                                  ...item,
                                  isSelected: true,
                                };
                              } else {
                                return {
                                  ...item,
                                  isSelected: false,
                                };
                              }
                            });

                            allSkills = allSkills.map((item) => {
                              if (item.label == ele.label) {
                                return {
                                  ...item,
                                  level: res,
                                };
                              } else {
                                return item;
                              }
                            });
                            setSkills(allSkills);
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    });
  };

  const renderSkills = () => {
    return skills.map((ele, ind) => {
      if (ele.label) {
        return (
          <Typography
            onClick={() => {
              let temp = JSON.parse(JSON.stringify(skills));
              temp = temp.map((ele, index) => {
                if (ind == index) {
                  return {
                    ...ele,
                    isSelected: !ele.isSelected,
                  };
                } else {
                  return ele;
                }
              });
              setSkills(temp);
            }}
            style={{
              cursor: "pointer",
              background: ele.isSelected ? "#1B91F0" : "#EFF2F8",
              color: ele.isSelected ? "#fff" : "#000",
            }}
            className="p-2 m-2 rounded"
          >
            {ele.label}
            {!ele.isSelected ? (
              <AddIcon fontSize="10" />
            ) : (
              <DoneIcon fontSize="12" />
            )}
          </Typography>
        );
      }
    });
  };

  const renderEmployment = () => {
    return Employment.map((ele, ind) => {
      return (
        <>
          <Typography fontSize={14} fontWeight="bold" color="#1B91F0" my={1}>
            {ele.jobtitle || "Not Specified"}
          </Typography>

          <Grid container spacing={4} mb={5}>
            <Grid item sm={5}>
              <TextField
                required
                value={ele.jobtitle}
                InputProps={{ disableUnderline: true }}
                label="Job title"
                variant="filled"
                size="small"
                fullWidth
                onChange={(e) => {
                  const res = JSON.parse(JSON.stringify(Employment));
                  res[ind].jobtitle = e.target.value;
                  setEmployment(JSON.parse(JSON.stringify(res)));
                }}
              />
            </Grid>
            <Grid item sm={5}>
              <TextField
                required
                value={ele.employer}
                InputProps={{ disableUnderline: true }}
                label="Employer"
                variant="filled"
                size="small"
                fullWidth
                onChange={(e) => {
                  const res = JSON.parse(JSON.stringify(Employment));
                  res[ind].employer = e.target.value;
                  setEmployment(JSON.parse(JSON.stringify(res)));
                }}
              />
            </Grid>
            {/* <Grid item sm={5} container columnSpacing={2}>
              <Grid item sm={6}>
                <DatePicker
                  style={{
                    padding: 10,
                  }}
                  label={"Start Date"}
                  value={ele.startDate || dayjs(new Date())}
                  onChange={(e) => {
                    const res = JSON.parse(JSON.stringify(Employment));
                    res[ind].startDate = dayjs(e);
                    setEmployment(JSON.parse(JSON.stringify(res)));
                  }}
                />
              </Grid>
              <Grid item sm={6}>
                <DatePicker
                  value={ele.endDate || dayjs(new Date())}
                  label="End Date"
                  onChange={(e) => {
                    const res = JSON.parse(JSON.stringify(Employment));
                    res[ind].endDate = dayjs(e);
                    setEmployment(JSON.parse(JSON.stringify(res)));
                  }}
                />
              </Grid>
            </Grid> */}
            <Grid item sm={5}>
              <TextField
                required
                value={ele.city}
                InputProps={{ disableUnderline: true }}
                label="City"
                variant="filled"
                size="small"
                fullWidth
                onChange={(e) => {
                  const res = JSON.parse(JSON.stringify(Employment));
                  res[ind].city = e.target.value;
                  setEmployment(JSON.parse(JSON.stringify(res)));
                }}
              />
            </Grid>
            <Grid item sm={10}>
              <Typography>Description</Typography>
              <TextField
                required
                value={ele.desc}
                multiline
                minRows={8}
                InputProps={{ disableUnderline: true }}
                label="Enter your description here..."
                variant="filled"
                size="small"
                fullWidth
                onChange={(e) => {
                  const res = JSON.parse(JSON.stringify(Employment));
                  res[ind].desc = e.target.value;
                  setEmployment(JSON.parse(JSON.stringify(res)));
                }}
              />
            </Grid>
          </Grid>
        </>
      );
    });
  };
  const renderEducation = () => {
    return education.map((ele, ind) => {
      return (
        <>
          <Typography fontSize={14} fontWeight="bold" color="#1B91F0" my={1}>
            {ele.school || "Not Specified"}
          </Typography>
          <Grid container spacing={4}>
            <Grid item sm={5}>
              <TextField
                required
                InputProps={{ disableUnderline: true }}
                label="School / College Name"
                variant="filled"
                size="small"
                fullWidth
                value={ele.school}
                onChange={(e) => {
                  const res = JSON.parse(JSON.stringify(education));
                  res[ind].school = e.target.value;
                  setEducation(JSON.parse(JSON.stringify(res)));
                }}
              />
            </Grid>
            <Grid item sm={5}>
              <TextField
                required
                InputProps={{ disableUnderline: true }}
                label="Degree"
                variant="filled"
                size="small"
                fullWidth
                value={ele.degree}
                onChange={(e) => {
                  const res = JSON.parse(JSON.stringify(education));
                  res[ind].degree = e.target.value;
                  setEducation(JSON.parse(JSON.stringify(res)));
                }}
              />
            </Grid>
            {/* <Grid item sm={5} container columnSpacing={2}>
              <Grid item sm={6}>
                <DatePicker
                  label="Start Date"
                  value={ele.startDate || dayjs(new Date())}
                  onChange={(e) => {
                    const res = JSON.parse(JSON.stringify(education));
                    res[ind].startDate = dayjs(e);
                    setEducation(JSON.parse(JSON.stringify(res)));
                  }}
                />
              </Grid>
              <Grid item sm={6}>
                <DatePicker
                  label="End Date"
                  value={ele.endDate || dayjs(new Date())}
                  onChange={(e) => {
                    console.log(dayjs(e));
                    const res = JSON.parse(JSON.stringify(education));
                    res[ind].endDate = dayjs(e);
                    setEducation(JSON.parse(JSON.stringify(res)));
                  }}
                />
              </Grid>
            </Grid> */}
            <Grid item sm={5}>
              <TextField
                required
                InputProps={{ disableUnderline: true }}
                label="City"
                variant="filled"
                size="small"
                fullWidth
                value={ele.city}
                onChange={(e) => {
                  const res = JSON.parse(JSON.stringify(education));
                  res[ind].city = e.target.value;
                  setEducation(JSON.parse(JSON.stringify(res)));
                }}
              />
            </Grid>
            <Grid item sm={10} mb={2}>
              <Typography>Description</Typography>
              <TextField
                required
                multiline
                minRows={8}
                InputProps={{ disableUnderline: true }}
                label="Enter your description here..."
                variant="filled"
                size="small"
                fullWidth
                value={ele.desc}
                onChange={(e) => {
                  const res = JSON.parse(JSON.stringify(education));
                  res[ind].desc = e.target.value;
                  setEducation(JSON.parse(JSON.stringify(res)));
                }}
              />
            </Grid>
          </Grid>
        </>
      );
    });
  };
  const checkValidity = () => {
    let flag = false;
    if (education.length) {
      if (!Object.values(education[0]).every((ele) => ele)) {
        flag = true;
      }
    } else {
      flag = true;
    }

    if (!Object.values(PersonalDetails).every((ele) => ele)) {
      flag = true;
    }
    let skillflag = false;
    if (skills.filter((ele) => ele.isSelected).length <= 4) {
      alert("Please choose atleast 5 skills");
      skillflag = true;
    }
    if (flag) {
      alert("Fill all the required fields");
    }
    if (!flag && !skillflag) {
      navigate("/resume", {
        state: {
          PersonalDetails,
          education,
          Employment,
          skills,
        },
      });
    }

    return flag;
  };
  if (!showTemplate) {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <>
            <div
              className="overflow-scroll"
              style={{
                overflow: "scroll",
              }}
            >
              <Typography fontWeight="bold" my={2}>
                Personal Details
              </Typography>
              <Grid container spacing={4}>
                <Grid item sm={10}>
                  <TextField
                    required
                    id="filled-basic"
                    label="Job Title"
                    variant="filled"
                    size="small"
                    fullWidth
                    InputProps={{ disableUnderline: true }}
                    value={PersonalDetails.jobTitle}
                    onChange={(e) => {
                      setPersonalDetails({
                        ...PersonalDetails,
                        jobTitle: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item sm={5}>
                  <TextField
                    required
                    InputProps={{ disableUnderline: true }}
                    label="First Name"
                    variant="filled"
                    size="small"
                    fullWidth
                    value={PersonalDetails.firstName}
                    onChange={(e) => {
                      setPersonalDetails({
                        ...PersonalDetails,
                        firstName: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item sm={5}>
                  <TextField
                    required
                    InputProps={{ disableUnderline: true }}
                    label="Last Name"
                    variant="filled"
                    size="small"
                    fullWidth
                    value={PersonalDetails.lastName}
                    onChange={(e) => {
                      setPersonalDetails({
                        ...PersonalDetails,
                        lastName: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item sm={5}>
                  <TextField
                    required
                    InputProps={{ disableUnderline: true }}
                    label="Email"
                    variant="filled"
                    size="small"
                    fullWidth
                    value={PersonalDetails.email}
                    onChange={(e) => {
                      setPersonalDetails({
                        ...PersonalDetails,
                        email: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item sm={5}>
                  <TextField
                    required
                    InputProps={{ disableUnderline: true }}
                    label="Phone"
                    variant="filled"
                    size="small"
                    fullWidth
                    value={PersonalDetails.phone}
                    onChange={(e) => {
                      setPersonalDetails({
                        ...PersonalDetails,
                        phone: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item sm={5}>
                  <TextField
                    required
                    InputProps={{ disableUnderline: true }}
                    label="Country"
                    variant="filled"
                    size="small"
                    fullWidth
                    value={PersonalDetails.country}
                    onChange={(e) => {
                      setPersonalDetails({
                        ...PersonalDetails,
                        country: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item sm={5}>
                  <TextField
                    required
                    InputProps={{ disableUnderline: true }}
                    label="City"
                    variant="filled"
                    size="small"
                    fullWidth
                    value={PersonalDetails.city}
                    onChange={(e) => {
                      setPersonalDetails({
                        ...PersonalDetails,
                        city: e.target.value,
                      });
                    }}
                  />
                </Grid>
              </Grid>
              <Typography fontWeight="bold" mt={1}>
                Professional Summary
              </Typography>
              <Grid container>
                <Grid item sm={10}>
                  <Typography fontSize={12} color="#838CA3">
                    Write 2-4 short & energetic sentences to interest the
                    reader! Mention your role, experience & most importantly -
                    your biggest achievements, best qualities and skills.
                  </Typography>
                </Grid>
                <Grid item sm={10}>
                  <TextField
                    required
                    placeholder="Eg. Passionate software developer with 5+ years of experience and a track record of ..."
                    multiline
                    minRows={10}
                    variant="filled"
                    fullWidth
                    InputProps={{ disableUnderline: true }}
                    value={PersonalDetails.professionalSummary}
                    onChange={(e) => {
                      setPersonalDetails({
                        ...PersonalDetails,
                        professionalSummary: e.target.value,
                      });
                    }}
                  />
                </Grid>
              </Grid>
              <Typography fontWeight="bold" mt={1}>
                Employment History
              </Typography>
              <Typography fontSize={12} color="#838CA3">
                Show your relevant experience (last 10 years). Use bullet points
                to note your achievements, if possible - use numbers/facts
                (Achieved X, measured by Y, by doing Z).
              </Typography>
              {!Boolean(Employment.length) && (
                <Button
                  onClick={() => {
                    const temp = JSON.parse(JSON.stringify(Employment));
                    temp.push(employmentObj);

                    setEmployment([...temp]);
                  }}
                >
                  + Add Employment
                </Button>
              )}
              {renderEmployment()}
              {Boolean(Employment.length) && (
                <Button
                  onClick={() => {
                    const temp = JSON.parse(JSON.stringify(Employment));
                    temp.push(JSON.parse(JSON.stringify(employmentObj)));
                    setEmployment(temp);
                  }}
                >
                  + Add one more employement
                </Button>
              )}
              <Typography fontWeight="bold" mt={1}>
                Education
              </Typography>
              <Typography fontSize={12} color="#838CA3">
                A Varied education on your resume sums up the value that your
                learnings and background will bring the job.
              </Typography>
              {!Boolean(education.length) && (
                <Button
                  onClick={() => {
                    const temp = JSON.parse(JSON.stringify(education));
                    temp.push(JSON.parse(JSON.stringify(educationObj)));
                    setEducation(temp);
                  }}
                >
                  {" "}
                  + Add Education
                </Button>
              )}
              {renderEducation()}
              {Boolean(education.length) && (
                <Button
                  onClick={() => {
                    const temp = JSON.parse(JSON.stringify(education));
                    temp.push(JSON.parse(JSON.stringify(educationObj)));
                    setEducation(temp);
                  }}
                >
                  + Add one more education
                </Button>
              )}
              <Typography fontWeight="bold" mt={1}>
                Skills
              </Typography>
              <Typography fontSize={12} color="#838CA3">
                Choose 5 important skills that show you fit the position. Make
                sure they match the key skills mentioned in the job listing
                (especially when applying via an online system).
              </Typography>
              <div className="d-flex flex-wrap"> {renderSkills()}</div>
              <div>{renderSelectedSkill()}</div>
              {!!skills.filter(
                (ele) => ele.isSelected && skills[skills.length - 1].label != ""
              ).length && (
                <Button
                  onClick={() => {
                    const res = JSON.parse(JSON.stringify(skills));
                    res.push({
                      label: "",
                      isSelected: true,
                      isExpanded: true,
                      level,
                    });
                    setSkills(res);
                  }}
                >
                  + Add one more skill
                </Button>
              )}
            </div>
            <div className="d-flex justify-content-end">
              <Button
                variant="contained"
                onClick={() => {
                  checkValidity();
                }}
              >
                Create Resume
              </Button>
            </div>
          </>
        </Box>
      </Modal>
    );
  }
  return (
    <ResumeTemplates
      PersonalDetails={PersonalDetails}
      Employment={employmentObj}
      education={education}
      skills={skills}
      setShowTemplate={setShowTemplate}
      template={template}
    />
  );
};
export default CreateResumeForm;
