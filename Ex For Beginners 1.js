console.log("welcome !");
/*اكتب برنامج بلغة جافا سكربت يظهر من0 الى 10
var i;
for(i=0;i<=10;i++){
console.log(i);
    
}
*/
/*اكتب برنامج جافا سكربت يقوم بقراءة قيمتين ثم يرجع صح اذا كانت احداهما تساوي 100 او مجموعهما والا يرجع خطأ
var a,b;
if( a=100 || b=100){
  return true;
}else{
    if(a+b=100){return true;}else {
        return false;

    }
   
}*/
/* اكتب برنامج جافا سكربت يقوم بإظهار تاريخ اليوم على شكل يوم/شهر/سنة
const formatday = (date= new Date() ) => {
  const days=date.getDate();
  const months=date.getMonth() + 1;
  const years=date.getFullYear();
  return `${days} / ${months} / ${years} `;
  /الشدة هاذيك ب ا ل ت +96/
}
console.log( formatday());
*/
/* اكتب برنامج جافا سكربت يقوم بإرجاع اول ثلاث حروف + اخر ثلاث حروف من كلمة معطاة اذا كانت الكلمة اقل من ثلاث حروف يرجع الكلمة
const  maKeNewString = (str) =>
str.lenght < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(  maKeNewString('abcdefghi'));
console.log(  maKeNewString('564ht54fghf'));
console.log(  maKeNewString('old'));
console.log(  maKeNewString(' ab '));
*/
/*
اكتب برنامج جافا سكربت يقوم بإرجاع الجزءالاول من كلمة معطاة
const firsthalf=(str) =>str.slice(0, str.length / 2);
console.log( firsthalf('abir'));
console.log(firsthalf('welcome'));
*/
/*  اكتب برنامج جافا سكربت يقوم بقراءة كلمتين ثم يقوم بعرض كلمة جديدة مكونة من 2 حرف من كل كلمة من الكلمات المدخلة بإستثناء الحرف الاول لكليهما 
const concatenate=(str1,str2) =>
str1.slice(1) + str2.slice(1);
console.log(concatenate('abc','def'));
*/
/*اكتب برنامج جافا سكربت يقوم بقراءة قيمتين  ثم يرجع القيمة الاقرب لل100
const closeto100=(a,b) =>
(100-a)<(100-b)? a:b;
console.log(closeto100(50,20));
*/
/*اكتب برنامج جافا سكربت يقوم بالتاكد من  اذا تكرر الحرف  اقل من  اربع مرات واكثر من مرتين في كلمة
const countchars=(str,char) =>
str.split('').filter(ch => ch=== char).length;

const contains2to4 =(str,char) =>
countchars(str,char) >= 2 && countchars(str,char) <= 4;

console.log ( contains2to4('ohh','h'));
console.log ( contains2to4('ohhhhhh','h'));


/* filter ترجع  صح اذا تحقق فيها الشرط تستعمل للتحقق من شرط */

/* اكتب برنامج جافا سكربت يقوم بإرجاع عدد الارقام الزوجية في مصفوفة ارقام صحيحة
const countEventNumbers = (arr) =>
arr.filter(num => num%2===0).length;
console.log(countEventNumbers ([1,2,5,4,8,7,9,20]));
*/
/* اكتب برنامج جافا سكربت يقوم بعرض مصفوفة عدد عناصرها يعطى من طرف المستخدم مثال 4 يعني عرض [1,2,3,4]
const creatArrayOfnumbers = (num) => {
  const returnArray = [];
  for(let i=1 ; i <= num ;i++){
    returnArray.push(i);
  }
  return returnArray;
}

console.log( creatArrayOfnumbers(10));
*/
/* اكتب برنامج جافا سكربت يقوم بالتحقق من عناصر مصفوفة اذا مرتبة  او لا
const ifItOreder=(arr) => {

  for( let i=0;i< arr.length ;i++){
    if( arr[i] > arr[i+1]) return false;
  }
  return true;

}
console.log( ifItOreder([1,3,5,6,7,10,20]));
console.log(ifItOreder([2,4,5,2,1,6,9]));
*/
/* اكتب برنامج جافا سكربت  يقوم بارجاع الرقم الاكبر من الارقام الزوجية في مصفوفة اعداد صحيحة
const LargestEven = (arr) => 
  Math.max(...arr.filter(num => num % 2===0));

console.log(LargestEven([0,6,9,5,1,3]));
*/
/*@ اكتب برنامج جافا سكربت يقوم ببديل اول رقم يظهر في مصفوفة ذات سلسلة حروف بالرمز 
const replacefirstDigit = (str) =>
str.replace(/[0-9]/ , '@');

console.log( replacefirstDigit('123aze'));
console.log(replacefirstDigit('azeqsderg154'));
*/
/* /[0-9]/ = / \d/*/
