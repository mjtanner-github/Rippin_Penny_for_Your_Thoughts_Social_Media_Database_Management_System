const names = [
  'Antonio',
  'Thomas',
  'Carolyn',
  'Karolina',
  'Andrea',
  'Ishaitu',
  'Day',
  'Anne',
  'Alan',
  'Lacy',
  'Jesse',
  'Nguyễn',
  'Vickie',
  'Julie',
  'Conni',
  'Andrea',
  'Toni',
  'Hải',
  'Kadiatu',
  'Beals',
  'Sanchez',
  'Anderson',
  'Jackson',
  'Nesimko',
  'Bense',
  'Bangura',
  'Danh',
  'Williams',
  'Josef',
  'Nguyen',
  'Parraine-Russell',
  'Tân',
  'Matthews',
  'Baca',
  'Simmons',
  'Rulestead',
  'Orleck',
  'Lý',
];

const thought = [
  'This is the face of bravery. A Ukrainian teen is now a war hero after she risked her life to drive injured civilians through a battlefield to safety. Watch',
  'We started something new here. We started something thats helping people be successful with their families. This Kawasaki factory in Lincoln, Nebraska, is attracting new workers by offering them a 9-2 shift. Watch',
  '⭐Chosen As The Best Financial Planning Technology Company⭐',
  'A hit-and-run driver has pleaded guilty to leaving the scene of a suburban New York crash that killed rapper Nicki Minajs father, prosecutors say.',
  'A hit-and-run driver has pleaded guilty to leaving the scene of a suburban New York crash that killed rapper Nicki Minajs father, prosecutors say.',
  'Abortion rights advocates in Michigan are raising alarms about a restrictive abortion ban put in place in 1931 before the US Supreme Courts 1973 landmark decision in Roe v. Wade.',
  'Allegations of sexual misconduct by eight women against Nebraska Republican Charles Herbster, and former President Donald Trump’s defense of him, have brought national attention to the candidate’s quest for the state’s governorship in Tuesday’s primary.',
  'cnn.comAbortion rights advocates are raising alarms about a nea',
  'cnn.comShe sat next to the annoying guy on the plane. Then they fell in loveKrystina Burton and Gabriel Solberg who met on a cross country flight from New York to California. The airplane became the unlikely setting for a first date as a whirlwind romance took flight.',
  'Driver who fatally struck rapper Nicki Minajs father will serve no more than one year, judge says',
  'edition.cnn.comRise in gun violence during pandemic adds strain to overburdened hospitalsGun violence spiked in the United States in the first year of the pandemic, adding strain to an already overwhelmed health care system.',
  'Gun violence spiked in the United States in the first year of the pandemic, adding strain to an already overwhelmed health care system.',
  'Happy birthday to our guy',
  'historydaily.org49 Unsettling Photographs (Mature Audiences Only)',
  'J.R. Majewski shared pro-QAnon material online. Now, hes running for Congress. https://cnn.it/3kTip1y',
  'New York Times drops fetus as Wordle solution',
  'OMG, too graphic and disturbing for me, only watched with one eye',
  'She sat next to the annoying guy on the plane. Then they fell in love.',
  'The New York Times has removed the word fetus from its Wordle answers in a bid to keep the popular online game distinct from the news, the publisher has said.',
  'The New York Times has removed the word fetus from its Wordle answers in a bid to keep the popular online game distinct from the news, the publisher has said.',
  'This Princeton Alum Is Changing The Way People Retire',
  'This Princeton grad’s startup raised $110 million to help you plan for a comfortable retirement. Take this quiz and get professional financial advice. 👉https://bit.ly/3qcMbRI?twclid=23tbih2utu3gcc2p3il08wsjga',
  'This week, the Senate will vote on legislation to codify Roe v. Wade. I will vote yes.',
  'Ukrainian teen drives injured men through battlefield despite leg wounds - CNN VideoCNNs Isa Soares shares the story of 15-year-old Anastasia, a Ukrainian teen who drove through a battlefield in order to save the lives of two civilian men in critical condition.',
  'Voted Best Wealth Management Solution🏅',
  'Watch what this Kawasaki factory in Nebraska did to attract workers - CNN VideoCNNs Evan McMorris-Santoro follows single, working mom Jessica Kelly as she begins her new job at the Kawasaki factory in Lincoln, Nebraska.',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomName = () =>
  getRandomArrItem(names);

// Gets a random thought
const getRandomThought = () =>
  getRandomArrItem(thought);

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThought };
