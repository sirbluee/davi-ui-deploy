import Layout from "./layout/MainLayout";
import Helps from "./Help";
import "./styles.css";
import Help from "./Help";
export const App = () => {
  return (
    <Layout>
      <div className="ml-[110px]">
        {/* Content goes here */}
        <Help/>
      </div>
    </Layout>
  );
};