import { NextPage } from "next";

interface Props {
  pageIndex: number;
  setPageIndex: (pageIndex: number) => void;
  repoName: string;
}

const ButtonPaging: NextPage<Props> = ({ pageIndex, setPageIndex, repoName }) => {
  return repoName ? (
    <>
      <div>
        <button onClick={() => setPageIndex(pageIndex - 1)}>&lt;</button>
        <button onClick={() => setPageIndex(pageIndex + 1)}>&gt;</button>
      </div>
      <p>Page {pageIndex}</p>
    </>
  ) : null;
};

export default ButtonPaging;
