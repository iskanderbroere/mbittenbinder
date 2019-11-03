import { createClient as cc } from "contentful"

export const createClient = () =>
  cc({
    space: "dz2m1dfrpkoo",
    accessToken:
      "cfb5833beb0d50c8f0d50d480f386ce43483a6f1512980ff69c89a6b5fd3c684"
  })
