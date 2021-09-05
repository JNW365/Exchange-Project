
    function myFunction() {
        var text;
        var terms = document.getElementById("myInput").value;
      
        switch(terms) {
      // Service Codes //
          case '496':
          case '583':
             text = "<p><span>Cycle 1:</span> Bills in advance from the 1st to the 30th or 31st of each month.<ul><li>South Duxbury</li><li>Moretown</li><li>Fayston</li><li>Waitsfield</li><li>Warren</li></ul>";
             break;
             case '425':
                text = "<p><span>Cycle 16:</span> Bills in advance from the 16th of current month to the 15th of the following month.<ul><li>Charlotte</li><li>North Ferrisburgh</li><li>Monkton</li></ul>";
                break;
             case '482':
                 text = "<p><span>Cycle 16:</span> Bills in advance from the 16th of current month to the 15th of the following month.</p><ul><li>Hinesburg</li><li>St. George</li></ul>";
                 break;
             case '545':
                text = "<p><span>Cycle 16:</span> Bills in advance from the 16th of current month to the 15th of the following month.</p><ul><li>New Haven</li><li>Waltham</li><li>Weybridge</li></ul>";
                break;
             case '475':
                text = "<p><span>Cycle 16:</span> Bills in advance from the 16th of current month to the 15th of the following month.</p><ul><li>Panton</li></ul>";
                break;
             case '545':
                text = "<p><span>Cycle 16:</span> Bills in advance from the 16th of current month to the 15th of the following month.</p><ul><li>New Haven</li><li>Waltham</li><li>Weybridge</li></ul>";
                break;
             case '759':
                text = "<p><span>Cycle 16:</span> Bills in advance from the 16th of current month to the 15th of the following month.</p><ul><li>Addison</li></ul>";
                break; 
             case '758':
                text = "<p><span>Cycle 16:</span> Bills in advance from the 16th of current month to the 15th of the following month.</p><ul><li>Bridport</li></ul>";
                break;
             case '434':
                text = "<p><span>Cycle 22:</span> Bills in advance from the 22nd of current month to the 21st of the following month.</p><ul><li>Richmond</li><li>Bolton</li><li>Huntington</li><li>Starksboro</li></ul>";
                break;
             case '453':
                text = "<p><span>Cycle 22:</span> Bills in advance from the 22nd of current month to the 21st of the following month.<ul><li>Starksboro</li><li>Monkton</li><li>Buels Gore</li><li>New Haven</li><li>Bristol</li><li>Lincoln</li></ul>";
                break;
          default:
          text = "<p>Not a valid exchange</p>";
        }
        document.getElementById("demo").innerHTML = text;
      }   
      function newFunction() {
        let myobj = document.getElementById("demo");
        myobj.remove();
      }
      function refreshPage(){
          window.location.reload();
      }