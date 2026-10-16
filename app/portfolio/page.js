import { Suspense } from "react";
import Portfolio from "@/components/Portfolio/Portfolio";
import PortfolioCategoryReader from "./PortfolioCategoryReader";

export const metadata = {
  title: "Portfolio | Ankush Painuly Photography",
};

export default function PortfolioPage() {
  return (
    <div style={{ paddingTop: "2rem" }}>
      <Suspense fallback={<Portfolio />}>
        <PortfolioCategoryReader />
      </Suspense>
    </div>
  );
}
