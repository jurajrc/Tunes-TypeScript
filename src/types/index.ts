
// nový datový typ ako string, number, bolemen
/**
 * to to je nový typ tak to KURVA dodržuj!!!
 */
export interface Song {
    id: number
    artist: string
    audioFile: string
    artwork?: string  // ? to znamená že to memusí byť
    title: string
    album: string
}

export interface User {
    firstName: string
    lastName: string
    favoriteSong?: Song
}