interface TableHeaderProps {
  headerTitles: string[];
}

export const TableHeader = ({ headerTitles }: TableHeaderProps) => {
  return (
    <thead className="bg-gray-200">
      <tr>
        {headerTitles.map((headerTitle, index) => {
          return (
            <th key={index} className="border border-green-300">
              {headerTitle}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
