
// &lt;center&gt; - displat <center>
// ; - display <br>
//  <b>- <b>
//  </b> = </b>

//   });
let messageStack = []; // Array to store rendered messages

function identityConfirmation() {
    var dropdown = document.getElementById("dropdownFixedMessages");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    var template = "";

    let  name_incorrect = `În urma verificării, am observat că numele din documentul furnizat nu corespunde cu cel din contul tau. Pentru a finaliza procesul de verificare al contului în conformitate cu politicile noastre de securitate, te rugăm să trimiti o poză selfie în care tii buletinul langa fata ta. 
    Iti mulțumim pentru înțelegere și pentru cooperare în acest proces important.`;

    let cnp_incorect =`Am observat că CNP-ul din contul tau nu se potrivește cu cel din documentul pe care l-ai trimis. Pentru a asigura acuratețea și corectitudinea informațiilor, te rugăm să creezi un cont nou folosind datele corecte. 
    Iti mulțumim pentru înțelegere și pentru că faci tot posibilul să clarificăm această situație!`;

    let name_change = `Am observant o diferenta între numele de pe documentul pe care l-ai trimis și cel din contul tau.
    Dacă s-a întâmplat să iti schimbi numele recent, te rugăm să ne trimiti o fotografie a certificatului de căsătorie sau a celui de divorț pentru a actualiza informațiile.`;


    let  data_visibility =  `Îți mulțumim pentru furnizarea documentului, însă unele informații nu sunt complet vizibile. Te rugăm să ne trimiți o nouă fotografie color, cu toate informațiile și marginile documentului clar vizibile.`

    let doc_framed = `Am observat că documentul nu este încadrat corespunzător. Pentru a putea valida contul, te rugăm să incarci o poză cu documentul în care să fie vizibile toate laturile cât și toate datele de pe document.`;

    let doc_rezolution = `Am observat că rezoluția documentului este prea mică. Pentru a putea folosi documentul la calitatea dorită, te rugăm să faci o fotografie cu o rezoluție mai mare.`;

    let  doc_ss = `Te informăm că, în cadrul procesului de verificare a documentelor, nu sunt permise capturile de ecran. Pentru a ne asigura de autenticitatea documentului, te rugăm să realizezi o nouă fotografie a acestuia în formatul original.`;

    let doc_expired = `Te informăm că documentul trimis este expirat. Pentru a putea continua procesul, este necesar ca documentul să fie valabil și autentic, cu data de expirare menționată.
    Te rugăm să ne trimiti un document actualizat.`;
    
    let doc_invalid = ` 
    Vreau să te informez că documentul trimis nu este acceptat pentru verificarea contului. Te rog să ne furnizezi o fotografie clară a unuia dintre următoarele documente:
    Cartea de identitate
    Primele două pagini ale pașaportului
    Permisul de ședere`;


    let doc_another_country = `Vreau să te informez că nu sunt acceptate documente emise in alte tari. Te rog să ne furnizezi o fotografie clară a unuia dintre următoarele documente emise in Romania:
    Cartea de identitate
    Primele două pagini ale pașaportului
    Permisul de ședere`;

    let doc_passaport = `Te rugăm să faci o fotografie clară a pașaportului tău în așa fel încât primele două pagini să fie vizibile complet în aceeași imagine. Asigură-te că sunt vizibile în mod clar următoarele detalii: numele tău, CNP-ul, data expirării și numărul pașaportului.`;

    switch(selectedOption) {
        case "option1":
            template = name_incorrect;
            break;
        case "option2":
            template = cnp_incorect;
            break;
        case "option3":
            template = name_change;
            break;
        case "option4":
            template = doc_rezolution;
            break;
        case "option5":
            template = data_visibility;
            break;
        case "option6":
            template = doc_framed;
            break;
        case "option7":
            template = doc_ss;
            break;
        case "option8":
            template = doc_expired;
            break;
        case "option9":
            template = doc_invalid ;
            break;
        case "option10":
            template = doc_another_country;
            break;
        case "option11":
            template = doc_passaport
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
    let input = document.getElementById("inputCard").value;
    // let dropdown = document.getElementById("dropdown");
    let selectOptionWallet = dropdown.options[dropdown.selectedIndex].value;
    let mail = document.getElementById("mail_wallet").value;
    var template = "";



    let selfie = `Pentru a finaliza procesul de verificare a identității, avem nevoie de ajutorul tău. Te rugăm să încarci o poză selfie în care ții cartea de identitate în dreptul feței. Este important ca toate detaliile de pe cartea de identitate și fața ta să fie vizibile complet în fotografie.`;

    let proof_of_adress =` Te rugăm să încarci o factură (de utilități, telefonie etc.) emisă în ultimele 3 luni. Asigură-te că adresa din buletinul tău de identitate este clar vizibilă pe factură.`;

    let video_sport = `Te rugăm să trimiți un videoclip la adresa contact@exemplu.ro, asigurându-te că site-ul exemplu.ro deschis la sectiunea Sport este vizibil și că ești prezent în cadru, de asemenea in video trebuie sa fie vizibil si username-ul tau . Durata minimă a clipului video ar trebui să fie de 15 secunde.`;

    let single_withdrawal = `Te rugăm să efectuezi retragerea întregului câștig obținut din bonus. În caz contrar, orice sumă rămasă în cont, provenită din bonus, va fi **anulată** conform Termenilor și Condițiilor.`;

    let id_update =`Vă rugăm să încărcați  buletin în contul dumneavoastră.`;

    let selfie_id = `Te rugăm să încarci o poză selfie în care ții cartea de identitate în dreptul feței. Este important ca toate detaliile de pe cartea de identitate și fața ta să fie vizibile complet în fotografie.`;

    let id_cc = `Pentru a putea să te ajutăm cât mai repede, te rugăm să ne trimiti o fotografie care să includă atât buletinul tau, cât și cardul cu ultimele cifre ${input}.`;

    let cc_recolut = `Pentru a valida cardul virtual cu terminația ${input} vă rugam să încarcați un extras de cont în care să fie vizibilit numele dumneavoastră cât și o tranzacție către exemplu sau o confirmare a cardului de Revolut (în partea stângă de sus a aplicatiei – Cont – Documente – General - Confirmare card).`
    
    let  selfie_cc = `Te rugăm să încarci o poză selfie în care ții cradul cu ultimele cifre ${input}  în dreptul feței. Este important ca toate detaliile de pe card și fața ta să fie vizibile complet în fotografie.`

    switch(selectedOption) {
        case "option1":
            template = selfie;
            break;
        case "option2":
            template = proof_of_adress;
            break;
        case "option3":
            template = video_sport;
            break;
        case "option4":
            template = single_withdrawal;
            break;
        case "option5":
            template = id_update ;
            break;  
        case "option6":
            template = selfie_id;
            break;
        case "option7":
            template = id_cc ;
            break;  
        case "option8":
            template = cc_recolut ;
              break;
        case "option9":
              template = selfie_cc ;
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
  let template = `Te rugăm să refaci pozele față-verso ale cardului, cu ultimele cifre afișate ca ${input}. Pe poza din față trebuie să fie vizibile primele 6 și ultimele 4 cifre ale numărului cardului, data de expirare și numele titularului, iar pe spate te rugăm să acoperi CVV-ul.`;


  messageStack.push(template);
  renderAllMessages();
}

function revolut(){
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
  let template =  `Pentru a valida cardul virtual cu terminația ${input} vă rugam să încarcați un extras de cont în care să fie vizibilit numele dumneavoastră cât și o tranzacție către exemplu sau o confirmare a cardului de Revolut (în partea stângă de sus a aplicatiei – Cont – Documente – General - Confirmare card).`

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

  let template = `Te rugăm să încarci un extras de cont pentru cardul cu ultimele cifre ${input}.
  <br>
  Asigură-te că pe extras sunt vizibile **numele titularului cardului, ultimele 4 cifre ale cardului și o tranzacție către exemplu**.`;
  messageStack.push(template);
  renderAllMessages();
};



function declaration(){
  let card = document.getElementById("inputCard").value;
 let name = document.getElementById("inputCardNameHolder").value;



let errors = []; 

if (!validateInput(card)) {
  errors.push("Please enter a valid card");
}

if (!validateInput(name)) {
  errors.push("Please enter a valid name");
}

if (errors.length > 0) {
  
  alert("Non-Holder Card:\n" + errors.join("\n"));
  return; 
}

let  template = `
Te rugăm să încarci declarația pe propria răspundere.
<br>
Declarația trebuie făcută după modelul: “Subsemnatul ${name}, deținător al cărții de identitate seria ..., nr. ..., cu CNP ..., declar pe propria răspundere că aprob plățile anterioare și viitoare de pe cardul cu ultimele cifre ${card} către exemplu.ro.”
<br>
Pe declarație trebuie să se regăsească data și semnatura.
<br>
Vă reamintim că retragerile sunt permise doar prin metode de plata inregistrate in numele dumneavoastra.

`;

messageStack.push(template);
renderAllMessages();
}

function additionalID(){
  let card = document.getElementById("inputCard").value;
 let name = document.getElementById("inputCardNameHolder").value;


let errors = []; 


if (!validateInput(card)) {
  errors.push("Please enter a valid card");
}

if (!validateInput(name)) {
  errors.push("Please enter a valid name");
}

if (errors.length > 0) {
  
  alert("Card:\n" + errors.join("\n"));
  return; 
}



let  template = `Te rugăm să încarci pozele actului de identitate al titularului cardului cu ultimele cifre ${card} - ${name}.`;

messageStack.push(template);
renderAllMessages();
}

function eWallet(){
  let dropdown = document.getElementById("dropdown");
  let selectOption = dropdown.options[dropdown.selectedIndex].value;
  let mail = document.getElementById("mail_wallet").value;

  let errors = []; 


  if (!validateDropdown(selectOption)) {
    errors.push("Please select a valid option from the E-wallet");
  }

  
  if (!validateInput(mail)) {
    errors.push("Please enter a valid E-mail");
  }

  if (errors.length > 0) {
    
    alert("E-wallet Request:\n" + errors.join("\n"));
    return; 
  }

  let template = `Te rugăm să încarci o captură de ecran din contul de ${selectOption} înregistrat cu adresa de e-mail: ${mail}.
  <br>
  Pe captura de ecran trebuie să fie vizibile numele titularului contului și adresa  - ${mail}.`;

  messageStack.push(template);
  renderAllMessages();
}


function rejectEwallet() {
  let dropdown = document.getElementById("dropdown");
  let mail = document.getElementById("mail_wallet").value.trim();
  let name = document.getElementById("name_wallet").value.trim();
  let selectOption = dropdown.options[dropdown.selectedIndex].value;


  let errors = []; 

 
  if (!validateDropdown(selectOption)) {
    errors.push("Please select a valid option from the E-wallet");
  }

  
  if (!validateInput(mail)) {
    errors.push("Please enter a valid E-mail");
  }

  
  if (!validateInput(name)) {
    errors.push("Please enter a valid Name");
  }

  if (errors.length > 0) {
    
    alert("E-wallet doesn't belong:\n" + errors.join("\n"));
    return; 
  }

  let template = `Te rugăm să reîncarci o captură de ecran din contul de ${selectOption} înregistrat cu adresa de e-mail: ${mail}.
  <br>
  Pe captura de ecran trebuie să fie vizibile numele titularului contului și adresa  - ${mail}.`;
  messageStack.push(template);
  renderAllMessages();
}




function declarationEwalletBelong(){
  let dropdown = document.getElementById("dropdown");
  let mail = document.getElementById("mail_wallet").value;
  let name = document.getElementById("name_wallet").value;
  let selectOption = dropdown.options[dropdown.selectedIndex].value;
  let errors = []; 

  
  if (!validateDropdown(selectOption)) {
    errors.push("Please select a valid option from the E-wallet");
  }

 
  if (!validateInput(mail)) {
    errors.push("Please enter a valid E-mail");
  }

  
  if (!validateInput(name)) {
    errors.push("Please enter a valid Name");
  }

  
  if (errors.length > 0) {
  
    alert("Declaration e-wallet:\n" + errors.join("\n"));
    return;
  }

  let template = `
Te rugăm să încarci declarația pe propria răspundere.
<br>
Declarația trebuie făcută după modelul: “Subsemnatul ${name}, deținător al cărții de identitate seria ..., nr. ..., cu CNP ..., declar pe propria răspundere că aprob plățile anterioare și viitoare de pe contul de ${selectOption} asociat adresei de e-mail ${mail} către exemplu.ro.”
<br>
Pe declarație trebuie să se regăsească data și semnatura.
<br>
Vă reamintim că retragerile sunt permise doar prin metode de plata inregistrate in numele dumneavoastra.


`;
  messageStack.push(template);
  renderAllMessages();
}

function additionalIDwallet(){
  let dropdown = document.getElementById("dropdown");
  let mail = document.getElementById("mail_wallet").value;
  let name = document.getElementById("name_wallet").value;

  let selectOption = dropdown.options[dropdown.selectedIndex].value;

  let errors = []; 

  
  if (!validateDropdown(selectOption)) {
    errors.push("Please select a valid option from the E-wallet");
  }

 
  if (!validateInput(mail)) {
    errors.push("Please enter a valid E-mail");
  }

  if (!validateInput(name)) {
    errors.push("Please enter a valid Name");
  }

  if (errors.length > 0) {
    
    alert("E-wallet Non-Holder:\n" + errors.join("\n"));
    return; 
  }


let  template = `Va rugam incarcati pozele buletinului titularului contului de  ${selectOption}  asociat adresei de  e-mail: ${mail} - ${name}.`;

messageStack.push(template);
renderAllMessages();
}



  function calculationTax(){
    let taxOff = document.getElementById("taxOff").value.trim().replace(/\s/g, '');
    let limit = document.getElementById("limit").value;
    let sum = document.getElementById("sumCont").value;


    let calc  = ((taxOff * 100) /97) + (sum - limit);
    let debited = calc.toFixed(2);
    template = `Limita maximă de retragere din oferta jucată este de  ${limit} RON.
    <br>
    Suma disponibilă pentru retragere a fost returnată în contul de jucător, iar suma de   ** ${debited} RON**   a fost anulată conform  Termenilor și Condițiilor.`;


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


  let template = `Pentru a putea retrage câștigurile obținute din oferta jucată este necesară o depunere de ${input}, efectuată în ziua retragerii, după activarea bonusului.`;
  
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
    document.getElementById("output").innerHTML = messageStack.join("    <br><br>");
    document.querySelector(".output").innerHTML = messageStack.join("    <br><br>");
  }



function validateDropdown(option) {
  return ["Paysafe", "Skrill", "Neteller"].includes(option);
}


function addMessage() {
  // Adauga mesajul introdus in textarea la stiva de mesaje
  let message = document.getElementById("messageInput").value;
  messageStack.push(message);
  // Apeleaza functia de afisare a mesajelor
  renderAllMessages();
}

function autoResize(textarea) {
  // Setează înălțimea minimă pentru text area
  textarea.style.height = 'auto';
  // Setează înălțimea text area-ului la înălțimea sa de scroll, astfel încât să nu existe scroll vertical vizibil
  textarea.style.height = textarea.scrollHeight + 'px';
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