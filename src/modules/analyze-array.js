export const analyzeArray = (array) => {
  return array.reduce(
    (analysis, number) => {
      if (!isValid(number)) return analysis;
      if (
        !isValid(analysis.average) ||
        !isValid(analysis.min) ||
        !isValid(analysis.max)
      )
        return { average: number, min: number, max: number, length: 1 };
      analysis.average = (analysis.average + number) / 2;
      analysis.min = Math.min(analysis.min, number);
      analysis.max = Math.max(analysis.max, number);
      analysis.length++;
      return analysis;
    },
    { average: null, min: null, max: null, length: 0 },
  );
};

const isValid = (number) => {
  if (
    number === undefined ||
    number === null ||
    typeof number !== 'number' ||
    Number.isNaN(number)
  ) {
    return false;
  }
  return true;
};
