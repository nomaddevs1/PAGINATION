
//Global variables
    const ulEl = document.querySelector("#Students");
    const liEl =document.querySelectorAll("li");
    const searchVal = document.querySelector("input");
    const button = document.querySelector("button");
    const list = document.querySelectorAll(".student-item");
    const pageFromBody = document.querySelector('.page');
    var itemsPerPage = 10;



//This function shows the  list item onto the page
    function showPage (list , page ){
      const startIndex = page * itemsPerPage - itemsPerPage;
      const endIndex = page *  itemsPerPage;
      for(let i = 0; i < list.length; i++){
        if(i >= startIndex && i < endIndex  ){
          list[i].style.display = "block";
        }else{
          list[i].style.display = "none";
        }
      }
    }
/**Calculates the total Pages needed to append a list of ten names on each pages and
it also creates element for each list. it paginates the list into different pages.
**/
  function appendslink(list){
    const totalPage = () => {
      if(list.length % itemsPerPage > 0){
        return list.length/ itemsPerPage + 1;
      }
      return list.length/ itemsPerPage;
    }
    //Calculates the total number of pages needed for the list item to be display 10 each on a page
    var numberOfPage = totalPage()
    const divEl = document.createElement("div");
    const ulEl = document.createElement("ul");

    divEl.className = "pagination";
    document.querySelector(".page").appendChild(divEl);
    divEl.appendChild(ulEl);
//Create a link on each pages by taking the number of pages
    function pages(page){
    for(let i = 1; i <= numberOfPage; i++ ){
      const liEl = document.createElement("li");
      const aEl = document.createElement("a");
      ulEl.appendChild(liEl)
      aEl.href = "#";

      aEl.textContent = i;

      liEl.appendChild(aEl)
    }
  }
//The fisrt page is the default page shown
        showPage(list, 1)
//the number of links in pages
      pages(numberOfPage)
      //a listerner with a click call for the pagination link
      ulEl.addEventListener("click", e => {
        e.preventDefault();
      var a = document.querySelectorAll("a");
        for(let i = 0; i < a.length; i++){
          a[i].classList.remove("active");
          if(a[i].textContent === e.target.textContent){
            e.target.className = "active"
              showPage(list, e.target.textContent);

          }
          }

      })
    }




appendslink(list);
