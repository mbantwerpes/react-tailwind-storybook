import { ListItem } from "../ListItem/ListItem";

interface ListProps {}

export const List = ({ ...props }: ListProps) => {
  return (
    <table className="list-decimal text-purple-600">
      <thead></thead>
      <tbody>
        <ListItem></ListItem>
      </tbody>
    </table>
  );
};
