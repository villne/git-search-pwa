import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Search.module.css";
import ButtonOrder from "./ButtonOrder";
import ButtonPaging from "./ButtonPaging";
import ListItems from "./ListItems";
import SelectLanguage from "./SelectLanguage";
import SelectSort from "./SelectSort";

interface Props {}

const Search: NextPage<Props> = () => {
  const [repoName, setRepoName] = useState("");
  const [repoNameInput, setRepoNameInput] = useState("");
  const [language, setLanguage] = useState("");
  const [sort, setSort] = useState("desc");
  const [order, setOrder] = useState("");
  const [pageIndex, setPageIndex] = useState(1);

  const url = `?q=${repoName}+language:${language}&sort=${sort}&order=${order}&page=${pageIndex}`;

  const router = useRouter();

  useEffect(() => {
    if (repoName)
      router.push({
        href: "{process.env.NEXT_PUBLIC_API_URL}",
        query: { q: repoName, language: language, sort: sort, order: order, page: pageIndex },
      });
  }, [repoName, language, sort, order, pageIndex]);

  useEffect(() => {
    if (router.query.q) setRepoNameInput(router.query.q as string);
    if (router.query.q) setRepoName(router.query.q as string);
    if (router.query.language) setLanguage(router.query.language as string);
    if (router.query.sort) setSort(router.query.sort as string);
    if (router.query.order) setOrder(router.query.order as string);
    if (router.query.page) setPageIndex(Number(router.query.page));
  }, [router.query]);

  const onOrder = () => setOrder(order === "asc" ? "desc" : "asc");

  const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setRepoName(repoNameInput);
    }
  };

  const onChange = async (e: React.FormEvent) => {
    setRepoNameInput((e.target as HTMLTextAreaElement).value);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search Repository"
        value={repoNameInput || ""}
        onKeyPress={onPressEnter}
        onChange={onChange}
        autoFocus
      />
      <SelectLanguage language={language} setLanguage={setLanguage} />
      <SelectSort sort={sort} setSort={setSort} />
      <ButtonOrder order={order} onOrder={onOrder} />
      <ListItems
        url={url}
        repoName={repoName}
        language={language}
        sort={sort}
        order={order}
        pageIndex={pageIndex}
      />
      <ButtonPaging pageIndex={pageIndex} setPageIndex={setPageIndex} repoName={repoName} />
    </div>
  );
};

export default Search;
