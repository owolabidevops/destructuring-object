const person={
    first:'wes',
    last:'bos',
    country:'canada',
    city:'hamilton',
    twitter:'@wesbos',
};
//destructuring allow us to extract data from array or object
//const first=person.first;
//const last=person.last;
//destructuring syntax
//const {firt,last}=person;

const wes={
    first:'wes',
    last:'bos',
    links:{
        social:{
            twitter:'https://twitter.com/webos',
            facebook:'https://facebook.com.com/webos.development',
        },
        web:{
            blog:'https://webos.com'
        }
    }
}
const {twitter:tweet,facebook:fb}=wes.links.social;

const settings={width:300,color:'black'}
