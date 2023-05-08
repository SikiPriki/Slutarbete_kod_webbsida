//Gemensam URL del
let api_url='http://127.0.0.1:5000/face'

//Getting the the URL data
async function getFace(url){
    try{
        const respons=await fetch(url)
        console.log(respons)
        return await respons.json()
    }catch(error){
        console.log(error)
    }
}

//Function that animates
function animFunction(val){
    //Mouth
    anime({
        targets:'#inc-mouth ',
        d:[
            {value: val.mouth} 
        ],
        duration:750,
        easing:"easeInQuad",
             
    })

    //Eyebrows
    anime({
        targets:'#right-eb',
        d:[
            {value: val.eb_right }
        ],
        duration:750,
        easing:"easeInQuad",

    })
    anime({
        targets:'#left-eb',
        d:[
            {value: val.eb_left}
        ],
        duration:750,
        easing:"easeInQuad",

    })

    //Eyes
    anime({
        targets:'#eye-left',
        d:[
            {value: val.eye_left}
        ]    ,
        duration:750,
        easing:"easeOutExpo",
    })
    anime({
        targets:'#eye-right',
        d:[
            {value: val.eye_right}
        ]    ,
        duration:750,
        easing:"easeOutExpo",
    })
}


//Happy face
async function smile(){
   let smile= await getFace(api_url+"?name=smile")
   smile=smile[0]

   animFunction(smile)
}

//Sad face
async function sad(){
    let sad= await getFace(api_url+"?name=sad")
    sad=sad[0]
    
    animFunction(sad)
}

//Original face
async function neutral(){
    let neutral= await getFace(api_url+"?name=neutral")
    neutral=neutral[0]

    animFunction(neutral)
}


//Event listeners for the button
document.getElementById('but_happy').addEventListener("click", smile)
document.getElementById('but_sad').addEventListener("click", sad)
document.getElementById('but_neut').addEventListener("click", neutral)


//https://animejs.com/documentation/#playPause