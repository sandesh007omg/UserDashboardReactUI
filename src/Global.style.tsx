import styled from "styled-components";

const GlobalStyle = styled.div`
  width: 100vw;
  height: 100vh;
  body {
    padding-top: 0rem;
    font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", Helvetica, Arial, sans-serif;
    overflow: hidden;
  }

  :root {
    --font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif !important;
    --primary-default: #0b5fff;
    --secondary: #6b6c7e;
  }

  html {
    font-size: 62.5%;
    .text-40-normal {
      font: 400 4rem/150% var(--font-family);
    }
    .text-40-semi {
      font: 500 4rem/150% var(--font-family);
    }
    .text-40-bold {
      font: 600 4rem/150% var(--font-family);
    }
    .text-36-normal {
      font: 400 3.6rem/150% var(--font-family);
    }
    .text-36-semi {
      font: 500 3.6rem/150% var(--font-family);
    }
    .text-36-bold {
      font: 600 3.6rem/150% var(--font-family);
    }
    .text-32-normal {
      font: 400 3.2rem/150% var(--font-family);
    }
    .text-32-semi {
      font: 500 3.2rem/150% var(--font-family);
    }
    .text-32-bold {
      font: 600 3.2rem/150% var(--font-family);
    }
    .text-28-normal {
      font: 400 2.8rem/150% var(--font-family);
    }
    .text-28-semi {
      font: 500 2.8rem/150% var(--font-family);
    }
    .text-28-bold {
      font: 600 2.8rem/150% var(--font-family);
    }
    .text-24-normal {
      font: 400 2.4rem/150% var(--font-family);
    }
    .text-24-semi {
      font: 500 2.4rem/150% var(--font-family);
    }
    .text-24-bold {
      font: 600 2.4rem/150% var(--font-family);
    }
    .text-20-normal {
      font: 400 2rem/150% var(--font-family);
    }
    .text-20-semi {
      font: 500 2rem/150% var(--font-family);
    }
    .text-20-bold {
      font: 600 2rem/150% var(--font-family);
    }
    .text-18-normal {
      font: 400 1.8rem/150% var(--font-family);
    }
    .text-18-semi {
      font: 500 1.8rem/150% var(--font-family);
    }
    .text-18-bold {
      font: 600 1.8rem/150% var(--font-family);
    }
    .text-16-normal {
      font: 400 1.6rem/150% var(--font-family);
    }
    .text-16-semi {
      font: 500 1.6rem/150% var(--font-family);
    }
    .text-16-bold {
      font: 600 1.6rem/150% var(--font-family);
    }
    .text-14-normal {
      font: 400 1.4rem/150% var(--font-family);
    }
    .text-14-semi {
      font: 500 1.4rem/150% var(--font-family);
    }
    .text-14-bold {
      font: 600 1.4rem/150% var(--font-family);
    }
    .text-12-normal {
      font: 400 1.2rem/150% var(--font-family);
    }
    .text-12-semi {
      font: 500 1.2rem/150% var(--font-family);
    }
    .text-12-bold {
      font: 600 1.2rem/150% var(--font-family);
    }
    .text-10-normal {
      font: 400 1rem/150% var(--font-family);
    }
    .text-10-semi {
      font: 500 1rem/150% var(--font-family);
    }
    .text-10-bold {
      font: 600 1rem/150% var(--font-family);
    }
    .shadow-slider {
      box-shadow: 0px 1px 4px rgba(39, 40, 51, 0.2);
    }
    .shadow-card {
      box-shadow: 0px 2px 4px rgba(39, 40, 51, 0.12);
    }
    .shadow-tootltip {
      box-shadow: 0px 2px 4px rgba(39, 40, 51, 0.2);
    }
    .shadow-dropdown {
      box-shadow: 0px 4px 8px rgba(39, 40, 51, 0.12);
    }
    .shadow-popover {
      box-shadow: 0px 8px 16px rgba(39, 40, 51, 0.16);
    }
    .shadow-card-drag {
      box-shadow: 0px 8px 16px rgba(39, 40, 51, 0.16);
    }
    .shadow-alert {
      box-shadow: 0px 8px 16px rgba(39, 40, 51, 0.2);
    }
    .shadow-modal {
      box-shadow: 0px 4px 16px rgba(39, 40, 51, 0.4);
    }
  }

  button,
  input {
    font-family: var(--font-family);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .text-right {
    text-align: right;
  }

  .text-left {
    text-align: left;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .border-right {
    border-right: 1px solid #e7e7ed;
  }
  .padding-right {
    padding-right: 50px !important;
  }
  .display-none {
    display: none;
  }

  /*Table UI*/

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    border: 1px solid #e7e7ed;

    svg.icon {
      color: #6b6c7e;
    }

    th,
    td {
      padding: 11px 12px;
      text-align: left;
      vertical-align: middle;
      color: #272833;
      border-bottom: 1px solid #e7e7ed;

      &:first-child {
        border-left: 1px solid #e7e7ed;
        padding-left: 24px;
      }

      &:last-child {
        border-right: 1px solid #e7e7ed;
        padding-right: 24px;
      }
    }

    th {
      background: #f1f2f5;
      color: #6b6c7e;
      font-weight: 600;
      transition: all 0.3s ease-in-out;
      padding: 16px 12px;
    }

    tbody tr {
      &:hover,
      &:focus {
        background: #f0f5ff;
        transition: all 0.3s ease-in-out;

        .actions > span {
          opacity: 1;
          pointer-events: auto;
        }
      }
    }
  }
`;
export default GlobalStyle;
