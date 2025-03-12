import Dashboard from "@/components/Dashboard";
import { Suspense } from "react";

export default function DetailsPage() {
    return (
      <>
      <Suspense>
    <Dashboard/>
    </Suspense>
      </>
    );
  }