export const useYearData = (data) => {
  // Group data by Year
  const groupedByYear = data.reduce((acc, entry) => {
    const year = entry.Year.match(/\d+/)[0]; 
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(entry);
    return acc;
  }, {});

  // Prepare transformed data
  const transformedYearData = Object.keys(groupedByYear).map((year) => {
    const entries = groupedByYear[year];
    // Find crop with maximum production
    const cropWithMaxProduction = entries.reduce((maxCrop, currentCrop) => {
      return Number(currentCrop["Crop Production (UOM:t(Tonnes))"]) >
        Number(maxCrop["Crop Production (UOM:t(Tonnes))"])
        ? currentCrop
        : maxCrop;
    }, entries[0]);

    // Find crop with minimum production
    const cropWithMinProduction = entries.reduce((minCrop, currentCrop) => {
      return Number(currentCrop["Crop Production (UOM:t(Tonnes))"]) <
       Number(minCrop["Crop Production (UOM:t(Tonnes))"])
        ? currentCrop
        : minCrop;
    }, entries[0]);

    return {
      Year: year,
      CropWithMaxProduction: cropWithMaxProduction["Crop Name"],
      MaxProduction: cropWithMaxProduction["Crop Production (UOM:t(Tonnes))"],
      CropWithMinProduction: cropWithMinProduction["Crop Name"],
      MinProduction: cropWithMinProduction["Crop Production (UOM:t(Tonnes))"],
    };
  });

  return transformedYearData;
};
