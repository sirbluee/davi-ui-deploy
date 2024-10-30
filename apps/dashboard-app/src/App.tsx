import TableTest from "./components/atoms/TableTest";
import Layout from "./layout/MainLayout";
import "./styles.css";
import DisplayTable from "./components/DisplayTable";
import ShowTable from "./components/ShowTable";
import Button from "./components/atoms/Button";


export const App = () => {
  return (
    <Layout>
      <div className="ml-[110px]">
        <h1 className="text-2xl font-bold">Welcome to my Team</h1>
        <h1>Hello, Welcome to rok rak team</h1>
        <TableTest/>
        <Button children={"Next"}/>
      </div>
    </Layout>
  );
};

export default App;
