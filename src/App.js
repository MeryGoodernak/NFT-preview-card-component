import './App.css';
import ProductImage from './ProductImage/ProductImage';
import Title from './Title/Title';
import SupportingText from './SupportingText/SupportingText';
import Price from './Price/Price';
import TimeLeft from './TimeLeft/TimeLeft';
import Creator from './Creator/Creator';

function App() {
  return (
    <div className="App">
      <ProductImage></ProductImage>
      <Title></Title>
      <SupportingText></SupportingText>
      <Price></Price>
      <TimeLeft></TimeLeft>
      <Creator></Creator>
    </div>
  );
}

export default App;
