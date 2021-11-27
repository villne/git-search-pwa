import { NextPage } from "next";
import { DateTime } from "luxon";
import { ItemsEntity } from "../types/repo.interface";
import styles from "../styles/Item.module.css";

interface Props {
  item: ItemsEntity;
}

const Item: NextPage<Props> = ({ item }) => {
  return (
    <div className={styles.container}>
      <a href={item.html_url} target="_blank" rel="noreferrer">
        {item.name}
      </a>{" "}
      {
        <span>
          | Stars: {item.stargazers_count} | Forks: {item.forks_count} | Language: {item.language} |
          Created: {DateTime.fromISO(item.created_at).toISODate()} | Updated:{" "}
          {DateTime.fromISO(item.updated_at).toISODate()}
        </span>
      }
      <br />
      {item.description}
    </div>
  );
};

export default Item;
