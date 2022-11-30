var url = "https://periodic-table-elements-info.herokuapp.com/elements";

var content = document.getElementById("periodic-table-id")
var elemNames = document.getElementById("chemElements-id")

/*PROPERTIES*/
      fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        let elem = data;
        
        //FILLING THE NAMES SELECTOR
        data.forEach(element => {
            var option = document.createElement("option");
            option.text = element['name'];
            elemNames.add(option);
        });
      })
      .catch(function(error) {
        console.log(error);
      });
      ;

function findElementData(){

  var e = document.getElementById("chemElements-id");
  var value = e.value;
  var ElemNameSelect = e.options[e.selectedIndex].text;

  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    //FILLING THE NAMES SELECTOR
    data.forEach(element => {
        console.log(ElemNameSelect);
        
        if(ElemNameSelect == ""){
          document.getElementById('atomicNumber').innerHTML = ""
          document.getElementById('symbol').innerHTML = ""
          document.getElementById('name').innerHTML = ""
          document.getElementById('atomicMass').innerHTML = ""
          document.getElementById('electronicConfiguration').innerHTML = ""
          document.getElementById('electronegativity').innerHTML = ""
          document.getElementById('atomicRadius').innerHTML = ""
          document.getElementById('ionRadius').innerHTML = ""
          document.getElementById('vanDerWaalsRadius').innerHTML = ""
          document.getElementById('ionizationEnergy').innerHTML = ""
          document.getElementById('electronAffinity').innerHTML = ""
          document.getElementById('oxidationStates').innerHTML = ""
          document.getElementById('standardState').innerHTML =""
          document.getElementById('bondingType').innerHTML = ""
          document.getElementById('meltingPoint').innerHTML = ""
          document.getElementById('boilingPoint').innerHTML = ""
          document.getElementById('density').innerHTML = ""
          document.getElementById('groupBlock').innerHTML = ""
          document.getElementById('yearDiscovered').innerHTML = ""
          document.getElementById('block').innerHTML = ""
          document.getElementById('cpkHexColor').innerHTML = ""
          document.getElementById('period').innerHTML = ""
          document.getElementById('group').innerHTML = ""
        
        }else{
          if(element['name'] == ElemNameSelect){
            document.getElementById('atomicNumber').innerHTML = element['atomicNumber']
            document.getElementById('symbol').innerHTML = element['symbol']
            document.getElementById('name').innerHTML = element['name']
            document.getElementById('atomicMass').innerHTML = element['atomicMass']
            document.getElementById('electronicConfiguration').innerHTML = element['electronicConfiguration']
            document.getElementById('electronegativity').innerHTML = element['electronegativity']
            document.getElementById('atomicRadius').innerHTML = element['atomicRadius']
            document.getElementById('ionRadius').innerHTML = element['ionRadius']
            document.getElementById('vanDerWaalsRadius').innerHTML = element['vanDerWaalsRadius']
            document.getElementById('ionizationEnergy').innerHTML = element['ionizationEnergy']
            document.getElementById('electronAffinity').innerHTML = element['electronAffinity']
            document.getElementById('oxidationStates').innerHTML = element['oxidationStates']
            document.getElementById('standardState').innerHTML = element['standardState']
            document.getElementById('bondingType').innerHTML = element['bondingType']
            document.getElementById('meltingPoint').innerHTML = element['meltingPoint']
            document.getElementById('boilingPoint').innerHTML = element['boilingPoint']
            document.getElementById('density').innerHTML = element['density']
            document.getElementById('groupBlock').innerHTML = element['groupBlock']
            document.getElementById('yearDiscovered').innerHTML = element['yearDiscovered']
            document.getElementById('block').innerHTML = element['block']
            document.getElementById('cpkHexColor').innerHTML = element['cpkHexColor']
            document.getElementById('period').innerHTML = element['period']
            document.getElementById('group').innerHTML = element['group']
          };
        };
        
    });

  })
  .catch(function(error) {
    console.log(error);
  });
  ;
}

/*GET CURRENT TIME DATE */
function getDateTimeJs() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let time = date.getHours().toFixed(0) + ":" + date.getMinutes().toFixed(0);

  currentDate = `${day}-${month}-${year} ${time}`;
  document.getElementById("footer-copy").innerHTML = "&copy; Cassiano Medeiros";
  document.getElementById("footer-date-time").innerHTML = currentDate;
}