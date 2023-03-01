const fetchCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then(res => res.json())
      .then(data => {
        // call showCategories
        showCategories(data.data.news_category)
        })
};

const showCategories = (datas) => {
    // console.log(datas);
    // step-1
const parentContainer = document.getElementById('categories-container');
datas.forEach((singleData) => {
// console.log(singleData)

 // step-2
 const linkContainer = document.createElement('p');
 linkContainer.innerHTML +=`
 <a  class='text-decoration-none text-black' onclick="fetchCategoryNews('${singleData.category_id}','${singleData.category_name}' )">${singleData.category_name}</a>
 `;
// step-3
parentContainer.appendChild(linkContainer)
    });

  };
  // fetch all newses available in a category
  const fetchCategoryNews = (id, name) =>{
//   console.log(id)
const url=`https://openapi.programming-hero.com/api/news/category/${id}`
fetch(url)
.then(res =>res.json())
// call showAllNews
.then(data => showAllNews(data.data, name))
  }

const showAllNews = (id1, name1) =>{
    console.log(id1, name1)
  // get id and dynamic of news-count
    document.getElementById('news-count').innerText= id1.length;
  // get id and dynamic of category-name
    document.getElementById('category-name').innerText= name1;

}


//call function
/* no need to call function  fetchCategories(), we already : onload=" " on the body ofhtml
*/
// fetchCategories()