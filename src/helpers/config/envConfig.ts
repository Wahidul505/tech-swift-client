export const getBaseURL = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://tech-swift-server.vercel.app/api/v1"
  );
};
