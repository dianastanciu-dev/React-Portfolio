import {useState} from 'react';
import './Home.css';
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';

function Home() {

  const defaultItems=[
  {image: img1, name: 'Proiect1', category: 'HTML-CSS', details: 'Lorem ipsum...'}, 
  {image: img2, name: 'Proiect2', category: 'Javascript', details: 'Lorem ipsum...'}, 
  {image: img3, name: 'Proiect3', category: 'Javascript', details: 'Lorem ipsum...'}
]  

  const [items, setItems]= useState(defaultItems)  

  const filterItems =(filterBy) =>{ // change to filterItems
      let filteredList; //

      if (!filterBy){ //nu avem categorie

          filteredList=defaultItems; //returnam toate itemele
      
        }else{ //cand avem categorie/filterBy filtram lista de iteme dupa numele de categorie

          filteredList =defaultItems.filter( (item)=>{return item.category === filterBy;})

      }

      setItems(filteredList);  //populam lista items cu lista filtrata
  }
  return (

    <div className="home">
        <div className="quoteBox">
        <h1 className="quote">Roses are red,</h1>
        <h1 className="quote">violets are blue,</h1>
        <h1 className="quote">unexpected {'{'}</h1>
        <h1 className="quote">on line 32</h1>
    </div>

       
        <div className="scrolldown">
        <span id="scroll"></span>
        <span id="scroll"></span>
        </div>

{/*scriptul jquery pentru scrolldown*/}        
{/*$(window).scroll(function(){     
  if($(window).scrollTop() > 100){
      $(".scroll").hide("slow");
  }
});

$(window).scroll(function(){   
  if($(window).scrollTop() < 100){
      $(".scroll").show("slow");
  }
});
*/}

{/*document.getElementById('window').scroll(() => {
   if(document.getElementById('window'))

})*/}



<div className="buttonBox">
        
        <button onClick={()=>filterItems('HTML-CSS')} className="filterButton">HTML, CSS</button>
        
        {/*cu arrow function rulam functia filteredItems cand se face click, nu la incarcarea paginii */}
        
        <button onClick={()=>filterItems('Javascript')} className="filterButton">Javascript</button>

        <button onClick={()=>filterItems() } className="filterButton">All</button>
</div>
       


        <ul className="listItems">
         {items.map((item)=>{ //afisam lista filtrata sau nefiltrata formatata cu html 
             return( <li>
                 <img src={item.image} alt={item.name}/>
                 <ul>
                   <li className="itemName">{item.name}</li>
                   <li className="itemDetails">{item.details}</li>
                 </ul>
                
             </li>)
         })}

         </ul>  
    </div>
  );
}

export default Home;
