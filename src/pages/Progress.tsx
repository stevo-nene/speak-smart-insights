
import Header from "@/components/Header";
import ProgressTracker from "@/components/ProgressTracker";

const Progress = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ProgressTracker />
      </main>
    </div>
  );
};

export default Progress;
