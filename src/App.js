import { MantineProvider } from "@mantine/core";
import CropTable from "./components/CropTable.tsx";
import YearTable from "./components/YearTable.tsx";
import jsonData from "./Manufac_India_Agro_Dataset.json";

function App() {
  return (
    <MantineProvider>
      <div className="App">
        <YearTable data={jsonData} />
        <CropTable data={jsonData} />
      </div>
    </MantineProvider>
  );
}

export default App;
