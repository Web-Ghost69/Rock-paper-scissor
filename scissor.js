let choice=document.querySelectorAll(".choice")
let msg=document.querySelector(".msg")
let CScore=document.querySelector(".CompScore");
let UScore=document.querySelector(".UserScore");
let CompScore=0;
let UserScore=0;

//Generating Random Words



const CPU =()=>
    {
        let option =["Rock" ,"Paper" ,"Scissor"]
        let Comp= option[Math.floor(Math.random()*3)]
        console.log(Comp)
        return Comp;
    }
//PLay Game Function



const PlayGame=(UserChoice)=>
{
    let CompChoice=CPU();
    if(UserChoice==CompChoice)
        {
            msg.innerText="Game is Drawn"
        }
       else if(CompChoice=="Rock"&&UserChoice=="Scissor")
            {
                msg.innerText=`Computer Won! Computer Choose ${CompChoice} and You Choose ${UserChoice}`
                CompScore++;
                CScore.innerText=CompScore;
            }
            else if(CompChoice=="Scissor"&&UserChoice=="Rock")
                {
                    msg.innerText=`You Won! Computer Choose ${CompChoice} and You Choose ${UserChoice}`
                    UserScore++;
                    UScore.innerText=UserScore;
                }
                else if(CompChoice=="Paper"&&UserChoice=="Rock")
                    {
                        msg.innerText=`Computer Won! Computer Choose ${CompChoice} and You Choose ${UserChoice}`
                        CompScore++;
                        CScore.innerText=CompScore;
                    }
                    else if(CompChoice=="Rock"&&UserChoice=="Paper")
                        {
                            msg.innerText=`You Won! Computer Choose ${CompChoice} and You Choose ${UserChoice}`
                            UserScore++;
                            UScore.innerText=UserScore;
                        }
                        else if(CompChoice=="Scissor"&&UserChoice=="Paper")
                            {
                                msg.innerText=`Computer Won! Computer Choose ${CompChoice} and You Choose ${UserChoice}`
                                CompScore++;
                                CScore.innerText=CompScore;
                            }
                            else if(CompChoice=="Paper"&&UserChoice=="Scissor")
                                {
                                    msg.innerText=`You Won! Computer Choose ${CompChoice} and You Choose ${UserChoice}`
                                    UserScore++;
                                    UScore.innerText=UserScore;
                                }
                                
           
}


choice.forEach((choice)=>
{
    choice.addEventListener("click" ,()=>
    {
       let UserChoice=choice.getAttribute("id")
       console.log(UserChoice)
       PlayGame(UserChoice);
    })
   
})