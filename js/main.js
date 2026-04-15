// 页面加载完成后执行
window.onload = function () {
    // 答题判分+解析功能
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.onclick = function () {
            // 1. 配置正确答案和解析
            const questionConfig = [
                {
                    correctAnswer: 'C',
                    analysis: '解析：人脸识别的第一步是人脸检测，先锁定人脸位置，才能进行后续的对齐、提取、匹配操作。'
                },
                {
                    correctAnswer: 'B',
                    analysis: '解析：深度学习（尤其是CNN卷积神经网络）是提取人脸关键特征的核心技术，能自动学习人脸的独特特征并生成特征向量。'
                },
                {
                    correctAnswer: 'A',
                    analysis: '解析：陌生小APP可能存在非法采集、泄露人脸信息的风险，其余选项均为保护人脸信息的正确行为。'
                },
                {
                    correctAnswer: 'B',
                    analysis: '解析：人脸对齐的核心是将不同角度、姿态的人脸统一为标准模板，便于后续特征提取和匹配。'
                },
                {
                    correctAnswer: 'B',
                    analysis: '解析：人脸信息属于敏感生物识别信息，《刑法》对非法采集、贩卖人脸信息的行为有明确的处罚条款。'
                }
            ];

            // 2. 计算总分+每题得分
            let totalScore = 0;
            questionConfig.forEach((item, index) => {
                const qNum = index + 1;
                const radios = document.getElementsByName('q' + qNum);
                let userAnswer = '';
                let isCorrect = false;

                // 获取用户答案
                for (let radio of radios) {
                    if (radio.checked) {
                        userAnswer = radio.value;
                        break;
                    }
                }

                // 判断对错+计算得分
                if (userAnswer === item.correctAnswer) {
                    isCorrect = true;
                    totalScore += 10;
                }

                // 3. 显示每题解析和得分
                const analysisEl = document.getElementById('analysis' + qNum);
                analysisEl.innerHTML = `
                    <div class="analysis-content ${isCorrect ? 'correct' : 'wrong'}">
                        <span>你的答案：${userAnswer || '未作答'}</span>
                        <span>正确答案：${item.correctAnswer}</span>
                        <span>本题得分：${isCorrect ? 10 : 0}分</span>
                        <p>${item.analysis}</p>
                    </div>
                `;
            });

            // 4. 显示总分
            document.getElementById('scoreResult').innerText = `总分：${totalScore}分（共50分）`;
        }
    }
};