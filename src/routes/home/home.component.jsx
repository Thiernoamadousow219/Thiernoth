import { Outlet } from 'react-router';
import Directory from '../../components/directory/directory.component';

function Home() {

  const categories = [
    {
      'id':'1',
      'name':'Shops',
      'imageUrl':'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      'id':'2',
      'name':'Eats',
      'imageUrl':'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      'id':'3',
      'name':'Shoes',
      'imageUrl':'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      'id':'4',
      'name':'Womans',
      'imageUrl':'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      'id':'5',
      'name':'Mens',
      'imageUrl':'https://i.ibb.co/R70vBrQ/men.png'
    }
  ]

  return (
    <div>
      <Directory  categories={categories}/>
      <Outlet/>

    </div>
  );
}

export default Home;
