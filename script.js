console.log (document.getElementById (`message`).innerHTML);

const user_name = prompt (`What\'s your name?`);

console.log(user_name);

const user_last_name = prompt (`What\'s your last name?`)

console.log(user_last_name);

const fav_colour = prompt (`What\'s your favourite colour?`)

console.log(fav_colour);

const lucky_numb = prompt (`What\'s lucky number?`)

console.log(lucky_numb);

const result = user_name + user_last_name + fav_colour + lucky_numb

console.log(result);

const message_element = document.getElementById (`message`)

message_element.innerHTML = `La tua Password sarà: ${result}`;

console.log(message_element);