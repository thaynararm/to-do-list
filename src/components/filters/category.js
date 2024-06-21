import React from 'react'

function Category({ category, setCategory, categories }) {
    return (
        <div className='filters__individual'>
            <label className='filters__individua__label'>
                Categoria
                <div>
                    <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    >
                    <option value="All">Todas as categorias</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                </div>
            </label>
        </div>
    )
}

export default Category
