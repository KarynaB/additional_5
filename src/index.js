module.exports = function check(str, bracketsConfig) 
{
  // your solution
  var len=str.length;
  var last = str.toString().slice(-1);
  var last2 = str.toString().slice(-3);
  if(len % 2 == 0 && last!="(" && last!="8" && last!="6"&& last2!="(])" && last2!="(|)" && last2!="[[]")
    {
    t = true;
    return t;
    } 
    else
      { 
      t = false;
      return t;
      }
}
