window.onload = function () {
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.onclick = function () {
            const questionConfig = [
                { correctAnswer: 'C', analysis: '解析：人脸识别的第一步是人脸检测，先锁定人脸位置，才能进行后续的对齐、提取、匹配操作。' },
                { correctAnswer: 'B', analysis: '解析：深度学习（尤其是CNN卷积神经网络）是提取人脸关键特征的核心技术，能自动学习人脸的独特特征并生成特征向量。' },
                { correctAnswer: 'A', analysis: '解析：陌生小APP可能存在非法采集、泄露人脸信息的风险，其余选项均为保护人脸信息的正确行为。' },
                { correctAnswer: 'B', analysis: '解析：人脸对齐的核心是将不同角度、姿态的人脸统一为标准模板，便于后续特征提取和匹配。' },
                { correctAnswer: 'B', analysis: '解析：人脸信息属于敏感生物识别信息，《刑法》对非法采集、贩卖人脸信息的行为有明确的处罚条款。' },
                { correctAnswer: 'A', analysis: '解析：人脸检测是给人脸画框定位，单独截取人脸区域，是人脸识别的基础步骤。' },
                { correctAnswer: 'B', analysis: '解析：计算机不会记住人脸照片，只会提取并对比独一无二的人脸特征数字代码。' },
                { correctAnswer: 'C', analysis: '解析：手动输入密码是传统验证方式，不属于人脸识别的应用场景。' },
                { correctAnswer: 'B', analysis: '解析：人脸匹配通过计算特征相似度分数判断是否为同一人，分数达标则识别成功。' },
                { correctAnswer: 'C', analysis: '解析：人脸信息是敏感隐私，绝对不能随意向陌生平台提供，避免信息泄露。' }
            ];

            let totalScore = 0;
            questionConfig.forEach((item, index) => {
                const qNum = index + 1;
                const radios = document.getElementsByName('q' + qNum);
                let userAnswer = '';
                let isCorrect = false;

                for (let radio of radios) {
                    if (radio.checked) {
                        userAnswer = radio.value;
                        break;
                    }
                }

                if (userAnswer === item.correctAnswer) {
                    isCorrect = true;
                    totalScore += 10;
                }

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

            document.getElementById('scoreResult').innerText = `总分：${totalScore}分（共100分）`;
        }
    }
};