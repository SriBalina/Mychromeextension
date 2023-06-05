$(document).ready(function() {
        //Hit enter key to add taks
        document.onkeydown=function(){
            if(window.event.keyCode=='13'){
                addTask();
                update();
            }
        }
      // To save and reload
      function update() { 
        var toDoList = [];
        $("ul").each(function(){
           toDoList.push(this.innerHTML);
        })
        localStorage.setItem('todoList', JSON.stringify(toDoList));
      }
    
      $("#clearTasksCompleted").click(function(e) {
        e.preventDefault();
        //localStorage.clear();
        $('.checked').remove();
        update();
        location.reload();
      });
      
      $("#clearTasks").click(function(e) {
        e.preventDefault();
        localStorage.clear();
        location.reload();
      });
      
      
    
      loadAfterRefresh();
    
      function loadAfterRefresh() {
        if (localStorage.getItem('todoList')){
            var toDoList = JSON.parse(localStorage.getItem('todoList'));
            $("ul").each(function(listItem){
              this.innerHTML = toDoList [listItem];
            })
        }
      }
    // });
    
    // Checked on click
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'H3') {
        ev.target.classList.toggle('checked');
        update();
        if(ev.target.classList == 'checked') { 
            $('.checked').attr('title', 'Click to undo');
        } else {
            $('h3').removeAttr( "title" );
            $('.checked').attr('title', 'Click to undo');
        }
      }
    }, false);
    
    //Preserve the status
    $('.checked').attr('title', 'Click to undo');
    
    // Create a new task list
    $("#addTask").click(function(){
      addTask();
      update();
    });
    
    function addTask() {
      var li = document.createElement("li");
      var h3 = document.createElement("h3");
      var inputValue = document.getElementById("taskInput").value;
      var t = document.createTextNode(inputValue);
      //document.getElementsByTagName("li")[0].appendChild(h2)
      $(li).append('<h3>');
      h3.appendChild(t);
      if (inputValue === '') {
        $('#alert').html("To do List cannot be empty");
        $('#alert').fadeIn().delay(1000).fadeOut();
      } else {
        document.getElementById("taskUL").appendChild(h3);
      }
      document.getElementById("taskInput").value = "";
    }
    
    
    //Adding Alarm
    var alarmName = 'remindme';
    
    //Create Notification
    function showNotification(){
        chrome.notifications.create('reminder', {
            type: 'basic',
            iconUrl: 'icon.png',
            title: 'Don\'t forget!',
            message: 'You have many things to do. Wake up, dude!'
            }, function(notificationId) {});
    }
    
    //Get Notification
    chrome.alarms.onAlarm.addListener(function( alarm ) {
    //console.log("Got an alarm!", alarm);
    chrome.storage.local.get(showNotification);
    });
        
    //Create Alarm
    chrome.alarms.create(alarmName, {
    delayInMinutes: 1, periodInMinutes: 1});
    
    });