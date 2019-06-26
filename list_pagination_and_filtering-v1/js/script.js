

    const ulEl = document.querySelector("#Students");
    const liEl =document.querySelectorAll("li");
    const searchVal = document.querySelector("input");
    const button = document.querySelector("button");
    const list = document.querySelectorAll(".student-item");
    const pageFromBody = document.querySelector('.page');
    var itemsPerPage = 10;




    function displayItems (list , page ){
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

  function appendslink(list){
    const totalPage = () => {
      if(list.length % itemsPerPage < 0){
        return lis.length/ itemsPerPage + 1;
      }
      return list.length/ itemsPerPage;
    }
    var numberOfPage = totalPage()
    const divEl = document.createElement("div");
    const ulEl = document.createElement("ul");

    divEl.className = "pagination";
    document.querySelector(".page").appendChild(divEl);
    divEl.appendChild(ulEl);
    for(let i = 1; i <= numberOfPage; i++ ){
      const liEl = document.createElement("li");
      const aEl = document.createElement("a");
      ulEl.appendChild(liEl)
      aEl.href = "#";
      aEl.textContent = i;
      aEl.className = "active"
      liEl.appendChild(aEl)
      if(i == 1){
        displayItems(list, i)
      }
      ulEl.addEventListener("click", e => {
        e.preventDefault();
      var a = document.querySelectorAll("a");
        for(let i = 0; i < a.length; i++){
          a[i].classList.remove("active");


          }
e.target.className = "active"
  displayItems(list, e.target.textContent);


      })
    }

  }


appendslink(list);


function searchBot(){
  let h3El = document.querySelectorAll("h3");
  for(let i = 0; i < liEl.length; i++ ){
    let h3Arr = h3El[i].textContent.toLowerCase();
    const search = searchVal.value;
    liEl[i].classList.remove("student-item");

    if(h3Arr.includes(search.toLowerCase()) || search == ""){
      liEl[i].className = "student-item";
      liEl[i].classList.remove("none")
    }else{
      liEl[i].className = "none";
    }
  }
  appendslink(list)
  removePage()
    }

function removePage(){
  const paginationDiv = document.getElementsByClassName('pagination');
  pageFromBody.removeChild(paginationDiv[0]);
}
searchVal.addEventListener("keyup", () => {
  searchBot()
})
button.addEventListener("click", () => {
  searchBot()
})


// Remember to delete the comments that came with this file, and replace them with your own code comments.