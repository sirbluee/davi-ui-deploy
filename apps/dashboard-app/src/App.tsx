import Layout from "@/src/components/organisms/layout/MainLayout";
import "@/src/styles.css";
import CleaningPage from "./components/pages/CleaningPage";

export const App = () => {
  return (
    <Layout>
      <div className="ml-[110px]">
        <CleaningPage />
        {/* <TableTest/>
        <Button children={"Next"} size="medium" radius="2xl" isLoading={false} color="outline" isIconOnly={false}/> */}
      </div>
    </Layout>
  );
};

export default App;
