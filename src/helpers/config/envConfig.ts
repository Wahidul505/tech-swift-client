export const getBaseURL = (): string => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";
};

export const getStripPK = () => process.env.STRIPE_PK;
