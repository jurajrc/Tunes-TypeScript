import React from 'react'
import { Song } from '../../types'

// tato funkcia spôsobý že ak je string dhší ako je nastavené skráti ho a doplní ...
import { truncate } from 'lodash-es'

// styles
import './TunesSong.css'

// props
interface Props {
    song: Song
}

// component
const TunesSong: React.FC<Props> = (props) => {
    const { song } = props

    // make it pretty
    const songify = (song: Song): string => {
        const newTitle = song.artist + ' - ' + song.title
        return shorten(newTitle, 100)
    }

    const shorten = (str: string, len = 55): string => {
        const newTitle = song.artist + ' - ' + song.title
        return truncate(str, { length: len })
    }
 
    // Temlate
    return (
        <article className="song">
            
            <div className="inside">
                <h2>{ songify(song) }</h2>
                <div className="player">
                    {song.artwork && (
                        <img src={song.artwork} alt="album art" />

                    )}

                    <audio controls src={song.audioFile} />
                </div>
            </div>

            <footer className="meta">
                <p>
                    {shorten(song.album)}
                </p>
            </footer>

        </article>
    )
}

export default TunesSong
