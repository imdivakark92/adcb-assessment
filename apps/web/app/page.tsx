import { Posts } from "./components/Posts";

export default function Web() {
  return (
    <div className="bg-gray-100">
      <div className="bg-gradient-to-r from-[#6200ea] to-[#9c27b0] p-4 text-center">
        <h1 className="text-white text-3xl font-bold">ADCB Assessment</h1>
      </div>
      <Posts />
    </div>
  );
}
