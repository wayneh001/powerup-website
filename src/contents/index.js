const spec = {
    title: '充電規格',
    subTitle: '我們將提供各式接口的辨識與設定，讓您能在不同的充電樁間順暢地完成充電',
    segmentOptions: [{label: '充電規格', path: 'spec'}],
    content: [
        {
            image: 'plug/j1772.png',
            label: 'J1772',
            description: '台灣通用性最高的充電介面，大部分品牌電動車／插電式油電車都採用此種慢充規格。',
            stickers: [['AC', '6', '69.8']],
        },
        {
            image: 'plug/mennekes.png',
            label: 'Mennekes',
            description: '為 2017 年至 2021 年 TESLA 特規使用。',
            stickers: [['AC', '20', '25.5']],
        },
        {
            image: 'plug/ccs1.png',
            label: 'CCS1',
            description: '在 J1772 的基礎上增加直流電正負極端子，為主流車款的快充，包含 BMW、PORSCHE、MERCEDES BENZ 等品牌使用。。',
            stickers: [['DC', '400', '25.9']],
        },
        {
            image: 'plug/ccs2.png',
            label: 'CCS2',
            description: '在 Mennekes 的基礎上增加直流電正負極端子，為 2021 年以後 TESLA 使用。',
            stickers: [['DC', '350', '32.1']],
        },
        {
            image: 'plug/tpc.png',
            label: 'TPC',
            description: '為 2017 年以前 TESLA 特規使用，同時支援 AC 慢充與 DC 快充，台灣以 DC 快充為主。',
            stickers: [['DC', '250', '36.7']],
        },
        {
            image: 'plug/chademo.png',
            label: 'CHAdeMo',
            description: '為早期部份日規車所使用，因其整合度不佳，已逐步被淘汰。',
            stickers: [['DC', '50', '5.3']],
        }
    ]
};

const application = {
    title: '應用程式',
    subTitle: '面向使用者的電動車充電管理應用程式',
    segmentOptions: [{label: '地圖', path: 'map'}, {label: '充電', path: 'charge'}, {label: '我的', path: 'mine'}],
    segments: {
        map: {
            description: [
                '在地圖介面中，您可以很直觀的看到您附近所有有提供充電服務的停車場，並可快速的點開定位地點，查看停車場資訊了解目前該停車場現有的充電樁規格與剩餘數量。',
                '使用者可以直接點擊導航，啟用手機所安裝的導航程式完成路線規劃。',
                '地圖提供了關鍵字搜尋，也提供篩選工具，使用者可以透過選擇距離進行排序，也可透過多選接口類型過濾，再依據過濾結果依距離排序。',
                '蒐藏工具讓使用者儲存常用的停車場。',
            ],
            image: [
                {path: 'application/map/01.png', alt: '01'},
                {path: 'application/map/02.png', alt: '02'},
                {path: 'application/map/03.png', alt: '03'},
                {path: 'application/map/04.png', alt: '04'},
                {path: 'application/map/05.png', alt: '05'},
            ],
        },
        charge: {
            description: [
                'POWERUP 利用 NFC 感應充電樁資訊。我們也為無 NFC 的充電樁設置 QR Code 掃描連接的方式。',
                '由於充電樁可能含有複數的接口，我們提供使用者選擇接口，使用者可以查看接口相關的充電規格，在選擇後使用者插入接口，完成電動車目前電量資訊的整合。',
                '在獲取電動車的電量資訊後進行充電設置，使用者可依據充電量百分比或需要的充電時間進行設置，並選擇電流大小。',
                '充電中的資訊包含目前電動車的電量、預估可行駛的距離、充電設置的參數、預估剩餘／已充電時間、充電效率與累計充電費用等資訊。',
                '在充電完成後，僅需點擊結束並付款，即可使用預先設定的支付方式完成付款。',
            ],
            image: [
                {path: 'application/charge/01.png', alt: '01'},
                {path: 'application/charge/02.png', alt: '02'},
                {path: 'application/charge/03.png', alt: '03'},
                {path: 'application/charge/04.png', alt: '04'},
                {path: 'application/charge/05.png', alt: '05'},
            ],
        },
        mine: {
            description: [
                '我的管理頁面中讓使用者可以編輯基本資訊、車輛資訊，並查看充電紀錄。',
                '充電紀錄紀錄過去 30 天的充電總計，包含總時長、總費用與充電表現，使用者同時可查看每一次的充電紀錄了解更詳細的資訊。',
            ],
            image: [
                {path: 'application/mine/01.png', alt: '01'},
                {path: 'application/mine/02.png', alt: '02'},
                {path: 'application/mine/03.png', alt: '03'},
                {path: 'application/mine/04.png', alt: '04'},
                {path: 'application/mine/05.png', alt: '05'},
            ],
        },
    }
};

