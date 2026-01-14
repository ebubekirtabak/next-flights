import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-6">
          Welcome to <span className="text-black dark:text-white">Next-Flights</span>
        </h1>
        <Button color="primary" variant="shadow" className="px-8 py-4 text-lg font-semibold">
          Get Started with Hero UI
        </Button>
      </main>
    </div>
  );
}
