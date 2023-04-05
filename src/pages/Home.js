import PrimaryNav from "../components/PrimaryNav";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect,useState } from "react";
import environment from "../environment";
function Home() {
const [products,setProductas] = useState([])
const [data , setData] = useState([])
useEffect(()=>{
  getProducts()
},[])

function getProducts(){
  fetch(`${environment.api}/products`) // Here we Fetching Data from Our Backend(mongodb)
  .then((res)=>res.json())
  .then((res)=>{
    console.log(res)
    const products = res.map((product)=>{
     product.selected = false;
    return product;
    })
    setProductas(products);
    setData(products)
  })
  .catch((error)=>{
    console.log(error)
  })
  .finally(()=>{
    console.log("Api call is complted")
  })
}

function onSearched(term){
  console.log(term)
  if(!term){
    setProductas(data);
    return
  }
  const filtered = data.filter((item)=>{
    const titleLowerCased = item.title.toLowerCase();
    const termLowerCased = term.toLowerCase();
    return titleLowerCased.indexOf(termLowerCased)!=-1
  })
  setProductas(filtered)
}

//const products = ["a","b","c","d"]; //here we assign 4 product for testing
function renderCols() {
  return products.map(function (product,index) {
    return (
  
    <Col md={4} lg={3} key={index}>
    <ProductCard item={product} reload={getProducts}/>

    </Col>
    
    )
  })
}

  return (
   <>
   
   <Search onSearch={onSearched}/>

   <Container>
    <Row>
    {renderCols()}  
    </Row>   
   </Container>
   </>
  );
}

export default Home;
