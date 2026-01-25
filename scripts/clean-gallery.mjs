import fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const sthRoot = path.resolve(scriptDir, '..')
const publicGalleryDir = path.join(sthRoot, 'public', 'gallery')
const publicManifestPath = path.join(sthRoot, 'public', 'gallery-manifest.json')
const dataManifestPath = path.join(sthRoot, 'data', 'gallery-manifest.json')

const writeEmptyManifest = async (manifestPath) => {
    await fs.mkdir(path.dirname(manifestPath), {recursive: true})
    await fs.writeFile(manifestPath, '[]', 'utf8')
}

const cleanGallery = async () => {
    await fs.rm(publicGalleryDir, {recursive: true, force: true})
    await writeEmptyManifest(publicManifestPath)
    await writeEmptyManifest(dataManifestPath)
}

await cleanGallery()
