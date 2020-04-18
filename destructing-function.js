function convertcurrency(amount){

const converted={
    usd:amount*0.76,
    gpb:amount*0.53,
    aud:amount*1.01,
    mex:amount*13.30

};
return converted;
}
const{usd,gpb,aud,mex}=convertcurrency(100);
console.log(usd,gpb,aud,mex);
//const hundo=convertcurrency(100);
//console.log(hundo);