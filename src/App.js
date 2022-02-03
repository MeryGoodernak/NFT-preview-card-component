import './App.css';
import ProductImage from './ProductImage/ProductImage';
import Title from './Title/Title';
import SupportingText from './SupportingText/SupportingText';
import Price from './Price/Price';
import TimeLeft from './TimeLeft/TimeLeft';
import Creator from './Creator/Creator';

function App() {
  return (
    <div role="card" className="App">
      <ProductImage></ProductImage>
      <Title></Title>
      <SupportingText></SupportingText>
      <div role="price" className="Details">
        <Price></Price>
        <TimeLeft></TimeLeft>
      </div>
      <div className="Horizontal"></div>
      <Creator></Creator>
    </div>
  );
}

export default App;
