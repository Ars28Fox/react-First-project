import React, { useState } from 'react';

const Search = (props) => {
    const { searchingMovies = Function.prototype } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchingMovies(search, type);
        }
    };

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchingMovies(search, event.target.dataset.type);
    };

    return (
        <div className='row'>
            <div className='col s12'>
                <div className='input-field'>
                    <input
                        placeholder='Search'
                        type='search'
                        className='validate'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKey}
                    />
                    <button
                        className='btn search-btn'
                        onClick={() => searchingMovies(search, type)}
                    >
                        Search
                    </button>
                </div>
                <div>
                    <label className='input-label'>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='all'
                            onChange={handleFilter}
                            checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label className='input-label'>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='movie'
                            onChange={handleFilter}
                            checked={type === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>
                    <label className='input-label'>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={handleFilter}
                            checked={type === 'series'}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export { Search };
