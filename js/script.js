function init(){
//add your javascrip between these two lines of code
  var input = document.getElementById('entryinput');
  var results = document.getElementById('textoutput');
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', function(){
    results.innerHTML = input.value;
    alert("Juan Gonzalez: " + input.value);
  });
}
window.addEventListener('load', init);
