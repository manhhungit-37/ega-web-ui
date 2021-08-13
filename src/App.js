import Footer from 'components/footer';
import HotPriceProduct from 'components/hotPriceProduct';
import Navbar from 'components/navbar';
import OutstandingProduct from 'components/outstandingProduct';
import ReviewProduct from 'components/reviewProduct';
import SellingProduct from 'components/sellingProduct';
import Slider from 'components/slider';
import SupperProduct from 'components/supperProduct';
import Vector from 'components/vector';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Slider />
      <Vector />
      <SupperProduct />
      <HotPriceProduct />
      <SellingProduct />
      <OutstandingProduct />
      <ReviewProduct />
      <Footer />
    </div>
  );
}

export default App;
