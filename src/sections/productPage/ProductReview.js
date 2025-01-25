"use client";
import React from "react";
// mui
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ProductReviewCard from "@/components/ProductReviewCard";

function ProductReview() {
  return (
    <Box sx={{ bgcolor: "grey.200", py: 10 }}>
      <Container maxWidth="xl">
        <Card sx={{ borderRadius: 10, boxShadow: 10 }}>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h2" sx={{ mb: 2 }}>
                Let Our Customers Speak For Us
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box>
                  <Stack direction="row" gap={2} alignItems="center">
                    <Rating value={5} sx={{ color: "primary.main" }} readOnly />
                    <Typography sx={{ fontWeight: "bold" }}>
                      5.00 Out Of 5
                    </Typography>
                  </Stack>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Based on 30 reviews
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Stack direction="row" gap={2} alignItems="center">
                    <Rating value={5} readOnly max={5} />
                    <Box
                      sx={{
                        bgcolor: "grey.400",
                        height: 20,
                        width: 150,
                        borderRadius: 6,
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "primary.main",
                          width: "100%",
                          height: 20,
                          borderRadius: 6,
                        }}
                      />
                    </Box>
                    <Typography sx={{ fontWeight: "bold" }}>30</Typography>
                  </Stack>
                  <Stack direction="row" gap={2} alignItems="center">
                    <Rating value={5} readOnly max={4} sx={{ mr: 3 }} />
                    <Box
                      sx={{
                        bgcolor: "grey.400",
                        height: 20,
                        width: 150,
                        borderRadius: 6,
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "primary.main",
                          width: "75%",
                          height: 20,
                          borderRadius: 6,
                        }}
                      />
                    </Box>
                    <Typography sx={{ fontWeight: "bold" }}>30</Typography>
                  </Stack>
                  <Stack direction="row" gap={2} alignItems="center">
                    <Rating value={5} readOnly max={3} sx={{ mr: 6 }} />
                    <Box
                      sx={{
                        bgcolor: "grey.400",
                        height: 20,
                        width: 150,
                        borderRadius: 6,
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "primary.main",
                          width: "50%",
                          height: 20,
                          borderRadius: 6,
                        }}
                      />
                    </Box>
                    <Typography sx={{ fontWeight: "bold" }}>30</Typography>
                  </Stack>
                  <Stack direction="row" gap={2} alignItems="center">
                    <Rating value={5} readOnly max={2} sx={{ mr: 9 }} />
                    <Box
                      sx={{
                        bgcolor: "grey.400",
                        height: 20,
                        width: 150,
                        borderRadius: 6,
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "primary.main",
                          width: "25%",
                          height: 20,
                          borderRadius: 6,
                        }}
                      />
                    </Box>
                    <Typography sx={{ fontWeight: "bold" }}>30</Typography>
                  </Stack>
                  <Stack direction="row" gap={2} alignItems="center">
                    <Rating value={5} readOnly max={1} sx={{ mr: 12 }} />
                    <Box
                      sx={{
                        bgcolor: "grey.400",
                        height: 20,
                        width: 150,
                        borderRadius: 6,
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "primary.main",
                          width: "0%",
                          height: 20,
                          borderRadius: 6,
                        }}
                      />
                    </Box>
                    <Typography sx={{ fontWeight: "bold" }}>30</Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    fontSize: 30,
                    borderRadius: 10,
                  }}
                >
                  Write a review
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ borderRadius: 5, boxShadow: 10, mt: 3 }}>
          <CardContent>
            <Typography variant="h5">Highest Rating</Typography>
          </CardContent>
        </Card>
        <Grid container sx={{ mt: 3 }}>
          <Grid item xs={12} md={4}>
            <ProductReviewCard
              name="Lorem ipsu"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductReview;
