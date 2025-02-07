//your JS code here. If required.
document.getElementById("submit").addEventListener("click",function(){
let auth = document.getElementById("author").value.trim();
let booktitle = document.getElementById("title").value.trim();
let isbnnum = document.getElementById("isbn").value.trim();

if(booktitle && auth && isbnnum){
	const booklist = document.getElementById("book-list");
	const row = document.createElement('tr');
	row.innerHTML=`
	<td>${booktitle}</td>
	<td>${auth}</td>
	<td>${isbnnum}</td>
	<td><button class="delete">X</button></td>
	`;

	booklist.appendChild(row);
	document.getElementById("author").value='';
	document.getElementById("title").value='';
	document.getElementById("isbn").value='';
}

});
document.getElementById("book-list").addEventListener("click",function(event){
if(event.target.classList.contains("delete")){
event.target.parentElement.parentElement.remove();
}
});
