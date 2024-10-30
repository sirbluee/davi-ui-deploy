import AccountSettings from "@/src/components/AccountSetting";
import Layout from "./layout/MainLayout";
import "./styles.css";
export const App = () => {
  return (
    <Layout>
      <div className="ml-[100px]">
        {/* Content goes here */}
        <AccountSettings />
      </div>
    </Layout>
  );
};
