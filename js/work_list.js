function _workText(text, localizationKey) {
    return {
        text,
        localizationKey,
    };
}

function _workMedia(url, alt, isVideo = false) {
    return {
        url,
        alt,
        isVideo,
    };
}

function _workButton(text, icon, url) {
    return {
        text,
        icon,
        url,
    };
}

function _workItem(media, title, tags, desc, footer, button) {
    return {
        media,
        title,
        tags,
        desc,
        footer,
        button,
    };
}

const WORK_LIST = [
    _workItem(
        [_workMedia("img/mesh.png", "Mesh Network System Overview")],
        _workText(
            "Home Automation with Mesh Network",
            "mesh-network-home-title"
        ),
        ["cs", "xamarin-forms", "ros", "automation"],
        _workText(
            "In this project, a mesh network has been created for published data from several sensors that are placed separately from each other in order to reach the <strong>System on Chip</strong> system in the house that is acting as a server. These sensor data will then be published to the mobile application that is connected to the server via <strong>Websocket</strong>. I choosed <strong>Raspberry PI 3</strong> as <strong>SoC</strong> because of it's cheap price. <strong>painlessMesh</strong> library is used for creating the mesh network. <strong>NodeMCU</strong> IoT platform is used for the nodes in mesh network. Mobile application connects to the server using it's local IP address in WiFi network. Communication between root node and server is done by using <strong>ROS</strong>. Root node sends all sensor data from child nodes via <strong>ROS Serial</strong> library. Root node is connected to the server via physical cable. Reason of this is <strong>NodeMCU</strong> being unable to connect more than one WiFi network. (Meanwhile <strong>painlessMesh</strong> itself creates an access point, <strong>ROS Serial</strong> library attempts to connect to an exist WiFi network. This causes these two library to conflict with each other.) Mobile application is developed using <strong>Xamarin Forms</strong> to be cross-platform application.",
            "mesh-network-home-desc"
        ),
        _workText(
            "No source code available for this project as it has been done as assignment in my collage.",
            "mesh-network-home-note"
        ),
        null
    ),
    _workItem(
        [_workMedia("img/eb.png", "House Automation Application Interface")],
        _workText("Home Automation", "home-automation-title"),
        ["cpp", "html-css", "cordova", "automation"],
        _workText(
            "In this project, I did use <strong>NodeMCU</strong> IoT platform to connect to the WiFi network of the house, get data from connected sensors (temperature sensor, movement detection sensor etc.) periodically and store them on my database in a hosting using a <strong>PHP</strong> based API I did write. I did also use <strong>C++</strong> for the firmware of <strong>NodeMCU</strong>. In addition, I used <strong>Cordova</strong> to create a mobile webview application for <strong>Android</strong> using <strong>HTML</strong>, <strong>CSS</strong> and <strong>Javascript</strong>. All of the sensor data can be tracked in this application. This application also allows user to extensively update settings of all components. Such as updating sensor status (activated / deactivated), changing their polling rates and even adding sleep time (this can be useful to prevent notification spam for sensors like movement detection sensor as <strong>NodeMCU</strong> sends notification to the application every time sensor is triggered).",
            "home-automation-desc"
        ),
        _workText(
            `Application pictures are under the "<strong>home_controller_app</strong>" directory of GitHub repo.`,
            "home-automation-note"
        ),
        [_workButton("GitHub", "fa-brands fa-github", "https://github.com/egebilecen/eb-home-automation")]
    ),
];
