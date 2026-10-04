import SiteShell from "../../components/SiteShell";
import BlogIndexView from "../../components/BlogIndexView";

export const metadata = {
  title: "Blog - HawkLens",
  description:
    "PINNs, time accuracy, effective & productive time — research notes from HawkLens by HawkBytes.",
};

export default function BlogPage() {
  return (
    <SiteShell>
      <BlogIndexView />
    </SiteShell>
  );
}
