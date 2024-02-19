function Categories({categories, setActiveCategory, activeCategory}) {
    return (
        <div>
            <select name="categories" id="categories" value ={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
                <option value="all">Toutes les plantes</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('all')}>Réinitialiser</button>
        </div>
    );
}

export default Categories;