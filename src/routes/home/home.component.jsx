import { Outlet } from 'react-router';
import Directory from '../../components/directory/directory.component';

function Home() {

  

  return (
    <div>
      <Directory />
      <Outlet/>

    </div>
  );
}

export default Home;
