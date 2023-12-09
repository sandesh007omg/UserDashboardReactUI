import React, { useState } from "react";
import { VariableSizeGrid as Grid } from "react-window";

interface Column {
  label: string;
  id: string;
  width: number;
}

interface Person {
  firstName: string;
  middleName: string;
  lastName: string;
  status: number; // Assuming a numeric status field (0 or 1)
}

interface DynamicTableProps {
  columns: Column[];
  data: Person[];
  rowHeight: number;
  columnWidth: (column: Column) => number;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  columns,
  data,
  rowHeight,
  columnWidth,
}) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);

  const requestSort = (key: string) => {
    let direction = "ascending";

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    } else if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "descending"
    ) {
      direction = ""; // Disable sorting on subsequent clicks
    }

    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (sortConfig === null || sortConfig.direction === "") {
      return data;
    }

    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const rowCount = sortedData.length;
  const columnCount = columns.length;

  const totalWidth = columns.reduce(
    (total, column) => total + columnWidth(column),
    0
  );

  return (
    <div className="table">
      <div className="table-header">
        {columns.map((column, index) => (
          <div
            key={index}
            style={{ width: columnWidth(column) }}
            onClick={() => requestSort(column.id)}
          >
            {column.label}
            {sortConfig &&
              sortConfig.key === column.id &&
              sortConfig.direction && (
                <span>
                  {sortConfig.direction === "ascending" ? " ▲" : " ▼"}
                </span>
              )}
          </div>
        ))}
      </div>
      <Grid
        columnCount={columnCount}
        columnWidth={(index: number) => columnWidth(columns[index])}
        rowCount={rowCount}
        rowHeight={() => rowHeight}
        height={300}
        width={totalWidth}
      >
        {({ columnIndex, rowIndex, style }: any) => (
          <div
            className={rowIndex % 2 === 0 ? "even-row" : "odd-row"}
            style={style}
          >
            {sortedData[rowIndex][columns[columnIndex].id]}
          </div>
        )}
      </Grid>
    </div>
  );
};

export default DynamicTable;
