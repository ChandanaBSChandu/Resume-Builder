import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Button } from "react-bootstrap";
import CreateResumeForm from "../CreateResume";

const Home = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [templates, setTemplates] = useState([
    {
      source:
        "https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg",
      hover: false,
      selected: false,
      id: "template1",
    },
    // {
    //   source:
    //     "https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/481/persistent-resource/london-resume-templates.jpg",
    //   hover: false,
    //   selected: false,
    //   id: "template2",
    // },
  ]);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-5">
        <div className="text-center w-50">
          <Typography
            fontSize={13}
            style={{
              letterSpacing: 4,
            }}
          >
            ONLINE RESUME BUILDER
          </Typography>
          <h1>
            Only 2% of resumes make it past the first round. Be in the top 2%
          </h1>
          <p>
            Use professional field-tested resume templates that follow the exact
            ‘resume rules’ employers look for. Easy to use and done within
            minutes - try now for free!.
          </p>
          <Button
            size="lg"
            onClick={() => {
              setShowCreateForm(true);
            }}
          >
            Create My Resume
            {/* <a
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
              href="#template"
            >
              Create My Resume
            </a> */}
          </Button>
        </div>
      </div>
      <Grid
        container
        id="template"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {templates.map((ele, ind) => {
          return (
            <Grid
              item
              sm={5.5}
              alignItems="center"
              justifyContent="center"
              display="flex"
              position="relative"
              sx={{
                p: 4,
                backgroundColor: "rgba(255,255,255,0)",
                mx: 1,
              }}
            >
              <img
                src={ele.source}
                width="90%"
                onMouseEnter={() => {
                  const temp = JSON.parse(JSON.stringify(templates));
                  temp.forEach((i, index) => {
                    if (ind == index) i.hover = true;
                    else i.hover = false;
                  });
                  setTemplates(temp);
                }}
              />
              {/* {ele.hover && (
                <div
                  style={{
                    position: "absolute",
                  }}
                >
                  <Button
                    onClick={() => {
                      const temp = JSON.parse(JSON.stringify(templates));
                      temp[ind].selected = true;
                      setTemplates(temp);
                      setShowCreateForm(true);
                    }}
                  >
                    Choose
                  </Button>
                </div>
              )} */}
            </Grid>
          );
        })}
      </Grid>
      {showCreateForm && (
        <CreateResumeForm
          open={showCreateForm}
          template={templates.find((ele) => ele.selected)?.id}
          handleClose={() => setShowCreateForm(false)}
        />
      )}
    </>
  );
};
export default Home;
