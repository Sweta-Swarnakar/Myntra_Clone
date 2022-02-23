import { BagNavbar } from './BagNavbar';
import {MainBag} from './MainBag';
// import { Pincode } from './Pincode';

export const Bag=() =>{
  return (
    <div className="App">
      <BagNavbar />
      {/* <Pincode /> */}
      <MainBag />
    </div>
  );
}

