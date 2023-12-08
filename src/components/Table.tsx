import React from "react";
import { VariableSizeGrid as Grid } from "react-window";

interface Column {
  label: string;
  id: string;
  width: number;
}

interface DynamicTableProps {
  columns: Column[];
  data: any[]; // Adjust this type based on your actual data structure
  rowHeight: number;
  columnWidth: (column: Column) => number;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  columns,
  data,
  rowHeight,
  columnWidth,
}) => {
  const rowCount = data.length;
  const columnCount = columns.length;

  // Calculate the total width of the table
  const totalWidth = columns.reduce(
    (total, column) => total + columnWidth(column),
    0
  );

  return (
    <div>
      <div className="table-header">
        {columns.map((column, index) => (
          <div key={index} style={{ width: columnWidth(column) }}>
            {column.label}
          </div>
        ))}
      </div>
      <Grid
        columnCount={columnCount}
        columnWidth={(index: number) => columnWidth(columns[index])}
        rowCount={rowCount}
        rowHeight={() => rowHeight}
        height={400}
        width={totalWidth}
      >
        {({ columnIndex, rowIndex, style }: any) => (
          <div
            className={rowIndex % 2 === 0 ? "even-row" : "odd-row"}
            style={style}
          >
            {data[rowIndex][columns[columnIndex].id]}
          </div>
        )}
      </Grid>
    </div>
  );
};

export default DynamicTable;
