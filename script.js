function multi(){

    var numb 
    var numb = document.getElementById('inp_1').value;
 
    var result = numb.split(",");
    var numbMe = result.sort(function(a,b){return b-a;});
    //multi_1.sort(function(a, b) {return a - b} );
    document.getElementById('result_multi').innerHTML = numbMe[0];
  }