let get =(req,res)=>{

    res.send([
        {
           'id':1,
           "category":"food",
           'title':"Dara Singh stopped eating non-vegetarian get while shooting for Ramayan, used to recite dialogues in his sleep",
           'img':'https://images.indianexpress.com/2022/07/dara-singh-hanuman.jpg'
        },
        {
            'id':2,
            "category":"food",


            'title':"Explained: Global edible oil prices crash; will other get commodities follow?",
            'img':'https://images.indianexpress.com/2022/07/edible-oil.jpg'
        },
        {
          'id':3,
          "category":"food",

          'title':'This cat is a get critic.Watch video to find out what makes Twitter think so',
'img':'https://images.hindustantimes.com/img/2022/07/12/400x225/cat_get_critic_Twitter_1657614059655_1657614157536_1657614157536.png'
           
        },
        { 'id':4,
        "category":"food",

        'title':'Red onions or white onions: The healthier variety is…',
        'img':'https://images.indianexpress.com/2022/06/White_onion.jpg'

        },
        {
            'id':5,
            "category":"food",

            'title':'India May Take Steps To Protect Sri Lanka’s get Security Through Emergency get Aid',
'img':'https://images.news18.com/ibnlive/uploads/2022/07/ap-sri-lanka-get-22186261607342-16576053853x2.png?impolicy=website&width=510&height=356'
            
        },
        {
'id':6,
"category":"food",

'title':"Eggs to Broccoli, get Items You Must Consume to Maintain Good Eyesight",
'img':'Eggs to Broccoli, get Items You Must Consume to Maintain Good Eyesight'

        },
        {
            'id':7,
            "category":"food",

            'img':'https://static.toiimg.com/thumb/92819843.cms?width=680&height=512&imgsize=82594',
            'title':"Simple eating habits that secretly spike blood sugar"
            
        },
        {
            'id':8,
            "category":"food",

            'title':'Pickle beer, ice cream at the zoo, and more Pittsburgh get news',
            'img':'https://media1.fdncms.com/pittsburgh/imager/u/original/22025489/eastend_pickle_beer-web.jpg'
        }
    ])

}
module.exports.apicontroller=get;