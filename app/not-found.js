import SiteShell from "../components/SiteShell";
import StatusView from "../components/StatusView";
import { BRAND } from "../lib/brand";

export const metadata = {
  title: `Page not found - ${BRAND.name}`,
  description: `The page you requested could not be found on ${BRAND.name}.`,
};

export default function NotFound() {
  return (
    <SiteShell>
      <StatusView kind="notFound" />
    </SiteShell>
  );
}
