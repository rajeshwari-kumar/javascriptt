var fs = require("fs");
var content = fs.readFileSync('India2011.csv');
var content1 = fs.readFileSync('IndiaSC2011.csv');
var content2 = fs.readFileSync('IndiaST2011.csv');


var pre_age,pre_lit,pre_total,pre_wo,pre_below,pre_pri,pre_mid,pre_sec,pre_high,pre_non,pre_tech,pre_grad,pre_unclas;
var obj={};
var obj1={};


var i=0,j=0;

function solve (content) {
  var stringData=content.toString();
  var arrayOne= stringData.split('\r\n');
  var header=arrayOne[0].split(',');
 //console.log(header);
  pre_age = header.indexOf('Age-group');
  pre_lit = header.indexOf('Literate - Persons');
  pre_total=header.indexOf('Total/ Rural/ Urban');
  //console.log(cnt_lit);
  pre_wo = header.indexOf('Educational level - Literate without educational level - Persons');
  pre_below = header.indexOf('Educational level - Below Primary - Persons');
  pre_pri = header.indexOf('Educational level - Primary - Persons');
  pre_mid = header.indexOf('Educational level - Middle - Persons');
  pre_sec = header.indexOf('Educational level - Matric/Secondary - Persons');
  pre_high = header.indexOf('Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Persons');
  pre_non = header.indexOf('Educational level - Non-technical diploma or certificate not equal to degree - Persons');
  pre_tech = header.indexOf('Educational level - Technical diploma or certificate not equal to degree - Persons');
  pre_grad = header.indexOf('Educational level - Graduate & above - Persons');
  pre_unclas = header.indexOf('Educational level - Unclassified - Persons');


  for (i = 1; i < arrayOne.length-1; i++) {
     var line=arrayOne[i].split(',');
    // console.log(line);


  if((line[pre_age] != '0-6') && (line[pre_total] == 'Total') && (line[pre_age] != 'All ages'))
  {
    if(obj[line[pre_age]]==undefined)
    {
      obj[line[pre_age]]=parseInt(line[pre_lit]);
    }
      //final_obj[line[cnt_lit]]=line[cnt_lit];
else{
    obj[line[pre_age]]+=parseInt(line[pre_lit]);
  }
}


if(obj1[header[pre_wo]]==undefined && obj1[header[pre_below]]==undefined && obj1[header[pre_pri]]==undefined && obj1[header[pre_mid]]==undefined &&obj1[header[pre_sec]]==undefined && obj1[header[pre_high]]==undefined
       && obj1[header[pre_non]]==undefined && obj1[header[pre_tech]]==undefined && obj1[header[pre_grad]]==undefined && obj1[header[pre_unclas]]==undefined)
     {
       obj1[header[pre_wo]]=0;
       obj1[header[pre_below]]=0;
       obj1[header[pre_pri]]=0;
       obj1[header[pre_mid]]=0;
       obj1[header[pre_sec]]=0;
       obj1[header[pre_high]]=0;
       obj1[header[pre_non]]=0;
       obj1[header[pre_tech]]=0;
       obj1[header[pre_grad]]=0;
       obj1[header[pre_unclas]]=0;
     }

     if(line[pre_age] =='All ages' && line[pre_total]=='Total')
     {

         obj1[header[pre_wo]]+=parseInt(line[pre_wo]);
         obj1[header[pre_below]]+=parseInt(line[pre_below]);
         obj1[header[pre_pri]]+=parseInt(line[pre_pri]);
         obj1[header[pre_mid]]+=parseInt(line[pre_mid]);
         obj1[header[pre_sec]]+=parseInt(line[pre_sec]);
         obj1[header[pre_high]]+=parseInt(line[pre_high]);
         obj1[header[pre_non]]+=parseInt(line[pre_non]);
         obj1[header[pre_tech]]+=parseInt(line[pre_tech]);
         obj1[header[pre_grad]]+=parseInt(line[pre_grad]);
         obj1[header[pre_unclas]]+=parseInt(line[pre_unclas]);

     }


}
}  //function data
solve(content);
solve(content1);
solve(content2);


var jArray3=[];
for(property in obj1)
{
  var obj3={};
  obj3.category=property;
  obj3.value=obj1[property];
  jArray3.push(obj3);

}
//console.log(jArray3);

var final=[];
final1=Object.keys(obj);
//console.log(final1.length);
for(i=0;i<final1.length;i++)
{
  b={};
  b["Age-group"]=final1[i];
  f=final1[i];
  b["Literates"]=obj[f];
  final.push(b);
}
//console.log(c);

var b1=JSON.stringify(final);
fs.writeFile('fina.json', b1,'utf8', function (err){
 if (err) throw err;
});

var file = 'final1.json';

var obj = JSON.stringify(jArray3);

fs.writeFileSync(file, obj);
