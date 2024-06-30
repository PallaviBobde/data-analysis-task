export const useCropData = (data) => {
  // Filter data for years between 1950 and 2020
  const filteredData = data.filter((entry) => {
    const year = entry.Year.match(/\d+/)[0]; // Extracts digits
    return parseInt(year) >= 1950 && parseInt(year) <= 2020;
  });

  // Group data by Crop Name
  const groupedByCrop = filteredData.reduce((acc, entry) => {
    const cropName = entry["Crop Name"];
    if (!acc[cropName]) {
      acc[cropName] = {
        totalYield: 0,
        totalArea: 0,
        count: 0,
      };
    }
    acc[cropName].totalYield +=
      Number(entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]);
    acc[cropName].totalArea +=
      Number(entry["Area Under Cultivation (UOM:Ha(Hectares))"]);
    acc[cropName].count++;
    return acc;
  }, {});

  // Calculate averages
  const transformedCropData = Object.keys(groupedByCrop).map((cropName) => {
    const { totalYield, totalArea, count } = groupedByCrop[cropName];
    const averageYield = totalYield / count;
    const averageArea = totalArea / count;
    return {
      Crop: cropName,
      "Average Yield": Number(averageYield).toFixed(3), // Adjust precision as needed
      "Average Cultivation Area": Number(averageArea).toFixed(3), // Adjust precision as needed
    };
  });

  return transformedCropData;
};
