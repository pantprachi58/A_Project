"use client";

import { useSearchParams } from "next/navigation";
import Portfolio from "@/components/Portfolio/Portfolio";
import { portfolioCategories } from "@/lib/siteData";

export default function PortfolioCategoryReader() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("category");
  const initialCategory = portfolioCategories.includes(requested) ? requested : "All";

  return <Portfolio initialCategory={initialCategory} />;
}
