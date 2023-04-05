



function PriceTag(props) {
    function formatePrice(price){
        return parseFloat(price).toFixed(2)
    }
  return (
    <>
    <div><span className="material-icons-outlined">
currency_rupee
</span>
<span>{formatePrice( props.price)}</span>
</div>
    </>
  );
}

export default PriceTag;
