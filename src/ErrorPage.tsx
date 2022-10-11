import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className="flex flex-1 flex-col h-screen bg-slate-100 justify-center items-center font-poppins">
      <h1 className="text-5xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
