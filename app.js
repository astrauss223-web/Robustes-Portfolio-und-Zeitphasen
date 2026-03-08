// Data structure combining the PDFs content
const zeitphasen = [
    {
        id: "phase1",
        name: "Zeitphase 1",
        duration: "<= 1 Jahr",
        assetClass: "Geldmarkt",
        mappedBlocks: ["block-kasse"],
        exactMatchBlock: "block-kasse"
    },
    {
        id: "phase2",
        name: "Zeitphase 2",
        duration: "2-3 Jahre",
        assetClass: "WB Anleihen, EB Anleihen",
        mappedBlocks: ["block-kasse", "block-defensiv"],
        exactMatchBlock: "block-defensiv"
    },
    {
        id: "phase3",
        name: "Zeitphase 3",
        duration: "4-6 Jahre",
        assetClass: "WB Anleihen, EB Anleihen",
        mappedBlocks: ["block-kasse", "block-defensiv", "block-ausgewogen"],
        exactMatchBlock: "block-ausgewogen"
    },
    {
        id: "phase4",
        name: "Zeitphase 4",
        duration: ">6-8 Jahre",
        assetClass: "WB Aktien / Anleihen",
        mappedBlocks: ["block-kasse", "block-defensiv", "block-ausgewogen", "block-dynamisch"],
        exactMatchBlock: "block-dynamisch"
    },
    {
        id: "phase5",
        name: "Zeitphase 5",
        duration: ">6-8 Jahre",
        assetClass: "WB Aktien",
        mappedBlocks: ["block-kasse", "block-defensiv", "block-ausgewogen", "block-dynamisch", "block-maerkte", "block-spezial"],
        exactMatchBlock: "block-maerkte"
    },
    {
        id: "phase6",
        name: "Zeitphase 6",
        duration: ">6-12 Jahre",
        assetClass: "EB Aktien",
        mappedBlocks: ["block-kasse", "block-defensiv", "block-ausgewogen", "block-dynamisch", "block-maerkte", "block-spezial"],
        exactMatchBlock: "block-maerkte"
    }
];

