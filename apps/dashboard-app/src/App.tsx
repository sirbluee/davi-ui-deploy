import Layout from "./layout/MainLayout";
import { ClickCounter } from "./ClickCounter";
import Helps from "./Helpa";
import "./styles.css";
export const App = () => {
  return (
    <Layout>
      <div className="ml-[110px]">
        {/* Content goes here */}
        <h1 className="text-2xl font-bold">Welcome to my Team</h1>
      </div>
    </Layout>
    <div>
      <h1>
      <Helps/>
      </h1>
    </div>
  );
};