import { NextPage } from "next";

interface Props {
  order: string;
  onOrder: () => void;
}

const ButtonOrder: NextPage<Props> = ({ order, onOrder }) => {
  return (
    <button onClick={() => onOrder()}>
      {order === "asc" ? <span>&#9650;</span> : <span>&#9660;</span>}
    </button>
  );
};

export default ButtonOrder;
