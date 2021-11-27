import { NextPage } from "next";

interface Props {
  language: string;
  setLanguage: (value: string) => void;
}

const SelectLanguage: NextPage<Props> = ({ language, setLanguage }) => {
  return (
    <select value={language} name="language" onChange={(e) => setLanguage(e.target.value)}>
      <option value="all">All Languages</option>
      <option value="typescript">TypeScript</option>
      <option value="javascript">JavaScript</option>
      <option value="csharp">C#</option>
      <option value="python">Python</option>
      <option value="go">Go</option>
      <option value="java">Java</option>
    </select>
  );
};

export default SelectLanguage;
