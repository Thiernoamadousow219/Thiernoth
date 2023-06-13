import CategoryItem from "../category-item/category-item.component"
import './directory.styles.css'
const Directory = ({categories}) => {
    return (
        <div className="directory-container">
        {
          (categories.map((category) => (
            <CategoryItem key={category.id} categorie = {category}/>
          )))
        }
        </div>   
    )
}

export default Directory