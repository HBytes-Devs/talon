import SiteShell from "../../components/SiteShell";
import PrivacyView from "../../components/PrivacyView";
import { BRAND } from "../../lib/brand";

export const metadata = {
  title: `Privacy Policy - ${BRAND.name}`,
  description: `${BRAND.name} privacy policy: data collection, AWS S3 storage, screenshot retention, and Client data retention practices by ${BRAND.company}.`,
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PrivacyView />
    </SiteShell>
  );
}
