import { hostItems } from "../constants";
import HostInfoCard from "./HostInfoCard";

const HostSection = () => {
  return (
    <>
      <h3 className="text-center text-3xl font-medium">WE HOST</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {hostItems.map((item) => (
          <HostInfoCard
            key={item.label}
            title={item.label}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default HostSection;
