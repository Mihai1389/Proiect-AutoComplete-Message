
//  - displat <center>
// ; - display <br>
//  <b> - <b>
//  </b> = </b>

//   });
let messageStack = []; // Array to store rendered messages

function identityConfirmation() {
    var dropdown = document.getElementById("dropdownFixedMessages");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    var template = "";

    switch(selectedOption) {
        case "option1":
            template = "<center>  Numele din cont nu corespunde cu cel de pe document. Pentru actualizarea datelor dumneavoastră, vă rugăm să trimiteți o poză de tip selfie în care să țineți buletinul în dreptul feței.  ";
            break;
        case "option2":
            template = " <center>  CNP-ul din cont nu corespunde cu cel din document. Vă rugăm să va creați un cont cu datele corecte.  ";
            break;
        case "option3":
            template = " <center>  Datele de pe document nu corespund cu cele din cont. În cazul schimbării numelui, vă rugăm să încărcați poza certificatului de căsătorie/divorț. ";
            break;
        case "option4":
            template = " <center>  Rezoluția documentului este prea mică. Vă rugăm să refaceti fotografia astfel încât aceasta să aibă o rezoluție mai mare.  ";
            break;
        case "option5":
            template = " <center>  Datele de pe document nu sunt complet vizibile. Vă rugăm să refaceți poza astfel incât aceasta sa fie color, toate datele să fie clar vizibile, iar toate 4 laturile documentului să fie incluse în poză.  ";
            break;
        case "option6":
            template = " <center>  Documentul nu este incadrat corespunzator. Va rugam refaceti poza documentului astfel incat toate laturile acestuia sa fie complet vizibile.";
            break;
        case "option7":
            template = " <center>  Rezoluția documentului este prea mică. Vă rugăm să refaceti fotografia astfel încât aceasta să aibă o rezoluție mai mare.  ";
            break;
        case "option8":
            template = " <center>  Nu sunt acceptate capturi de ecran în vederea verificării documentelor. Vă rugăm să refaceți o poză documentului în original.  ";
            break;
        case "option9":
            template = " <center>  Documentul este expirat. Vă rugăm să încărcați un document valid.  ";
            break;
        case "option10":
            template = " <center>  Sunt acceptate doar documente emise în România. Vă rugăm să trimiteți poza unei cărți de identitate emisă în România sau poza față-verso a permisului de ședere.  ";
            break;
        case "option11":
            template = " <center>  Documentul nu este acceptat pentru verificare. Vă rugăm să trimiteți o poză a cărții dumneavoastră de identitate, a primelor două pagini ale pașaportului sau al permisului de ședere.  ";
            break;
        case "option12":
            template = " <center>  Vă rugăm să refaceți poza pașaportului astfel încât primele 2 pagini ale documentului sa fie vizibile în întregime în aceeași poză.  ";
            break;
        default:
            template = "Invalid option selected";
    }

    messageStack.push(template);
    renderAllMessages();
}

function otherDocuments() {
    var dropdown = document.getElementById("dropdownOtherDoc");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    var template = "";

    switch(selectedOption) {
        case "option1":
            template = "<center>  Verificarea identității nu a fost finalizată. Vă rugăm reîncărcați poza CI și o poză de tip selfie în care să țineți CI în dreptul feței. Aveți grijă ca toate detaliile de pe CI, cât și fața dumneavoastră să fie complet vizibile.   ";
            break;
        case "option2":
            template = "<center> Verificarea identității nu a fost finalizată. Vă rugăm încărcați o poză de tip selfie în care să țineți CI în dreptul feței. Aveți grijă ca toate detaliile de pe CI, cât și fața dumneavoastră să fie complet vizibile.";
            break;
        case "option3":
            template = "<center>  Vă rugăm să ne trimiteți un video de cel putin 10 secunde la  contact@Winbet.ro , ținând buletinul în mână și site-ul Winbet.RO vizibil în fundal. ";
            break;
        case "option4":
            template = "<center>  Vă rugăm să retrageți   întregul câștig obținut din bonus  În caz contrar,  orice sumă rămasă pe cont   obținută din bonus va fi   anulată  conform Termenilor și Condițiilor.";
            break;
        case "option5":
            template = "<center>Vă rugăm încărcați <b>o poză validă a cărții dumneavoastră de identitate</b> . Aveți grijă ca toate detaliile de pe CI să fie complet vizibile.";
            break;  
        case "option6":
            template = "<center>Vă rugăm încărcați <b>o poză validă a cărții dumneavoastră de identitate</b> . Aveți grijă ca toate detaliile de pe CI să fie complet vizibile.";
              break;   
          default: 
            template = "Invalid option selected";
    }

    messageStack.push(template);
    renderAllMessages();
}



