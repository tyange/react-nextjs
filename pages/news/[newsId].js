import { useRouter } from "next/router";

// domain.com/news/[newsId]

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return (
    <div>
      <h1>The Detail Page</h1>
    </div>
  );
}

export default DetailPage;
