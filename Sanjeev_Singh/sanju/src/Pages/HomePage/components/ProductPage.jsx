const ProductPage = (data) => {
  let products = data.data;
  return (
    <section className="product-page">
      <div className="product-navbar"></div>
      <div style={{width:"80%",margin:"auto"}}>
        { products? products.map((item) => (
          <div key={item._id} style={{display:"flex",marginTop:"10px",marginBottom:"10px"}}>
            <img src={item.image} alt="" height="120px" />
            <div style={{marginLeft:"15px",textAlign:"start"}}>
              <h3>{item.course_name}</h3>
              <span style={{fontWeight:"400",fontSize:"20px"}}> ₹{(Number(item.price)-((Number(item.price)*(item.discount.split("%")[0]))/100)).toFixed(0)}</span>
              <span style={{color:"grey"}}><del>₹{Number(item.price).toFixed(0)}</del></span>
              <span>  ({item.discount} off)</span>
            </div>
          </div>
          
        )) : <h1>...loading</h1>}

      </div>
    </section>
  );
};
export default ProductPage;
