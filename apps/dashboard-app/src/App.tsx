import Layout from "@/src/components/organisms/layout/MainLayout";
import "./styles.css";
import Button from "./components/atoms/Button";
import SelectedTable from "./components/Templates/SelectedTable";
export const App = () => {
  return (
    <Layout>
      <div className="ml-[110px]">
        {/* Content goes here */}
        {/* <h1 className="text-2xl font-bold">Welcome to my Team</h1> */}
        <SelectedTable />
        <div className="flex justify-end mx-5">
          <Button
            children="Next"
            radius="large"
            size="medium"
            color="secondary"
          />
        </div>
      </div>
    </Layout>
  );
};

export default App;
