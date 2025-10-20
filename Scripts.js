
console.log("Connected...");

var name;
var number;
number = 1;
name="mohammad";
//
document.write("سلام")
var WshShell = new ActiveXObject("WScript.Shell");
var fso = new ActiveXObject("Scripting.FileSystemObject");
        function nosleep(s)
      it_tick.value = s;
      document.write(it_tick);
      if (s === undefined || s < 0) {
        s = 60;
        tp_status.innerText = ":"
      }
      if (s) {
        it_tick.value = s;
      } else {
        WshShell.sendkeys("{F15}");
        it_tick.value = "";
        tp_status.innerText = "7"
      }
      
      setTimeout(function() { nosleep(s - 1) }, 1000);
      
      function body_onload() {
        document.title = document.URL.match(/[^\\]+(?=\.\w+)\b/);
        // adjust window to fit contents
        window.resizeTo(600, 480);
        check_setup();
        nosleep();
    }

