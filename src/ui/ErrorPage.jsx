import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-2xl font-semibold">This site can not be reached</h1>
      <p>Check if there is a typo in the url</p>
      <button className="border-2 border-white px-4 py-1 mt-6" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default ErrorPage;
