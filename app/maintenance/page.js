import SiteShell from "../../components/SiteShell";
import StatusView from "../../components/StatusView";
import { BRAND } from "../../lib/brand";

export const metadata = {
  title: `Maintenance - ${BRAND.name}`,
  description: `${BRAND.name} is undergoing scheduled maintenance. Please check back shortly.`,
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <SiteShell>
      <StatusView kind="maintenance" />
    </SiteShell>
  );
}
