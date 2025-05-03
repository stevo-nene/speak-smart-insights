
import Header from "@/components/Header";
import AnalysisResults from "@/components/AnalysisResults";

const Analysis = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AnalysisResults />
      </main>
    </div>
  );
};

export default Analysis;