function cardHolder(){
  // Get the value of the input with ID "inputCard"
  let input = document.getElementById("inputCard").value.trim(); // Trim whitespace

  let errors = []; 

  if (!validateInput(input)) {
    errors.push("Please enter a valid card");
  }
  
  if (errors.length > 0) {
    
    alert("Holder Card:\n" + errors.join("\n"));
    return; 
  }
  let template =  `
  <center>Vă rugăm să încărcați poze față-verso ale cardului cu ultimele cifre 
  <b> ${input}</b>.   <br><br>Pe poza față trebuie să fie vizibile   <b>  primele 6 si ultimele 4 cifre ale numărului cardului, data de expirare si numele titularului  </b> , iar pe spate trebuie să fie 
   <b>   acoperit CVV-ul.  </b>`


  messageStack.push(template);
  renderAllMessages();
}

function cardsHolder(){
  // Get the value of the input with ID "inputCard"
  let input = document.getElementById("inputCard").value.trim(); // Trim whitespace

  let errors = []; 

  if (!validateInput(input)) {
    errors.push("Please enter a valid cards");
  }
  
  if (errors.length > 0) {
    
    alert("Holder Card:\n" + errors.join("\n"));
    return; 
  }
  let template =  `
  <center>Vă rugăm să încărcați poze față-verso ale cardurilor cu ultimele cifre 
  <b> ${input}</b>.   <br><br>Pe poza față trebuie să fie vizibile   <b>  primele 6 si ultimele 4 cifre ale numărului cardului, data de expirare si numele titularului  </b> , iar pe spate trebuie să fie 
   <b>   acoperit CVV-ul.  </b>`


  messageStack.push(template);
  renderAllMessages();
}


function bankStatemant(){
  let input = document.getElementById("inputCard").value.trim();


  let errors = []; 

  if (!validateInput(input)) {
    errors.push("Please enter a valid card");
  }
  
  if (errors.length > 0) {
    
    alert("Holder Card:\n" + errors.join("\n"));
    return; 
  }

  let template = `
  <center>Vă rugăm să încărcați un extras de cont pentru cardul cu ultimele cifre<b>  ${input} </b> pe care să fie vizibile numele dumneavoastră complet, numărul de card și o tranzacție făcută către Winbet.`;

  
  messageStack.push(template);
  renderAllMessages();
};









function nonHolderCard(){
  // Get the value of the inputs with IDs "inputCard" and "inputName"
  let inputCard = document.getElementById("inputCardBelong").value.trim();
  let inputName = document.getElementById("inputCardNameHolder").value.trim();  // Trim whitespace

  let errors = []; 

  if (!validateInput(inputCard)) {
    errors.push("Please enter a valid card");
  }
  
  if (!validateInput(inputName)) {
    errors.push("Please enter a valid name");
  }
  
  if (errors.length > 0) {
    
    alert("Non-Holder Card:\n" + errors.join("\n"));
    return; 
  }
  
  
  // If inputs are not empty, proceed with adding the message to the stack
  let template =  ` <center>  Vă rugăm să încărcați pozele față-verso ale cardului cu ultimele cifre <b>  ${inputCard}   </b>, precum și poza buletinului d-lui/d-nei <b>   ${inputName}   </b> și o declarație pe propria răspundere a acestuia.

    <br><br>
  
  Declarația trebuie făcută după modelul: “<b>   Subsemnatul ${inputName} deținător al cărții de identitate nr. ..., seria ..., cu CNP ..., declar pe propria răspundere că aprob plățile anterioare și viitoare de pe cardul cu ultimele cifre "${inputCard}" către Winbet.ro.    </b>”. Pe declarație trebuie să se regăsească data și semnătura.
  
    <br><br>
  
  <b>   Vă reamintim că retragerile pot fi efectuate doar pe metode ce vă aparțin.   </b>
         
      `;

  messageStack.push(template);
  renderAllMessages();
}

