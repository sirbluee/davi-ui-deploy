import TableTest from "@/src/components/atoms/TableTest";
import Layout from "@/src/components/organisms/layout/MainLayout";
import "@/src/styles.css";
import Button from "./components/atoms/Button";
import { InputTest } from "./components/atoms/Input";
import CleaningPage from "./components/pages/CleaningPage";
import { Chart } from "./components/templates/Chart";

export const App = () => {
  return (
    <Layout>
      <div className="ml-[110px]">
        <CleaningPage/>
        {/* <TableTest/>
        <Button children={"Next"} size="medium" radius="2xl" isLoading={false} color="outline" isIconOnly={false}/> */}
        <Chart />
      </div>
    </Layout>
  );
};

export default App;