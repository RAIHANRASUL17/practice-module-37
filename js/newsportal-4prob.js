const fetchCategories = () => {
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
        linkContainer.innerHTML = `
 <a  class='text-decoration-none text-black' onclick="fetchCategoryNews('${singleData.category_id}','${singleData.category_name}' )">${singleData.category_name}</a>
 `;
        // step-3
        parentContainer.appendChild(linkContainer)
    });

};
// fetch all newses available in a category
const fetchCategoryNews = (id, name) => {
    //   console.log(id)
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(res => res.json())
        // call showAllNews
        .then(data => showAllNews(data.data, name))
}

const showAllNews = (id1, name1) => {
    // console.log(id1, name1)
    // get id and dynamic of news-count
    document.getElementById('news-count').innerText = id1.length;
    // get id and dynamic of category-name
    document.getElementById('category-name').innerText = name1;
    // step-1
    const parent2 = document.getElementById('all-news');
    parent2.innerHTML = '';
    // for singleNews apply forEach arrow function
    id1.forEach(singleNews => {
        // console.log(singleNews._id)

        // step-2
        const newDiv2 = document.createElement('div');
        newDiv2.classList.add('card', 'mb-3')
        newDiv2.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${singleNews.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8 d-flex flex-column">
            <div class="card-body">
                <h5 class="card-title">Title:${singleNews.title}</h5>
                <p class="card-text">${singleNews.details.slice(0, 500)}...</p>
    <div class='d-flex justify-content-between align-items-center'>
    <p class="card-text">
            <div class='d-flex align-items-center'>
                <img src="${singleNews.author.img}" height='40' width='40' alt="" class=rounded-circle>
                <div>
                authorName:${singleNews.author.name}
                <div>Date:${singleNews.author.published_date}</div>
                </div>
            </div>

            <div class="d-flex align-items-center">
                <i class="fas fa-eye"></i>
        
                    <p class="m-0 p-0">Title-view:${singleNews.total_view}</p>
            </div>
                
            <div class="d-flex gap-2">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
       
                <p>rating:${singleNews.rating.number}</p>
        </div>
        
        <div>
        <i class="fas fa-arrow-right" onclick="fetchNewsDetail('${singleNews._id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
        </div>
        </p>
    </div>
        
            </div>
        </div>
    </div>
        `;
        parent2.appendChild(newDiv2)
    })
};

// clickRightArrow showDetails
const fetchNewsDetail= (newId) =>{
    // console.log('kaj hosee too')
    // console.log(new_id)
    let url=`  https://openapi.programming-hero.com/api/news/${newId} `
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // call showFetchNewsDetail
        showFetchNewsDetail(data.data[0])
    });

const showFetchNewsDetail = newsDtail =>{
    console.log(newsDtail.author.name)
}

const setInnerHtml= document.getElementById('modal-body');
setInnerHtml.innerHTML= `
<div>
<h4> Hellooo Dedax: ${newsDtail.author.name ? newsDtail.author.name : "Not available" }</h4> 

</div>
`;

}


//call function
/* no need to call function  fetchCategories(), we already : onload=" " on the body ofhtml
*/
// fetchCategories()