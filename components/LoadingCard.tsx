import Logo from "./Logo";

export default function LoadingCard() {
  return (
    <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="p-12">
        <Logo />
      </div>
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-300 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
      <p className="bg-black rounded-md mt-8 p-4">
        Loading ... hic et nunc api response times can vary. Working on an
        intermediate.
      </p>
      <p className="mt-5">
        If you're sitting here for a long time, try refreshing or coming back
        later.
      </p>
    </div>
  );
}
