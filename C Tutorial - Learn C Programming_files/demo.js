function add_demo(){
    document.getElementById('add').style.display="none"
}
function add1(){
    document.getElementById('add1').style.display="none"
}
function add3(){
    document.getElementById('add3').style.display="none"
}
function add4(){
    document.getElementById('add4').style.display="none"
}
var data
var supp
var x 
fetch('https://reqres.in/api/users/2')
  .then((response) => response.json())
  .then((json) => {
      data = json['data']
      supp = json['support']

  console.log(data)
  x = document.createElement("IMG");
  x.setAttribute("src", "https://reqres.in/img/faces/2-image.jpg");
  x.setAttribute("width", "195");
  x.setAttribute("height", "150");
  x.setAttribute("alt", "The Pulpit Rock");

  document.getElementById('data').innerHTML=data['first_name'] +" "+ data['last_name'] +`<br>`+data['email'] + `<br><br>` +supp['text']
  
  document.getElementById('data1').innerHTML=data['first_name'] +" "+ data['last_name'] +`<br>`+data['email'] + `<br><br>` +supp['text']+`<br><br>`
  document.getElementById('data1').appendChild(x)
});
  