function declaration(){
  let inputCard = document.getElementById("inputCardBelong").value;
 let inputName = document.getElementById("inputCardNameHolder").value;



let errors = []; 

if (!validateInput(inputCard)) {
  errors.push("Please enter a valid card");
}

if (!validateInput(inputName)) {
  errors.push("Please enter a valid name");
}

if (errors.length > 0) {
  
  alert("Non-Holder Card:\n" + errors.join("\n"));
  return; 
}

let  template = `
<center>  Declarația trebuie făcută după modelul: “<b>Subsemnatul ${inputName} deținător al cărții de identitate nr. ..., seria ..., cu CNP ..., declar pe propria răspundere că aprob plățile anterioare și viitoare de pe cardul cu ultimele cifre "${inputCard}" către Winbet.ro</b>”. &lt;br&gt &lt;br&gt <br><br>
  
  Pe declarație trebuie să se regăsească data și semnatura.`

messageStack.push(template);
renderAllMessages();
}

function additionalID(){
  let inputCard = document.getElementById("inputCardBelong").value;
 let inputName = document.getElementById("inputCardNameHolder").value;


let errors = []; 


if (!validateInput(inputCard)) {
  errors.push("Please enter a valid card");
}

if (!validateInput(inputName)) {
  errors.push("Please enter a valid name");
}

if (errors.length > 0) {
  
  alert("Non-Holder Card:\n" + errors.join("\n"));
  return; 
}



let  template = ` <center>   Vă rugam încarcați pozele buletinului titularului cardului cu ultimele cifre <b>${inputCard} - ${inputName} </b>.`

messageStack.push(template);
renderAllMessages();
}












function eWalletHolder(){
  let dropdown = document.getElementById("dropdown");
  let selectOption = dropdown.options[dropdown.selectedIndex].value;
  let input = document.getElementById("mail_wallet").value;

  let errors = []; 


  if (!validateDropdown(selectOption)) {
    errors.push("Please select a valid option from the E-wallet");
  }

  
  if (!validateInput(input)) {
    errors.push("Please enter a valid E-mail");
  }

  if (errors.length > 0) {
    
    alert("E-wallet Non-Holder:\n" + errors.join("\n"));
    return; 
  }

  let template = ` <center>   Va rugam incarcati o captura de ecran din contul de  <b>   ${selectOption } :  ${input}  .  </b>   
  <br><br> Pe captura de ecran trebuie sa fie vizibile <b>   numele titularului contului si adresa de e-mail - ${input}.  </b> `

   ;

  messageStack.push(template);
  renderAllMessages();
}


function nonHolderEWallet() {
  let dropdown = document.getElementById("dropDownNonHolder");
  let inputValue = document.getElementById("walletNonHolder").value.trim();
  let inputName = document.getElementById("nameNonHolder").value.trim();
  let selectOption = dropdown.options[dropdown.selectedIndex].value;


  let errors = []; 

 
  if (!validateDropdown(selectOption)) {
    errors.push("Please select a valid option from the E-wallet");
  }

  
  if (!validateInput(inputValue)) {
    errors.push("Please enter a valid E-mail");
  }

  
  if (!validateInput(inputName)) {
    errors.push("Please enter a valid Name");
  }

  if (errors.length > 0) {
    
    alert("E-wallet Non-Holder:\n" + errors.join("\n"));
    return; 
  }

  let template = `
  <center>  Vă rugăm să încărcați o captură de ecran din contul de ${selectOption} <b> ${inputValue}   </b>, precum și poza buletinului d-lui/d-nei <b>   ${inputName}   </b> și o declarație pe propria răspundere a acestuia.
    <br><br>
  Declarația trebuie făcută după modelul: “<b>  ${inputName}, deținător al cărții de identitate nr. ..., seria ..., cu CNP ..., declar pe propria răspundere că aprob plățile anterioare și viitoare de pe contul de ${selectOption} cu adresa de e-mail: ${inputValue} către Winbet.ro   </b>”.
    <br><br>
  Pe declarația trebuie să se regăsească data și semnătura.
  `;

  messageStack.push(template);
  renderAllMessages();
}




function declarationEwalletBelong(){
  let dropdown = document.getElementById("dropDownNonHolder");
  let inputValue = document.getElementById("walletNonHolder").value;
  let inputName = document.getElementById("nameNonHolder").value;

  let selectOption = dropdown.options[dropdown.selectedIndex].value;
  let errors = []; 

  
  if (!validateDropdown(selectOption)) {
    errors.push("Please select a valid option from the E-wallet");
  }

 
  if (!validateInput(inputValue)) {
    errors.push("Please enter a valid E-mail");
  }

  
  if (!validateInput(inputName)) {
    errors.push("Please enter a valid Name");
  }

  
  if (errors.length > 0) {
  
    alert("E-wallet Non-Holder:\n" + errors.join("\n"));
    return;
  }

  let template = ` <center>  Vă rugăm  încărcați declarația   după modelul: “<b>  ${inputName} , deținător al cărții de identitate nr. ..., seria ..., cu CNP ..., declar pe propria răspundere că aprob plățile anterioare și viitoare de pe contul de ${selectOption} cu adresa de e-mail ${inputValue} către Winbet.ro.   </b>”     <br> <br>

  Pe declarație trebuie să se regăsească data și semnatura. ` 
  messageStack.push(template);
  renderAllMessages();
}

