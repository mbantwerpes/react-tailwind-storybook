import { ListItem } from "../ListItem/ListItem";

interface ListProps {}

export const List = ({ ...props }: ListProps) => {
  return (
    <div>
      <h1 className="text-purple-600">Liste</h1>
      <ul className="list-decimal text-purple-600">
        <ListItem></ListItem>
      </ul>
    </div>
  );
};
