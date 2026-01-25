import fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import sharp from 'sharp'

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp'])
const MAX_IMAGE_WIDTH = 1600
const WEBP_QUALITY = 82
const EXCLUDED_DIRS = new Set([
    'НИИЦ Хмель',
    'Photos',
    'images',
    'sth',
    'node_modules',
    '.git'
])

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const sthRoot = path.resolve(scriptDir, '..')
const projectRoot = path.resolve(sthRoot, '..')
const publicGalleryDir = path.join(sthRoot, 'public', 'gallery')
const publicManifestPath = path.join(sthRoot, 'public', 'gallery-manifest.json')
const dataManifestDir = path.join(sthRoot, 'data')
const dataManifestPath = path.join(dataManifestDir, 'gallery-manifest.json')

const isImageFile = (fileName) => IMAGE_EXTENSIONS.has(path.extname(fileName).toLowerCase())

const toUrlPath = (relativePath) => relativePath.split(path.sep).join('/')

const buildItem = (outputRelativePath, sourceRelativePath, index) => {
    const segments = sourceRelativePath.split(path.sep).filter(Boolean)
    const category = segments[0] || 'Разное'
    const fileName = segments[segments.length - 1] || `image-${index + 1}`
    const title = fileName.replace(path.extname(fileName), '')

    return {
        id: index + 1,
        type: 'photo',
        src: `/gallery/${toUrlPath(outputRelativePath)}`,
        title,
        description: `Фото с мероприятия ${category}`,
        category,
        date: category
    }
}

const walkDir = async (dirPath) => {
    const entries = await fs.readdir(dirPath, {withFileTypes: true})
    const files = []

    for (const entry of entries) {
        if (entry.name.startsWith('.')) {
            continue
        }

        const fullPath = path.join(dirPath, entry.name)

        if (entry.isDirectory()) {
            if (EXCLUDED_DIRS.has(entry.name)) {
                continue
            }

            const nestedFiles = await walkDir(fullPath)
            files.push(...nestedFiles)
            continue
        }

        if (entry.isFile() && isImageFile(entry.name)) {
            files.push(fullPath)
        }
    }

    return files
}

const ensureDir = async (dirPath) => {
    await fs.mkdir(dirPath, {recursive: true})
}

const fileStats = async (filePath) => {
    try {
        return await fs.stat(filePath)
    } catch {
        return null
    }
}

const shouldRegenerate = async (sourcePath, targetPath) => {
    const targetStats = await fileStats(targetPath)
    if (!targetStats) {
        return true
    }

    const sourceStats = await fileStats(sourcePath)
    if (!sourceStats) {
        return false
    }

    return sourceStats.mtimeMs > targetStats.mtimeMs
}

const optimizeImageToPublic = async (filePath, outputRelativePath) => {
    const targetPath = path.join(publicGalleryDir, outputRelativePath)
    const needsUpdate = await shouldRegenerate(filePath, targetPath)
    if (!needsUpdate) {
        return
    }

    await ensureDir(path.dirname(targetPath))

    const image = sharp(filePath)
    const metadata = await image.metadata()
    const width = metadata.width && metadata.width > MAX_IMAGE_WIDTH ? MAX_IMAGE_WIDTH : metadata.width

    const pipeline = width ? image.resize({width}) : image
    await pipeline.webp({quality: WEBP_QUALITY}).toFile(targetPath)
}

const toOutputRelativePath = (relativePath) => {
    const parsed = path.parse(relativePath)
    return path.join(parsed.dir, `${parsed.name}.webp`)
}

const buildGallery = async () => {
    await ensureDir(publicGalleryDir)
    await ensureDir(dataManifestDir)

    const imageFiles = await walkDir(projectRoot)
    const sortedFiles = imageFiles.sort((a, b) => a.localeCompare(b))

    const manifestItems = sortedFiles.map((filePath, index) => {
        const relativePath = path.relative(projectRoot, filePath)
        const outputRelativePath = toOutputRelativePath(relativePath)
        return buildItem(outputRelativePath, relativePath, index)
    })

    for (const filePath of sortedFiles) {
        const relativePath = path.relative(projectRoot, filePath)
        const outputRelativePath = toOutputRelativePath(relativePath)
        await optimizeImageToPublic(filePath, outputRelativePath)
    }

    const manifestJson = JSON.stringify(manifestItems, null, 2)
    await fs.writeFile(publicManifestPath, manifestJson, 'utf8')
    await fs.writeFile(dataManifestPath, manifestJson, 'utf8')
}

await buildGallery()
