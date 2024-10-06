const click = document.querySelector('.click');
const giftBox=document.querySelector('.gift-box');
const Shadow=document.querySelector('.shadow');
const giftContainer=document.querySelector('.gift-container'); 
const Text=document.querySelector('.text'); 



click.addEventListener('click',()=>
{
    if(click.className==="click")
    {
        click.classList.add('active')
        giftBox.classList.add('active')
        Shadow.classList.add('active')
        giftContainer.classList.add('active')
        Text.classList.add('active')
        Text.classList.remove('active2')
    } 
    else
    {
        click.classList.remove('active')
        giftBox.classList.remove('active')
        Shadow.classList.remove('active')
        giftContainer.classList.remove('active')
        Text.classList.remove('active')
        Text.classList.add('active2')
    }
})

function collectCoin() {
    const coin = document.querySelector('.coin');

    const coinSound = new Audio('sounds/mario coin sound .mp3');
    coinSound.volume = 0.3;
    coinSound.play();

    coin.style.opacity = '0';
    coin.style.pointerEvents = 'none'; 

    setTimeout(() => {
        coin.style.opacity = '1'; 
        coin.style.pointerEvents = 'auto';
    }, 1500);
}

function collectCoinTwo() {
    const coin = document.querySelector('.coin.two');

    const coinSound = new Audio('sounds/mario coin sound .mp3');
    coinSound.volume = 0.3;
    coinSound.play();

    coin.style.opacity = '0';
    coin.style.pointerEvents = 'none'; 

    setTimeout(() => {
        coin.style.opacity = '1'; 
        coin.style.pointerEvents = 'auto';
    }, 1500);
}

function collectCoinThree() {
    const coin = document.querySelector('.coin.three');

    const coinSound = new Audio('sounds/mario coin sound .mp3');
    coinSound.volume = 0.3;
    coinSound.play();

    coin.style.opacity = '0';
    coin.style.pointerEvents = 'none'; 

    setTimeout(() => {
        coin.style.opacity = '1'; 
        coin.style.pointerEvents = 'auto';
    }, 1500);
}

function collectCoinFour() {
    const coin = document.querySelector('.coin.four');

    const coinSound = new Audio('sounds/mario coin sound .mp3');
    coinSound.volume = 0.3;
    coinSound.play();

    coin.style.opacity = '0';
    coin.style.pointerEvents = 'none'; 

    setTimeout(() => {
        coin.style.opacity = '1'; 
        coin.style.pointerEvents = 'auto';
    }, 1500);
}

function collectRedMushroom() {
    const mushroom = document.querySelector('.Mred');

    const mushroomsound = new Audio('sounds/red mushroom sound.mp3');
    mushroomsound.volume = 0.1;
    mushroomsound.play();

    mushroom.style.opacity = '0';
    mushroom.style.pointerEvents = 'none';

    setTimeout(() => {
        mushroom.style.opacity = '1';
        mushroom.style.pointerEvents = 'auto';
    }, 1500);
}

function collectGreenMushroom() {
    const mushroom = document.querySelector('.Mgreen');

    const mushroomsound = new Audio('sounds/green mushroom sound .mp3');
    mushroomsound.volume = 0.2;
    mushroomsound.play();

    mushroom.style.opacity = '0';
    mushroom.style.pointerEvents = 'none';

    setTimeout(() => {
        mushroom.style.opacity = '1';
        mushroom.style.pointerEvents = 'auto';
    }, 1500);
}

function collectFlower() {
    const flower = document.querySelector('.flower');

    const flowersound = new Audio('sounds/mario red flower sound.mp3');
    flowersound.volume = 0.5;
    flowersound.play();

    flower.style.opacity = '0';
    flower.style.pointerEvents = 'none';

    setTimeout(() => {
        flower.style.opacity = '1';
        flower.style.pointerEvents = 'auto';
    }, 700);
}


function bloomFlower() {
    const flower = document.querySelector('.pipeflower');
    const pipe = document.querySelector('.pipe');
    const bloomSound = new Audio('sounds/pipe flower sound.mp3');
    
    pipe.style.pointerEvents = 'none'; 
    flower.classList.remove('bloom');   

    void flower.offsetWidth;
    flower.classList.add('bloom');
    bloomSound.volume = 0.1;
    bloomSound.play();
  }

  document.querySelector('.pipeflower').addEventListener('animationend', function() {
    const pipe = document.querySelector('.pipe');
    pipe.style.pointerEvents = 'auto'; 
  });

  function mariojump() {
    const agent1 = document.querySelector('.mario');
    const mariosound = new Audio ('sounds/mario sound.mp3');

    mariosound.addEventListener ('canplaythrough',() => {
        mariosound.volume = 0.8;
        mariosound.play();
        });

    agent1.style.opacity = '0';
    agent1.style.pointerEvents = 'none';
    agent1.classList.add('jump');

    setTimeout(() => {
        agent1.classList.remove('jump');
        agent1.style.opacity= '1';
        agent1.style.pointerEvents = 'auto';
        
    }, 1500);
  }

  function luigijump() {
    const luigi = document.querySelector('.luigi');
    const luigisound = new Audio ('sounds/luigi sound .mp3');

    luigisound.addEventListener ('canplaythrough',() => {
        luigisound.volume = 0.2;
        luigisound.play();
        });

        luigi.style.opacity = '0';
        luigi.style.pointerEvents = 'none';
        luigi.classList.add('jump');

    setTimeout(() => {
        luigi.classList.remove('jump');
        luigi.style.opacity= '1';
        luigi.style.pointerEvents = 'auto';
        
    }, 1500);
  }

function OpenGift() {
    const openSound = new Audio('sounds/Gift Opening sound.mp3');
    const giftContainer = document.querySelector('.gift-container');

    if (giftContainer.classList.contains('active')) {
        openSound.pause();
    } else {
        giftContainer.classList.add('active');
        openSound.volume = 0.5;
        openSound.play();

    }
}

function handleMysteryBoxClick() {
    const star = document.querySelector('.star');
    const starsound = new Audio('sounds/mario star sound.mp3');
    const starShadow = document.querySelector('.starShadow');
    const mystery = document.getElementById('mysteryBox');
    starShadow.style.opacity = '1';

    star.classList.add('jumpBounce');
    starsound.volume = 0.5;
    mystery.style.pointerEvents = 'none';
    starsound.play()

    star.addEventListener('animationend', () => {
        star.classList.add('Starbounce');
        starShadow.classList.add('BounceOut');
    }, { once: true }); 
}
document.getElementById('mysteryBox').addEventListener('click', handleMysteryBoxClick);


function ShowCard() {
    const star = document.querySelector('.star');
    const card = document.querySelector('.card');
    const shadow = document.querySelector('.starShadow');

    const cardsound = new Audio('sounds/Card appear sound.mp3');
    cardsound.volume = 0.5;
    cardsound.play();
 
    card.style.opacity = 1;
    card.classList.add('ShowCard');

    star.style.pointerEvents = 'none';
    star.style.opacity = 0;
    
    shadow.style.transitionDelay = '0s';
    shadow.style.opacity = 0;
}
document.querySelector('.star').addEventListener('click', ShowCard);




musicPlaying = false;
const music = new Audio('sounds/Background Music.mp3');
music.volume = 0.5;
function BackgroundMusic() {
    const toggle = document.querySelector('button');

    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
    }
    else {
        music.currentTime = 0;
        music.play();
        musicPlaying = true;
    }
}
document.querySelector('button').addEventListener('click',BackgroundMusic);
