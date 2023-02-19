
HomeScore = document.getElementById('HomeScoreElement');
HomeScoreCount = 0;


function HomeScoreAddOne(){
        HomeScoreCount +=1;
        HomeScore.innerText = HomeScoreCount;
        ScoreLeaderCheck();
}

function HomeScoreAddTwo(){
    HomeScoreCount +=2;
    HomeScore.innerText = HomeScoreCount;
    ScoreLeaderCheck();
}

function HomeScoreAddThree(){
    HomeScoreCount +=3;
    HomeScore.innerText = HomeScoreCount;
    ScoreLeaderCheck();
}


GuestScore = document.getElementById('GuestScoreElement');
GuestScoreCounter = 0;

function GuestScoreAddOne(){
    GuestScoreCounter +=1;
    GuestScore.innerText = GuestScoreCounter;
    ScoreLeaderCheck();
}

function GuestScoreAddTwo(){
    GuestScoreCounter +=2;
    GuestScore.innerText = GuestScoreCounter;
    ScoreLeaderCheck();
}

function GuestScoreAddThree(){
    GuestScoreCounter +=3;
    GuestScore.innerText = GuestScoreCounter;
    ScoreLeaderCheck();
}

function NewGame(){
    GuestScoreCounter = 0;
    GuestScore.innerText = 0;
    HomeScoreCount = 0;
    HomeScore.innerText = 0;

    alert("Game has been Restarted!");
}

function ScoreLeaderCheck(){
    if (HomeScoreCount>GuestScoreCounter){
        document.getElementById('HomeScoreElement').style.color = "purple"; 
        document.getElementById('GuestScoreElement').style.color = "lightcoral";
    }else if (HomeScoreCount<GuestScoreCounter){
        document.getElementById('GuestScoreElement').style.color = "purple"; 
        document.getElementById('HomeScoreElement').style.color = "lightcoral";
    }
}