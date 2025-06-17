const inputbox = document.getElementById("input-box");
const list = document.getElementById("List");

function addtask(){
    if(inputbox.value ===''){
        alert("you must write task")

    }else{
        let li =document.createElement('li');
            li.innerHTML =inputbox.value ;
            list.appendChild(li);
            let span =document.createElement('span');
            span.innerHTML='\u00d7';
            li.appendChild(span);
        
    }
    inputbox.value ='';
    savedata();


}

list.addEventListener("click", function(e) {
    if (e.target.tagName.toLowerCase() === 'li') {
        e.target.classList.toggle('check');
    } else if (e.target.tagName.toLowerCase() === 'span') {
        e.target.parentElement.remove();
            savedata();
    }
}, false);

function savedata(){
    localStorage.setItem('data', List.innerHTML) ;


}

function showlist(){

    List.innerHTML =localStorage.getItem("data");

}
showlist();
