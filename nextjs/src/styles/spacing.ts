/*
  Usage

  m-1 -> { margin: 10px }
  mb-1 -> { margin-bottom: 10px }
  pb-4 -> { padding-bottom: 40px }

*/

const sides = [
  {
    side: "bottom",
    letter: "b",
  },
  {
    side: "right",
    letter: "r",
  },
];

const spaces = [0, 1, 2, 4];

const generateSpacings = () => {
  let result = "";

  for (let space of spaces) {
    for (let { side, letter } of sides) {
      result += `
        .m${letter}-${space}{
          margin-${side}: ${space * 10}px;
        }
        .p${letter}-${space}{
          padding-${side}: ${space * 10}px;
        }
      `;
    }
    // For all sides
    result += `
      .m-${space}{
        margin: ${space * 10}px;
      }

      .py-${space}{
        padding-top: ${space * 10}px;
        padding-bottom: ${space * 10}px;
      }

      .px-${space}{
        padding-left: ${space * 10}px;
        padding-right: ${space * 10}px;
      }

      .p-${space}{
        padding: ${space * 10}px;
      }
    `;
  }

  return result;
};

export default generateSpacings;
