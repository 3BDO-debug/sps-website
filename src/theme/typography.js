const typography = {
  fontFamily: "'FoglihtenNo07', Arial, sans-serif",
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  "@font-face": [
    {
      fontFamily: "FoglihtenNo07.otf",
      src: `
          url('/fonts/FoglihtenNo07.otf') format('opentype'),
      
                `,
      fontWeight: "normal",
      fontStyle: "normal",
    },
  ],
  h1: {
    fontSize: "2.5rem",
    fontWeight: 800,
    lineHeight: 1.3,
    letterSpacing: "-0.02em",
  },
  h2: {
    fontSize: "2rem",
    fontWeight: 700,
    lineHeight: 1.35,
    letterSpacing: "-0.015em",
  },
  h3: {
    fontSize: "1.75rem",
    fontWeight: 700,
    lineHeight: 1.4,
    letterSpacing: "-0.01em",
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: 700,
    lineHeight: 1.45,
    letterSpacing: "-0.005em",
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0em",
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.55,
    letterSpacing: "0.005em",
  },
  subtitle1: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: "0.01em",
  },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.57,
    letterSpacing: "0.01em",
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: "0.015em",
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.57,
    letterSpacing: "0.02em",
  },
  button: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.75,
    textTransform: "none",
    letterSpacing: "0.01em",
  },
  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: "0.02em",
  },
  overline: {
    fontSize: "0.625rem",
    fontWeight: 400,
    lineHeight: 2.5,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
};

export default typography;
