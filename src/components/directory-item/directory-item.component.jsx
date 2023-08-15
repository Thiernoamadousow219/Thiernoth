import {DirectoryItemContainer,Body,BackgroundImage} from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom';


const DirectoryItem = ({categorie}) => {
    const { imageUrl,name,route} = categorie;
    const navigate         = useNavigate();
    const  onHandleItem = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onHandleItem}>
         <BackgroundImage imageUrl={imageUrl} />
            <Body>
              <h2>{name}</h2>
              <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}
export default DirectoryItem;