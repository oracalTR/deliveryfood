const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const logInForm = document.querySelector('#logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');
const buttonLogOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');

if(localStorage.getItem('user')) {
    let user = JSON.parse(localStorage.getItem('user'));
    login(user);
}

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex';
})

modalAuth.addEventListener('click', (event) => {
    if(event.target.classList.contains('modal-auth') || event.target.classList.contains('close-auth')) {
        modalAuth.style.display = 'none';
    }

})

logInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let users = {
        login: inputLogin.value,
        password: inputPassword.value,
    }

    // Проверка на логин и пароль
    if(!users.login || !users.login.trim() || !users.password) {
        if(!users.login || !users.login.trim()) {
            let loginErr = document.createElement('div');
            loginErr.classList.add('login-err')
            loginErr.style.color = 'red';
            loginErr.textContent = 'Логин не может быть пустым. Введите логин.';
            if(!document.querySelector('.login-err')){
                inputLogin.insertAdjacentElement('afterend', loginErr)
            }
            if(document.querySelector('.password-err')){
                document.querySelector('.password-err').remove()
            }
        } else if(!users.password) {
            let passwordErr = document.createElement('div');
            passwordErr.classList.add('password-err')
            passwordErr.style.color = 'red';
            passwordErr.textContent = 'Пароль не может быть пустым. Введите пароль.';
            if(document.querySelector('.login-err')){
                document.querySelector('.login-err').remove()
            }
            if(!document.querySelector('.password-err')){
                inputPassword.insertAdjacentElement('afterend', passwordErr)
            }
        }
        return
    } else {
    
        //Удаление ошибок при удачной проверке
        if(document.querySelector('.login-err')){
            document.querySelector('.login-err').remove()
        } else if(document.querySelector('.password-err')) {
            document.querySelector('.password-err').remove()
        }
        
        //Закрыти окна авторизации
        login(users);
    }
})

buttonLogOut.addEventListener('click', () => {
   logout();
})

function login(users) {
    modalAuth.style.display = 'none';
    buttonLogOut.style.display = 'flex';
    buttonAuth.style.display = 'none';
    userName.style.display = 'flex';
    if(localStorage.getItem('user')) {
        let user = JSON.parse(localStorage.getItem('user'));
        userName.textContent = user.login;
    } else {
        localStorage.setItem('user', JSON.stringify(users));
        let user = JSON.parse(localStorage.getItem('user'));
        userName.textContent = user.login;
    }
} 

function logout() {
    buttonLogOut.style.display = 'none';
    buttonAuth.style.display = 'flex';
    userName.style.display = 'none';
    userName.textContent = '';
    localStorage.removeItem('user');
}