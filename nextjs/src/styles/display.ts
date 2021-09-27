import { css } from "styled-components";

export default css`
  .w-100 {
    width: 100%;
  }

  .h-100 {
    height: 100%;
  }

  .d-block {
    display: block;
  }

  .d-flex {
    display: flex;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-around {
    justify-content: space-around;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-end {
    justify-content: flex-end;
  }

  .align-center {
    align-items: center;
  }

  .align-end {
    align-items: flex-end;
  }

  .align-start {
    align-items: flex-start;
  }

  .flex-column {
    flex-direction: column;
  }

  .flex-row {
    flex-direction: row;
  }

  .flex {
    flex: 1;
  }

  .flex-grow {
    flex-grow: 1;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .gap-10 {
    gap: 10px;
  }

  .m-auto {
    margin: auto;
  }

  .ml-auto {
    margin-left: auto;
  }

  .mr-auto {
    margin-right: auto;
  }

  .text-center {
    text-align: center;
  }

  .text-capitalize {
    text-transform: capitalize;
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  .text-lowercase {
    text-transform: lowercase;
  }

  .weight-bold {
    font-weight: bold;
  }

  .text-truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .pointer {
    cursor: pointer;
  }
`;
