import { Posts } from "./components/Posts";

export default function Web() {
  return (
    <div className="bg-gray-100">
      <h1 className="text-3xl font-black text-center bg-white  p-4">
        ADCB Assessment
      </h1>
      <Posts />
    </div>
  );
}
