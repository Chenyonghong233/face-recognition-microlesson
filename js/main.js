// 页面加载完成后执行
window.onload = function () {
    // 1. 登录功能（默认账号：admin 密码：123456，可自行修改）
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.onclick = function () {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            // 验证账号密码
            if (username === 'admin' && password === '123456') {
                alert('登录成功！');
                // 跳转到学习板块
                window.location.href = './pages/learn.html';
            } else {
                alert('账号或密码错误！请输入测试账号：admin 密码：123456');
            }
        }
    }

    // 2. 答题判分功能（贴合人脸识别微课知识点，可自行增删题目）
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.onclick = function () {
            // 正确答案：1.C  2.B  3.A
            const correctAnswers = ['C', 'B', 'A'];
            let score = 0;
            // 获取用户答案
            for (let i = 0; i < correctAnswers.length; i++) {
                const radios = document.getElementsByName('q' + (i + 1));
                for (let radio of radios) {
                    if (radio.checked && radio.value === correctAnswers[i]) {
                        score += 10; // 每题10分，共30分
                        break;
                    }
                }
            }
            // 显示得分
            document.getElementById('scoreResult').innerText = '你的得分：' + score + '分！';
        }
    }
};