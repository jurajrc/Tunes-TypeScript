import React from 'react'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

// importujeme nový dátový typ ak má názov index.ts nemusíme zadavať presnú cestu ak má názov index
import { Song } from '../../types'

// children
import TunesSong from './TunesSong'

// style
import './TunesList.css'


// props
interface Props {
    songs: Song[]
}

// component
const TunesList: React.FC<Props> = (props) => {
    const{ songs } = props
    

    // template
    return (
        
            <TransitionGroup component="ul" className="tunes-list">
                {songs.map(song => (
                    <CSSTransition key={song.id} timeout={200} classNames="song" >
                        <li key={song.id}>
                            <TunesSong song={song} />
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        
    )
}

export default TunesList
