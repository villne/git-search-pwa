import { NextPage } from "next";
import useSWR from "swr";
import Item from "../components/Item";
import { IRepo } from "../types/repo.interface";
import { fetcher } from "../utils/fetcher";

interface Props {
  url: string;
  repoName: string;
  language: string;
  sort: string;
  order: string;
  pageIndex: number;
}

const ListItems: NextPage<Props> = ({ url, repoName }) => {
  const { data, error } = useSWR<IRepo>(
    repoName ? `${process.env.NEXT_PUBLIC_API_URL}${url}` : null,
    fetcher
  );

  if (error) return <p>failed to load</p>;
  if (!data && !repoName) return null;
  if (!data) return <p>loading...</p>;

  return (
    <>
      <p>Total count: {data.total_count}</p>
      {data.items?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
};

export default ListItems;
