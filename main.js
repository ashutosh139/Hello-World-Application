//Listner for submit button
document.getElementById("myForm").addEventListener('submit',saveBookmark);

//save Bookmark
function saveBookmark(e){

var siteName=document.getElementById('siteName').value;
var siteURL=document.getElementById('siteURL').value;

if(!siteName||!siteURL)
{
  alert('Please fill the form.');
  return false;
}
 var bookmark={
   name:siteName,
   url:siteURL
 }
/*
console.log(bookmark)

localStorage.setItem('Test','HelloWorld');  //prevent form from submiitongdefault
console.log(localStorage.getItem('Test'));
localStorage.removeItem('Test');
console.log(localStorage.getItem('Test'));
*/
//check if bookmarks is null
if(localStorage.getItem('bookmarks')==null)
{
  var bookmarks=[];
  bookmarks.push(bookmark);
  //set it to localStorage
  localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
}else {
var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
//add bookmark to array
bookmarks.push(bookmark);

//set it to localStorage

localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

}
  e.preventDefault();
}

//delete bookmark

function deleteBookmark(url){
//fetch bookmarks
var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
for(var i=0;i<bookmarks.length;i++)
{
  if(bookmarks[i].url==url)
  //remove from array
  bookmarks.splice(i,1);
}

localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
fetchBookmarks();
}
//fetchBookmarks


function fetchBookmarks()
{
//fetch bookmarks
var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
var bookmarksResults=document.getElementById('bookmarksResults');
bookmarksResults.innerHTML='';


for(var i=0;i<bookmarks.length;i++){

var name=bookmarks[i].name;
var url=bookmarks[i].url;
//console.log(url);
bookmarksResults.innerHTML+='<div class="card card-body bg-light">'+
                                       '<h3>'+name+
                                       ' <a class="btn btn-primary" target="_blank"  href="'+url+'">Visit</a> '+
                                       ' <a class="btn btn-danger" onclick="deleteBookmark(\''+url+'\')"   href="#">Delete</a> '+
                                       '</h3>'+
                                       '</div>';

}


}
