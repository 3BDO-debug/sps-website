import React, { useCallback, useEffect, useState } from "react";
// mui
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// formik
import { useFormik } from "formik";
// yup
import * as Yup from "yup";
// __apis__
import { applicationSubmissionRequest } from "@/__apis__/careers";
// stores
import useAlertStore from "@/stores/useAlertStore";
// components
import Iconify from "./Iconify";
import { UploadSingleFile } from "./upload";

function JobApplicationPopUp({ isTriggered, closeHandler, jobId }) {
  const { triggerAlert } = useAlertStore();

  // const [personalImage, setPersonalImage] = useState(null);

  // const [cv, setCv] = useState(null);

  const formik = useFormik({
    initialValues: {
      vacancyId: "",
      name: "",
      nationality: "",
      dateOfBirth: null,
      placeOfBirth: "",
      militaryServiceStatus: "",
      maritalStatus: "",
      governmentId: "",
      address: "",
      mobileNumber: "",
      homeTelephone: "",
      email: "",
      secondarySchool: "",
      university: "",
      graduationGrade: "",
      graduationYear: "",
      graduationProject: "",
      // image: null,
      // cv: null,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      nationality: Yup.string().required("Nationality is required"),
      dateOfBirth: Yup.string().required("Date of birth is required"),
      placeOfBirth: Yup.string().required("Place of birth is required"),
      militaryServiceStatus: Yup.string().required(
        "Military service status is required"
      ),
      maritalStatus: Yup.string().required("Marital status is required"),
      governmentId: Yup.string().required("Government ID is required"),
      address: Yup.string().required("Address is required"),
      mobileNumber: Yup.string().required("Mobile number is required"),
      homeTelephone: Yup.string().required("Home telephone is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      secondarySchool: Yup.string().required("Secondary school is required"),
      university: Yup.string().required("University is required"),
      graduationGrade: Yup.string().required("Graduation grade is required"),
      graduationYear: Yup.string().required("Graduation year is required"),
      graduationProject: Yup.string().required(
        "Graduation project title is required"
      ),
      // image: Yup.mixed().required("Image is required"),
      // cv: Yup.mixed().required("CV is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      await applicationSubmissionRequest(values)
        .then((response) => {
          triggerAlert({
            triggered: true,
            type: "success",
            message: "Application submitted successfully",
          });
          resetForm();
          closeHandler();
          // setCv(null);
          // setPersonalImage(null);
        })
        .catch((error) => {
          console.log("Error while trying to submit", error.response);
          triggerAlert({
            triggered: true,
            type: "error",
            message: "Something wrong happened, try again later",
          });
        });
    },
  });

  const {
    errors,
    dirty,
    touched,
    handleSubmit,
    isSubmitting,
    getFieldProps,
    values,
    setFieldValue,
  } = formik;

  useEffect(() => {
    if (jobId) {
      setFieldValue("vacancyId", jobId);
    }
  }, [jobId]);

  // const handleImageFileDrop = useCallback(
  //   (acceptedFiles) => {
  //     const file = acceptedFiles[0];
  //     if (file) {
  //       setPersonalImage(
  //         Object.assign(file, {
  //           preview: URL.createObjectURL(file),
  //         })
  //       );
  //       setFieldValue("image", file);
  //     }
  //   },
  //   [setFieldValue]
  // );

  // const handleCvFileDrop = useCallback(
  //   (acceptedFiles) => {
  //     const file = acceptedFiles[0];
  //     if (file) {
  //       setCv(
  //         Object.assign(file, {
  //           preview: URL.createObjectURL(file),
  //         })
  //       );
  //       setFieldValue("cv", file);
  //     }
  //   },
  //   [setFieldValue]
  // );

  return (
    <Dialog
      open={isTriggered}
      onClose={closeHandler}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiPaper-root": {
          borderRadius: 7,
        },
      }}
    >
      <DialogContent>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h3">Job Application</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              {...getFieldProps("name")}
              InputProps={{ sx: { borderRadius: 5 } }}
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
            />
          </Grid>

          {/* Nationality */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Nationality"
              name="nationality"
              {...getFieldProps("nationality")}
              InputProps={{ sx: { borderRadius: 5 } }}
              error={Boolean(touched.nationality && errors.nationality)}
              helperText={touched.nationality && errors.nationality}
            />
          </Grid>

          {/* Date of Birth */}
          <Grid size={{ xs: 12, md: 6 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date of Birth"
                value={formik.values.dateOfBirth || null}
                onChange={(newValue) => {
                  formik.setFieldValue("dateOfBirth", newValue);
                }}
                slotProps={{
                  textField: {
                    name: "dateOfBirth",
                    fullWidth: true,
                    error: Boolean(
                      formik.touched.dateOfBirth && formik.errors.dateOfBirth
                    ),
                    helperText:
                      formik.touched.dateOfBirth && formik.errors.dateOfBirth,
                    InputProps: { sx: { borderRadius: 5 } },
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>

          {/* Place of Birth */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Place of Birth"
              name="placeOfBirth"
              {...getFieldProps("placeOfBirth")}
              InputProps={{ sx: { borderRadius: 5 } }}
              error={Boolean(touched.placeOfBirth && errors.placeOfBirth)}
              helperText={touched.placeOfBirth && errors.placeOfBirth}
            />
          </Grid>

          {/* Military Service Status */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Military Service Status"
              name="militaryServiceStatus"
              {...getFieldProps("militaryServiceStatus")}
              InputProps={{ sx: { borderRadius: 5 } }}
              error={Boolean(
                touched.militaryServiceStatus && errors.militaryServiceStatus
              )}
              helperText={
                touched.militaryServiceStatus && errors.militaryServiceStatus
              }
            >
              {["completed", "exempted", "postponed", "not_applicable"].map(
                (status) => (
                  <MenuItem key={status} value={status}>
                    {status
                      .replace("_", " ")
                      .replace(/^\w/, (c) => c.toUpperCase())}
                  </MenuItem>
                )
              )}
            </TextField>
          </Grid>

          {/* Marital Status */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Marital Status"
              name="maritalStatus"
              {...getFieldProps("maritalStatus")}
              InputProps={{ sx: { borderRadius: 5 } }}
              error={Boolean(touched.maritalStatus && errors.maritalStatus)}
              helperText={touched.maritalStatus && errors.maritalStatus}
            >
              {["single", "married", "divorced", "widowed"].map((status) => (
                <MenuItem key={status} value={status}>
                  {status[0].toUpperCase() + status.slice(1)}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Government ID"
              name="governmentId"
              {...getFieldProps("governmentId")}
              InputProps={{ sx: { borderRadius: 5 } }}
              error={Boolean(touched.governmentId && errors.governmentId)}
              helperText={touched.governmentId && errors.governmentId}
            />
          </Grid>

          {/* Address */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              minRows={3}
              label="Address"
              name="address"
              {...getFieldProps("address")}
              InputProps={{ sx: { borderRadius: 5 } }}
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            />
          </Grid>

          {/* Mobile Number */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobileNumber"
              {...getFieldProps("mobileNumber")}
              InputProps={{ sx: { borderRadius: 5 } }}
              error={Boolean(touched.mobileNumber && errors.mobileNumber)}
              helperText={touched.mobileNumber && errors.mobileNumber}
            />
          </Grid>

          {/* Home Telephone */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Home Telephone"
              name="homeTelephone"
              {...getFieldProps("homeTelephone")}
              InputProps={{ sx: { borderRadius: 5 } }}
              error={Boolean(touched.homeTelephone && errors.homeTelephone)}
              helperText={touched.homeTelephone && errors.homeTelephone}
            />
          </Grid>

          {/* Email */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              {...getFieldProps("email")}
              InputProps={{ sx: { borderRadius: 5 } }}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
          </Grid>

          {/* Secondary School */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Secondary School"
              name="secondarySchool"
              {...getFieldProps("secondarySchool")}
              InputProps={{ sx: { borderRadius: 5 } }}
              error={Boolean(touched.secondarySchool && errors.secondarySchool)}
              helperText={touched.secondarySchool && errors.secondarySchool}
            />
          </Grid>

          {/* University */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="University"
              name="university"
              {...getFieldProps("university")}
              InputProps={{ sx: { borderRadius: 5 } }}
              error={Boolean(touched.university && errors.university)}
              helperText={touched.university && errors.university}
            />
          </Grid>

          {/* Graduation Grade */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Graduation Grade"
              name="graduationGrade"
              {...getFieldProps("graduationGrade")}
              InputProps={{ sx: { borderRadius: 5 } }}
              error={Boolean(touched.graduationGrade && errors.graduationGrade)}
              helperText={touched.graduationGrade && errors.graduationGrade}
            />
          </Grid>

          {/* Graduation Year */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Graduation Year"
              name="graduationYear"
              {...getFieldProps("graduationYear")}
              InputProps={{ sx: { borderRadius: 5 } }}
              error={Boolean(touched.graduationYear && errors.graduationYear)}
              helperText={touched.graduationYear && errors.graduationYear}
            />
          </Grid>

          {/* Graduation Project Title */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Graduation Project Title"
              name="graduationProject"
              {...getFieldProps("graduationProject")}
              InputProps={{ sx: { borderRadius: 5 } }}
              error={Boolean(
                touched.graduationProject && errors.graduationProject
              )}
              helperText={touched.graduationProject && errors.graduationProject}
            />
          </Grid>
          {/* <Grid size={{ xs: 12, md: 6 }}>
            <UploadSingleFile
              title="Upload your personal picture"
              file={personalImage}
              onDrop={handleImageFileDrop}
            />
            {touched.image && errors.image && (
              <Typography variant="caption" color="error">
                {errors.image}
              </Typography>
            )}
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <UploadSingleFile
              title="Upload your cv"
              file={cv}
              onDrop={handleCvFileDrop}
            />
            {touched.cv && errors.cv && (
              <Typography variant="caption" color="error">
                {errors.cv}
              </Typography>
            )}
          </Grid> */}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          sx={{ color: "error.main", borderColor: "error.main" }}
          onClick={() => {
            closeHandler();
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          disabled={!dirty}
          loading={isSubmitting}
          onClick={handleSubmit}
          endIcon={<Iconify icon="picon:send" />}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default JobApplicationPopUp;
