import React from "react";
// mui
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

function ProductReviewCard({ description, name, img }) {
  return (
    <Card sx={{ borderRadius: 5, boxShadow: 10 }}>
      <CardContent>
        <Rating value={5} />
        <Stack direction="row" alignItems="center" gap={1}>
          <Avatar src={img} />
          <Typography>{name}</Typography>
          <Box sx={{ bgcolor: "primary.main", p: 0.5, borderRadius: 2, ml: 1 }}>
            <Typography variant="body2" sx={{ color: "grey.0" }}>
              Verified
            </Typography>
          </Box>
        </Stack>
        <Typography sx={{ mt: 2, ml: 2 }}>{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default ProductReviewCard;