function additionalIDwallet(){
  let dropdown = document.getElementById("dropDownNonHolder");
  let inputValue = document.getElementById("walletNonHolder").value;
  let inputName = document.getElementById("nameNonHolder").value;

  let selectOption = dropdown.options[dropdown.selectedIndex].value;

  let errors = []; 

  
  if (!validateDropdown(selectOption)) {
    errors.push("Please select a valid option from the E-wallet");
  }

 
  if (!validateInput(inputValue)) {
    errors.push("Please enter a valid E-mail");
  }

  if (!validateInput(inputName)) {
    errors.push("Please enter a valid Name");
  }

  if (errors.length > 0) {
    
    alert("E-wallet Non-Holder:\n" + errors.join("\n"));
    return; 
  }


let  template = `<center>  Va rugam incarcati pozele buletinului titularului contului de <b>  ${selectOption}  </b>asociat adresei de <b> e-mail:${inputValue} - ${inputName}. </b> `

messageStack.push(template);
renderAllMessages();
}



  function calculationTax(){
    let taxOff = document.getElementById("taxOff").value.trim().replace(/\s/g, '');
    let limit = document.getElementById("limit").value;
    let sum = document.getElementById("sumCont").value;


    let calc  = ((taxOff * 100) /97) + (sum - limit);
    let debited = calc.toFixed(2);
    template =  `  <center>Limita maximă de retragere din oferta jucată este de <b>  ${limit} RON  </b> .   <br><br>Suma disponibilă pentru retragere a fost returnată în contul de jucător, iar suma de <b>   ${debited} RON  </b> a fost anulată conform <b>  Termenilor și Condițiilor.    </b>`
    
    messageStack.push(template);
    renderAllMessages();

}; 


function deposit(){
  let input = document.getElementById("deposit").value;

  // Validate the input
  if (!validateInput(input)) {
    // If input is empty, display an alert
    alert("Deposit: Input Suma card is empty");
    return; // Return from the function, don't proceed further
}


  let template = `
  <center>Pentru retragerea câștigurilor din oferta jucată este necesară o depunere de <b>  ${input} RON  </b>, efectuată în ziua retragerii, <b>  după activarea bonusului.   </b>`

  
  messageStack.push(template);
  renderAllMessages();
};

function renderAllMessages() {
  // Render all messages in the stack to the output div
  document.querySelector(".output").innerHTML = messageStack.join("<br><br>");
}

// Validation function
function validateInput(input) {
  // Check if the input is empty
  return input !== "";
}




function copyContent() {
    let contentDiv = document.getElementById("output");
    let range = document.createRange();
    range.selectNode(contentDiv);
    window.getSelection().removeAllRanges(); // Clear current selection
    window.getSelection().addRange(range); // Select the content
    document.execCommand("copy"); // Copy the selected content
    window.getSelection().removeAllRanges(); // Clear the selection again
    // alert("Content copied!");
    location.reload();
  };




  function undoLastMessage() {
    // Remove the last message from the message stack
    messageStack.pop();
    
    // Render all messages in the stack to the output div
    renderAllMessages();
  }
  
  function renderAllMessages() {
    // Render all messages in the stack to the output div
    document.getElementById("output").innerHTML = messageStack.join("<br><br>");
    document.querySelector(".output").innerHTML = messageStack.join("<br><br>");
  }



function validateDropdown(option) {
  return ["Paysafe", "Skrill", "Netter"].includes(option);
}

function customMessage() {
  // Get the input element
  var inputElement = document.querySelector(".customMessage");
  
  // Get the value of the input
  var message = inputElement.value;
  
  // Validate the input
  if (!validateInput(message)) {
      // If input is empty, display an alert
      alert("Please enter your message  Custom message");
      return; // Return from the function, don't proceed further
  }
  
  // Push the message to the message stack
  messageStack.push(message);
  
  // Render all messages in the stack
  renderAllMessages();
  
  // Clear the input field
  inputElement.value = "";
}

