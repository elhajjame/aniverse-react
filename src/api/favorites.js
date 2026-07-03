const URL = "http://localhost:3001";

export async function getFavorite() {
  const res = await fetch(`${URL}/favorites`);
  return res.json();
}

export async function addFavorite(anime) {
  const res = await fetch(`${URL}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(anime),
  });

  return res.json();
}

export async function removeFavorite(id) {
  await fetch(`${URL}/favorites/${id}`, {
    method: "DELETE",
  });
}
