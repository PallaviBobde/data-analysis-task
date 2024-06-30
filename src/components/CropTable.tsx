import React from "react";
import { Table } from "@mantine/core";
import { useCropData } from "../hooks/useCropData.ts";
import "./style.css";

const CropTable = ({data}) => {
  const yearWiseData = useCropData(data);
  return (
    <Table className="table">
      <Table.Thead>
        <Table.Tr>
          <Table.Th className="thead">Crop</Table.Th>
          <Table.Th className="thead">
            Average Yield of the Crop between 1950-2020
          </Table.Th>
          <Table.Th className="thead">
            Average Cultivation Area of the Crop between 1950-2020
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {yearWiseData.map((item) => {
          return (
            <Table.Tr key={item.Crop}>
              <Table.Td className="tbody">{item.Crop}</Table.Td>
              <Table.Td className="tbody">{item["Average Yield"]}</Table.Td>
              <Table.Td className="tbody">
                {item["Average Cultivation Area"]}
              </Table.Td>
            </Table.Tr>
          );
        })}
      </Table.Tbody>
    </Table>
  );
};

export default CropTable;
