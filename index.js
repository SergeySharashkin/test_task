class UserService {
    //var здесь не нужны, свойства объвляются по именам
    _username;
    _password;
    //приватное свойство необходимо объявлять перед конструктором
    constructor ({username, password}) {
        this._username = username;
        this._password = password
    }
    static authenticate_user() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://examples.com/api/user/authenticate?username='+
        UserService._username + '&password='+ UserService._password, true )
        //я обычно пишу шаблонной строкой 
        //`https://examples.com/api/user/authenticate?username=${UserService.username}&password=${UserService.password}
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

    get username() {
        return this._username;
    }
    //для смены имени можно добавить сеттер
    set username(newUsername) {
        this._username = newUsername;
      }
    get password() {
        throw "Hi and bye";
    }
    //для смены пароля можно добавить сеттер
    set password(newPassword) {
        this._password = newPassword;
      }
    
}
//метод click заменяю на .on('click', callback)
$('form #login').on('click', function(e) {
   e.preventDefault();
let username = $('#username').val();
let password = $('#password').val();
//необходимо добавить new чтобы создать новый класс.
const response = new UserService({username, password});
//метод authenticate_user() является статическим и для того, чтобы обратиться к нему необходимо
//вызвать его на самом классе
const res = UserService.authenticate_user(response);
if(res == true) {
    document.location.href = '/home';
} else {
    alert(res.error)
}

})
