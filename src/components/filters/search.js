import ImgSearch from "../../static/media/Search.png"

const Search = ({ search, setSearch }) => {

    return (
        <div className="filters__individual">
            <label className="filters__individua__label">
                Pesquisar
                <div>
                    <input
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Digite sua busca' />
                    <img src={ImgSearch} ALT="Lupa" />
                </div>
            </label>
        </div>
    )
}

export default Search