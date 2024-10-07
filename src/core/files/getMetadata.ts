import { BaseDirectory, create, exists, mkdir, readTextFile } from "@tauri-apps/plugin-fs";

interface MetaProps {
  playlists: string[]
}

export async function getMetadata(): Promise<MetaProps> {
  const tokenExists = await exists('playlists', { baseDir: BaseDirectory.AppLocalData });
  if (!tokenExists) await mkdir('playlists', { baseDir: BaseDirectory.AppLocalData });

  const metaExists = await exists('playlists/meta.json', { baseDir: BaseDirectory.AppLocalData })
  
  if (metaExists) {
   const jsonMetadata = await readTextFile('playlists/meta.json', { baseDir: BaseDirectory.AppLocalData }); 
   return new Promise(resolve => resolve(JSON.parse(jsonMetadata)))
  }

  const metadata = { playlists: [] }
  const meta = await create(`playlists/meta.json`, { baseDir: BaseDirectory.AppLocalData })
  await meta.write(new TextEncoder().encode(JSON.stringify(metadata)));
  await meta.close();

  return new Promise(resolve => resolve(metadata))
}