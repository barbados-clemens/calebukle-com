function rand(max: number) {
  return Math.floor(Math.random() * max);
}

export async function getImages(): Promise<[string, string, string, string]> {
  try {

    const init = {
      headers: {
        "user-agent": `CalebUkleCom Deno/${Deno.version.deno}`,
        "Authorization": `Discogs token=${Deno.env.get("DISCOGS_TOKEN")}`,
      },
    };
    const collection = await fetch(
      "https://api.discogs.com/users/Barbados_Clemens/collection/folders/0/releases?per_page=200",
      init,
    ).then((r) => r.json())

    const n = collection.releases.length;

    const selected = [
      collection.releases[rand(n)],
      collection.releases[rand(n)],
      collection.releases[rand(n)],
      collection.releases[rand(n)],
    ];

    return selected.map((s) => s.basic_information.cover_image) as [
      string,
      string,
      string,
      string,
    ];
  } catch (e) {
    console.log(e);
    return ["", "", "", ""];
  }
}