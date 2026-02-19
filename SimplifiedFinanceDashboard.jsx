// Using React from global scope (loaded via CDN in index.html)
const { useState, useEffect } = React;

// ═══════════════════════════════════════════════════════════════════════════
// STYLES — Premium Fintech Aesthetic
// ═══════════════════════════════════════════════════════════════════════════

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');
  
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  :root {
    --bg-primary: #0a0e14;
    --bg-secondary: #13171f;
    --bg-elevated: #1a1f2b;
    --border: #2a3142;
    --text-primary: #e8edf4;
    --text-secondary: #8892a6;
    --text-tertiary: #4a5568;
    --success: #10b981;
    --danger: #ef4444;
    --warning: #f59e0b;
    --accent: #10b981;
    --accent-glow: rgba(16, 185, 129, 0.3);
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
    color: var(--text-primary);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }
  
  /* PIN LOCK SCREEN */
  .pin-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
  }
  
  .pin-container {
    width: 100%;
    max-width: 400px;
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 3rem 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }
  
  .pin-title {
    font-family: 'Syne', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    text-align: center;
    margin-bottom: 0.5rem;
    letter-spacing: -1px;
  }
  
  .pin-subtitle {
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
  
  .pin-input {
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    text-align: center;
    background: var(--bg-secondary);
    border: 2px solid var(--border);
    border-radius: 16px;
    color: var(--text-primary);
    font-family: inherit;
    margin-bottom: 1rem;
    transition: all 0.2s;
  }
  
  .pin-input:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
  }
  
  .pin-button {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, var(--accent) 0%, #14b8a6 100%);
    border: none;
    border-radius: 16px;
    color: var(--bg-primary);
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
  }
  
  .pin-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px var(--accent-glow);
  }
  
  .pin-error {
    color: var(--danger);
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
  }
  
  /* MAIN CONTAINER */
  .app-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  
  /* HEADER */
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .app-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.75rem;
    font-weight: 900;
    letter-spacing: -1px;
  }
  
  .header-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  .streak-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    padding: 0.5rem 1rem;
    border-radius: 24px;
    font-size: 0.875rem;
    font-weight: 600;
  }
  
  .streak-count {
    color: var(--accent);
    font-weight: 800;
  }
  
  .logout-button {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    color: var(--text-secondary);
    padding: 0.5rem 1rem;
    border-radius: 24px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
  }
  
  .logout-button:hover {
    border-color: var(--danger);
    color: var(--danger);
  }
  
  /* HERO SCORE */
  .hero-score {
    background: var(--bg-elevated);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 3rem 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
  }
  
  .hero-score::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
  
  .score-content {
    display: flex;
    align-items: center;
    gap: 3rem;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .score-ring-container {
    position: relative;
    width: 220px;
    height: 220px;
    flex-shrink: 0;
  }
  
  .score-ring {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }
  
  .score-ring-bg {
    fill: none;
    stroke: var(--bg-secondary);
    stroke-width: 16;
  }
  
  .score-ring-fill {
    fill: none;
    stroke-width: 16;
    stroke-linecap: round;
    transition: stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.5s;
    filter: drop-shadow(0 0 8px currentColor);
  }
  
  .score-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .score-number {
    font-family: 'Syne', sans-serif;
    font-size: 4.5rem;
    font-weight: 900;
    line-height: 1;
    letter-spacing: -3px;
  }
  
  .score-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text-secondary);
    margin-top: 0.5rem;
    font-weight: 700;
  }
  
  .score-details {
    flex: 1;
    min-width: 280px;
  }
  
  .score-tier {
    font-family: 'Syne', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
    letter-spacing: -1px;
  }
  
  .score-guidance {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }
  
  .score-change {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    background: var(--bg-secondary);
    border-radius: 24px;
  }
  
  /* METRICS GRID */
  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .metric-card {
    background: var(--bg-elevated);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 1.5rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    transition: all 0.2s;
  }
  
  .metric-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  .metric-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
  
  .metric-icon {
    font-size: 1.5rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
  
  .metric-title {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-secondary);
    font-weight: 700;
  }
  
  .metric-value {
    font-family: 'Syne', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -1px;
    margin-bottom: 0.25rem;
  }
  
  .metric-subtitle {
    font-size: 0.875rem;
    color: var(--text-secondary);
  }
  
  .metric-change {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    font-weight: 600;
    margin-top: 0.75rem;
    padding: 0.25rem 0.75rem;
    background: var(--bg-secondary);
    border-radius: 12px;
  }
  
  /* GROWTH CARDS */
  .growth-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .growth-card {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 1.5rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
  
  .growth-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
  
  .growth-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.25rem;
    font-weight: 800;
    letter-spacing: -0.5px;
  }
  
  .growth-amount {
    font-family: 'Syne', sans-serif;
    font-size: 2.5rem;
    font-weight: 900;
    letter-spacing: -1px;
    margin-bottom: 0.5rem;
  }
  
  .growth-period {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
  }
  
  .growth-percent {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    background: var(--bg-secondary);
    border-radius: 24px;
  }
  
  /* TREND CHART */
  .trend-chart {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
  
  .chart-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.25rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    letter-spacing: -0.5px;
  }
  
  .chart-svg {
    width: 100%;
    height: 200px;
  }
  
  .chart-grid-line {
    stroke: var(--border);
    stroke-width: 1;
  }
  
  .chart-line {
    fill: none;
    stroke: var(--accent);
    stroke-width: 3;
    stroke-linecap: round;
    filter: drop-shadow(0 2px 4px var(--accent-glow));
  }
  
  .chart-area {
    fill: var(--accent);
    opacity: 0.15;
  }
  
  .chart-dot {
    fill: var(--accent);
    filter: drop-shadow(0 2px 4px var(--accent-glow));
  }
  
  .chart-label {
    font-size: 11px;
    fill: var(--text-secondary);
  }
  
  /* DATA ENTRY */
  .data-entry {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
  
  .section-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
  }
  
  .section-icon {
    font-size: 1.5rem;
  }
  
  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.25rem;
    font-weight: 800;
    letter-spacing: -0.5px;
  }
  
  .section-description {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    margin-left: 2.25rem;
  }
  
  .account-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .account-item {
    display: flex;
    gap: 1rem;
    align-items: flex-end;
    padding: 1rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 16px;
    transition: all 0.2s;
  }
  
  .account-item:hover {
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  .account-field {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .account-field.name {
    flex: 1.5;
  }
  
  .field-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .field-input {
    background: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 0.75rem 1rem;
    color: var(--text-primary);
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.2s;
  }
  
  .field-input:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }
  
  .growth-indicator {
    font-size: 0.875rem;
    color: var(--text-secondary);
    padding: 0.5rem 0.75rem;
    background: var(--bg-primary);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  
  .remove-button {
    background: none;
    border: none;
    color: var(--text-tertiary);
    cursor: pointer;
    padding: 0.75rem;
    border-radius: 12px;
    transition: all 0.2s;
    font-size: 1.25rem;
    flex-shrink: 0;
  }
  
  .remove-button:hover {
    background: var(--bg-primary);
    color: var(--danger);
  }
  
  .add-account-button {
    background: none;
    border: 1px dashed var(--border);
    color: var(--text-secondary);
    padding: 1rem;
    border-radius: 16px;
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .add-account-button:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(16, 185, 129, 0.05);
  }
  
  .total-display {
    background: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1.5rem;
    margin-top: 1rem;
  }
  
  .total-label {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  
  .total-amount {
    font-family: 'Syne', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -1px;
    color: var(--accent);
  }
  
  .expenses-field {
    margin-top: 1.5rem;
  }
  
  .save-button {
    width: 100%;
    padding: 1.25rem;
    background: linear-gradient(135deg, var(--accent) 0%, #14b8a6 100%);
    border: none;
    border-radius: 16px;
    color: var(--bg-primary);
    font-family: inherit;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    margin-top: 2rem;
  }
  
  .save-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px var(--accent-glow);
  }
  
  .toast {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-elevated);
    border: 1px solid var(--accent);
    color: var(--accent);
    padding: 1rem 1.5rem;
    border-radius: 16px;
    font-size: 0.875rem;
    font-weight: 600;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    z-index: 1000;
    animation: slideUp 0.3s ease;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
  
  /* RESPONSIVE */
  @media (max-width: 768px) {
    .score-content {
      flex-direction: column;
      text-align: center;
    }
    
    .score-ring-container {
      width: 180px;
      height: 180px;
    }
    
    .score-number {
      font-size: 3.5rem;
    }
    
    .metrics-grid,
    .growth-grid {
      grid-template-columns: 1fr;
    }
    
    .account-item {
      flex-direction: column;
      align-items: stretch;
    }
  }
`;

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

const fmt = (n) => {
  if (isNaN(n) || n === "") return "$0";
  return "$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const hashPIN = async (pin) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(pin);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

const calculateScore = (data, history) => {
  const cash = (data.cashAccounts || []).reduce((s, a) => s + (parseFloat(a.balance) || 0), 0);
  const investments = (data.investmentAccounts || []).reduce((s, a) => s + (parseFloat(a.balance) || 0), 0);
  const debt = (data.debtAccounts || []).reduce((s, a) => s + (parseFloat(a.balance) || 0), 0);
  const income = (data.incomeStreams || []).reduce((s, a) => s + (parseFloat(a.amount) || 0), 0);
  const expenses = parseFloat(data.monthlyExpenses) || 1;
  
  // 1. Emergency Buffer (40%)
  const liquidMonths = cash / expenses;
  const emergencyScore = Math.min((liquidMonths / 6) * 100, 100);
  
  // 2. Debt Management (30%)
  const annualIncome = income * 12;
  const debtRatio = annualIncome > 0 ? debt / annualIncome : 0;
  const debtScore = Math.max(100 - (debtRatio * 100), 0);
  
  // 3. Financial Growth (20%)
  const investmentBuffer = investments / (expenses * 12);
  const growthScore = Math.min((investmentBuffer / 2) * 100, 100);
  
  // 4. Cashflow Health (10%)
  const savingsRate = income > 0 ? ((income - expenses) / income) : 0;
  const cashflowScore = Math.max(savingsRate * 100, 0);
  
  const totalScore = Math.round(
    (emergencyScore * 0.4) +
    (debtScore * 0.3) +
    (growthScore * 0.2) +
    (cashflowScore * 0.1)
  );
  
  const tier = 
    totalScore >= 90 ? { label: "Thriving", color: "#10b981", guidance: "Exceptional! Keep maintaining your strong financial system." } :
    totalScore >= 75 ? { label: "Strong", color: "#14b8a6", guidance: "You're doing great! Focus on maintaining and optimizing." } :
    totalScore >= 60 ? { label: "Stable", color: "#f59e0b", guidance: "Solid foundation. Focus on building larger buffers." } :
    totalScore >= 40 ? { label: "Stressed", color: "#fb923c", guidance: "Your system is strained. Prioritize debt reduction and buffer building." } :
    { label: "Critical", color: "#ef4444", guidance: "Focus on immediate stability: Build $1,000 emergency fund first." };
  
  return {
    score: totalScore,
    tier: tier.label,
    color: tier.color,
    guidance: tier.guidance,
    liquidMonths,
    investmentYears: investmentBuffer,
    debtBurden: debtRatio * 100,
    netWorth: cash + investments - debt,
  };
};

const calculateGrowth = (current, previous) => {
  if (!previous || previous === 0) return null;
  const change = current - previous;
  const percent = (change / previous) * 100;
  return { change, percent };
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

function PINLockScreen({ onUnlock }) {
  const [pin, setPin] = useState("");
  const [isSettingPin, setIsSettingPin] = useState(false);
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState("");
  
  useEffect(() => {
    const storedHash = localStorage.getItem('pinHash');
    if (!storedHash) {
      setIsSettingPin(true);
    }
  }, []);
  
  const handleSubmit = async () => {
    if (isSettingPin) {
      if (!pin || pin.length < 4) {
        setError("PIN must be at least 4 digits");
        return;
      }
      if (confirmPin && pin !== confirmPin) {
        setError("PINs don't match");
        return;
      }
      if (!confirmPin) {
        setError("");
        setConfirmPin(pin);
        setPin("");
        return;
      }
      
      const hash = await hashPIN(pin);
      localStorage.setItem('pinHash', hash);
      onUnlock();
    } else {
      const hash = await hashPIN(pin);
      const storedHash = localStorage.getItem('pinHash');
      if (hash === storedHash) {
        onUnlock();
      } else {
        setError("Incorrect PIN");
        setPin("");
      }
    }
  };
  
  return (
    <div className="pin-screen">
      <div className="pin-container">
        <div className="pin-title">
          {isSettingPin ? (confirmPin ? "🔐 Confirm PIN" : "🔒 Set Your PIN") : "🔒 Enter PIN"}
        </div>
        <div className="pin-subtitle">
          {isSettingPin 
            ? (confirmPin ? "Enter your PIN again to confirm" : "Create a 4-digit PIN to secure your dashboard")
            : "Enter your PIN to access your dashboard"
          }
        </div>
        <input
          type="password"
          inputMode="numeric"
          className="pin-input"
          placeholder="••••"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          autoFocus
        />
        <button className="pin-button" onClick={handleSubmit}>
          {isSettingPin ? (confirmPin ? "Confirm" : "Next") : "Unlock"}
        </button>
        {error && <div className="pin-error">{error}</div>}
      </div>
    </div>
  );
}

function HeroScore({ data, history }) {
  const scoreData = calculateScore(data, history);
  const circumference = 2 * Math.PI * 100;
  const offset = circumference - (scoreData.score / 100) * circumference;
  
  const lastScore = history.length > 0 ? history[history.length - 1].score : scoreData.score;
  const change = scoreData.score - lastScore;
  
  return (
    <div className="hero-score">
      <div className="score-content">
        <div className="score-ring-container">
          <svg className="score-ring" viewBox="0 0 220 220">
            <circle className="score-ring-bg" cx="110" cy="110" r="100" />
            <circle
              className="score-ring-fill"
              cx="110"
              cy="110"
              r="100"
              stroke={scoreData.color}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ stroke: scoreData.color }}
            />
          </svg>
          <div className="score-center">
            <div className="score-number" style={{ color: scoreData.color }}>{scoreData.score}</div>
            <div className="score-label">SCORE</div>
          </div>
        </div>
        
        <div className="score-details">
          <div className="score-tier" style={{ color: scoreData.color }}>{scoreData.tier}</div>
          <div className="score-guidance">{scoreData.guidance}</div>
          {history.length > 0 && change !== 0 && (
            <div className="score-change" style={{ color: change > 0 ? "var(--success)" : "var(--danger)" }}>
              {change > 0 ? "↑" : "↓"} {Math.abs(change)} point{Math.abs(change) !== 1 ? "s" : ""} from last update
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MetricsGrid({ data }) {
  const scoreData = calculateScore(data, []);
  
  return (
    <div className="metrics-grid">
      <div className="metric-card">
        <div className="metric-header">
          <div className="metric-icon">💰</div>
          <div className="metric-title">Liquid Runway</div>
        </div>
        <div className="metric-value" style={{ color: "var(--accent)" }}>
          {scoreData.liquidMonths.toFixed(1)} months
        </div>
        <div className="metric-subtitle">of expenses in cash</div>
      </div>
      
      <div className="metric-card">
        <div className="metric-header">
          <div className="metric-icon">📈</div>
          <div className="metric-title">Investment Buffer</div>
        </div>
        <div className="metric-value" style={{ color: "#14b8a6" }}>
          {scoreData.investmentYears.toFixed(1)} years
        </div>
        <div className="metric-subtitle">in investments</div>
      </div>
      
      <div className="metric-card">
        <div className="metric-header">
          <div className="metric-icon">💳</div>
          <div className="metric-title">Debt Burden</div>
        </div>
        <div className="metric-value" style={{ color: scoreData.debtBurden > 50 ? "var(--danger)" : "var(--success)" }}>
          {scoreData.debtBurden.toFixed(0)}%
        </div>
        <div className="metric-subtitle">of annual income</div>
      </div>
    </div>
  );
}

function GrowthCards({ data }) {
  const investments = (data.investmentAccounts || []).reduce((s, a) => s + (parseFloat(a.balance) || 0), 0);
  const prevInvestments = (data.investmentAccounts || []).reduce((s, a) => s + (parseFloat(a.previousBalance) || 0), 0);
  const invGrowth = calculateGrowth(investments, prevInvestments);
  
  const debt = (data.debtAccounts || []).reduce((s, a) => s + (parseFloat(a.balance) || 0), 0);
  const prevDebt = (data.debtAccounts || []).reduce((s, a) => s + (parseFloat(a.previousBalance) || 0), 0);
  const debtChange = calculateGrowth(debt, prevDebt);
  
  return (
    <div className="growth-grid">
      <div className="growth-card">
        <div className="growth-header">
          <div className="metric-icon">📈</div>
          <div className="growth-title">Investment Growth</div>
        </div>
        <div className="growth-amount" style={{ color: invGrowth && invGrowth.change > 0 ? "var(--success)" : "var(--text-primary)" }}>
          {invGrowth ? fmt(Math.abs(invGrowth.change)) : "$0"}
        </div>
        <div className="growth-period">Since last update</div>
        {invGrowth && (
          <div className="growth-percent" style={{ color: invGrowth.change > 0 ? "var(--success)" : "var(--danger)" }}>
            {invGrowth.change > 0 ? "↑" : "↓"} {Math.abs(invGrowth.percent).toFixed(1)}%
          </div>
        )}
      </div>
      
      <div className="growth-card">
        <div className="growth-header">
          <div className="metric-icon">💳</div>
          <div className="growth-title">Debt Reduction</div>
        </div>
        <div className="growth-amount" style={{ color: debtChange && debtChange.change < 0 ? "var(--success)" : "var(--text-primary)" }}>
          {debtChange ? fmt(Math.abs(debtChange.change)) : "$0"}
        </div>
        <div className="growth-period">Since last update</div>
        {debtChange && (
          <div className="growth-percent" style={{ color: debtChange.change < 0 ? "var(--success)" : "var(--danger)" }}>
            {debtChange.change < 0 ? "↓" : "↑"} {Math.abs(debtChange.percent).toFixed(1)}%
          </div>
        )}
      </div>
    </div>
  );
}

function TrendChart({ history }) {
  if (history.length < 2) return null;
  
  const W = 800, H = 200, pL = 40, pR = 20, pT = 20, pB = 30;
  const plotW = W - pL - pR, plotH = H - pT - pB;
  
  const maxScore = Math.max(...history.map(h => h.score), 100);
  const minScore = Math.min(...history.map(h => h.score), 0);
  const range = maxScore - minScore;
  
  const xScale = (i) => pL + (i / (history.length - 1)) * plotW;
  const yScale = (score) => pT + plotH - ((score - minScore) / (range || 1)) * plotH;
  
  const linePath = history.map((h, i) => `${i === 0 ? "M" : "L"}${xScale(i)},${yScale(h.score)}`).join(" ");
  const areaPath = `M${pL},${pT + plotH} L` + history.map((h, i) => `${xScale(i)},${yScale(h.score)}`).join(" L") + ` L${pL + plotW},${pT + plotH} Z`;
  
  return (
    <div className="trend-chart">
      <div className="chart-title">📊 Score Trend (Last {history.length} Updates)</div>
      <svg className="chart-svg" viewBox={`0 0 ${W} ${H}`}>
        {[0, 25, 50, 75, 100].map(score => (
          <g key={score}>
            <line x1={pL} y1={yScale(score)} x2={W - pR} y2={yScale(score)} className="chart-grid-line" />
            <text x={pL - 8} y={yScale(score) + 4} className="chart-label" textAnchor="end">{score}</text>
          </g>
        ))}
        <path d={areaPath} className="chart-area" />
        <path d={linePath} className="chart-line" />
        {history.map((h, i) => (
          <circle key={i} cx={xScale(i)} cy={yScale(h.score)} r="4" className="chart-dot" />
        ))}
      </svg>
    </div>
  );
}

function AccountGroup({ title, icon, description, accounts, onUpdate, accountType }) {
  const total = accounts.reduce((s, a) => s + (parseFloat(a.balance) || 0), 0);
  
  const addAccount = () => {
    onUpdate([...accounts, { name: "", balance: "", previousBalance: "" }]);
  };
  
  const updateAccount = (index, field, value) => {
    const updated = [...accounts];
    updated[index] = { ...updated[index], [field]: value };
    onUpdate(updated);
  };
  
  const removeAccount = (index) => {
    onUpdate(accounts.filter((_, i) => i !== index));
  };
  
  return (
    <div className="data-entry">
      <div className="section-header">
        <div className="section-icon">{icon}</div>
        <div className="section-title">{title}</div>
      </div>
      <div className="section-description">{description}</div>
      
      <div className="account-list">
        {accounts.map((account, i) => {
          const growth = calculateGrowth(parseFloat(account.balance) || 0, parseFloat(account.previousBalance) || 0);
          const isInvestment = accountType === 'investment';
          const isDebt = accountType === 'debt';
          
          let growthColor = "var(--text-secondary)";
          if (growth) {
            if (isInvestment) {
              growthColor = growth.change > 0 ? "var(--success)" : "var(--danger)";
            } else if (isDebt) {
              growthColor = growth.change < 0 ? "var(--success)" : "var(--danger)";
            }
          }
          
          return (
            <div key={i} className="account-item">
              <div className="account-field name">
                <div className="field-label">Account Name</div>
                <input
                  className="field-input"
                  type="text"
                  placeholder="e.g., Chase Checking"
                  value={account.name}
                  onChange={(e) => updateAccount(i, 'name', e.target.value)}
                />
              </div>
              <div className="account-field">
                <div className="field-label">Balance</div>
                <input
                  className="field-input"
                  type="number"
                  placeholder="0"
                  value={account.balance}
                  onChange={(e) => updateAccount(i, 'balance', e.target.value)}
                />
                {growth && (
                  <div className="growth-indicator" style={{ color: growthColor }}>
                    {growth.change > 0 ? "↑" : "↓"} {fmt(Math.abs(growth.change))} ({Math.abs(growth.percent).toFixed(1)}%)
                  </div>
                )}
              </div>
              {accounts.length > 1 && (
                <button className="remove-button" onClick={() => removeAccount(i)}>✕</button>
              )}
            </div>
          );
        })}
      </div>
      
      <button className="add-account-button" onClick={addAccount}>
        + Add {title.replace(/s$/, '')}
      </button>
      
      <div className="total-display">
        <div className="total-label">Total {title}</div>
        <div className="total-amount">{fmt(total)}</div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════════════════

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('financialData');
    return saved ? JSON.parse(saved) : {
      cashAccounts: [{ name: "", balance: "", previousBalance: "" }],
      investmentAccounts: [{ name: "", balance: "", previousBalance: "" }],
      debtAccounts: [{ name: "", balance: "", previousBalance: "" }],
      incomeStreams: [{ name: "", amount: "" }],
      monthlyExpenses: "",
    };
  });
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('scoreHistory');
    return saved ? JSON.parse(saved) : [];
  });
  const [toast, setToast] = useState(null);
  
  useEffect(() => {
    const unlockSession = sessionStorage.getItem('unlocked');
    if (unlockSession === 'true') {
      setIsUnlocked(true);
    }
  }, []);
  
  const handleUnlock = () => {
    setIsUnlocked(true);
    sessionStorage.setItem('unlocked', 'true');
  };
  
  const handleLogout = () => {
    setIsUnlocked(false);
    sessionStorage.removeItem('unlocked');
  };
  
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };
  
  const handleSave = () => {
    // Update previous balances
    const updatedData = {
      ...data,
      cashAccounts: data.cashAccounts.map(a => ({ ...a, previousBalance: a.balance })),
      investmentAccounts: data.investmentAccounts.map(a => ({ ...a, previousBalance: a.balance })),
      debtAccounts: data.debtAccounts.map(a => ({ ...a, previousBalance: a.balance })),
    };
    
    const scoreData = calculateScore(updatedData, history);
    const newHistory = [...history, { date: new Date().toISOString(), score: scoreData.score }];
    
    setData(updatedData);
    setHistory(newHistory);
    localStorage.setItem('financialData', JSON.stringify(updatedData));
    localStorage.setItem('scoreHistory', JSON.stringify(newHistory));
    
    showToast("✓ Snapshot saved! Your score has been updated.");
  };
  
  const updateStreak = () => {
    if (history.length === 0) return 0;
    
    let streak = 0;
    const now = new Date();
    
    for (let i = history.length - 1; i >= 0; i--) {
      const entryDate = new Date(history[i].date);
      const daysDiff = Math.floor((now - entryDate) / (1000 * 60 * 60 * 24));
      
      if (daysDiff === streak) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  };
  
  if (!isUnlocked) {
    return (
      <>
        <style>{STYLES}</style>
        <PINLockScreen onUnlock={handleUnlock} />
      </>
    );
  }
  
  const streak = updateStreak();
  
  return (
    <>
      <style>{STYLES}</style>
      <div className="app-container">
        <div className="app-header">
          <div className="app-title">💸 Limp$</div>
          <div className="header-actions">
            <div className="streak-badge">
              <span>🔥</span>
              <span><span className="streak-count">{streak}</span> day streak</span>
            </div>
            <button className="logout-button" onClick={handleLogout}>Lock</button>
          </div>
        </div>
        
        {history.length > 0 ? (
          <>
            <HeroScore data={data} history={history} />
            <MetricsGrid data={data} />
            <GrowthCards data={data} />
            <TrendChart history={history} />
          </>
        ) : (
          <div className="hero-score">
            <div className="score-content" style={{ justifyContent: 'center', textAlign: 'center' }}>
              <div className="score-details">
                <div className="score-tier" style={{ color: 'var(--accent)' }}>Welcome! 👋</div>
                <div className="score-guidance">
                  Enter your financial information below to get started. Your first snapshot will establish your baseline.
                </div>
              </div>
            </div>
          </div>
        )}
        
        <AccountGroup
          title="Cash Accounts"
          icon="💰"
          description="Checking and savings accounts"
          accounts={data.cashAccounts}
          onUpdate={(accounts) => setData({ ...data, cashAccounts: accounts })}
          accountType="cash"
        />
        
        <AccountGroup
          title="Investment Accounts"
          icon="📈"
          description="401k, IRA, brokerage, and other investments"
          accounts={data.investmentAccounts}
          onUpdate={(accounts) => setData({ ...data, investmentAccounts: accounts })}
          accountType="investment"
        />
        
        <AccountGroup
          title="Debt Accounts"
          icon="💳"
          description="Credit cards, loans, and other debts"
          accounts={data.debtAccounts}
          onUpdate={(accounts) => setData({ ...data, debtAccounts: accounts })}
          accountType="debt"
        />
        
        <div className="data-entry">
          <div className="section-header">
            <div className="section-icon">💵</div>
            <div className="section-title">Income & Expenses</div>
          </div>
          <div className="section-description">Monthly income sources and average expenses</div>
          
          <div className="account-list">
            {data.incomeStreams.map((income, i) => (
              <div key={i} className="account-item">
                <div className="account-field name">
                  <div className="field-label">Income Source</div>
                  <input
                    className="field-input"
                    type="text"
                    placeholder="e.g., Salary"
                    value={income.name}
                    onChange={(e) => {
                      const updated = [...data.incomeStreams];
                      updated[i] = { ...updated[i], name: e.target.value };
                      setData({ ...data, incomeStreams: updated });
                    }}
                  />
                </div>
                <div className="account-field">
                  <div className="field-label">Monthly Amount</div>
                  <input
                    className="field-input"
                    type="number"
                    placeholder="0"
                    value={income.amount}
                    onChange={(e) => {
                      const updated = [...data.incomeStreams];
                      updated[i] = { ...updated[i], amount: e.target.value };
                      setData({ ...data, incomeStreams: updated });
                    }}
                  />
                </div>
                {data.incomeStreams.length > 1 && (
                  <button
                    className="remove-button"
                    onClick={() => setData({ ...data, incomeStreams: data.incomeStreams.filter((_, x) => x !== i) })}
                  >✕</button>
                )}
              </div>
            ))}
          </div>
          
          <button
            className="add-account-button"
            onClick={() => setData({ ...data, incomeStreams: [...data.incomeStreams, { name: "", amount: "" }] })}
          >
            + Add Income Source
          </button>
          
          <div className="expenses-field">
            <div className="field-label">Average Monthly Expenses</div>
            <input
              className="field-input"
              type="number"
              placeholder="0"
              value={data.monthlyExpenses}
              onChange={(e) => setData({ ...data, monthlyExpenses: e.target.value })}
            />
          </div>
        </div>
        
        <button className="save-button" onClick={handleSave}>
          💾 Save Snapshot
        </button>
        
        {toast && <div className="toast">{toast}</div>}
      </div>
    </>
  );
}

// Render the app to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
