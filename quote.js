let btn =  document.getElementById('btn');
let output = document.getElementById('output');
let quotes =
[
    "The best way to predict your future is to create it.",
    "Opportunities are like sunrises. If you wait too long, you miss them.",
    "I'm grateful for another beautiful day.",
    "Rise and shine! Today is the day to make things happen.", 
    "Coffee in hand, ready to conquer the day (or at least get dressed).",
     "May your day be filled with the beauty of nature",
    "Let's make it a fantastic day!" ,
    "Yesterday is history. Tomorrow is a mystery. Today is a gift. That's why it's called the present.", 
    "Chase your dreams and make them a reality today.", 
    "Focus on the good. The bad will fade away.", 
    "Spread a little kindness wherever you go. It's the simplest way to make the world a better place.",
    "The only person you are destined to become is the person you decide to be.", 
    "I'm not a morning person, but coffee helps.", 
    "It's not about how many times you fall. It's about how many times you get back up." ,
    "A good day starts with a smile. Share yours with the world.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",

];
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})
