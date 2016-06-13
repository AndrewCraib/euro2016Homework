var url = "http://api.football-data.org/v1/soccerseasons/424/teams";
        var request = new XMLHttpRequest();
        request.open("GET", url);
        request.onload = function() {
            if (request.status === 200) {
              console.log("Welcome to Euro 2106")
                var jsonString = request.responseText;
                localStorage.setItem('data', jsonString);
                var result = JSON.parse(jsonString);
                console.log(result);
            }
        }.bind(this);
        request.setRequestHeader('X-Auth-Token', 'eb93d4edb93840d78af3b67ed4938578');
        request.send(null);


        function bindEvents(result){
          var selectBox = document.getElementById('team-select');
          selectBox.onchange = function(event) {

            var teamInfo = document.getElementById('team-info')
            var li1 = document.createElement('li')
            // var li2 = document.createElement('li')
            li1.innerText = "Team Name: " + teams[event.target.value].name;
            // li2.innerText = "Flag: " + teams[event.target.value].crestUrl;
            teamInfo.appendChild(li1)
            // teamInfo.appendChild(li2)
            
            }
        }


        function populateSelect(result){
          var selectBox = document.getElementById('team-select');

          for (var i = 0; i < teams.length; i++) {
            var teamOption = document.createElement('option');
           teamOption.text = team[i].name;
           teamOption.value = i;
           selectBox.appendChild (teamOption);
          }
        }