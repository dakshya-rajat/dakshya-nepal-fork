export default {
  name: "dakshya-theme",
  rounding: 4,
  spacing: 24,
  defaultMode: "light",
  global: {
    colors: {
      brand: {
        light: "p1",
        dark: "p1",
      },
      background: {
        dark: "#111111",
        light: "#FFFFFF",
      },
      "background-back": {
        dark: "#111111",
        light: "#EEEEEE",
      },
      "background-front": {
        dark: "#222222",
        light: "#FFFFFF",
      },
      "background-contrast": {
        dark: "#FFFFFF11",
        light: "#11111111",
      },
      text: {
        dark: "#EEEEEE",
        light: "b1",
      },
      "text-strong": {
        dark: "#FFFFFF",
        light: "b1",
      },
      "text-weak": {
        dark: "#CCCCCC",
        light: "b2",
      },
      "text-xweak": {
        dark: "#999999",
        light: "g1",
      },
      border: {
        dark: "#444444",
        light: "w2",
      },
      control: "b1",
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": "s2",
      "status-warning": "s3",
      "status-ok": "s1",
      "status-unknown": "#CCCCCC",
      "status-disabled": "w2",
      "graph-0": "brand",
      "graph-1": "status-warning",
      p1: {
        dark: "#FFD749",
        light: "#FFD749",
      },
      "p1-l": {
        dark: "#FEF6E0",
        light: "#FEF6E0",
      },
      h1: {
        dark: "#2F80ED",
        light: "#2F80ED",
      },
      b1: {
        dark: "#000000",
        light: "#000000",
      },
      b2: {
        dark: "#8A8A8A",
        light: "#8A8A8A",
      },
      g1: {
        dark: "#C2C2C2",
        light: "#C2C2C2",
      },
      w2: {
        dark: "#EAEAEA",
        light: "#EAEAEA",
      },
      w1: {
        dark: "#FFFFFF",
        light: "#FFFFFF",
      },
      s1: {
        dark: "#339F50",
        light: "#339F50",
      },
      "s1-l": {
        dark: "#E8FAEF",
        light: "#E8FAEF",
      },
      s2: {
        dark: "#F54747",
        light: "#F54747",
      },
      "s2-l": {
        dark: "#FFF6F6",
        light: "#FFF6F6",
      },
      s3: {
        dark: "#FB8343",
        light: "#FB8343",
      },
      "s3-l": {
        dark: "#FFF8F3",
        light: "#FFF8F3",
      },
      s4: {
        dark: "#F1C650",
        light: "#F1C650",
      },
      "s4-l": {
        dark: "#FEFAEE",
        light: "#FEFAEE",
      },
    },
    font: {
      family: "\"Roboto\", 'sans-serif'",
      face:
        "/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}",
    },
    active: {
      background: "active-background",
      color: "active-text",
    },
    hover: {
      background: "active-background",
      color: "active-text",
    },
    selected: {
      background: "selected-background",
      color: "selected-text",
    },
    control: {
      border: {
        radius: "4px",
      },
    },
    drop: {
      border: {
        radius: "4px",
      },
    },
    // add global shadow styles according to design specification
    elevation: {
      light: {
        d1: "0px 1px 12px rgba(0, 0, 0, 0.08)",
        header: "0px 2px 15px rgba(0, 0, 0, 0.03)",
      },
    },
    //add focus styles to the theme
    focus: {
      shadow: undefined,
      border: undefined,
      outline: { size: "0px" },
    },
    input: {
      font: {
        weight: 400,
        height: "24px",
      },
      extend: props => {
        return `
          font-size: "14px"
        `
      },
    },
  },
  chart: {},
  diagram: {
    line: {},
  },
  meter: {},
  button: {
    border: {
      radius: "4px",
    },
    default: {
      color: "b2",
      border: {
        color: "w1",
        width: "3px",
      },
      padding: {
        horizontal: "8px",
        vertical: "4px",
      },
    },
    primary: {
      color: "w1",
      background: { color: "b1" },
      border: { width: "3px", color: "b1" },
      padding: {
        horizontal: "13px",
        vertical: "9px",
      },
    },
    secondary: {
      color: "b1",
      border: { color: "b1", width: "3px" },
      padding: {
        horizontal: "13px",
        vertical: "9px",
      },
    },
    hover: {
      default: {
        color: "b1",
        background: { color: "p1-l" },
      },
      primary: {
        extend: props => {
          return `box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.08);`
        },
      },
      secondary: {
        background: { color: "b1" },
      },
    },
    disabled: {
      opacity: 1,
      default: {
        color: "g1",
      },
      primary: {
        color: "g1",
        background: { color: "w2" },
        border: { color: "w2" },
      },
      secondary: {
        color: "g1",
        border: { color: "w2" },
      },
    },
    active: {
      default: {
        background: { color: "p1-l" },
      },
    },
    extend: props => {
      let extraStyles = ""
      if (props.ka) {
        extraStyles += `
          padding: 11px 8px;
        `
      }
      if (props.ka && props.disabled) {
        extraStyles += `
          background: #EAEAEA;
          color: #C2C2C2
        `
      }
      return `
        ${extraStyles}
        text-transform: capitalize;
        :focus {border-color: #2F80ED;}
      `
    },
  },
  checkBox: {
    check: {
      radius: "4px",
    },
    toggle: {
      radius: "4px",
    },
  },
  radioButton: {
    check: {
      radius: "4px",
    },
  },
  formField: {
    round: "4px",
    border: {
      color: "w2",
      error: {
        color: {
          light: "s2",
        },
      },
      position: "inner",
      side: "all",
      style: "solid",
      size: "2px",
    },
    label: {
      size: "14px",
      margin: { vertical: "8px", horizontal: undefined },
    },
    error: {
      background: { color: "s2-l" },
      size: "14px",
      margin: { vertical: "8px", horizontal: undefined },
    },
    info: {
      color: "b2",
      size: "14px",
      margin: { vertical: "8px", horizontal: undefined },
    },
    focus: {
      border: { color: "h1" },
    },
  },
  //adding heading properties according to the design
  heading: {
    weight: 500,
    extend: `text-transform: capitalize`,
  },
}
