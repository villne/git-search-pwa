import { NextPage } from "next";

interface Props {
  sort: string;
  setSort: (value: string) => void;
}

const SelectSort: NextPage<Props> = ({ sort, setSort }) => {
  return (
    <select value={sort} name="sort" id="sort" onChange={(e) => setSort(e.target.value)}>
      <option value="">Best Match</option>
      <option value="stars">Stars</option>
      <option value="forks">Forks</option>
      <option value="updated">Updated</option>
    </select>
  );
};

export default SelectSort;