const dashboard = {
    title: '後台管理',
    subTitle: '面向管理者的充電樁管理平台',
    segmentOptions: [
        {label: '總覽', path: 'overview'},
        {label: '系統管理', path: 'system'},
        {label: '會員資訊', path: 'member'},
        {label: '場域管理', path: 'location'},
        {label: '通知管理', path: 'notification'},
        {label: '統計報表', path: 'statistic'},
    ],
    segments: {
        overview: {
            description: [
                '總覽是後台管理的起始點，以儀表盤的方式呈現重要資訊，管理者也可以自行編排與刪減想要呈現的即時統計資訊。',
            ],
            image: [{path: 'dashboard/overview.png', alt: '總覽'}],
        },
        system: {
            description: [
                '系統管理提供管理者可操作系統者的帳號基本資訊與角色設置，依據角色開放不同的權限。帳號可關閉、刪除與修改。未來將開放角色權限的編輯。',
            ],
            image: [{path: 'dashboard/system.png', alt: '系統管理'}],
        },
        member: {
            description: [
                '會員資訊提供管理者可查看註冊會員的基本資訊，包含帳號、手機號碼、電子郵件帳號、綁定的電動車相關資訊等。未來將開放面向企業客戶的會員管理。',
            ],
            image: [{path: 'dashboard/member.png', alt: '會員資訊'}],
        },
        location: {
            description: [
                '場域管理提供管理者可查看所有充電樁與控制器的狀態與參數設定，列表依據停車場呈現。控制器可關閉、刪除與修改。未來將開放停車場的管理。',
            ],
            image: [{path: 'dashboard/location.png', alt: '場域管理'}],
        },
        notification: {
            description: [
                '通知管理提供管理者透過應用程式傳送公告，訊息可關閉、刪除與修改。未來將開放廣告資訊的管理與投放。',
            ],
            image: [{path: 'dashboard/notification.png', alt: '通知管理'}],
        },
        statistic: {
            description: [
                '統計報表目前開放收入與充電的統計資料，管理者可匯出試算表，或著加入總覽中。未來將開放更多種類報表的生成。',
            ],
            image: [{path: 'dashboard/statistic.png', alt: '統計報表'}],
        },
    }
};

const business = {
    title: '商務合作',
    subTitle: '我們尋求更多的合作機會，共創雙贏',
    segmentOptions: [{label: '設備生產商', path: 'manufacturer'}, {
        label: '停車場管理方',
        path: 'owner'
    }, {label: '電動車經銷商', path: 'dealer'}],
    segments: {
        manufacturer: {
            description: [
                '我們渴望與更多的控制器、充電樁生產商合作，拓展我們的硬體面服務，只要您的設備符合台灣主流的充電規格，我們樂於將您與停車場管理方搭建合作關係。',
                '請填寫下列表單，我們將儘速與您聯繫。',
            ],
            image: [],
        },
        owner: {
            description: [
                '如果您的停車場尚未提供充電服務，或著您考慮新的合作機會，我們將是您最好的選擇。Power Up 擁有相當多經驗豐富的充電樁與控制器生產商，我們樂於將您與設備生產商搭建合作關係。',
                '請填寫下列表單，我們將儘速與您聯繫。',
            ],
            image: [],
        },
        dealer: {
            description: [
                '如果您是電動車經銷商，您可考慮與我們建立長期合作關係，藉由具競爭力的充電折扣與客戶定點服務，提升購車優惠力度。同時我們也將與您分享充電相關數據，讓您可以在銷售過程中導入更精準的數字。',
                '請填寫下列表單，我們將儘速與您聯繫。',
            ],
            image: [],
        },
    }
};

export {spec, application, dashboard, business};