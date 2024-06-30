import { Table } from "@mantine/core";
import React from "react";
import {useYearData} from '../hooks/useYearData.ts';
import './style.css';

const YearTable = ({data}) => {
  const yearWiseData = useYearData(data);

  return (
    <Table className="table">
      <Table.Thead>
        <Table.Tr>
          <Table.Th className="thead">Year</Table.Th>
          <Table.Th className="thead">
            Crop with Maximum Production in that Year
          </Table.Th>
          <Table.Th className="thead">
            Crop with Minimum Production in that Year
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {yearWiseData.map((item) => {
          return (
            <Table.Tr key={item.Year}>
              <Table.Td className="tbody">{item.Year}</Table.Td>
              <Table.Td className="tbody">
                {item.CropWithMaxProduction}
              </Table.Td>
              <Table.Td className="tbody">
                {item.CropWithMinProduction}
              </Table.Td>
            </Table.Tr>
          );
        })}
      </Table.Tbody>
    </Table>
  );
}

export default YearTable;
