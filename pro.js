//  the start of the js
// gobale varibels

var form = document.getElementById('form');
var tbody = document.getElementById('addrow');
var tr = document.createElement('tr');
tbody.appendChild(tr);
let title = document.getElementById('title');
let Writer = document.getElementById('Writer');
let choices = document.querySelector('input[name="fav"]:checked');
let Langouge = document.getElementById('Langouge');
let date = document.getElementById('date');
let file = document.getElementById('file');
let url = document.getElementById('url');
let price = document.getElementById('price');

document.getElementById('save-btn').style.display="none";

form.addEventListener('submit', (e) => {
    e.preventDefault();
// make sure the data is filled
 
    // make sure the choises inpute data is filled
    if( choices.value == ""){
        alert(' plise check one of the types ')
        choices.focus();
         
       }
       else{
         console.log(true);
       };   
 
      // make sure the Langouge inpute data is filled
       if( Langouge.value == ""){
        alert('plise input the langouge of the book')
        Langouge.focus();
         
       }
       else{
         console.log(true);
    };   
     
      // make sure the date inpute data is filled
    if( date.value == ""){
        alert(' plise celick the date');
        date.focus();
         
       }
       else{
         console.log(true);
    };   
          // make sure the file inpute data is filled
    if( file.value == ""){
        alert('plise chosies you img')
        file.focus();
         
       }
       else{
         console.log(true);
    };   
      // make sure the url inpute data is filled
       if( url.value == ""){
           alert('plise add a link');
        url.focus();
         
       }
       else{
         console.log(true);
    }; 
      // make sure the price inpute data is filled
       if( price.value == ""){
        alert(' plise enter how much dose the book cost')
        price.focus();
         
       }
       else{
         console.log(true);
       };   
//  than add a new row

        addrow();
 
});
function addrow() {
    //   add a new row
    var tr = document.createElement('tr');
    // add a new aitoms in the row
        var td = document.createElement('td');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var td7 = document.createElement('td');
        var td8 = document.createElement('td');
    //  linke the td with tr
        tbody.appendChild(tr);
        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
    tr.appendChild(td8);
    // like td with the value of the input
        td.appendChild(document.createTextNode(title.value));
        td1.appendChild(document.createTextNode(Writer.value));
        td2.appendChild(document.createTextNode(choices.value));
        td3.appendChild(document.createTextNode(Langouge.value));
        td4.appendChild(document.createTextNode(date.value));
    // make the the img(file.value)  a like i the td instead the diract url
        td5.innerHTML = `<a href="${file.value}">img</a>`;
        td5.addEventListener("mouseover", function() { this.getElementsByTagName("a")[0].style.color = "#00FFE0"; });
        td5.addEventListener("mouseout", function () { this.getElementsByTagName("a")[0].style.color = "rgb(0, 0, 255)"; });
    // make the link read more about the book (url.value)  a like i the td instead the diract url
        td6.innerHTML = `<a href="${url.value}">read more</a>`;
        td6.addEventListener("mouseover", function() { this.getElementsByTagName("a")[0].style.color = "#00FFE0"; });
        td6.addEventListener("mouseout", function() { this.getElementsByTagName("a")[0].style.color = "rgb(0, 0, 255)";});
 // like td with the price(price.value)of the input
        td7.appendChild(document.createTextNode(price.value));
    //add the bottons edite and delete
        td8.innerHTML = `
                    <a onClick="Delete(this)"><img src="img/x-button (1).png" id="Delete" class="btn"> </a>
                    <a onClick="Edit(this)" ><img src="img/write.png"  id="edit" class="btn"> </a>
                        <style>
                            .btn{
                                width: 45px;
                                margin-top:5px ;
                                margin-bottom:-10px ;
                            }
                            .btn:hover{
                            width: 50px;
                            }
                        </style>
        `;
//  remamber data and return the save botton to the add boutton
    uploud();
    function uploud() {
       var record = {};
        record["titre"] = title.value;
        record["writer"] = Writer.value;
        record["choices"] = choices.value;
        record["Langouge"] = Langouge.value;
        record["date"] = date.value;
        record['file'] = file.value;
        record['url'] = url.value;
        record['price'] = price.value;
        document.getElementById('btn').style.display = "block";
        document.getElementById('save-btn').style.display = "none";
       
    }
    
    



//  clean the input after  the add botton ckiked
    newform();
    function newform() {
   document.getElementById('title').value = "";
    document.getElementById('Writer').value = "";
    document.querySelector('input[name="fav"]:checked').value = "";
    document.getElementById('Langouge').value = "";
    document.getElementById('date').value = "";
    document.getElementById('file').value = "";
    document.getElementById('url').value = '';
    document.getElementById('price').value = "10";

}
    }
//  the function of the delete botton
function Delete() {
    // make sure the user waented to dekete
    if (confirm('Are you sure you wann delete this  ?')) {
        // dalete the row
        document.getElementsByTagName("tr")[2].remove();
    }
    
}

//  the function of the edit botton
function Edit(td) {
        // make sure the user waented to edit the row
    if (confirm('hi!!🤚do not frgot to delete the previous row that you gonna edit nobody gonna clean your mass😁👍')) {
        // Edit the row
        document.getElementById('btn').style.display = "none";
        document.getElementById('save-btn').style.display = "block";
        record = td.parentElement.parentElement;
        document.getElementById('title').value = record.cells[0].innerHTML;
        document.getElementById('Writer').value = record.cells[1].innerHTML;
        document.querySelector('input[name="fav"]:checked').value = record.cells[2].innerHTML;
        document.getElementById('Langouge').value = record.cells[3].innerHTML;
        document.getElementById('date').value = record.cells[4].innerHTML;
        document.getElementById('file').value = record.cells[5].innerHTML;
        document.getElementById('url').value = record.cells[6].innerHTML;
        document.getElementById('price').value = record.cells[7].innerHTML;
        }
}


//  the end of js















