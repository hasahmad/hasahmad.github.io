// $(function() {
//   $( "#thedatepicker" ).datepicker();
// });

document.getElementById('demo').style.height="200px";
function checkAge() {
  // $("#theContent").hide().show('medium');
    var text;

    var theDate = document.getElementById("dp1").value;

    var mayar_1 = new Date(theDate);
    var nov_1 = new Date('2008-11-01');
    var nov_2 = new Date('2005-11-01');
    var nov_3 = new Date('2002-11-01');
    var oct_1 = new Date('2010-10-31');
    var oct_2 = new Date('2008-10-31');
    var oct_3 = new Date('2005-10-31');

    mayar_1 = mayar_1.getTime();
    
    switch(true) {
      case(mayar_1 >= nov_1 && mayar_1 <= oct_1):
        text = "You are in Mayār Saghīr Group 1";
        break;
      case(mayar_1 >= nov_2 && mayar_1 <= oct_2):
        text = "You are in Mayār Saghīr Group 2";
        break;
      case(mayar_1 >= nov_3 && mayar_1 <= oct_3):
        text = "You are in Mayār Kabīr";
        break;
      case(mayar_1 >= oct_1):
        text = "You are not a Tifl yet!";
        break;
      case(mayar_1 <= nov_3):
        text = "You are a Khadim.";
        break;  
      default:
        text = "You are not a Tifl!";
    }

    document.getElementById("demo").innerHTML = text;
}
