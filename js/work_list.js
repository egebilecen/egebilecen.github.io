const WORK_LIST = [
    {
        media: [
            {
                url: "img/mesh.png",
                alt: "Mesh Network System Overview",
                isVideo: false,
            },
        ],
        tags: ["cs", "xamarin-forms", "ros", "automation"],
        title: {
            text: "Home Automation with Mesh Network",
            localizationKey: "mesh-network-home-title",
        },
        desc: {
            text: "In this project, a mesh network has been created for published data from several sensors that are placed separately from each other in order to reach the <strong>System on Chip</strong> system in the house that is acting as a server. These sensor data will then be published to the mobile application that is connected to the server via <strong>Websocket</strong>. I choosed <strong>Raspberry PI 3</strong> as <strong>SoC</strong> because of it's cheap price. <strong>painlessMesh</strong> library is used for creating the mesh network. <strong>NodeMCU</strong> IoT platform is used for the nodes in mesh network. Mobile application connects to the server using it's local IP address in WiFi network. Communication between root node and server is done by using <strong>ROS</strong>. Root node sends all sensor data from child nodes via <strong>ROS Serial</strong> library. Root node is connected to the server via physical cable. Reason of this is <strong>NodeMCU</strong> being unable to connect more than one WiFi network. (Meanwhile <strong>painlessMesh</strong> itself creates an access point, <strong>ROS Serial</strong> library attempts to connect to an exist WiFi network. This causes these two library to conflict with each other.) Mobile application is developed using <strong>Xamarin Forms</strong> to be cross-platform application.",
            localizationKey: "mesh-network-home-desc",
        },
        footer: {
            text: "No source code available for this project as it has been done as assignment in my collage.",
            localizationKey: "mesh-network-home-note",
        },
        buttons: [],
    },
    {
        media: [
            {
                url: "img/eb.png",
                alt: "House Automation Application Interface",
                isVideo: false,
            },
        ],
        tags: ["cpp", "html-css", "cordova", "automation"],
        title: {
            text: "Home Automation",
            localizationKey: "home-automation-title",
        },
        desc: {
            text: "In this project, I did use <strong>NodeMCU</strong> IoT platform to connect to the WiFi network of the house, get data from connected sensors (temperature sensor, movement detection sensor etc.) periodically and store them on my database in a hosting using a <strong>PHP</strong> based API I did write. I did also use <strong>C++</strong> for the firmware of <strong>NodeMCU</strong>. In addition, I used <strong>Cordova</strong> to create a mobile webview application for <strong>Android</strong> using <strong>HTML</strong>, <strong>CSS</strong> and <strong>Javascript</strong>. All of the sensor data can be tracked in this application. This application also allows user to extensively update settings of all components. Such as updating sensor status (activated / deactivated), changing their polling rates and even adding sleep time (this can be useful to prevent notification spam for sensors like movement detection sensor as <strong>NodeMCU</strong> sends notification to the application every time sensor is triggered).",
            localizationKey: "home-automation-desc",
        },
        footer: {
            text: 'Application pictures are under the "<strong>home_controller_app</strong>" directory of GitHub repo.',
            localizationKey: "home-automation-note",
        },
        buttons: [
            {
                url: "https://github.com/egebilecen/eb-home-automation",
                text: "GitHub",
                icon: "fa-brands fa-github",
            },
        ],
    },
    {
        media: [
            {
                url: "img/are_combat_sim_1.png",
                alt: "Arelith Combat Simulator Demo",
                isVideo: false,
            },
            {
                url: "img/are_combat_sim_2.png",
                alt: "Arelith Combat Simulator Demo",
                isVideo: false,
            },
        ],
        tags: ["rust", "tauri", "react", "html-css", "javascript"],
        title: {
            text: "Arelith Combat Simulator",
            localizationKey: "are-combat-sim-title",
        },
        desc: {
            text: "In this project, I created a combat simulator for the <b>Neverwinter Nights</b> game, which is based on the <b>Dungeons &amp; Dragons</b> tabletop game. <b>Arelith</b> is a persistent role-playing server with new mechanics added on top of the base game, which is what this simulator is mainly based on. The project is based on <b>Tauri</b> and uses <b>React</b> for the user interface, with the utilization of <b>Ant Design</b> UI components. To display interactive charts, the <b>ECharts</b> library is used.",
            localizationKey: "are-combat-sim-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [
            {
                url: "https://github.com/egebilecen/arelith-combat-simulator-gui",
                text: "GitHub",
                icon: "fa-brands fa-github",
            },
        ],
    },
    {
        media: [
            {
                url: "img/circle_detection.jpeg",
                alt: "Circle Detection Algorithm Demo",
                isVideo: false,
            },
            {
                url: "img/circle_detection_1.mp4",
                alt: "Circle Detection Algorithm",
                isVideo: true,
            },
            {
                url: "img/circle_detection_2.mp4",
                alt: "Circle Detection Algorithm",
                isVideo: true,
            },
        ],
        tags: ["python", "image-processing"],
        title: {
            text: "Colored Circle Detecting with Image Processing",
            localizationKey: "image-proc-circle-title",
        },
        desc: {
            text: "This is a wrapper I did write for <strong>TEKNOFEST International Unmanned Aerial Vehicles - Drone Category</strong> 2020 competition's second task. This wrapper works in two steps. First, a filtering is done using HSV color range of desired color in HSV color space. Then extracting the contour areas and their details such as area position, size, etc. After this; based on distance of contour area center points, their mean values will be calculated and will be combined into single point. This point represents the point of interest that will be cropped from original frame using some arbitrary dimension and will be given into <strong>HoughCircles</strong> circle detection function of OpenCV as a parameter. The main reason for cropping the point of interest from the original frame using some arbitrary dimension is, applying <strong>HoughCircles</strong> circle detection method on original frame would be much more slower than just detecting the circles in point of interest. Especially considering original frame is a 1920x1080 frame meanwhile cropped point of interest would be something around 500x500. Then; as second step, detected circle center points in point of interest frame will be combined into one point based on their center points' distance between other circles' center points. Then this single combined center point will be combined with the center point of the combined contour areas into single point. This final point will be the detected cirle's center point.",
            localizationKey: "image-proc-circle-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [
            {
                url: "https://github.com/egebilecen/eb-python/blob/master/eb/image_processing/detection.py#L86",
                text: "GitHub",
                icon: "fa-brands fa-github",
            },
        ],
    },
    {
        media: [
            {
                url: "img/license_gen_1.png",
                alt: "License Generator UI 1",
                isVideo: false,
            },
            {
                url: "img/license_gen_2.png",
                alt: "License Generator UI 2",
                isVideo: false,
            },
            {
                url: "img/license_gen_3.png",
                alt: "License Generator UI 3",
                isVideo: false,
            },
            {
                url: "img/license_gen_4.png",
                alt: "License Generator UI 4",
                isVideo: false,
            },
            {
                url: "img/license_gen_5.png",
                alt: "License Generator UI 5",
                isVideo: false,
            },
            {
                url: "img/license_gen_6.png",
                alt: "License Generator UI 6",
                isVideo: false,
            },
        ],
        tags: ["rust", "html-css", "javascript", "react", "tauri"],
        title: {
            text: "License Generator",
            localizationKey: "license-generator-title",
        },
        desc: {
            text: "An application developed using <strong>Tauri</strong> and <strong>React</strong> for generating valid license files for my own applications with <strong>Rust</strong> programming language.",
            localizationKey: "license-generator-desc",
        },
        footer: {
            text: "No source code available for this project as it has been done for personal purposes.",
            localizationKey: "personal-work-desc",
        },
        buttons: [],
    },
    {
        media: [
            { url: "img/dcbot.jpeg", alt: "Discord Bot Logo", isVideo: false },
        ],
        tags: ["cs", "bot"],
        title: {
            text: "Discord Bot for Project Zomboid Server Management",
            localizationKey: "pz-server-discord-bot-title",
        },
        desc: {
            text: "A discord bot I have written for managing <strong>Project Zomboid</strong> server console remotely through discord using <strong>C#</strong> and <strong>Discord.NET</strong> library. Also, this bot adds more functionality to the server that normally aren't available such as automated server restarts every 6 hours, mod update detections, auto start in case of server dying, etc.",
            localizationKey: "pz-server-discord-bot-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [
            {
                url: "https://github.com/egebilecen/PZServerDiscordBot",
                text: "GitHub",
                icon: "fa-brands fa-github",
            },
        ],
    },
    {
        media: [
            {
                url: "img/crypto-tracker.jpeg",
                alt: "Crypto Tracker Notification Example",
                isVideo: false,
            },
        ],
        tags: ["php", "bot"],
        title: {
            text: "Crypto Coin Tracker",
            localizationKey: "crypto-coin-tracker-title",
        },
        desc: {
            text: "In this project, I did write a <strong>PHP</strong> cronjob script to periodically check a few crypto coin's change percentages and send push notifications to the users via an app called <strong>Catapush</strong> (using their API) if the percentage change is above or below the specified threshold using <strong>CoinMarketCap</strong> API.",
            localizationKey: "crypto-coin-tracker-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [],
    },
    {
        media: [
            {
                url: "img/nwn.png",
                alt: "Portrait Generation Application UI",
                isVideo: false,
            },
        ],
        tags: ["cs", "windows-forms"],
        title: {
            text: "Portrait Generation Application",
            localizationKey: "nwn-portrait-program-title",
        },
        desc: {
            text: "A program I have written for <strong>Neverwinter Nights</strong> game to automatically generate portraits from selected portrait (image) that matches with the game's portrait size rules. I did use <strong>C#</strong> and <strong>Windows Forms</strong> for this application. It also features cropping based on portrait size (This game has four different portrait sizes).",
            localizationKey: "nwn-portrait-program-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [
            {
                url: "https://github.com/egebilecen/arelith-portrait-maker",
                text: "GitHub",
                icon: "fa-brands fa-github",
            },
        ],
    },
    {
        media: [
            {
                url: "img/drone.png",
                alt: "Drone Simulation Demo",
                isVideo: false,
            },
        ],
        tags: ["html-css", "javascript"],
        title: {
            text: "2D Drone Swarm Simulation",
            localizationKey: "2d-drone-simulation-title",
        },
        desc: {
            text: "In this project, I did use <strong>HTML</strong>, <strong>CSS</strong> and <strong>Javascript</strong> to simulate swarm movement. At the time being, only 3 formations are available: Line, V and Circle. The algorithm for preventing drone to drone collisions aren't implemented yet.",
            localizationKey: "2d-drone-simulation-desc",
        },
        footer: {
            text: "<strong>Note for Demo:</strong><br> You can enable swarm movement by clicking to the most top right button. It is disabled as default for test purposes.",
            localizationKey: "2d-drone-simulation-note",
        },
        buttons: [
            {
                url: "https://github.com/egebilecen/eb-drone-swarm",
                text: "GitHub",
                icon: "fa-brands fa-github",
            },
            {
                url: "https://egebilecen.github.io/eb-drone-swarm/drone_swarm.html",
                text: "Demo",
                icon: "fa-solid fa-laptop",
            },
        ],
    },
    {
        media: [
            { url: "img/bill_gen.mp4", alt: "Bill Generator", isVideo: true },
        ],
        tags: ["cs", "windows-forms"],
        title: {
            text: "Bill Generator",
            localizationKey: "bill-generator-title",
        },
        desc: {
            text: "In this project, one can create a bill using the records stored in an excel file and drag-n-drop their headings to the spots they want to fill with the record on selected bill's picture. When the bill creation is done, all the records in the excel file will be placed on heading's dragged location and will be automatically printed out. I did use <strong>C#</strong> and <strong>Windows Forms</strong> for this application.",
            localizationKey: "bill-generator-desc",
        },
        footer: {
            text: "No source code available for this project as it has been done as freelance work.",
            localizationKey: "freelance-work-desc",
        },
        buttons: [],
    },
    {
        media: [{ url: "img/woz.png", alt: "Image of Game", isVideo: false }],
        tags: ["html-css", "javascript", "nodejs"],
        title: {
            text: "Browser Based 2D Multiplayer Game",
            localizationKey: "woz-title",
        },
        desc: {
            text: "In this 2D browser based multiplayer game project, I did use <strong>HTML</strong>, <strong>CSS</strong> and <strong>Javascript</strong> for the client side and <strong>NodeJS</strong> for the server side. Communication between client and server done using websockets. I did use <strong>Socket.IO</strong> library for this. Also character data stored on a <strong>MongoDB</strong> database.",
            localizationKey: "woz-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [
            {
                url: "https://github.com/egebilecen/world-of-zybrium",
                text: "GitHub",
                icon: "fa-brands fa-github",
            },
        ],
    },
    {
        media: [
            {
                url: "img/are-portal-1.png",
                alt: "Arelith Portal Tracker Demo 1",
                isVideo: false,
            },
            {
                url: "img/are-portal-2.png",
                alt: "Arelith Portal Tracker Demo 2",
                isVideo: false,
            },
            {
                url: "img/are-portal-3.png",
                alt: "Arelith Portal Tracker Demo 3",
                isVideo: false,
            },
            {
                url: "img/are-portal-4.png",
                alt: "Arelith Portal Tracker Demo 4",
                isVideo: false,
            },
        ],
        tags: ["php", "html-css", "javascript", "bot"],
        title: { text: "Arelith Portal Tracker", localizationKey: "" },
        desc: {
            text: "A <strong>PHP</strong> and <strong>MySQL</strong> based statistics panel for tracking a game's user activity. To track the user activity, I did write a <strong>PHP</strong> cronjob script that runs every 15 minutes to save the activity into database.",
            localizationKey: "arelith-portal-tracker-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [
            {
                url: "https://github.com/egebilecen/arelith-portal-tracker",
                text: "GitHub",
                icon: "fa-brands fa-github",
            },
        ],
    },
    {
        media: [
            {
                url: "img/thomas.png",
                alt: "Business Management Panel Demo",
                isVideo: false,
            },
        ],
        tags: ["php", "html-css", "javascript"],
        title: {
            text: "Business Management Panel",
            localizationKey: "business-management-panel-title",
        },
        desc: {
            text: "A <strong>PHP</strong> and <strong>MySQL</strong> based management panel for a business' requirements.",
            localizationKey: "business-management-panel-desc",
        },
        footer: {
            text: "No source code available for this project as it has been done as freelance work.",
            localizationKey: "freelance-work-desc",
        },
        buttons: [],
    },
    {
        media: [
            {
                url: "img/expense.png",
                alt: "Application Image",
                isVideo: false,
            },
        ],
        tags: ["cs", "windows-forms"],
        title: {
            text: "Grocery Expense Tracker",
            localizationKey: "grocery-expense-tracker-title",
        },
        desc: {
            text: "An application developed using <strong>C#</strong> and <strong>Windows Forms</strong> for tracking daily grocery expenses.",
            localizationKey: "grocery-expense-tracker-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [
            {
                url: "https://github.com/egebilecen/grocery-expense-tracker",
                text: "GitHub",
                icon: "fa-brands fa-github",
            },
        ],
    },
    {
        media: [
            {
                url: "img/le.png",
                alt: "Last Epoc Save Importer / Exporter UI",
                isVideo: false,
            },
        ],
        tags: ["cs", "windows-forms"],
        title: {
            text: "Last Epoch Save Importer / Exporter",
            localizationKey: "",
        },
        desc: {
            text: "An application developed for <strong>Last Epoch</strong> game using <strong>C#</strong> and <strong>Windows Forms</strong>. It exports the save data located in registry and imports the save data using exported registry data.",
            localizationKey: "last-epoch-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [
            {
                url: "https://github.com/egebilecen/last-epoch-save-importer-exporter",
                text: "GitHub",
                icon: "fa-brands fa-github",
            },
        ],
    },
    {
        media: [
            {
                url: "img/ext1.png",
                alt: "Javascript Code Executor Chrome Extension Demo",
                isVideo: false,
            },
        ],
        tags: ["html-css", "javascript", "chrome-extension"],
        title: { text: "Javascript Code Executor", localizationKey: "" },
        desc: {
            text: "An extension I have written for <strong>Google Chrome</strong> using <strong>HTML</strong>, <strong>CSS</strong> and <strong>Javascript</strong>. Purpose of this extension is to execute arbitrary code when specific events occur on specific elements.",
            localizationKey: "js-code-executor-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [],
    },
    {
        media: [
            {
                url: "img/ext2.jpg",
                alt: "English / Japanese Translator Chrome Extension Demo",
                isVideo: false,
            },
        ],
        tags: ["html-css", "javascript", "chrome-extension"],
        title: {
            text: "English / Japanese Translate",
            localizationKey: "english-japanese-translate-title",
        },
        desc: {
            text: "An extension I have written for <strong>Google Chrome</strong> using <strong>HTML</strong>, <strong>CSS</strong> and <strong>Javascript</strong>. Purpose of this extension is to easily get the translation of a japanese word by just selecting it. One can also perform a word search by clicking to the extension icon and writing the japanese word they want to search. Then the results will be listed below.",
            localizationKey: "english-japanese-translate-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [
            {
                url: "https://chrome.google.com/webstore/detail/japaneseenglish-word-sear/nmjocikfhpbjdboijgejckifnecganco",
                text: "View",
                icon: "fa-solid fa-eye",
            },
        ],
    },
    {
        media: [
            {
                url: "img/mangaku.jpg",
                alt: "Android Application UI",
                isVideo: false,
            },
        ],
        tags: ["php", "html-css", "cordova"],
        title: {
            text: "Manga Reading Application",
            localizationKey: "manga-app-title",
        },
        desc: {
            text: "A manga reading app developed for <strong>Android</strong> using <strong>Cordova</strong>. For user requests, I wrote a <strong>PHP</strong> based API. And to automate the manga updates, I did write several <strong>PHP</strong> cronjob scripts.",
            localizationKey: "manga-app-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [
            {
                url: "https://github.com/egebilecen/mangaku",
                text: "GitHub",
                icon: "fa-brands fa-github",
            },
        ],
    },
    {
        media: [
            {
                url: "img/ftb.png",
                alt: "Finger the Balloons Game Demo",
                isVideo: false,
            },
        ],
        tags: ["html-css", "cordova"],
        title: { text: "Finger The Balloons", localizationKey: "" },
        desc: {
            text: "A game application developed for <strong>Android</strong> using <strong>Cordova</strong>. My main purpose for developing this application was to observe the performance of <strong>HTML5 canvas</strong> in a <strong>webview application</strong> and touch point detection accuracy.",
            localizationKey: "finger-the-balloons-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [
            {
                url: "https://github.com/egebilecen/fingerTheBalloons",
                text: "GitHub",
                icon: "fa-brands fa-github",
            },
        ],
    },
    {
        media: [{ url: "img/python.png", alt: "Python Logo", isVideo: false }],
        tags: ["python"],
        title: { text: "Websocket Server", localizationKey: "" },
        desc: {
            text: "<strong>Python</strong> server library for the <strong>RFC6455 Websocket Protocol</strong>.",
            localizationKey: "websocket-python-server-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [
            {
                url: "https://github.com/egebilecen/pywebsocket",
                text: "GitHub",
                icon: "fa-brands fa-github",
            },
        ],
    },
    {
        media: [{ url: "img/mod.jpg", alt: "Mod Logo", isVideo: false }],
        tags: ["lua", "game-mod"],
        title: { text: "Project Zomboid - ReviveMP", localizationKey: "" },
        desc: {
            text: "A mod I created using <strong>Lua</strong> for <strong>Project Zomboid</strong> game.",
            localizationKey: "project-zomboid-mod-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [
            {
                url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2792421325",
                text: "Steam",
                icon: "fa-brands fa-steam",
            },
        ],
    },
    {
        media: [{ url: "img/mod.jpg", alt: "Mod Logo", isVideo: false }],
        tags: ["lua", "game-mod"],
        title: {
            text: "Project Zomboid - ReviveMP Add-on - Permanent Injuries",
            localizationKey: "",
        },
        desc: {
            text: "A mod I created using <strong>Lua</strong> for <strong>Project Zomboid</strong> game.",
            localizationKey: "project-zomboid-mod-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [
            {
                url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2792422645",
                text: "Steam",
                icon: "fa-brands fa-steam",
            },
        ],
    },
    {
        media: [{ url: "img/mod.jpg", alt: "Mod Logo", isVideo: false }],
        tags: ["lua", "game-mod"],
        title: {
            text: "Project Zomboid - Save It To Server!",
            localizationKey: "",
        },
        desc: {
            text: "A mod I created using <strong>Lua</strong> for <strong>Project Zomboid</strong> game.",
            localizationKey: "project-zomboid-mod-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [
            {
                url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2791332578",
                text: "Steam",
                icon: "fa-brands fa-steam",
            },
        ],
    },
    {
        media: [{ url: "img/mod.jpg", alt: "Mod Logo", isVideo: false }],
        tags: ["lua", "game-mod"],
        title: { text: "Project Zomboid - Send Over!", localizationKey: "" },
        desc: {
            text: "A mod I created using <strong>Lua</strong> for <strong>Project Zomboid</strong> game.",
            localizationKey: "project-zomboid-mod-desc",
        },
        footer: { text: null, localizationKey: null },
        buttons: [
            {
                url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2796306693",
                text: "Steam",
                icon: "fa-brands fa-steam",
            },
        ],
    },
];
