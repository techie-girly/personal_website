export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  return `${basePath}/${cleanPath}`
}

export function getImagePath(imagePath: string): string {
  return getAssetPath(imagePath)
}
