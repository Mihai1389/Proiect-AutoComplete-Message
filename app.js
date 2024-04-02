
// function displayInputText() {
//     // Get the value of the input text field
//     var inputText = document.getElementById("inputText").value;

//     // Display the input text on the page
//     document.getElementById("output").innerHTML = 
        
//     ` <center>Vă rugăm să încărcați poze față-verso ale cardului cu ultimele cifre  <b> ${inputText}</b>.<br><br>Pe poza față trebuie să fie vizibile <b> primele 6 si ultimele 4 cifre ale numărului cardului, data de expirare si numele titularului</b>, iar pe spate trebuie să fie <b>acoperit CVV-ul</b>.`;
// }
  
//   document.getElementById('mainTitle').addEventListener('click', function() {
//     var content = document.getElementById('additionalContent');
  
//     if (content.style.display === 'none') {
//       content.style.display = 'block';
//     } else {
//       content.style.display = 'none';
//     }
//   });

//   //Function 2

//   function displayInputTextSecond() {
//     // Get the value of the input text field
//     var inputTextSecond = document.getElementById("inputTextSecond").value;

//     // Display the input text on the page
//     document.getElementById("outputSecound").innerHTML = `
//         <div style="text-align: center;">
//             Vă rugăm să încărcați poze față-verso ale cardului cu ultimele cifre <b>${inputTextSecond}

//             </b>.<br><br>

//             Pe poza față trebuie să fie vizibile <b> primele 6 si ultimele 4 cifre ale numărului cardului, data de expirare si numele titularului</b>,
//             iar pe spate trebuie să fie <b>acoperit CVV-ul</b>.
//         </div>`;
// }
  
//   document.getElementById('secound-title').addEventListener('click', function() {
//     var content = document.getElementById('additional-contentSecound');
  
//     if (content.style.display === 'none') {
//       content.style.display = 'block';
//     } else {
//       content.style.display = 'none';
//     }
//   });

function displayTemplate() {
    // Get the value from the input field
    var inputValue = document.getElementById("inputText").value;

    // Construct the template with the input value
    var template = `
    
    <center>Vă rugăm să încărcați poze față-verso ale cardului cu ultimele cifre  <b> ${inputValue}</b>.<br><br>Pe poza față trebuie să fie vizibile <b> primele 6 si ultimele 4 cifre ale numărului cardului, data de expirare si numele titularului</b>, iar pe spate trebuie să fie <b>acoperit CVV-ul</b>.;

       
    `;

    // Display the template in the output div
    document.getElementById("output").innerHTML = template;
}


// Functrion one

function displayText(){
    let inputValue= document.getElementById("inputTextOne").value;

    let template = `
    <center>Vă rugăm să încărcați poze față-verso ale cardului cu ultimele cifre  <b> ${inputValue}</b>.<br><br>Pe poza față trebuie să fie vizibile <b> primele 6 si ultimele 4 cifre ale numărului cardului, data de expirare si numele titularului</b>, iar pe spate trebuie să fie <b>acoperit CVV-ul</b>.;

       
    `;

    document.getElementById("outputOne").innerHTML = template;
}