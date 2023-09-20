import { useEffect, useState } from "react";

export const usePost = async (url, name, price) => {
  if (!name || !price) return;

  const product = {
    name,
    price,
  };

  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return resp.json();
};
