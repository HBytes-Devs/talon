import SiteShell from "../../components/SiteShell";
import UseCasesIndexView from "../../components/UseCasesIndexView";

export const metadata = {
  title: "Use Cases - HawkLens",
  description:
    "Learn how HawkLens improves productivity: live tracking, screenshots, idle time, attendance, location & invoicing.",
};

export default function UseCasesPage() {
  return (
    <SiteShell>
      <UseCasesIndexView />
    </SiteShell>
  );
}
