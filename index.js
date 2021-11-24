class UserService {
    //var здесь не нужны, свойства объвляются по именам
    username;
    //публичное свойство не обязательно объявлять перед конструктором
    #password;
    //приватное свойство необходимо объявлять перед конструктором
    //Статические методы объявляются перед конструктором
    static authenticate_user() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://examples.com/api/user/authenticate?username='+
        this.username+'&password='+this.password, true )
        //я привык писать шаблонной строкой 
        //`https://examples.com/api/user/authenticate?username=${this.username}&password=${this.password}
        //также я бы лучше сделал через
        //const URL = 'https://examples.com/api/user/authenticate?' 
        //fetch(`${URL}username=${this.username}&password=${this.password`).then(response => {
    //if(response.ok){
        //return response.json().then(...).catch(...)
    
        // но можно и так
        xhr.responseType ='json';
        let result = false;
        xhr.onload = function() {
            if (xhr.status !== '200') {
                 result = xhr.response;
            } else {
                result = true;
            }
        };
        return result;
    }
    constructor ({username, password}) {
        this.username = username;
        this.#password = password;
    }
    get username() {
        return this.username;
    }
    //для смены имени можно добавить сеттер
    set username(newUsername) {
        this.username = newUsername;
      }
    get password() {
        throw "Hi and bye";
    }
    
}
//метод клик, на сколько я понял, является устаревшим в jQuery
$('form #login').click(function() {
let username = $('#username');
let password = $('password');
let res= UserService(username, password).authenticate_user();
if(response==true) {
    document.location.href = '/home';
} else {
    alert(response.error)
}
})