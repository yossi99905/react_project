import React, { useRef, useState } from 'react'
import PicturesSales from '../PicturesSales.json'
import PictureItem from '../components/PictureItem'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BtnIndexPage from '../components/BtnIndexPage'



const Shop = () => {
  
  const ITEM_PER_PAGE = 6;

  const inputVal = useRef();
  const selectVal = useRef();

  const [filterAr, setfilterAr] = useState(PicturesSales)
  const [arrItems, setarrItems] = useState(PicturesSales.slice(0, ITEM_PER_PAGE))
  const [totalPage, settotalPage] = useState(Math.ceil(PicturesSales.length / ITEM_PER_PAGE))

  const [nextBtn, setnextBtn] = useState(2);
  const [backBtn, setbackBtn] = useState(0)

  const [numOfPage, setnumOfPage] = useState(1)

  const pushArToPage = (ar) => {
    const arrAllItem = ar.map((item, index) => {
      return <PictureItem key={index} name={item.image_name} src={item.src} price={item.price} size={item.size} category={item.category} />
    })
    return arrAllItem;
  }

  const sumbitSearch = (e) => {
    e.preventDefault();

    const val = inputVal.current.value;
    const select = selectVal.current.value;

    const filter = PicturesSales.filter(item => {
      if (val == "") {
        return true;
      }
      else if (select == "name") {
        return item.image_name.toLowerCase().includes(val.toLowerCase());
      }
      else if (select == "price") {
        return item.price.toString() == val;
      }
      else if (select == "size") {
        return item.size.toLowerCase() == val.toLowerCase();
      }
      else {
        return item.category.toLowerCase() == val.toLowerCase();
      }


    })


    setfilterAr(filter);
    settotalPage(Math.ceil(filter.length / ITEM_PER_PAGE));
    setarrItems(filter.slice(0, ITEM_PER_PAGE));
    setnumOfPage(1);
    setnextBtn(2);
    setbackBtn(0);

  }


  const pustButtonToPage = () => {
    const buttonIndex = [];
    for (let i = 1; i <= totalPage; i++) {
      buttonIndex.push(<BtnIndexPage active={i == numOfPage} name={i} key={i} number={i} onEach={() => onEachBtn(i)} />)
    }
    return buttonIndex;
  }

  const onEachBtn = (pageNum) => {
    const startIndex = (pageNum - 1) * ITEM_PER_PAGE;
    const endIndex = startIndex + ITEM_PER_PAGE;
    const tempAr = filterAr.slice(startIndex, endIndex);

    setarrItems(tempAr);

    setnextBtn(pageNum + 1);
    setbackBtn(pageNum - 1);

    setnumOfPage(pageNum)
  }


  return (
    <>
      <div className='bg-success-subtle'>
        <Header />
        <main className='mb-4'>
          <div className='container form_shpe '>
            <form className='' onSubmit={sumbitSearch} >
              <input className='mx-1 formH' placeholder="search value" ref={inputVal} type="text" />
              <select className='mx-1 formH' ref={selectVal}>
                <option value="name">name</option>
                <option value="price">price</option>
                {/* <option value="size">size</option> */}
                <option value="category">category</option>
              </select>
              <button className='btn btn-dark mx-1 formH'>send</button>
            
                
            </form>

          </div>


          <div className=' container row m-auto justify-content-center'>
            {pushArToPage(arrItems)}

          </div>

          <div className='d-flex justify-content-center pcontainer '>
            <BtnIndexPage bool={Math.ceil(filterAr.length / ITEM_PER_PAGE) < nextBtn} onEach={() => onEachBtn(nextBtn)} number={"next"} />
            {pustButtonToPage()}
            <BtnIndexPage bool={backBtn < 1} onEach={() => onEachBtn(backBtn)} number={"back"} />
          </div>

        </main>
        <div className='bg-white footer'></div>

      </div>
      <Footer />
    </>
  )
}

export default Shop


