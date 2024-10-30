import Layout from "./layout/MainLayout";
import "./styles.css";
import DisplayTable from "./components/DisplayTable";
import ShowTable from "./components/ShowTable";
import Button from "./components/atoms/Button";


export const App = () => {
  return (
    <Layout>
      <div className="ml-[110px]">
        {/* Content goes here */}
        {/* <h1 className="text-2xl font-bold">Welcome to my Team</h1> */}
        <div className="flex mx-5 mt-5">
          <DisplayTable />
          <ShowTable />
        </div>
        <div className="flex justify-end mx-5 mt-5">
          <Button
            children="Next"
            radius="large"
            size="medium"
            variant="solid"
            color="primary"
          />
        </div>
      </div>
    </Layout>
  );
};

export default App;
