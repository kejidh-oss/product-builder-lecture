const generateBtn = document.getElementById('generate-btn');
const stocksContainer = document.getElementById('stocks-container');
const themeToggle = document.getElementById('theme-toggle');
const dateDisplay = document.getElementById('date-display');

const kStocks = [
    { name: '삼성전자', reason: '글로벌 반도체 수요 회복 및 HBM 시장 경쟁력 강화로 인한 실적 개선 가시화', return: '+5.2%' },
    { name: 'SK하이닉스', reason: '고대역폭메모리(HBM) 분야 독점적 지위 유지 및 차세대 메모리 선점 효과', return: '+7.8%' },
    { name: '현대차', reason: '전기차 및 하이브리드 라인업 강화로 글로벌 시장 점유율 확대 및 환율 수혜', return: '+4.5%' },
    { name: 'NAVER', reason: '생성형 AI 서비스 하이퍼클로바X의 본격적인 매출 기여 및 커머스 부문 성장', return: '+6.1%' },
    { name: '카카오', reason: '비즈보드 광고 매출 회복 및 AI 기반 신규 서비스 런칭을 통한 수익성 강화', return: '+5.5%' },
    { name: 'LG에너지솔루션', reason: '미국 IRA 보조금 혜택 및 주요 완성차 업체와의 합작법인 가동률 상승', return: '+8.3%' },
    { name: '셀트리온', reason: '바이오시밀러 합병 시너지 및 미국 시장 내 직판 체계 안정화로 수익성 향상', return: '+6.7%' },
    { name: 'POSCO홀딩스', reason: '리튬 가공 공장 가동 본격화로 인한 이차전지 소재 밸류체인 실적 가시화', return: '+5.9%' },
    { name: '기아', reason: '고수익 RV 모델 판매 호조 지속 및 글로벌 재고 관리 효율화를 통한 영업이익률 달성', return: '+4.8%' },
    { name: '한화에어로스페이스', reason: 'K9 자주포 및 천무 등 K-방산 수출 수주 잔고의 실적 반영 본격화', return: '+9.2%' },
    { name: 'LG화학', reason: '이차전지 소재 출하량 증가 및 첨단소재 부문의 견고한 영업이익 달성', return: '+5.1%' },
    { name: '삼성바이오로직스', reason: '글로벌 제약사와의 위탁생산(CMO) 계약 확대 및 5공장 가동 기대감', return: '+4.2%' },
    { name: 'KB금융', reason: '주주환원 정책 강화 및 금리 환경에 따른 견조한 순이자마진(NIM) 유지', return: '+3.8%' },
    { name: '신한지주', reason: '다각화된 포트폴리오를 통한 안정적 이익 창출 및 분기 배당 실시', return: '+3.5%' },
    { name: '에코프로비엠', reason: '전기차 시장 성장에 따른 양극재 수요 지속 및 생산 Capa 확대 계획', return: '+10.2%' }
];

function setDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    dateDisplay.textContent = today.toLocaleDateString('ko-KR', options);
}

function getRandomStocks(count) {
    const shuffled = [...kStocks].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayStocks(stocks) {
    stocksContainer.innerHTML = '';
    stocks.forEach((stock, index) => {
        const card = document.createElement('div');
        card.classList.add('stock-card');
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="stock-info">
                <div class="stock-name">${stock.name}</div>
                <div class="stock-reason">${stock.reason}</div>
            </div>
            <div class="stock-return">분석 목표 ${stock.return}</div>
        `;
        stocksContainer.appendChild(card);
    });
}

// Theme Toggle logic
function updateThemeIcon(isDark) {
    themeToggle.textContent = isDark ? '☀️' : '🌙';
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    // Default is light, only add dark-mode if saved as dark
    const isDark = savedTheme === 'dark';
    if (isDark) {
        document.body.classList.add('dark-mode');
    }
    updateThemeIcon(isDark);
}

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
});

generateBtn.addEventListener('click', () => {
    stocksContainer.scrollIntoView({ behavior: 'smooth' });
    displayStocks(getRandomStocks(3));
});

// Initialize
initTheme();
setDate();
displayStocks(getRandomStocks(3));