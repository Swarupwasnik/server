let get=(req,res)=>{
    res.send([{
        "id":1,
        "title":"Twitter shares fall as Elon Musk backs out of deal",
"category":"technology",
        "img":"https://ichef.bbci.co.uk/news/976/cpsprodpb/FACE/production/_125860246_whatsubject.jpg"
    },
{
    "id":2,
    "category":"technology",

    "title":"Security warning after sale of stolen Chinese data",
    "img":"https://ichef.bbci.co.uk/news/976/cpsprodpb/14D3F/production/_123411358_gettyimages-481066721.jpg"

},
{
    "id":3,
    "category":"technology",

    "title":"Ukraine sent dozens of 'dronations' to build army of drones",
    "img":"https://ichef.bbci.co.uk/news/976/cpsprodpb/164C2/production/_125803319_dronuaphoto.png"

},
{
    "id":4,
    "category":"technology",

    "title":"Canada hit by massive mobile and internet outage",
    "img":"https://ichef.bbci.co.uk/news/976/cpsprodpb/DAB9/production/_125839955_tv077243720.jpg"

},
{
    'id':5,
    "category":"technology",

    'title':'Apple launches Lockdown Mode to block spyware attacks on at-risk users',
    "img":"https://ichef.bbci.co.uk/news/976/cpsprodpb/769B/production/_121336303_gettyimages-596871414.jpg"
    

},
{
'id':6,
"category":"technology",

'img':"https://ichef.bbci.co.uk/news/976/cpsprodpb/769B/production/_121336303_gettyimages-596871414.jpg",
'title':'Apple launches Lockdown Mode to block spyware attacks on at-risk users',


},
{
    'id':7,
    "category":"technology",

    'title':"WhatsApp will soon let users sync chat history between multiple devices",
    'img':"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/RTXECAJN__1__1200x768.png?s9yFDiyZjIAlltJA80qrFThdhI.BIcU3&",
    
},
{
    'id':8,
    "category":"technology",

    'title':'Twitter is rolling out Unmention feature, here is how it works',
'img':'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/Twitter_unmention_feature.jpg?aJ59nY6IpvtDjtEWSKlj5Jll54xnqs_a&'
    
},
{
    'id':9,
    "category":"technology",

    'title':"Data watchdog reprimands government over pandemic WhatsApp use",
'img':"https://ichef.bbci.co.uk/news/976/cpsprodpb/184BC/production/_125861599_phoneusinggettyimages-1328676374.jpg"
    
}


])
}
module.exports.apicontroller=get;