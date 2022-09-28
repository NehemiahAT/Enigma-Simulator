var output = 0;

var resKeys = document.getElementsByClassName("reskey");
    
function encrypt(input) {
  for (var resKey of resKeys) {
  resKey.style.color = "#ffffff";
}

for (var i = 0; i < 3; i++) {
  
if (i === 0) {
  output = input;
}  

output = output + document.getElementById("r" + String(i+1)).selectedIndex + 1;
    
 if (document.getElementById("r" + String(i+1)).selectedIndex !== 25) { document.getElementById("r" + String(i+1)).selectedIndex = document.getElementById("r" + String(i+1)).selectedIndex + 1;}
  
  else if (document.getElementById("r" + String(i+1)).selectedIndex === 25) {document.getElementById("r" + String(i+1)).selectedIndex = 0;}
  
  if (output > 26) {
    output = output - 26;
  }
}
  for (var i = 4; i > 1; i--) {
output = output + document.getElementById("r" + String(i-1)).selectedIndex + 1;
    
  if (document.getElementById("r" + String(i-1)).selectedIndex !== 25) { document.getElementById("r" + String(i-1)).selectedIndex = document.getElementById("r" + String(i-1)).selectedIndex + 1;}
  
  else if (document.getElementById("r" + String(i-1)).selectedIndex === 25) {document.getElementById("r" + String(i-1)).selectedIndex = 0;}
    
  if (output > 26) {
    output = output - 26;
  }
}
switch (output) {

case 1:

document.getElementById("aReskey").style.color = "#ffff00";

break;

case 2: 

document.getElementById("bReskey").style.color = "#ffff00";

break;

case 3:

document.getElementById("cReskey").style.color = "#ffff00";

break;

case 4:

document.getElementById("dReskey").style.color = "#ffff00";

break;

case 5:

document.getElementById("eReskey").style.color = "#ffff00";

break;

case 6:

document.getElementById("fReskey").style.color = "#ffff00";

break;

case 7:

document.getElementById("gReskey").style.color = "#ffff00";

break;

case 8:

document.getElementById("hReskey").style.color = "#ffff00";

break;

case 9:

document.getElementById("iReskey").style.color = "#ffff00";

break;

case 10:

document.getElementById("jReskey").style.color = "#ffff00";

break;

case 11:

document.getElementById("kReskey").style.color = "#ffff00";

break;

case 12:

document.getElementById("lReskey").style.color = "#ffff00";

break;

case 13:

document.getElementById("mReskey").style.color = "#ffff00";

break;

case 14:

document.getElementById("nReskey").style.color = "#ffff00";

break;

case 15:

document.getElementById("oReskey").style.color = "#ffff00";

break;

case 16:

document.getElementById("pReskey").style.color = "#ffff00";

break;

case 17:

document.getElementById("qReskey").style.color = "#ffff00";

break;

case 18:

document.getElementById("rReskey").style.color = "#ffff00";

break;

case 19:

document.getElementById("sReskey").style.color = "#ffff00";

break;

case 20:

document.getElementById("tReskey").style.color = "#ffff00";

break;

case 21:

document.getElementById("uReskey").style.color = "#ffff00";

break;

case 22:

document.getElementById("vReskey").style.color = "#ffff00";

break;

case 23:

document.getElementById("wReskey").style.color = "#ffff00";

break;

case 24:

document.getElementById("xReskey").style.color = "#ffff00";

break;

case 25:

document.getElementById("yReskey").style.color = "#ffff00";

break;

case 26:

document.getElementById("zReskey").style.color = "#ffff00";

break;

}
  output = 0;
}

document.getElementById("aKey").onclick = function(){encrypt(1);};

document.getElementById("bKey").onclick = function(){encrypt(2);};

document.getElementById("cKey").onclick = function(){encrypt(3);};

document.getElementById("dKey").onclick = function(){encrypt(4);};

document.getElementById("eKey").onclick = function(){encrypt(5);};

document.getElementById("fKey").onclick = function(){encrypt(6);};

document.getElementById("gKey").onclick = function(){encrypt(7);};

document.getElementById("hKey").onclick = function(){encrypt(8);};

document.getElementById("iKey").onclick = function(){encrypt(9);};

document.getElementById("jKey").onclick = function(){encrypt(10);};

document.getElementById("kKey").onclick = function(){encrypt(11);};

document.getElementById("lKey").onclick = function(){encrypt(12);};

document.getElementById("mKey").onclick = function(){encrypt(13);};

document.getElementById("nKey").onclick = function(){encrypt(14);};

document.getElementById("oKey").onclick = function(){encrypt(15);};

document.getElementById("pKey").onclick = function(){encrypt(16);};

document.getElementById("qKey").onclick = function(){encrypt(17);};

document.getElementById("rKey").onclick = function(){encrypt(18);};

document.getElementById("sKey").onclick = function(){encrypt(19);};

document.getElementById("tKey").onclick = function(){encrypt(20);};

document.getElementById("uKey").onclick = function(){encrypt(21);};

document.getElementById("vKey").onclick = function(){encrypt(22);};

document.getElementById("wKey").onclick = function(){encrypt(23);};

document.getElementById("xKey").onclick = function(){encrypt(24);};

document.getElementById("yKey").onclick = function(){encrypt(25);};

document.getElementById("zKey").onclick = function(){encrypt(26);};
