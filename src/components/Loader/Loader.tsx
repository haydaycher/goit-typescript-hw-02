import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <InfinitySpin width="80" color="#4fa94d" />
    </div>
  );
};

export default Loader;
