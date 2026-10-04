import SiteShell from "../../components/SiteShell";
import StatusView from "../../components/StatusView";
import { BRAND } from "../../lib/brand";

export const metadata = {
  title: `Coming soon - ${BRAND.name}`,
  description: `This ${BRAND.name} experience is coming soon. Join the free plan or contact ${BRAND.company}.`,
  robots: { index: false, follow: true },
};

export default function ComingSoonPage() {
  return (
    <SiteShell>
      <StatusView kind="comingSoon" />
    </SiteShell>
  );
}
