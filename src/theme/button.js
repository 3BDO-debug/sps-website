const button = (theme) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "24px",
        padding: "8px 24px",
        textTransform: "none",
        fontWeight: 700,
        fontSize: "1rem",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        transition: theme.transitions.create(
          ["background-color", "box-shadow"],
          {
            duration: theme.transitions.duration.short,
          }
        ),
      },
      contained: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        "&:hover": {
          backgroundColor: theme.palette.primary.light,
        },
      },
      outlined: {
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        "&:hover": {
          borderColor: theme.palette.primary.light,
          backgroundColor: theme.palette.action.hover,
        },
      },
      text: {
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      },
    },
  },
});

export default button;