// Mapping derived from the PDF structures
const managementBlocks = [
    {
        id: "block-kasse",
        title: "Kapitalreservefonds",
        subtitle: "Kasse / Wertsicherung",
        funds: [
            { name: "Basis-Fonds I Nachhaltig", info: "WKN: 847809 / ISIN: DE0008478090", type: "Geldmarkt" },
            { name: "ZinsPlus", info: "WKN: A0MUWS / ISIN: DE000A0MUWS7", type: "Geldmarkt" },
            { name: "Sauren Global Balanced", info: "WKN: 930920 / ISIN: LU0106280836", type: "Geldmarkt" },
            { name: "Lazard Patrimoine SRI", info: "WKN: A2JFHW / ISIN: FR0012355139", type: "Geldmarkt" },
            { name: "DWS Concept Kaldemorgen", info: "WKN: DWSK01 / ISIN: LU0599946976", type: "Geldmarkt" },
            { name: "Sauren Global Defensiv", info: "WKN: 214466 / ISIN: LU0163675910", type: "Geldmarkt" }
        ]
    },
    {
        id: "block-defensiv",
        title: "Defensive Vermögensverwalter",
        subtitle: "Stabilitätsorientiert",
        funds: [
            { name: "BlackRock ESG Fixed Income Strat.", info: "WKN: A0NDDA / ISIN: LU0438336264", type: "WB Anleihen" },
            { name: "Carmignac Portfolio Flexible Bond", info: "WKN: A0M9A2 / ISIN: LU0336084032", type: "WB Anleihen" },
            { name: "Ampega Rendite Rentenfonds", info: "WKN: 848105 / ISIN: DE0008481052", type: "EB Anleihen" },
            { name: "Rentenstrategie MultiManager A", info: "WKN: A0M5RE / ISIN: LU0326856028", type: "WB Anleihen" },
            { name: "Flossbach von Storch - Bond Defensive", info: "WKN: A2P2FU / ISIN: LU2207302121", type: "WB Anleihen" },
            { name: "Carmignac Credit 2027", info: "WKN: A3DK4P / ISIN: FR0014008231", type: "EB Anleihen" },
            { name: "Carmignac Credit 2029", info: "WKN: A3EXGB / ISIN: FR001400KAX8", type: "EB Anleihen" },
            { name: "iShares EUR Government Bond 0-1", info: "WKN: A0RGEL / ISIN: IE00B3FH7618", type: "EB Anleihen" },
            { name: "iShares iBonds Dec 2025 Term E.", info: "WKN: A3EFXA / ISIN: IE000NXQKHU1", type: "EB Anleihen" },
            { name: "iShares iBonds Dec 2026 Term E.", info: "WKN: A3D8E3 / ISIN: IE000SIZJZ82", type: "EB Anleihen" },
            { name: "Xtrackers Target Mat Sept 2027", info: "WKN: DBX0VA / ISIN: LU2673523218", type: "EB Anleihen" },
            { name: "Renten Strategie K", info: "WKN: 979952 / ISIN: DE0009799528", type: "EB Anleihen" },
            { name: "Flossbach von Storch – Bond", info: "WKN: A2P9FU", type: "EB Anleihen" },
            { name: "Lazard Nordic High Yield Bond", info: "WKN: A3DTD2 / ISIN: IE000F8BEZE4", type: "EB Anleihen" },
            { name: "Vanguard EUR Eurozone Government", info: "WKN: A143JL / ISIN: IE00BZ163H91", type: "EB Anleihen" },
            { name: "Morgan Stanley - Global Convertible Bond", info: "WKN: 633596", type: "EB Anleihen" },
            { name: "Schroder ISF Sustainable Euro Cr.", info: "WKN: A2PXFB", type: "EB Anleihen" },
            { name: "T. Rowe Price - Diversified Income", info: "WKN: A2DW8B / ISIN: LU1676121723", type: "EB Anleihen" },
            { name: "Vanguard EUR Corporate Bond", info: "WKN: A143JK / ISIN: IE00BZ163G84", type: "EB Anleihen" },
            { name: "DWS Invest Euro High Yield Corp.", info: "WKN: DWS04F / ISIN: LU0616839766", type: "EB Anleihen" },
            { name: "ACATIS IFK Value Renten", info: "WKN: A0X758 / ISIN: DE000A0X7582", type: "EB Anleihen" },
            { name: "Rentenstrategie MultiManager I", info: "WKN: A41FXL", type: "EB Anleihen" },
            { name: "iShares Core Global Aggregate B.", info: "WKN: A0RGEQ / ISIN: IE00B3F81409", type: "EB Anleihen" },
            { name: "iShares iBonds Dec 2028 Term E.", info: "WKN: A3D8E7 / ISIN: IE000264WWY0", type: "EB Anleihen" },
            { name: "Carmignac Credit 2031", info: "WKN: A40Y9T", type: "EB Anleihen" },
            { name: "BKC Treuhand Portfolio", info: "WKN: A0YFQ9 / ISIN: DE000A0YFQ92", type: "WB Anleihen" },
            { name: "DWS Concept DJE Alpha Renten", info: "WKN: 974515 / ISIN: LU0087412390", type: "WB Anleihen" },
            { name: "Flossbach von Storch - Multi Asset - Defensive", info: "WKN: A0M43U / ISIN: LU0323577923", type: "WB Anleihen" },
            { name: "ODDO BHF Polaris Moderate", info: "WKN: A2JJ1S / ISIN: DE000A2JJ1S3", type: "WB Anleihen" }
        ]
    },
    {
        id: "block-ausgewogen",
        title: "Ausgewogene Vermögensverwalter",
        subtitle: "Balance aus Chance & Sicherheit",
        funds: [
            { name: "Arete PRIME VALUES Income", info: "WKN: 986054 / ISIN: AT0000973029", type: "WB Anleihen / Aktien" },
            { name: "Morgan Stanley - Global Convertibles", info: "WKN: 633506 / ISIN: LU0149084476", type: "EB Anleihen" },
            { name: "Schroder ISF Sustainable Euro Credit", info: "WKN: A2PXFD / ISIN: LU2080003616", type: "EB Anleihen" },
            { name: "Allianz Better World Dynamic", info: "WKN: A3CUBS / ISIN: LU2364421870", type: "EB Aktien" },
            { name: "JPM Total Emerging Markets Income", info: "WKN: A1W5Y6 / ISIN: LU0974360454", type: "EB Aktien" },
            { name: "Nordea Global Stable Equity", info: "WKN: 591135", type: "WB Aktien / Anleihen" },
            { name: "Fidelity Funds - Global Technology", info: "WKN: 921800", type: "WB Aktien / Anleihen" },
            { name: "Sauren Global Opportunities", info: "WKN: 930921", type: "WB Aktien / Anleihen" },
            { name: "Schroder ISF Asian Opportunities", info: "WKN: 973045", type: "WB Aktien / Anleihen" },
            { name: "terrAssisi Aktien I AMI", info: "WKN: 984734", type: "WB Aktien / Anleihen" },
            { name: "Robeco Asia-Pacific Equities", info: "WKN: 988149", type: "WB Aktien / Anleihen" },
            { name: "Allianz Multi Asset Risk Control", info: "WKN: A0LBPU", type: "WB Aktien / Anleihen" },
            { name: "FSSA Greater China Growth Fund", info: "WKN: A0LHAL", type: "WB Aktien / Anleihen" },
            { name: "DNB Fund Renewable Energy", info: "WKN: A0MWAL", type: "WB Aktien / Anleihen" },
            { name: "Robeco QI EM Active Equities", info: "WKN: A0NDKJ", type: "WB Aktien / Anleihen" },
            { name: "X of the Best - dynamisch", info: "WKN: A0Q5MC", type: "WB Aktien / Anleihen" },
            { name: "Vontobel - Global Environmental Change", info: "WKN: A0RCVV", type: "WB Aktien / Anleihen" },
            { name: "US EquityFlex I", info: "WKN: A12E0R", type: "WB Aktien / Anleihen" },
            { name: "Schroder ISF Frontier Markets Equity", info: "WKN: A1C9QD", type: "WB Aktien / Anleihen" },
            { name: "Allianz Income and Growth", info: "WKN: A1J24Q", type: "WB Aktien / Anleihen" },
            { name: "OptoFlex I", info: "WKN: A1J4YY", type: "WB Aktien / Anleihen" },
            { name: "EB - Multi Asset Conservative", info: "WKN: A1JUU9", type: "WB Aktien / Anleihen" },
            { name: "PIMCO Strategic Income Fund", info: "WKN: A1W76Y", type: "WB Aktien / Anleihen" },
            { name: "Guinness Global Equity Income", info: "WKN: A2DKZV", type: "WB Aktien / Anleihen" },
            { name: "ACATIS Value Event Fonds D", info: "WKN: A2DR2M", type: "WB Aktien / Anleihen" },
            { name: "iShares NASDAQ US Biotechnology", info: "WKN: A2DWAW", type: "WB Aktien / Anleihen" },
            { name: "Invesco Pan European High Income Fund", info: "WKN: A2H61M", type: "WB Aktien / Anleihen" },
            { name: "iShares Edge MSCI World Value", info: "WKN: A2JDDJ", type: "WB Aktien / Anleihen" },
            { name: "Wellington Enduring Infrastructure Assets", info: "WKN: A2PGYQ", type: "WB Aktien / Anleihen" },
            { name: "Janus Henderson Hrz Global Sm. Comp.", info: "WKN: A2PK9Q", type: "WB Aktien / Anleihen" },
            { name: "FERI Sustainable Quality", info: "WKN: A2PKR1", type: "WB Aktien / Anleihen" },
            { name: "EuroEquityFlex I", info: "WKN: A2QD6N", type: "WB Aktien / Anleihen" },
            { name: "Allianz Better World Dynamic", info: "WKN: A3CUB5", type: "WB Aktien / Anleihen" },
            { name: "JPM Gl. Eq. Premium Income Act", info: "WKN: A3EHRE", type: "WB Aktien / Anleihen" },
            { name: "GANÉ Value Event Fund M", info: "WKN: A407LK", type: "WB Aktien / Anleihen" },
            { name: "Carmignac Portfolio Flexible Bond", info: "WKN: A417MG", type: "WB Aktien / Anleihen" },
            { name: "Swisscanto Portfolio Fund Sustainable Balanced", info: "WKN: A41MQN", type: "WB Aktien / Anleihen" },
            { name: "LBBW Sicher Leben", info: "WKN: LB6B0M", type: "WB Aktien / Anleihen" },
            { name: "Amundi MSCI New Energy UCITS", info: "WKN: LYX0CB", type: "WB Aktien / Anleihen" }
        ]
    },
    {
        id: "block-dynamisch",
        title: "Dynamische Vermögensverwalter",
        subtitle: "Wachstumsorientiert",
        funds: [
            { name: "ACATIS Value Event Fonds A", info: "WKN: A0X754 / ISIN: DE000A0X7541", type: "WB Aktien / Anleihen" },
            { name: "Arete PRIME VALUES Growth", info: "WKN: 987852 / ISIN: AT0000803689", type: "WB Aktien / Anleihen" },
            { name: "FERI Core Strategy Balanced F", info: "WKN: A12GMF / ISIN: LU1155658856", type: "WB Aktien / Anleihen" },
            { name: "GANÉ Value Event Fund", info: "WKN: A3ERNP / ISIN: DE000A3ERNP9", type: "WB Aktien / Anleihen" },
            { name: "MEAG EuroBalance", info: "WKN: 975745 / ISIN: DE0009757450", type: "WB Aktien / Anleihen" },
            { name: "MFS Prudent Capital", info: "WKN: A2ANEB / ISIN: LU1442549025", type: "WB Aktien / Anleihen" },
            { name: "ODDO BHF Polaris Flexible", info: "WKN: A0M003 / ISIN: LU0319572730", type: "WB Aktien / Anleihen" },
            { name: "Phaidros Funds - Balanced", info: "WKN: A0MN91 / ISIN: LU0295585748", type: "WB Aktien / Anleihen" },
            { name: "X of the Best - ausgewogen", info: "WKN: A1CVCD / ISIN: LU0497150481", type: "WB Aktien / Anleihen" },
            { name: "smarTrack balanced B", info: "WKN: A2PSGG / ISIN: LU1717097338", type: "WB Aktien / Anleihen" },
            { name: "smarTrack growth B", info: "WKN: A2PSGF / ISIN: LU1717097767", type: "WB Aktien / Anleihen" },
            { name: "Dynamic Global Balance", info: "WKN: A0EAWB / ISIN: DE000A0EAWB2", type: "WB Aktien / Anleihen" }
        ]
    },
    {
        id: "block-maerkte",
        title: "Märkte",
        subtitle: "Benchmarking auf Aktien",
        funds: [
            { name: "FMM-Fonds", info: "WKN: 847811 / ISIN: DE0008478116", type: "WB Aktien" },
            { name: "ÖkoWorld ÖkoVision Classic", info: "WKN: 974968 / ISIN: LU0061928585", type: "WB Aktien" },
            { name: "ACATIS Datini Valueflex Fonds", info: "WKN: A1H72F / ISIN: DE000A1H72F1", type: "WB Aktien" },
            { name: "FvS - Multiple Opportunities R", info: "WKN: A0M430 / ISIN: LU0323578657", type: "WB Aktien" },
            { name: "FS Exponential Technologies P", info: "WKN: A2DMRL / ISIN: LU1575871881", type: "WB Aktien" },
            { name: "FERI Core Strategy Dynamic F", info: "WKN: A12GMG", type: "WB Aktien" },
            { name: "GlobalPortfolioOne", info: "WKN: A2PT6U", type: "WB Aktien" },
            { name: "DWS ESG Dynamic Opportunities", info: "WKN: DWS17J", type: "WB Aktien" },
            { name: "BL Global 75", info: "WKN: 986855", type: "WB Aktien" },
            { name: "Arabesque Global ESG Flexible Allocation", info: "WKN: A12HQR", type: "WB Aktien" },
            { name: "AB SICAV - American Growth Portf.", info: "WKN: 986838 / ISIN: LU0077335932", type: "EB Aktien" },
            { name: "Aktienstrategie MultiManager", info: "WKN: A0M5RD / ISIN: LU0326856845", type: "EB Aktien" },
            { name: "Fidelity Funds - Germany", info: "WKN: A0LF01 / ISIN: LU0261948227", type: "EB Aktien" },
            { name: "Eleva European Selection Fund", info: "WKN: A2PKNU / ISIN: LU1610664406", type: "EB Aktien" },
            { name: "Pictet - Quest Europe Sustainable Equities", info: "WKN: 750443 / ISIN: LU0144509717", type: "EB Aktien" },
            { name: "Janus Henderson Horizon Pan European Smaller Companies", info: "WKN: 989229 / ISIN: LU0088927925", type: "EB Aktien" },
            { name: "iShares Core MSCI World UCITS ETF", info: "WKN: A0RPWH / ISIN: IE00B4L5Y983", type: "EB Aktien" },
            { name: "iShares Core S&P 500 UCITS ETF", info: "WKN: A0YEDG / ISIN: IE00B5BMR087", type: "EB Aktien" },
            { name: "Xtrackers MSCI World UCITS ETF", info: "WKN: A1XB5V / ISIN: IE00BJ0KDQ92", type: "EB Aktien" },
            { name: "UBS MSCI ACWI SRI UCITS ETF", info: "WKN: A2PL5B / ISIN: IE00BDR55471", type: "EB Aktien" },
            { name: "UBS MSCI World SRI UCITS ETF", info: "WKN: A2PZBH / ISIN: IE00BK72HH44", type: "EB Aktien" },
            { name: "Xtrackers MSCI World Energy ETF", info: "WKN: A113FF", type: "EB Aktien" },
            { name: "Xtrackers MSCI EM UCITS ETF", info: "WKN: A12GVR", type: "EB Aktien" },
            { name: "iShares MSCI EM Asia UCITS ETF", info: "WKN: A1C1H5", type: "EB Aktien" },
            { name: "Vanguard FTSE Dev. Europe ETF", info: "WKN: A1T8FS", type: "EB Aktien" },
            { name: "iShares MSCI World Small Cap ETF", info: "WKN: A2DWBY", type: "EB Aktien" },
            { name: "Xtrackers Art. Intel. & Big Data ETF", info: "WKN: A2N6LC", type: "EB Aktien" },
            { name: "UBS MSCI ACWI Socially Resp. ETF", info: "WKN: A2PL58", type: "EB Aktien" },
            { name: "Global X Uranium UCITS ETF", info: "WKN: A3DC8S", type: "EB Aktien" },
            { name: "Xtrackers Nikkei 225 UCITS ETF", info: "WKN: DBX0NJ", type: "EB Aktien" },
            { name: "Xtrackers DAX UCITS ETF", info: "WKN: DBX1DA", type: "EB Aktien" },
            { name: "Xtrackers Euro Stoxx 50 UCITS ETF", info: "WKN: DBX1EU", type: "EB Aktien" }
        ]
    },
    {
        id: "block-spezial",
        title: "Spezialitäten / Themen",
        subtitle: "Immobilien, PE, Gold, Beteiligungen",
        funds: [
            { name: "BGF World Gold Fund", info: "WKN: 974119 / ISIN: LU0055631609", type: "Spezial" },
            { name: "BGF World Mining Fund", info: "WKN: 986932 / ISIN: LU0075056555", type: "Spezial" },
            { name: "BGF World Healthscience Fund", info: "WKN: A0BL36 / ISIN: LU0171307068", type: "Spezial" },
            { name: "Nomura India Equity Fund", info: "WKN: A1C9ED / ISIN: IE00B35HDY84", type: "Spezial" },
            { name: "Pictet - Robotics", info: "WKN: A141Q9 / ISIN: LU1279334053", type: "Spezial" },
            { name: "Pictet - Timber", info: "WKN: A0QZ7T / ISIN: LU0340559557", type: "Spezial" },
            { name: "Pictet - Quest Europe Sustainable", info: "WKN: 750443 / ISIN: LU0144509717", type: "Spezial" },
            { name: "Robeco Sustainable Water", info: "WKN: A2QBUQ / ISIN: LU2146190835", type: "Spezial" },
            { name: "AXA IM Nasdaq 100 UCITS ETF", info: "WKN: A3DXEB / ISIN: IE000QDFFK00", type: "Spezial" },
            { name: "VanEck Defense UCITS ETF", info: "WKN: A3D9M1 / ISIN: IE000YYE6WK5", type: "Spezial" },
            { name: "iShares Digital Security UCITS ETF", info: "WKN: A2JMGE / ISIN: IE00BG0J4C88", type: "Spezial" },
            { name: "Janus Henderson Horizon Global...", info: "WKN: A0MP0Q / ISIN: LU0264738294", type: "Spezial" },
            { name: "Morgan Stanley - Global Opportunity", info: "WKN: A1H6XK / ISIN: LU0552385295", type: "Spezial" },
            { name: "Triodos Pioneer Impact Fund", info: "WKN: A4039Q / ISIN: LU2723591728", type: "Spezial" },
            { name: "HansaGold", info: "WKN: A0NEKK", type: "Spezial" },
            { name: "Vontobel Fund - Commodity", info: "WKN: A2JKK0", type: "Spezial" },
            { name: "DJE - Gold & Stabilitätsfonds", info: "WKN: A0M67Q / ISIN: LU0323357649", type: "Spezial" }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline-container');
    const towerContainer = document.getElementById('tower-container');

    // Details Elements
    const detailPhaseName = document.getElementById('detail-phase-name');
    const detailDuration = document.getElementById('detail-duration');
    const detailAssetClass = document.getElementById('detail-asset-class');
    const detailCard = document.getElementById('phase-detail-card');

    // Modal Elements
    const modal = document.getElementById('funds-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalList = document.getElementById('modal-funds-list');
    const modalFilter = document.getElementById('modal-filter');
    const closeBtn = document.querySelector('.close-modal');

    // Maintain state for the currently viewed block inside modal
    let currentBlockData = null;

    const renderFundList = (fundsList) => {
        modalList.innerHTML = '';
        if (fundsList && fundsList.length > 0) {
            fundsList.forEach(fund => {
                const li = document.createElement('li');
                li.className = 'fund-list-item';
                li.innerHTML = `
                    <div class="fund-header">
                        <span class="fund-name">${fund.name}</span>
                        <span class="fund-badge">${fund.type}</span>
                    </div>
                    <span class="fund-info">${fund.info}</span>
                `;
                modalList.appendChild(li);
            });
        } else {
            modalList.innerHTML = '<li class="fund-list-item"><span class="fund-name">Keine spezifischen Fonds für diesen Filter hinterlegt.</span></li>';
        }
    };

    const populateFilterDropdown = (funds) => {
        modalFilter.innerHTML = '<option value="all">Alle Managementansätze (Filter)</option>';
        if (!funds) return;

        // Extract unique types from funds
        const types = [...new Set(funds.map(f => f.type))].sort();

        types.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t;
            opt.textContent = t;
            modalFilter.appendChild(opt);
        });

        // Only show filter if there are actually multiple types to filter by
        modalFilter.style.display = types.length > 1 ? 'block' : 'none';
    };

    modalFilter.addEventListener('change', (e) => {
        const selectedType = e.target.value;
        if (!currentBlockData) return;

        if (selectedType === 'all') {
            renderFundList(currentBlockData.funds);
        } else {
            const filtered = currentBlockData.funds.filter(f => f.type === selectedType);
            renderFundList(filtered);
        }
    });

    // 1. Initial Render of Tower Layers
    // We want the tower to stack from bottom to top: Kapitalreserve bottom, Spezialitäten top.
    // CSS flex-direction: column-reverse or just inserting them in reverse order.
    // Let's insert them in reverse order so the First element in DOM is the top of the tower, and Last is bottom.
    // Because CSS z-index and overlapping (bottom layers need to render behind top layers in 3D).
    const reversedBlocks = [...managementBlocks].reverse();

    reversedBlocks.forEach((block, index) => {
        const blockEl = document.createElement('div');
        blockEl.className = 'tower-layer';
        blockEl.id = block.id;

        // Custom data attribute for styling specific colors based on the block ID
        blockEl.dataset.blockId = block.id;
        blockEl.style.zIndex = index; // The higher up the tower (lower index), the higher the z-index should be. So reverse index.
        blockEl.style.zIndex = reversedBlocks.length - index;

        blockEl.innerHTML = `
            <div class="layer-content">
                <div class="block-title">${block.title}</div>
                <div class="block-subtitle">${block.subtitle}</div>
            </div>
        `;

        // Add click listener for Modal
        blockEl.addEventListener('click', () => {
            currentBlockData = block;
            modalTitle.textContent = block.title;

            // Setup options and render all by default
            populateFilterDropdown(block.funds);
            renderFundList(block.funds);

            modal.classList.add('open');
        });

        if (towerContainer) {
            towerContainer.appendChild(blockEl);
        }
    });

    // Modal Close Logic
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('open');
        });
    }

    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('open');
            }
        });
    }

    // 2. State management
    const highlightBlocks = (mappedBlockIds, exactMatchBlockId) => {
        document.querySelectorAll('.tower-layer').forEach(el => {
            el.classList.remove('highlighted', 'exact-match');
            const badge = el.querySelector('.exact-match-badge');
            if (badge) badge.remove();
        });

        mappedBlockIds.forEach(blockId => {
            const b = document.getElementById(blockId);
            if (b) {
                b.classList.add('highlighted');
                if (blockId === exactMatchBlockId) {
                    b.classList.add('exact-match');

                    // Set the badge color dynamically based on the block's matched background color
                    const bgColor = window.getComputedStyle(b).backgroundColor;
                    b.style.setProperty('--badge-color', bgColor);

                    const badge = document.createElement('div');
                    badge.className = 'exact-match-badge';
                    badge.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Passender Ansatz
                    `;
                    b.insertBefore(badge, b.firstChild);
                }
            }
        });
    };

    const updateDetails = (phase) => {
        if (!phase) {
            detailPhaseName.textContent = "Alle Phasen anzeigen";
            detailDuration.textContent = "Gesamter Anlagehorizont";
            detailAssetClass.textContent = "Alle verfügbaren Anlageklassen";
            detailCard.classList.remove('active-state');
            return;
        }
        detailPhaseName.textContent = phase.name;
        detailDuration.textContent = phase.duration;
        detailAssetClass.textContent = phase.assetClass;
        detailCard.classList.add('active-state');
    };

    let activePhaseId = null;

    const handlePhaseClick = (phase) => {
        // Deselect logic: if clicking the already active phase, turn it off.
        if (activePhaseId === phase.id) {
            activePhaseId = null;
            document.querySelectorAll('.timeline-btn').forEach(btn => btn.classList.remove('active'));
            updateDetails(null);

            // Highlight ALL blocks to show the full tower
            document.querySelectorAll('.tower-layer').forEach(el => {
                el.classList.add('highlighted');
                el.classList.remove('exact-match');
                const badge = el.querySelector('.exact-match-badge');
                if (badge) badge.remove();
            });
            return;
        }

        activePhaseId = phase.id;

        document.querySelectorAll('.timeline-btn').forEach(btn => btn.classList.remove('active'));
        // Activate both buttons for this phase
        document.querySelectorAll(`.timeline-btn[data-phase="${phase.id}"]`).forEach(btn => {
            btn.classList.add('active');
        });

        updateDetails(phase);
        highlightBlocks(phase.mappedBlocks, phase.exactMatchBlock);
    };

    // 3. Render Timeline Selection Buttons
    zeitphasen.forEach(phase => {
        // Horizontal timeline button
        const btn = document.createElement('button');
        btn.className = 'timeline-btn';
        btn.textContent = phase.name;
        btn.dataset.phase = phase.id;
        btn.addEventListener('click', () => handlePhaseClick(phase));
        timelineContainer.appendChild(btn);

    });

    // Contact button mock logic
    const contactBtn = document.getElementById('consultation-btn');
    contactBtn.addEventListener('click', () => {
        contactBtn.textContent = 'Bereitet Anfrage vor...';
        setTimeout(() => {
            contactBtn.textContent = 'Beratungsgespräch vereinbaren';
            alert('Vielen Dank für Ihr Interesse an einer Finanzplanung mit MLP. Ein Berater wird sich in Kürze zur Terminvereinbarung bei Ihnen melden.');
        }, 800);
    });

    // Initially don't highlight any single phase so the whole tower is visible
    // We can call handlePhaseClick for the first phase, or just leave it unselected
    // Let's leave it unselected and just highlight all layers by default
    document.querySelectorAll('.tower-layer').forEach(el => el.classList.add('highlighted'));
    updateDetails(null);
});
