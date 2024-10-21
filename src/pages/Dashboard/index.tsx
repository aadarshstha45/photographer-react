import { useStoreInitData } from "@/store";

const Dashboard = () => {
  const { initData } = useStoreInitData();
  console.log({ initData });

  return <div>Dashboard</div>;
};

export default Dashboard;
