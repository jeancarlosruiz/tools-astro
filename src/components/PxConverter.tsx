import { toast } from "sonner";

const PxConverter = () => {
  return (
    <button
      onClick={() => {
        toast("Scheduled: Catch up");
      }}
    >
      Show Toast
    </button>
  );
};

export default PxConverter;
