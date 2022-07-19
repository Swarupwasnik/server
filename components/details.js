let get=(req,res)=>{
    res.send([{
        "id":1,
        'category':"home",
        "title":"Twitter workers brace for more 'circus' after Elon Musk torpedous deal",
        "image":'https://static.toiimg.com/thumb/msid-92761250,imgsize-11910,width-400,resizemode-4/92761250.jpg',


    },{
        "id":2,
        'category':"home",
        "title":"YouTuber Arrested After He Calls Fans At Noida Metro Station For Birthday",
        "image":'https://twitter.com/ANINewsUP/status/1545821237070680066/photo/1?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1545821237070680066%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.ndtv.com%2Findia-news%2Fgaurav-taneja-youtuber-flying-beast-arrested-after-fans-gather-at-noida-metro-station-to-celebrate-his-birthday-3143683',

    },
    {
        "id":3,
        'category':"home",

        "title":"Mouni Roy's Midweek Mood Summed Up With Stunning Pics",
        "image":'https://c.ndtvimg.com/2022-07/apg9q3l_mouni-roy-_625x300_07_July_22.jpg'

    },
    {
        "id":4,
        'category':"home",

        "title":"Inside Malaika Arora's South Indian Spree With Murukku, Avial And More",
        "image":"https://c.ndtvimg.com/2022-07/50p56pto_malaika-arora-video_625x300_07_July_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350"

    }
    

]);
};
module.exports.apicontroller=get;