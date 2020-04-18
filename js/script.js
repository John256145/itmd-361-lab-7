function init(){
//add your javascrip between these two lines of code
  var input = document.getElementById('entryinput');
  var results = document.getElementById('textoutput');
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', function(){
    results.innerHTML = '<h2>' + input.value + '</h2>';
    alert("Juan Gonzalez: " + input.value);
  });
}
window.addEventListener('load', init);
