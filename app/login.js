console.log('login.js is loaded complete');

function tryLogin() {
    const idBox = document.getElementById('idBox');
    const pwBox = document.getElementById('pwBox');
    if(!idBox.value) {
        return window.alert('아이디를 입력해주세요.');
    }
    if(!pwBox.value) {
        return window.alert('비밀번호를 입력해주세요.');
    }
    const json = {
        id: idBox.value,
        pw: pwBox.value
    };
    const bodyContents = JSON.stringify(json);

    fetch('http://localhost:3001/login', {
        method: 'POST',
        body: bodyContents
    });
}

module.exports = {
    tryLogin,
};
