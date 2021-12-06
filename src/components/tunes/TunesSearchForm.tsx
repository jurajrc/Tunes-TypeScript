import React, { useRef, FormEvent, ChangeEvent } from 'react'
// okrem lodash-es som ešte nainštaloval aj @types/lodash-es len do --dev
import { debounce } from 'lodash-es'


// style
import './TunesSearchform.css'

// props
interface Props {
    onSearch: (query: string) => void
}

// component
const TunesSearchform: React.FC<Props> = (props) => {
    const searchInput = useRef<HTMLInputElement>(null)

    // submit: form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchForMusic()
    }

    // input element 
    // cele sa to obalilo do debounce, spôsobý že funkciu odpaly až po 500ms
    const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
        searchForMusic()
    }, 500)

    // search for music
    const searchForMusic = () => {
        let searchString = searchInput.current?.value
        if (searchString) props.onSearch(searchString)
        
    }

    // template
    return (
        
        <form onSubmit={handleSubmit}>
            <input 
                autoFocus
                type="text"
                ref={searchInput}
                onChange={handleInput}
                className="search"/>
        </form>
        
    )
}

export default TunesSearchform
