const heroSpan = document.querySelector("#hero");
const villainSpan = document.querySelector("#villain");
const resultSpan = document.querySelector("#result");
const launcherBtn = document.querySelector("button");

const heroes = ['Harry Potter', 'Luke Skywalker', 'Lara Croft', 'Superman', 'Garfield'];
const villains = ['Lord Voldemort', 'Darth Vader', 'Sauron', 'Joker', 'Cruella'];
const weapon = ['plastic fork', 'flip-flop', 'magic wand', 'wooden sword', 'rotten egg', 'banana peel'];

launcherBtn.addEventListener('click', ()=>{

    const randomHeroIndex = Math.floor(Math.random() * heroes.length);
    const randomHero = heroes[randomHeroIndex];
    const randomHeroWeaponIndex = Math.floor(Math.random() * weapon.length);
    const randomHeroWeapon = weapon[randomHeroWeaponIndex];

    const randomVillainIndex = Math.floor(Math.random() *villains.length)
    const randomVillain = villains[randomVillainIndex];
    const randomVillainWeaponIndex = Math.floor(Math.random() * weapon.length);
    const randomVillainWeapon = weapon[randomVillainWeaponIndex];

    heroSpan.innerHTML = `Hero ${randomHero} is armed with a/an ${randomHeroWeapon}. ´`;
    villainSpan.innerHTML = `Villain ${randomVillain} is armed with a/an ${randomVillainWeapon}. ´`;

    const heroStrike = randomHero.length + randomHeroWeapon.length
    const villainStrike = randomVillain.length + randomVillainWeapon.length
    
    let resultMessage = '';

    if(heroStrike === villainStrike) {
        resultMessage = `It's a draw!´`;
    } else if (heroStrike > villainStrike) {
        resultMessage = `${randomHero} defeats ${randomVillain} and saves the day!`;
    } else {
        resultMessage = `${randomVillain} defeats ${randomHero}. The dark side wins!`;
    }

    resultSpan.innerHTML =resultMessage;

});