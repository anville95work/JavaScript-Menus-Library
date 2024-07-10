var showDebugDialogMessages = true;

function disableDeduggingDialogs() {
	showDebugDialogMessages = false;
}

function enableDebuggingDialogs() {
	showDebugDialogMessages = true;
}

var hasAddedAnvilleStyle = false;

function appendMenuAnvilleStyle() {
	let menuStyleString = "#anvilleAppBar {";
	menuStyleString += "display: table;";
	menuStyleString += "width: 100%;";
	menuStyleString += "min-height: 0.9rem;";
	menuStyleString += "background: #ffa50010;";
	menuStyleString += "border-radius: 0.3rem;";
	menuStyleString += "border: solid 1px orange;";
	menuStyleString += "}";

	menuStyleString += ".anvillehiddenScrollBarElements {";
	menuStyleString += "scrollbar-face-color: ThreeDFace !important;";
	menuStyleString += "scrollbar-shadow-color: ThreeDDarkShadow !important;";
	menuStyleString += "scrollbar-highlight-color: ThreeDHighlight !important;";
	menuStyleString += "scrollbar-3dlight-color: ThreeDLightShadow !important;";
	menuStyleString += "scrollbar-darkshadow-color: ThreeDDarkShadow !important;";
	menuStyleString += "scrollbar-track-color: Scrollbar !important;";
	menuStyleString += "scrollbar-arrow-color: ButtonText !important;";
	menuStyleString += "-ms-overflow-style: none;";
	menuStyleString += "scrollbar-width: none;";
	menuStyleString += "}";

	menuStyleString += ".anvillehiddenScrollBarElements::-webkit-scrollbar {";
	menuStyleString += "display: none;";
	menuStyleString += "}";

	menuStyleString += "#anvilleAppBar img {";
	menuStyleString += "cursor: pointer;";
	menuStyleString += "height: 0.8rem;";
	menuStyleString += "margin: 0.1rem 0.3rem;";
	menuStyleString += "}";

	menuStyleString += ".anvilleAppBarButtonsContainer {";
	menuStyleString += "display: inline-table;";
	menuStyleString += "}";

	menuStyleString += ".anvilleActionModeButtons {";
	menuStyleString += "display: none;";
	menuStyleString += "}";

	menuStyleString += ".anvilleOptionsButton div {";
	menuStyleString += "display: table;";
	menuStyleString += "background: orange;";
	menuStyleString += "width: 0.8rem;";
	menuStyleString += "height: 2px;";
	menuStyleString += "margin: 0.12rem 0rem;";
	menuStyleString += "}";

	menuStyleString += ".anvilleOptionsButton {";
	menuStyleString += "cursor: pointer;";
	menuStyleString += "margin: 0.2rem;";
	menuStyleString += "float: right;";
	menuStyleString += "}";

	menuStyleString += ".anvilleMenu {";
	menuStyleString += "display: none;";
	menuStyleString += "position: fixed;";
	menuStyleString += "padding: 1rem 0.7rem;";
	menuStyleString += "border: solid 1px orange;";
	menuStyleString += "background: #301a00ca;";
	menuStyleString += "border-radius: 0.4rem 0rem 0.4rem 0.4rem;";
	menuStyleString += "user-select: none;";
	menuStyleString += "z-index: 12;";
	menuStyleString += "}";

	menuStyleString += ".anvilleOptionsMenu {";
	menuStyleString += "top: 0.2rem;";
	menuStyleString += "right: 0.3rem;";
	menuStyleString += "}";

	menuStyleString += ".anvilleMenu div {";
	menuStyleString += "display: table;";
	menuStyleString += "user-select: none;";
	menuStyleString += "margin: 0.5rem 0rem;";
	menuStyleString += "}";

	menuStyleString += ".anvilleMenu div input, .anvilleOptionsMenu div img {";
	menuStyleString += "display: inline;";
	menuStyleString += "vertical-align: top;";
	menuStyleString += "margin: 0rem 0.2rem;";
	menuStyleString += "user-select: none;";
	menuStyleString += "}";

	menuStyleString += ".anvilleMenu img {";
	menuStyleString += "height: 0.7rem;";
	menuStyleString += "cursor: pointer;";
	menuStyleString += "padding-top: 0.3rem;";
	menuStyleString += "user-select: none;";
	menuStyleString += "}";

	menuStyleString += ".anvilleMenu h5 {";
	menuStyleString += "color: orange;";
	menuStyleString += "font-size: 0.8rem;";
	menuStyleString += "font-weight: bolder;";
	menuStyleString += "display: table;";
	menuStyleString += "margin: 0rem auto;";
	menuStyleString += "margin-bottom: 1rem;";
	menuStyleString += "white-space: normal;";
	menuStyleString += "border: none;";
	menuStyleString += "border-bottom: solid 1px orange;";
	menuStyleString += "width: 6rem;";
	menuStyleString += "max-width: 6rem;";
	menuStyleString += "text-align: center;";
	menuStyleString += "}";

	menuStyleString += ".anvilleButtons {";
	menuStyleString += "font-size: 0.7rem;";
	menuStyleString += "color: orange;";
	menuStyleString += "border: solid 1px orange;";
	menuStyleString += "padding: 0.2rem 0.3rem;";
	menuStyleString += "background: #ffa50040;";
	menuStyleString += "cursor: pointer;";
	menuStyleString += "border-radius: 0.3rem;";
	menuStyleString += "width: 6rem;";
	menuStyleString += "max-width: 6rem;";
	menuStyleString += "}";

	menuStyleString += ".anvilleButtons:hover {";
	menuStyleString += "background: #ffa50090;";
	menuStyleString += "}";

	menuStyleString += ".anvilleButtons:active {";
	menuStyleString += "background: orange;";
	menuStyleString += "}";

	menuStyleString += ".anvilleButtons:focus {";
	menuStyleString += "outline: none;";
	menuStyleString += "}";

	menuStyleString += ".anvillePopupMenu {";
	menuStyleString += "border-radius: 0.4rem;";
	menuStyleString += "}";

	menuStyleString += ".anvilleContextMenu {";
	menuStyleString += "/*Nothing here yet actually*/";
	menuStyleString += "}";

	menuStyleString += "#anvillebackgroundTint {";
	menuStyleString += "display: none;";
	menuStyleString += "width: 100vw;";
	menuStyleString += "height: 100vh;";
	menuStyleString += "background-color: #000a;";
	menuStyleString += "position: fixed;";
	menuStyleString += "top: 0;";
	menuStyleString += "left: 0;";
	menuStyleString += "z-index: 9;";
	menuStyleString += "}";

	menuStyleString += ".anvillepopupContainer {";
	menuStyleString += "display: none;";
	menuStyleString += "position: fixed;";
	menuStyleString += "top: 0;";
	menuStyleString += "left: 0;";
	menuStyleString += "height: 100vh;";
	menuStyleString += "width: 100vh;";
	menuStyleString += "z-index: 12;";
	menuStyleString += "}";

	menuStyleString += ".anvillepopupContainerChild {";
	menuStyleString += "display: table-cell;";
	menuStyleString += "vertical-align: middle;";
	menuStyleString += "}";

	menuStyleString += ".anvillepopupContainerChildChild {";
	menuStyleString += "display: table;";
	menuStyleString += "width: 100vw;";
	menuStyleString += "}";

	menuStyleString += ".anvillepopup {";
	menuStyleString += "display: none;";
	menuStyleString += "margin: 0vh auto;";
	menuStyleString += "height: 20vh;";
	menuStyleString += "width: 70vw;";
	menuStyleString += "background: transparent;";
	menuStyleString += "}";

	menuStyleString += ".anvillepopupBorderRow {";
	menuStyleString += "display: table;";
	menuStyleString += "white-space: nowrap;";
	menuStyleString += "}";

	menuStyleString += ".anvilleborderDiv, .anvilleborderDivSpacer {";
	menuStyleString += "display: inline-table;";
	menuStyleString += "height: 10vh;";
	menuStyleString += "background: transparent;";
	menuStyleString += "}";

	menuStyleString += ".anvilleborderDiv {";
	menuStyleString += "width: 15vw;";
	menuStyleString += "}";

	menuStyleString += ".anvilletopLeft {";
	menuStyleString += "border-top: solid 3px gold;";
	menuStyleString += "border-left: solid 3px gold;";
	menuStyleString += "border-radius: 2vh 0vh 0vh 0vh;";
	menuStyleString += "}";

	menuStyleString += ".anvilletopRight {";
	menuStyleString += "border-top: solid 3px gold;";
	menuStyleString += "border-right: solid 3px gold;";
	menuStyleString += "border-radius: 0vh 2vh 0vh 0vh;";
	menuStyleString += "}";

	menuStyleString += ".anvillebottomLeft {";
	menuStyleString += "border-bottom: solid 3px gold;";
	menuStyleString += "border-left: solid 3px gold;";
	menuStyleString += "border-radius: 0vh 0vh 0vh 2vh;";
	menuStyleString += "}";

	menuStyleString += ".anvillebottomRight {";
	menuStyleString += "border-bottom: solid 3px gold;";
	menuStyleString += "border-right: solid 3px gold;";
	menuStyleString += "border-radius: 0vh 0vh 2vh 0vh;";
	menuStyleString += "}";

	menuStyleString += ".anvilleborderDivSpacer {";
	menuStyleString += "width: 40vw;";
	menuStyleString += "}";

	menuStyleString += ".anvillepopupContentContainer {";
	menuStyleString += "display: table;";
	menuStyleString += "width: 40vw;";
	menuStyleString += "height: 40vh;";
	menuStyleString += "background-color: #ffd70022;";
	menuStyleString += "border: solid 1px gold;";
	menuStyleString += "border-radius: 2vh;";
	menuStyleString += "margin: 0vh auto;";
	menuStyleString += "}";

	menuStyleString += ".anvillepopupTitle {";
	menuStyleString += "width: 38vw;";
	menuStyleString += "display: table;";
	menuStyleString += "margin: 1vh auto;";
	menuStyleString += "color: gold;";
	menuStyleString += "font-size: 2vh;";
	menuStyleString += "text-align: center;";
	menuStyleString += "border: none;";
	menuStyleString += "border-bottom: solid 1px gold;";
	menuStyleString += "background: transparent;";
	menuStyleString += "}";

	menuStyleString += ".anvillepopupTitle:focus {";
	menuStyleString += "outline: none;";
	menuStyleString += "}";

	menuStyleString += ".anvillepopupText {";
	menuStyleString += "display: flex;";
	menuStyleString += "flex-direction: column;";
	menuStyleString += "overflow-x: hidden;";
	menuStyleString += "overflow-y: scroll;";
	menuStyleString += "width: 40vw;";
	menuStyleString += "height: 34vh;";
	menuStyleString += "border: solid 1px gold;";
	menuStyleString += "border-radius: 0vh;";
	menuStyleString += "}";

	menuStyleString += ".anvillepopupTextChild {";
	menuStyleString += "font-size: 1.9vh;";
	menuStyleString += "color: gold;";
	menuStyleString += "display: table;";
	menuStyleString += "width: 39vw;";
	menuStyleString += "margin: 0vh auto;";
	menuStyleString += "white-space: normal;";
	menuStyleString += "border: none;";
	menuStyleString += "text-align: start;";
	menuStyleString += "}";


	menuStyleString += ".anvillepopupTextChild li {";
	menuStyleString += "width: 37vw;";
	menuStyleString += "white-space: normal;";
	menuStyleString += "}";

	menuStyleString += ".anvillepopupTextChild code {";
	menuStyleString += "display: table;";
	menuStyleString += "font-size: 1.8vh;";
	menuStyleString += "color: orange;";
	menuStyleString += "margin-left: 1rem;";
	menuStyleString += "background-color: #ffd70010;";
	menuStyleString += "white-space: pre;";
	menuStyleString += "border-radius: 1.5vh;";
	menuStyleString += "}";
	menuStyleString += ".anvillepopupTextChild h6 {";
	menuStyleString += "display: table;";
	menuStyleString += "text-align: center;";
	menuStyleString += "font-size: 2.1vh;";
	menuStyleString += "text-decoration: none;";
	menuStyleString += "padding: 0.5vh 1vw;";
	menuStyleString += "border: dotted 1px orange;";
	menuStyleString += "background-color: #ffd70030;";
	menuStyleString += "margin: 0vh auto;";
	menuStyleString += "margin-top: 1vh;";
	menuStyleString += "}";

	menuStyleString += ".anvilleshowHelpButtonsContainer {";
	menuStyleString += "display: table;";
	menuStyleString += "margin: 1vh auto;";
	menuStyleString += "}";

	menuStyleString += ".anvilleshowHelpButtonsContainer input[type=\"button\"] {";
	menuStyleString += "display: inline-table;";
	menuStyleString += "font-size: 1.7vh;";
	menuStyleString += "color: gold;";
	menuStyleString += "padding: 1vh 2vw;";
	menuStyleString += "margin: 0vh 0.4vw;";
	menuStyleString += "width: 18vw;";
	menuStyleString += "border-radius: 1.2vh;";
	menuStyleString += "border: solid 1px gold;";
	menuStyleString += "}";

	menuStyleString += ".anvilleButtons {";
	menuStyleString += "background-color: transparent;";
	menuStyleString += "cursor: pointer;";
	menuStyleString += "user-select: none;";
	menuStyleString += "}";

	menuStyleString += ".anvilleButtons:hover {";
	menuStyleString += "background-color: #ffd70040;";
	menuStyleString += "}";

	menuStyleString += ".anvilleButtons:active {";
	menuStyleString += "background-color: gold;";
	menuStyleString += "}";

	menuStyleString += ".anvillenonSwipableTabs {";
	menuStyleString += "display: none;";
	menuStyleString += "scroll-snap-align: none;";
	menuStyleString += "scroll-snap-stop: none;";
	menuStyleString += "}";

	let menuStyleElement = document.createElement("style");
	menuStyleElement.innerText = menuStyleString;
	document.body.appendChild(menuStyleElement);

	let anvillepopupElementsString="<div id=\"anvillebackgroundTint\"></div>";
	
	anvillepopupElementsString += "<div class=\"anvillepopupContainer\">";
	anvillepopupElementsString += "    <div class=\"anvillepopupContainerChild\">";
	anvillepopupElementsString += "        <div class=\"anvillepopupContainerChildChild\">";

	anvillepopupElementsString += "            <div id=\"anvilleerrorDiv\" class=\"anvillepopup\">";
	anvillepopupElementsString += "                <div class=\"anvillepopupBorderRow\">";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDiv anvilletopLeft\"></div>";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDivSpacer\"></div>";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDiv anvilletopRight\"></div>";
	anvillepopupElementsString += "                </div>";
	anvillepopupElementsString += "                <div class=\"anvillepopupContentContainer\">";
	anvillepopupElementsString += "                    <input class=\"anvillepopupTitle\" type=\"text\" value=\"POPUP_TITLE\">";
	anvillepopupElementsString += "                    <div class=\"anvillepopupText anvillehiddenScrollBarElements\">";
	anvillepopupElementsString += "                        <div class=\"anvillepopupTextChild\">";
	anvillepopupElementsString += "                        </div>";
	anvillepopupElementsString += "                    </div>";
	anvillepopupElementsString += "                    <div class=\"anvilleshowHelpButtonsContainer\">";
	anvillepopupElementsString += "                        <input id=\"anvilleShowAllFunctionsButton\" class=\"anvilleButtons\" type=\"button\" value=\"Functions\">";
	anvillepopupElementsString += "                        <input id=\"anvilleShowDocumentationButton\" class=\"anvilleButtons\" type=\"button\" value=\"Documentation\">";
	anvillepopupElementsString += "                    </div>";
	anvillepopupElementsString += "                </div>";
	anvillepopupElementsString += "                <div class=\"anvillepopupBorderRow\">";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDiv anvillebottomLeft\"></div>";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDivSpacer\"></div>";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDiv anvillebottomRight\"></div>";
	anvillepopupElementsString += "                </div>";
	anvillepopupElementsString += "            </div>";

	anvillepopupElementsString += "            <div id=\"anvillefunctionsListDiv\" class=\"anvillepopup\">";
	anvillepopupElementsString += "                <div class=\"anvillepopupBorderRow\">";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDiv anvilletopLeft\"></div>";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDivSpacer\"></div>";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDiv anvilletopRight\"></div>";
	anvillepopupElementsString += "                </div>";
	anvillepopupElementsString += "                <div class=\"anvillepopupContentContainer\">";
	anvillepopupElementsString += "                    <input class=\"anvillepopupTitle\" type=\"text\" value=\"ALL_FUNCTIONS\">";
	anvillepopupElementsString += "                    <div class=\"anvillepopupText anvillehiddenScrollBarElements\">";
	anvillepopupElementsString += "                        <div class=\"anvillepopupTextChild\">";
	anvillepopupElementsString += "    							<li>";
	anvillepopupElementsString += "    SHORT CUTS CUT YOUR LIFE SHORT. PLEASE TAKE A LOOK AT THE DOCUMENTATION, IT'S ONLY 9 STEPS AND VERY SHORT. CALL showDocumentation()";
	anvillepopupElementsString += "    							</li>";

	anvillepopupElementsString += "                        </div>";
	anvillepopupElementsString += "                    </div>";
	anvillepopupElementsString += "                </div>";
	anvillepopupElementsString += "                <div class=\"anvillepopupBorderRow\">";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDiv anvillebottomLeft\"></div>";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDivSpacer\"></div>";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDiv anvillebottomRight\"></div>";
	anvillepopupElementsString += "                </div>";
	anvillepopupElementsString += "            </div>";

	anvillepopupElementsString += "            <div id=\"anvilledocumentationDiv\" class=\"anvillepopup\">";
	anvillepopupElementsString += "                <div class=\"anvillepopupBorderRow\">";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDiv anvilletopLeft\"></div>";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDivSpacer\"></div>";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDiv anvilletopRight\"></div>";
	anvillepopupElementsString += "                </div>";
	anvillepopupElementsString += "                <div class=\"anvillepopupContentContainer\">";
	anvillepopupElementsString += "                    <input class=\"anvillepopupTitle\" type=\"text\" value=\"DOCUMENTATION\">";
	anvillepopupElementsString += "                    <div class=\"anvillepopupText anvillehiddenScrollBarElements\">";
	anvillepopupElementsString += "                        <div class=\"anvillepopupTextChild\">";

	//==================================================================================
	anvillepopupElementsString += "                            <h6>1. Types of Menus in this library.</h6>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                            There are three types of menus here:";
	anvillepopupElementsString += "                            </li>";
	anvillepopupElementsString += "                            <ul>";
	anvillepopupElementsString += "                                <li>Options menu: This type of menu appears at the top right corner. Only one of these is created. A subsequent creation will not override the initial.</li>";
	anvillepopupElementsString += "                                <li>Contect menu: This type of menu pops up anchored to the involved element. For this reason, the trigerring element should be passed to the method for showing context menu, otherwise the menu will appear at the center of the screen. Many context menus can be created and they are referenced using menu name. This allows creation of several context menus for handling several different elements.</li>";
	anvillepopupElementsString += "                                <li>Popup menu: This type of menu appears at the middle of the screen. Many popup menus can be created so as to be used in different several cases of use.</li>";
	anvillepopupElementsString += "                            </ul>";

	anvillepopupElementsString += "                            <h6>2. Creating an appBar only.</h6>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                            This can be simply done by calling the method as shown below, at its simplest, t can be called without any parameters.";
	anvillepopupElementsString += "                            </li>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                                <code>";
	anvillepopupElementsString += "    /*\n";
	anvillepopupElementsString += "A quick depiction of the method's parameters\n\n";
	anvillepopupElementsString += "    createAppBar(normalButtonsIconsSrcsArray,\n";
	anvillepopupElementsString += "        contextualButtonsIconsSrcsArray,\n";
	anvillepopupElementsString += "        normalItemClickListener,\n";
	anvillepopupElementsString += "        contextualItemClickListener,\n";
	anvillepopupElementsString += "        createOptionsMenuBoolean,\n";
	anvillepopupElementsString += "        optionsStringsArray,\n";
	anvillepopupElementsString += "        optionsIconsSrcsArray,\n";
	anvillepopupElementsString += "        optionSelectedListener\n";
	anvillepopupElementsString += "    )\n";
	anvillepopupElementsString += "    */\n";
	anvillepopupElementsString += "    createAppBar();";
	anvillepopupElementsString += "                                </code>";
	anvillepopupElementsString += "                            </li>";

	anvillepopupElementsString += "                            <h6>3. Creation of appBar with norman icon buttons</h6>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                            The appBar can be created with normal icon buttons in it by passing the src's for the respective icon buttons in the method. This process is depicted below.";
	anvillepopupElementsString += "                            </li>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                                <code>";
	anvillepopupElementsString += "    let normalButtonsIconsSrcsArray = {\n";
	anvillepopupElementsString += "        0: \"../images/vlc.png\",\n";
	anvillepopupElementsString += "        1: \"../images/eye-closed.png\",\n";
	anvillepopupElementsString += "        2: \"../images/eye-open.png\",\n";
	anvillepopupElementsString += "        3: \"../images/logo.png\",\n";
	anvillepopupElementsString += "        4: \"../images/password.png\",\n";
	anvillepopupElementsString += "        5: \"../images/send-message.png\",\n";
	anvillepopupElementsString += "        length: 6\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    createAppBar(\n";
	anvillepopupElementsString += "        normalButtonsIconsSrcsArray,\n";
	anvillepopupElementsString += "        undefined, (index) => {\n";
	anvillepopupElementsString += "        console.log(\"an icon was clicked: \" + index);\n";
	anvillepopupElementsString += "    });";
	anvillepopupElementsString += "                                </code>";
	anvillepopupElementsString += "                            </li>";

	anvillepopupElementsString += "                            <h6>4. Create appBar with normal icon buttons and contextual icon buttons</h6>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                            The contextual buttons are similar to android's contextual action mode's menu items but in this case you toggle the contextual mode yourself. An example is as shown below.";
	anvillepopupElementsString += "                            </li>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                                <code>";
	anvillepopupElementsString += "    let normalButtonsIconsSrcsArray = {\n";
	anvillepopupElementsString += "        0: \"../images/vlc.png\",\n";
	anvillepopupElementsString += "        1: \"../images/eye-closed.png\",\n";
	anvillepopupElementsString += "        2: \"../images/eye-open.png\",\n";
	anvillepopupElementsString += "        3: \"../images/logo.png\",\n";
	anvillepopupElementsString += "        4: \"../images/password.png\",\n";
	anvillepopupElementsString += "        5: \"../images/send-message.png\",\n";
	anvillepopupElementsString += "        length: 6\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    let contextualButtonsIconsSrcsArray = {\n";
	anvillepopupElementsString += "        0: \"../images/anville-cyan.png\",\n";
	anvillepopupElementsString += "        1: \"../images/calculator-logo.png\",\n";
	anvillepopupElementsString += "        2: \"../images/blue-jet.png\",\n";
	anvillepopupElementsString += "        length: 3\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    createAppBar(\n";
	anvillepopupElementsString += "        normalButtonsIconsSrcsArray,\n";
	anvillepopupElementsString += "        contextualButtonsIconsSrcsArray,\n";
	anvillepopupElementsString += "        (index) => {\n";
	anvillepopupElementsString += "            console.log(\"A normal icon button was clicked\", \"index: \" + index);\n";
	anvillepopupElementsString += "        }, (index) => {\n";
	anvillepopupElementsString += "            console.log(\"A contextual icon button was clicked\", \"index: \" + index);\n";
	anvillepopupElementsString += "    });\n";
	anvillepopupElementsString += "    //toggling contextual mode\n";
	anvillepopupElementsString += "    var isContextualModeOn = false;\n";
	anvillepopupElementsString += "    let toggleContextualMode = document.getElementById(\"toggleContextualMode\");\n";
	anvillepopupElementsString += "    toggleContextualMode.onclick = () => {\n";
	anvillepopupElementsString += "        if(isContextualModeOn) {\n";
	anvillepopupElementsString += "            turnOffContextualMode();\n";
	anvillepopupElementsString += "            isContextualModeOn = false;\n";
	anvillepopupElementsString += "        } else {\n";
	anvillepopupElementsString += "            turnOnContextualMode();\n";
	anvillepopupElementsString += "            isContextualModeOn = true;\n";
	anvillepopupElementsString += "        }\n";
	anvillepopupElementsString += "    }";
	anvillepopupElementsString += "                                </code>";
	anvillepopupElementsString += "                            </li>";

	anvillepopupElementsString += "                            <h6>5. Adding appBar, normal and context icon buttos and options menu at the same time.</h6>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                            During the creation of the appBar, the arguments for options menu may be passed as well. This way the click listener of the toggleOptionsMenuButton on the appBar is automatically set. An example is as shown below";
	anvillepopupElementsString += "                            </li>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                                <code>";
	anvillepopupElementsString += "    let normalButtonsIconsSrcsArray = {\n";
	anvillepopupElementsString += "        0: \"../images/vlc.png\",\n";
	anvillepopupElementsString += "        1: \"../images/eye-closed.png\",\n";
	anvillepopupElementsString += "        2: \"../images/eye-open.png\",\n";
	anvillepopupElementsString += "        3: \"../images/logo.png\",\n";
	anvillepopupElementsString += "        4: \"../images/password.png\",\n";
	anvillepopupElementsString += "        5: \"../images/send-message.png\",\n";
	anvillepopupElementsString += "        length: 6\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    let contextualButtonsIconsSrcsArray = {\n";
	anvillepopupElementsString += "        0: \"../images/anville-cyan.png\",\n";
	anvillepopupElementsString += "        1: \"../images/calculator-logo.png\",\n";
	anvillepopupElementsString += "        2: \"../images/blue-jet.png\",\n";
	anvillepopupElementsString += "        length: 3\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    let createOptionsMenuBoolean = true;\n";
	anvillepopupElementsString += "    let optionsStringsArray = {\n";
	anvillepopupElementsString += "        0: \"vcl\",\n";
	anvillepopupElementsString += "        1: \"eye-closed\",\n";
	anvillepopupElementsString += "        2: \"eye-open\",\n";
	anvillepopupElementsString += "        3: \"logo\",\n";
	anvillepopupElementsString += "        4: \"password\",\n";
	anvillepopupElementsString += "        5: \"send-message\",\n";
	anvillepopupElementsString += "        length: 6\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    let optionsIconsSrcsArray = {\n";
	anvillepopupElementsString += "        0: \"../images/vlc.png\",\n";
	anvillepopupElementsString += "        1: \"../images/eye-closed.png\",\n";
	anvillepopupElementsString += "        2: \"../images/eye-open.png\",\n";
	anvillepopupElementsString += "        3: \"../images/logo.png\",\n";
	anvillepopupElementsString += "        4: \"../images/password.png\",\n";
	anvillepopupElementsString += "        5: \"../images/send-message.png\",\n";
	anvillepopupElementsString += "        length: 6\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    createAppBar(\n";
	anvillepopupElementsString += "        normalButtonsIconsSrcsArray,\n";
	anvillepopupElementsString += "        contextualButtonsIconsSrcsArray,\n";
	anvillepopupElementsString += "        (index) => {\n";
	anvillepopupElementsString += "            console.log(\"A normal icon button was clicked\", \"index: \" + index);\n";
	anvillepopupElementsString += "        }, (index) => {\n";
	anvillepopupElementsString += "            console.log(\"A contextual icon button was clicked\", \"index: \" + index);\n";
	anvillepopupElementsString += "        },\n";
	anvillepopupElementsString += "        createOptionsMenuBoolean,\n";
	anvillepopupElementsString += "        optionsStringsArray,\n";
	anvillepopupElementsString += "        optionsIconsSrcsArray,\n";
	anvillepopupElementsString += "        (index, name) => {\n";
	anvillepopupElementsString += "            console.log(\"An option was selected in the optionsMenu\");\n";
	anvillepopupElementsString += "            console.log(\"optionIndex\", index);\n";
	anvillepopupElementsString += "            console.log(\"optionName\", name);\n";
	anvillepopupElementsString += "    })";
	anvillepopupElementsString += "                                </code>";
	anvillepopupElementsString += "                            </li>";

	anvillepopupElementsString += "                            <h6>6. Creating Options menu Only</h6>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                            In this step, I will demonstrate how to solely create an options menu. This might be the case, suppose you do not use the inbuilt appBar. In this case, you will have to handle the showing of the menu and hiding if need be. However, the menu is automatically hidden when an item is selected or when the background tint view is clicked. An example is as follows:";
	anvillepopupElementsString += "                            </li>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                                <code>";
	anvillepopupElementsString += "    /*\n";
	anvillepopupElementsString += "    A depiction of the createOptionsMenu and its arguments\n";
	anvillepopupElementsString += "    createOptionsMenu(\n";
	anvillepopupElementsString += "        optionsStringsArray,\n";
	anvillepopupElementsString += "        optionsIconsSrcsArray,\n";
	anvillepopupElementsString += "        optionSelectedListener\n";
	anvillepopupElementsString += "    )";
	anvillepopupElementsString += "    */\n";
	anvillepopupElementsString += "    let optionsStringsArray = {\n";
	anvillepopupElementsString += "        0: \"vcl\",\n";
	anvillepopupElementsString += "        1: \"eye-closed\",\n";
	anvillepopupElementsString += "        2: \"eye-open\",\n";
	anvillepopupElementsString += "        3: \"logo\",\n";
	anvillepopupElementsString += "        4: \"password\",\n";
	anvillepopupElementsString += "        5: \"send-message\",\n";
	anvillepopupElementsString += "        length: 6\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    let optionsIconsSrcsArray = {\n";
	anvillepopupElementsString += "        0: \"../images/vlc.png\",\n";
	anvillepopupElementsString += "        1: \"../images/eye-closed.png\",\n";
	anvillepopupElementsString += "        2: \"../images/eye-open.png\",\n";
	anvillepopupElementsString += "        3: \"../images/logo.png\",\n";
	anvillepopupElementsString += "        4: \"../images/password.png\",\n";
	anvillepopupElementsString += "        5: \"../images/send-message.png\",\n";
	anvillepopupElementsString += "        length: 6\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    createOptionsMenu(\n";
	anvillepopupElementsString += "        optionsStringsArray,\n";
	anvillepopupElementsString += "        optionsIconsSrcsArray,\n";
	anvillepopupElementsString += "        (index, name) => {\n";
	anvillepopupElementsString += "            console.log(\"An option was selected in the optionsMenu\");\n";
	anvillepopupElementsString += "            console.log(\"optionIndex\", index);\n";
	anvillepopupElementsString += "            console.log(\"optionName\", name);\n";
	anvillepopupElementsString += "    })\n";
	anvillepopupElementsString += "    let toggleOptionsMenu = document.getElementById(\"toggleOptionsMenu\");\n";
	anvillepopupElementsString += "    toggleOptionsMenu.onclick = () => {\n";
	anvillepopupElementsString += "        //isOptionsMenuVisible is defined in the library\n";
	anvillepopupElementsString += "        if(isOptionsMenuVisible) {\n";
	anvillepopupElementsString += "            hideOptionsMenu();\n";
	anvillepopupElementsString += "        } else {\n";
	anvillepopupElementsString += "            showOptionsMenu();\n";
	anvillepopupElementsString += "        }\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "                                </code>";
	anvillepopupElementsString += "                            </li>";

	anvillepopupElementsString += "                            <h6>7. Adding context menus</h6>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                            Context menus are a little bit different from the options menus in terms of the required arguments. In addition to the ones provided for options menus, context menus require menu names. The context menus, upon invocation, anchor to the clicked view. Thus this view should be provided to the method for showing the context menu. Also, you will have to handle when to show the context menu and if need be, when to hide it; but also the context menu will be automatically hidden when a button in it is clicked or when the background tint view is clicked. You can add multiple context menus to handle different categoories of elements according to your preference. An example of all these operation is as follows:\n";
	anvillepopupElementsString += "                            </li>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                                <code>";
	anvillepopupElementsString += "    /*";
	anvillepopupElementsString += "    Below is a depiction of addNewContextMenu method and its arguments\n";
	anvillepopupElementsString += "    addNewContextMenu(\n";
	anvillepopupElementsString += "        menuName,\n";
	anvillepopupElementsString += "        contextMenuButtonsStringsArray,\n";
	anvillepopupElementsString += "        contextMenuButtonsIconsSrcs,\n";
	anvillepopupElementsString += "        itemClickListener\n";
	anvillepopupElementsString += "    )\n";
	anvillepopupElementsString += "    let contextMenuButtonsStringsArray = {\n";
	anvillepopupElementsString += "        0: \"vcl\",\n";
	anvillepopupElementsString += "        1: \"eye-closed\",\n";
	anvillepopupElementsString += "        2: \"eye-open\",\n";
	anvillepopupElementsString += "        length: 3\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    let contextMenuButtonsIconsSrcs = {\n";
	anvillepopupElementsString += "        0: \"../images/vlc.png\",\n";
	anvillepopupElementsString += "        1: \"../images/eye-closed.png\",\n";
	anvillepopupElementsString += "        2: \"../images/eye-open.png\",\n";
	anvillepopupElementsString += "        length: 3\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    let itemClickListener = (index, name, menuName) => {\n";
	anvillepopupElementsString += "        console.log(\"context menu named [\" + menuName + \"] was clicked!\");\n";
	anvillepopupElementsString += "        console.log(\"itemIndex\", index);\n";
	anvillepopupElementsString += "        console.log(\"itemName\", name);\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    addNewContextMenu(\n";
	anvillepopupElementsString += "        \"firstContextMenu\",\n";
	anvillepopupElementsString += "        contextMenuButtonsStringsArray,\n";
	anvillepopupElementsString += "        contextMenuButtonsIconsSrcs,\n";
	anvillepopupElementsString += "        itemClickListener\n";
	anvillepopupElementsString += "    );\n";
	anvillepopupElementsString += "    let secondContextMenuButtonsStringsArray = {\n";
	anvillepopupElementsString += "        0: \"logo\",\n";
	anvillepopupElementsString += "        1: \"password\",\n";
	anvillepopupElementsString += "        2: \"send-message\",\n";
	anvillepopupElementsString += "        length: 3\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    let secondContextMenuButtonsIconsSrcs = {\n";
	anvillepopupElementsString += "        0: \"../images/logo.png\",\n";
	anvillepopupElementsString += "        1: \"../images/password.png\",\n";
	anvillepopupElementsString += "        2: \"../images/send-message.png\",\n";
	anvillepopupElementsString += "        length: 3\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    addNewContextMenu(\n";
	anvillepopupElementsString += "        \"secondContextMenu\",\n";
	anvillepopupElementsString += "        secondContextMenuButtonsStringsArray,\n";
	anvillepopupElementsString += "        secondContextMenuButtonsIconsSrcs,\n";
	anvillepopupElementsString += "        itemClickListener);\n";
	anvillepopupElementsString += "        //showing the context Menus\n";
	anvillepopupElementsString += "        let toggleFirstContextMenu = document.getElementById(\"toggleFirstContextMenu\");\n";
	anvillepopupElementsString += "    toggleFirstContextMenu.onclick = () => {\n";
	anvillepopupElementsString += "        showContextMenu(;\n";
	anvillepopupElementsString += "            \"firstContextMenu\",\n";
	anvillepopupElementsString += "            toggleFirstContextMenu\n";
	anvillepopupElementsString += "        )\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    let toggleSecondContextMenu = document.getElementById(\"toggleSecondContextMenu\");\n";
	anvillepopupElementsString += "    toggleSecondContextMenu.onclick = () => {\n";
	anvillepopupElementsString += "        showContextMenu(\n";
	anvillepopupElementsString += "            \"secondContextMenu\",\n";
	anvillepopupElementsString += "            toggleSecondContextMenu\n";
	anvillepopupElementsString += "        )\n";
	anvillepopupElementsString += "    }";
	anvillepopupElementsString += "                                </code>";
	anvillepopupElementsString += "                            </li>";

	anvillepopupElementsString += "                            <h6>8. Adding Popup menus</h6>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                            Popup menus appear at the center of the screen. Clicking outside these menus cause them to be closed. You can add multiple popup menus for handling different element categories according to your sorting criteria. Here also you will need to control when the menu is shown. The example for adding popup menus is as follows:";
	anvillepopupElementsString += "                            </li>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                                <code>";
	anvillepopupElementsString += "    /*A depiction of the addPopupMenu function and its parameters first\n";
	anvillepopupElementsString += "    addPopupMenu(\n";
	anvillepopupElementsString += "        menuTitle,\n";
	anvillepopupElementsString += "        menuName,\n";
	anvillepopupElementsString += "        popupMenuButtonsStringsArray,\n";
	anvillepopupElementsString += "        popupMenuButtonsIconsSrcs,\n";
	anvillepopupElementsString += "        itemClickListener\n";
	anvillepopupElementsString += "    )\n";
	anvillepopupElementsString += "    let menuTitle = \"FIRST POPUP MENU\";\n";
	anvillepopupElementsString += "    let menuName = \"firstPopupMenu\";\n";
	anvillepopupElementsString += "    let popupMenuButtonsStringsArray = {\n";
	anvillepopupElementsString += "        0: \"vcl\",\n";
	anvillepopupElementsString += "        1: \"eye-closed\",\n";
	anvillepopupElementsString += "        2: \"eye-open\",\n";
	anvillepopupElementsString += "        length: 3\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    let popupMenuButtonsIconsSrcs = {\n";
	anvillepopupElementsString += "        0: \"../images/vlc.png\",";
	anvillepopupElementsString += "        1: \"../images/eye-closed.png\",\n";
	anvillepopupElementsString += "        2: \"../images/eye-open.png\",\n";
	anvillepopupElementsString += "        length: 3\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    let itemClickListener = (\n";
	anvillepopupElementsString += "            index,\n";
	anvillepopupElementsString += "            name,\n";
	anvillepopupElementsString += "            menuName,\n";
	anvillepopupElementsString += "            menuTitle) => {\n";
	anvillepopupElementsString += "        console.log(\"A popupMenu named [\" + menuName + \"] was clicked!\");\n";
	anvillepopupElementsString += "        console.log(\"itemIndex\", index);\n";
	anvillepopupElementsString += "        console.log(\"itemName\", name);\n";
	anvillepopupElementsString += "        console.log(\"menuTitle\", menuTitle);\n";
	anvillepopupElementsString += "    }";
	anvillepopupElementsString += "    addPopupMenu(\n";
	anvillepopupElementsString += "        menuTitle,\n";
	anvillepopupElementsString += "        menuName,\n";
	anvillepopupElementsString += "        popupMenuButtonsStringsArray,\n";
	anvillepopupElementsString += "        popupMenuButtonsIconsSrcs,\n";
	anvillepopupElementsString += "        itemClickListener\n";
	anvillepopupElementsString += "    );\n";
	anvillepopupElementsString += "    let toggleFirstPopupMenu = document.getElementById(\"toggleFirstPopupMenu\");\n";
	anvillepopupElementsString += "    toggleFirstPopupMenu.onclick = () => {\n";
	anvillepopupElementsString += "        showPopupMenu(\"firstPopupMenu\");\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    let secondMenuTitle = \"SECOND POPUP MENU\";\n";
	anvillepopupElementsString += "    let secondMenuName = \"secondPopupMenu\";\n";
	anvillepopupElementsString += "    let secondPopupMenuButtonsStringsArray = {\n";
	anvillepopupElementsString += "        0: \"vcl\",\n";
	anvillepopupElementsString += "        1: \"eye-closed\",\n";
	anvillepopupElementsString += "        2: \"eye-open\",\n";
	anvillepopupElementsString += "        length: 3\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    let secondPopupMenuButtonsIconsSrcs = {\n";
	anvillepopupElementsString += "        0: \"../images/vlc.png\",\n";
	anvillepopupElementsString += "        1: \"../images/eye-closed.png\",\n";
	anvillepopupElementsString += "        2: \"../images/eye-open.png\",\n";
	anvillepopupElementsString += "        length: 3\n";
	anvillepopupElementsString += "    }\n";
	anvillepopupElementsString += "    addPopupMenu(\n";
	anvillepopupElementsString += "        secondMenuTitle,\n";
	anvillepopupElementsString += "        secondMenuName,\n";
	anvillepopupElementsString += "        secondPopupMenuButtonsStringsArray,\n";
	anvillepopupElementsString += "        secondPopupMenuButtonsIconsSrcs,\n";
	anvillepopupElementsString += "        itemClickListener\n";
	anvillepopupElementsString += "    );\n";
	anvillepopupElementsString += "    let toggleSecondPopupMenu = document.getElementById(\"toggleSecondPopupMenu\");\n";
	anvillepopupElementsString += "    toggleSecondPopupMenu.onclick = () => {\n";
	anvillepopupElementsString += "        showPopupMenu(\"secondPopupMenu\");\n";
	anvillepopupElementsString += "    }";
	anvillepopupElementsString += "                                </code>";
	anvillepopupElementsString += "                            </li>";
	anvillepopupElementsString += "                            <h6>9. Lastly, adding custom styles</h6>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                            Obviously you'll not use my boring colors, to add your custom style, just pass the string form of the style to the methods as you would to the style attribute of an element. The example is as follows:";
	anvillepopupElementsString += "                            </li>";
	anvillepopupElementsString += "                            <li>";
	anvillepopupElementsString += "                                <code>";
	anvillepopupElementsString += "    /*\n";
	anvillepopupElementsString += "    parameters for the two methods of custom style addition\n";
	anvillepopupElementsString += "    customiseMenuStyle(\n";
	anvillepopupElementsString += "        menuStyle,\n";
	anvillepopupElementsString += "        menuButtonStyleNormal,\n";
	anvillepopupElementsString += "        menuButtonStyleHover,\n";
	anvillepopupElementsString += "        menuButtonStyleActive,\n";
	anvillepopupElementsString += "        menuTitleStyle\n";
	anvillepopupElementsString += "    )\n";
	anvillepopupElementsString += "    customiseAppBarStyle(\n";
	anvillepopupElementsString += "            customAppBarStyleString,\n";
	anvillepopupElementsString += "            toggleOptionsMenuButtonColor\n";
	anvillepopupElementsString += "    )\n";
	anvillepopupElementsString += "    /*\n";
	anvillepopupElementsString += "    let menuStyle = \"border-color: cyan; color: cyan; background-color: #044a\"\n";
	anvillepopupElementsString += "    let menuButtonStyleNormal = \"background-color: #0ff2; border-color: cyan; color: cyan;\";\n";
	anvillepopupElementsString += "    let menuButtonStyleHover = \"background-color: #0ff9\";\n";
	anvillepopupElementsString += "    let menuButtonStyleActive = \"background-color: #0ff\";\n";
	anvillepopupElementsString += "    let menuTitleStyle = \"color: cyan; border-color: cyan;\";\n";
	anvillepopupElementsString += "    customiseMenuStyle(\n";
	anvillepopupElementsString += "        menuStyle,\n";
	anvillepopupElementsString += "        menuButtonStyleNormal,\n";
	anvillepopupElementsString += "        menuButtonStyleHover,\n";
	anvillepopupElementsString += "        menuButtonStyleActive,\n";
	anvillepopupElementsString += "        menuTitleStyle\n";
	anvillepopupElementsString += "    )\n";
	anvillepopupElementsString += "                                </code>";
	anvillepopupElementsString += "                            </li>";
//======================================================================================
	anvillepopupElementsString += "                        </div>";
	anvillepopupElementsString += "                    </div>";
	anvillepopupElementsString += "                </div>";
	anvillepopupElementsString += "                <div class=\"anvillepopupBorderRow\">";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDiv anvillebottomLeft\"></div>";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDivSpacer\"></div>";
	anvillepopupElementsString += "                    <div class=\"anvilleborderDiv anvillebottomRight\"></div>";
	anvillepopupElementsString += "                </div>";
	anvillepopupElementsString += "            </div>";

	anvillepopupElementsString += "        </div>";
	anvillepopupElementsString += "    </div>";
	anvillepopupElementsString += "</div>";
	
	document.body.innerHTML += anvillepopupElementsString;
}

var isOptionsMenuVisible = false;
function createAppBar(normalButtonsIconsSrcsArray, contextualButtonsIconsSrcsArray, normalItemClickListener, contextualItemClickListener, createOptionsMenuBoolean, optionsStringsArray, optionsIconsSrcsArray, optionSelectedListener) {
	if(!hasAddedAnvilleStyle) {
		appendMenuAnvilleStyle();
		hasAddedAnvilleStyle = true;
	}
	
	let appBar = document.createElement("div");
	appBar.setAttribute("id", "anvilleAppBar");

	if(normalButtonsIconsSrcsArray) {
		let normalIconButtonsContainer = document.createElement("div");
		normalIconButtonsContainer.setAttribute("class", "anvilleAppBarButtonsContainer");
		for(let i = 0; i < normalButtonsIconsSrcsArray.length; i ++) {
			let iconButton = document.createElement("img");
			iconButton.setAttribute("src", normalButtonsIconsSrcsArray[i]);
			iconButton.onclick = (event) => {
				if(normalItemClickListener) {
					normalItemClickListener(i);
				}
			}
			normalIconButtonsContainer.appendChild(iconButton);
		}
		appBar.appendChild(normalIconButtonsContainer);
	}

	if(contextualButtonsIconsSrcsArray) {
		let contextualIconButtonsContainer = document.createElement("div");
		contextualIconButtonsContainer.setAttribute("class", "anvilleAppBarButtonsContainer anvilleActionModeButtons");
		for(let i = 0; i < contextualButtonsIconsSrcsArray.length; i++) {
			let iconButton = document.createElement("img");
			iconButton.setAttribute("src", contextualButtonsIconsSrcsArray[i]);
			iconButton.onclick = () => {
				if(contextualItemClickListener) {
					contextualItemClickListener(i);
					turnOffContextualMode();
				}
			}
			contextualIconButtonsContainer.appendChild(iconButton);
		}
		appBar.appendChild(contextualIconButtonsContainer);
	}

	let toggleOptionsMenuButton = document.createElement("div");
	toggleOptionsMenuButton.setAttribute("class", "anvilleOptionsButton");
	toggleOptionsMenuButton.setAttribute("id", "anvilletoggleOptionsMenuButton");
	for(let j = 0; j < 3; j++) {
		toggleOptionsMenuButton.appendChild(document.createElement("div"));
	}

	if(createOptionsMenuBoolean) {
		createOptionsMenu(optionsStringsArray, optionsIconsSrcsArray, optionSelectedListener);
		toggleOptionsMenuButton.onclick = () => {
			if(isOptionsMenuVisible) {
				hideOptionsMenu();
			} else {
				showOptionsMenu();
			}
		}
	} else {
		toggleOptionsMenuButton.onclick = () => {
			console.error("NO OPTIONS MENU", "toggleOptionsMenuButton was clicked but no optionsMenu was created prior");
		}
	}

	appBar.appendChild(toggleOptionsMenuButton);

	document.body.insertBefore(appBar, document.body.children[0]);
}

function turnOnContextualMode() {
	let appBar = document.getElementById("anvilleAppBar");
	if(appBar) {
		appBar.children[0].style.display = "none";
		appBar.children[1].style.display = "inline-table";
	}
}

function turnOffContextualMode() {
	let appBar = document.getElementById("anvilleAppBar");
	if(appBar) {
		appBar.children[0].style.display = "inline-table";
		appBar.children[1].style.display = "none";
	}
}

function createOptionsMenu(optionsStringsArray, optionsIconsSrcsArray, optionSelectedListener) {
	if(!hasAddedAnvilleStyle) {
		appendMenuAnvilleStyle();
		hasAddedAnvilleStyle = true;
	}

	let optionsMenu = document.createElement("div");
	optionsMenu.setAttribute("class", "anvilleMenu anvilleOptionsMenu");
	optionsMenu.setAttribute("id", "anvilleOptionsMenuID");

	for(let i = 0; i < optionsStringsArray.length; i++) {
		let optionsButtonContainer = document.createElement("div");
		optionsButtonContainer.onclick = () => {
			if(optionSelectedListener) {
				optionSelectedListener(i, optionsStringsArray[i]);
			}
			hideOptionsMenu();
			anvillebackgroundTint.style.display = "none";
		}
		
		if(optionsIconsSrcsArray) {
			let optionsIcon = document.createElement("img");
			optionsIcon.setAttribute("src", optionsIconsSrcsArray[i]);
			optionsButtonContainer.appendChild(optionsIcon);
		}

		let optionsButton = document.createElement("input");
		optionsButton.type = "button";
		optionsButton.setAttribute("class", "anvilleButtons")
		optionsButton.value = optionsStringsArray[i];
		optionsButtonContainer.appendChild(optionsButton);

		optionsMenu.appendChild(optionsButtonContainer);
	}

	document.body.appendChild(optionsMenu);
	toggleOptionsMenuButton = document.getElementById("anvilletoggleOptionsMenuButton");
	if(toggleOptionsMenuButton) {
		toggleOptionsMenuButton.onclick = () => {
			if(isOptionsMenuVisible) {
				hideOptionsMenu();
			} else {
				showOptionsMenu();
			}
		}
	}
}

function showOptionsMenu() {
	let optionsMenu = document.getElementById("anvilleOptionsMenuID");
	let anvillebackgroundTint = document.getElementById("anvillebackgroundTint");
	optionsMenu.style.display = "table";
	anvillebackgroundTint.style.display = "table";

	if(!currentVisiblePopup) {
		//initial show thus set button click listeners
		anvillebackgroundTint.onclick = () => {
			if(currentVisiblePopup.getAttribute("id") === "anvilleOptionsMenuID") {
				hideOptionsMenu()
			} else if(currentVisiblePopup.getAttribute("id").indexOf("Menu") >= 0) {
				currentVisiblePopup.style.display = "none";
			} else {
				currentVisiblePopup.style.display = "none";
				anvillepopupContainer.style.display = "none";
			}
			anvillebackgroundTint.style.display = "none";
		}


		let anvillepopupContainer = document.getElementsByClassName("anvillepopupContainer")[0];
		anvillepopupContainer.onclick = (event) => {
			let eventTargetClass = event.target.getAttribute("class");
			if(eventTargetClass === "anvillepopupContainer" || eventTargetClass === "anvillepopup" || eventTargetClass === "anvillepopupContainerChild" || eventTargetClass === "anvillepopupContainerChildChild" || eventTargetClass.indexOf("anvilleborderDivSpacer") >= 0) {
				anvillebackgroundTint.click();
			}
		}

		let anvilleShowAllFunctionsButton = document.getElementById("anvilleShowAllFunctionsButton");
		anvilleShowAllFunctionsButton.onclick = () => {
			anvillebackgroundTint.click();
			showListFunctions();
		}

		let anvilleShowDocumentationButton = document.getElementById("anvilleShowDocumentationButton");
		anvilleShowDocumentationButton.onclick = () => {
			anvillebackgroundTint.click();
			showDocumentation();
		}
	}
	currentVisiblePopup = optionsMenu;
	isOptionsMenuVisible = true;
}

function hideOptionsMenu() {
	let optionsMenu = document.getElementById("anvilleOptionsMenuID");
	optionsMenu.style.display = "none";
	isOptionsMenuVisible = false;
}

function addNewContextMenu(menuName, contextMenuButtonsStringsArray, contextMenuButtonsIconsSrcs, itemClickListener) {
	if(!hasAddedAnvilleStyle) {
		appendMenuAnvilleStyle();
		hasAddedAnvilleStyle = true;
	}

	let contextMenu = document.createElement("div");
	contextMenu.setAttribute("class", "anvilleMenu anvilleContextMenu");
	contextMenu.setAttribute("id", "anvilleContextMenu" + menuName);
	for(let i = 0; i < contextMenuButtonsStringsArray.length; i++) {
		let contextMenuButtonContainer = document.createElement("div");
		contextMenuButtonContainer.onclick = () => {
			if(itemClickListener) {
				itemClickListener(i, contextMenuButtonsStringsArray[i], menuName);
			}
			hideContextMenu(menuName);
		}
		if(contextMenuButtonsIconsSrcs) {
			let iconButton = document.createElement("img");
			iconButton.setAttribute("src", contextMenuButtonsIconsSrcs[i]);
			contextMenuButtonContainer.appendChild(iconButton);
		}
		let contextMenuButton = document.createElement("input");
		contextMenuButton.type = "button";
		contextMenuButton.value = contextMenuButtonsStringsArray[i];
		contextMenuButton.setAttribute("class", "anvilleButtons");
		contextMenuButtonContainer.appendChild(contextMenuButton);
		contextMenu.appendChild(contextMenuButtonContainer);
	}

	console.log(contextMenu);

	let contextMenuContainer = document.getElementById("anvillecontextMenuContainer");
	if(!contextMenuContainer) {
		contextMenuContainer = document.createElement("div");
		contextMenuContainer.setAttribute("id", "anvillecontextMenuContainer");
		contextMenuContainer.appendChild(contextMenu);
		document.body.appendChild(contextMenuContainer);
		contextMenuContainer = document.getElementById("anvillecontextMenuContainer");
	} else {
		contextMenuContainer.appendChild(contextMenu);
	}
}

function showContextMenu(menuName, referenceElement) {
	let contextMenu = document.getElementById("anvilleContextMenu" + menuName);
	if(!contextMenu) {
		console.error("INVALID MENU_NAME", "There is no context menu with menuName [" + menuName + "]");
		return;
	}

	if(!currentVisiblePopup) {
		//initial show thus set button click listeners
		anvillebackgroundTint.onclick = () => {
			if(currentVisiblePopup.getAttribute("id") === "anvilleOptionsMenuID") {
				hideOptionsMenu()
			} else if(currentVisiblePopup.getAttribute("id").indexOf("Menu") >= 0) {
				currentVisiblePopup.style.display = "none";
			} else {
				currentVisiblePopup.style.display = "none";
				anvillepopupContainer.style.display = "none";
			}
			anvillebackgroundTint.style.display = "none";
		}


		let anvillepopupContainer = document.getElementsByClassName("anvillepopupContainer")[0];
		anvillepopupContainer.onclick = (event) => {
			let eventTargetClass = event.target.getAttribute("class");
			if(eventTargetClass === "anvillepopupContainer" || eventTargetClass === "anvillepopup" || eventTargetClass === "anvillepopupContainerChild" || eventTargetClass === "anvillepopupContainerChildChild" || eventTargetClass.indexOf("anvilleborderDivSpacer") >= 0) {
				anvillebackgroundTint.click();
			}
		}

		let anvilleShowAllFunctionsButton = document.getElementById("anvilleShowAllFunctionsButton");
		anvilleShowAllFunctionsButton.onclick = () => {
			anvillebackgroundTint.click();
			showListFunctions();
		}

		let anvilleShowDocumentationButton = document.getElementById("anvilleShowDocumentationButton");
		anvilleShowDocumentationButton.onclick = () => {
			anvillebackgroundTint.click();
			showDocumentation();
		}
	}

	contextMenu.style.display = "table";
	if(referenceElement) {
		if(referenceElement.getBoundingClientRect().left - contextMenu.offsetWidth >= 1) {
			contextMenu.style.left = (referenceElement.getBoundingClientRect().left - contextMenu.offsetWidth) + "px";
			if(referenceElement.getBoundingClientRect().bottom + contextMenu.offsetHeight <= window.innerHeight) {
				contextMenu.style.top = (referenceElement.getBoundingClientRect().top + referenceElement.offsetHeight) + "px";
				contextMenu.style.borderRadius = "0.4rem 0rem 0.4rem 0.4rem";
			} else {
				contextMenu.style.top = (referenceElement.getBoundingClientRect().top - contextMenu.offsetHeight) + "px";
				contextMenu.style.borderRadius = "0.4rem 0.4rem 0rem 0.4rem";
			}
		} else {
			contextMenu.style.left = (referenceElement.getBoundingClientRect().left + referenceElement.offsetWidth) + "px";
			if(referenceElement.getBoundingClientRect().bottom + contextMenu.offsetHeight <= (window.innerHeight)) {
				contextMenu.style.top = (referenceElement.getBoundingClientRect().top + referenceElement.offsetHeight) + "px";
				contextMenu.style.borderRadius = "0rem 0.4rem 0.4rem 0.4rem";
			} else {
				contextMenu.style.top = (referenceElement.getBoundingClientRect().top - contextMenu.offsetHeight) + "px";
				contextMenu.style.borderRadius = "0.4rem 0.4rem 0.4rem 0rem";
			}
		}
	} else {
		contextMenu.style.top = ((window.innerHeight - contextMenu.offsetHeight) / 2) + "px";
		contextMenu.style.left = ((window.innerWidth - contextMenu.offsetWidth) / 2) + "px";
	}

	anvillebackgroundTint = document.getElementById("anvillebackgroundTint");
	anvillebackgroundTint.style.display = "table";

	currentVisiblePopup = contextMenu;
}

function hideContextMenu(menuName) {
	anvillebackgroundTint.click();
}

function getContextMenu(menuName) {
	let contextMenu = document.getElementById("anvilleContextMenu" + menuName);
	if(!contextMenu) {
		console.error("INVALID MENU_NAME", "There is no context menu with menuName [" + menuName + "]");
		return;
	}

	return contextMenu;
}

function addPopupMenu(menuTitle, menuName, popupMenuButtonsStringsArray, popupMenuButtonsIconsSrcs, itemClickListener) {
	if(!hasAddedAnvilleStyle) {
		appendMenuAnvilleStyle();
		hasAddedAnvilleStyle = true;
	}
	
	let popupMenu = document.createElement("div");
	popupMenu.setAttribute("class", "anvilleMenu anvillePopupMenu");
	popupMenu.setAttribute("id", "anvillePopupMenu" + menuName);
	let menuTitleElement = document.createElement("h5");
	menuTitleElement.innerText = menuTitle;
	popupMenu.appendChild(menuTitleElement);
	for(let i = 0; i < popupMenuButtonsStringsArray.length; i++) {
		let popupMenuButtonContainer = document.createElement("div");
		popupMenuButtonContainer.onclick = () => {
			if(itemClickListener) {
				itemClickListener(i, popupMenuButtonsStringsArray[i], menuName, menuTitle);
				document.getElementById("anvillebackgroundTint").click();
			}
		}
		if(popupMenuButtonsIconsSrcs) {
			let iconButton = document.createElement("img");
			iconButton.setAttribute("src", popupMenuButtonsIconsSrcs[i]);
			popupMenuButtonContainer.appendChild(iconButton);
		}
		let popupMenuButton = document.createElement("input");
		popupMenuButton.type = "button";
		popupMenuButton.value = popupMenuButtonsStringsArray[i];
		popupMenuButton.setAttribute("class", "anvilleButtons");
		popupMenuButtonContainer.appendChild(popupMenuButton);
		popupMenu.appendChild(popupMenuButtonContainer);
	}

	let popupMenuContainer = document.getElementById("anvillepopupMenuContainer");
	if(!popupMenuContainer) {
		popupMenuContainer = document.createElement("div");
		popupMenuContainer.setAttribute("id", "anvillecontextMenuContainer");
		popupMenuContainer.appendChild(popupMenu);
		document.body.appendChild(popupMenuContainer);
		popupMenuContainer = document.getElementById("anvillepopupMenuContainer");
	} else {
		popupMenuContainer.appendChild(popupMenu);
	}
}

function showPopupMenu(menuName) {
	let popupMenu = document.getElementById("anvillePopupMenu" + menuName);
	if(!popupMenu) {
		console.log("INVALID_MENU_NAME", "There is no popupMenu with the name [" + menuName + "]");
		return;
	}


	if(!currentVisiblePopup) {
		//initial show thus set button click listeners
		anvillebackgroundTint.onclick = () => {
			if(currentVisiblePopup.getAttribute("id") === "anvilleOptionsMenuID") {
				hideOptionsMenu()
			} else if(currentVisiblePopup.getAttribute("id").indexOf("Menu") >= 0) {
				currentVisiblePopup.style.display = "none";
			} else {
				currentVisiblePopup.style.display = "none";
				anvillepopupContainer.style.display = "none";
			}
			anvillebackgroundTint.style.display = "none";
		}


		let anvillepopupContainer = document.getElementsByClassName("anvillepopupContainer")[0];
		anvillepopupContainer.onclick = (event) => {
			let eventTargetClass = event.target.getAttribute("class");
			if(eventTargetClass === "anvillepopupContainer" || eventTargetClass === "anvillepopup" || eventTargetClass === "anvillepopupContainerChild" || eventTargetClass === "anvillepopupContainerChildChild" || eventTargetClass.indexOf("anvilleborderDivSpacer") >= 0) {
				anvillebackgroundTint.click();
			}
		}

		let anvilleShowAllFunctionsButton = document.getElementById("anvilleShowAllFunctionsButton");
		anvilleShowAllFunctionsButton.onclick = () => {
			anvillebackgroundTint.click();
			showListFunctions();
		}

		let anvilleShowDocumentationButton = document.getElementById("anvilleShowDocumentationButton");
		anvilleShowDocumentationButton.onclick = () => {
			anvillebackgroundTint.click();
			showDocumentation();
		}
	}

	popupMenu.style.display = "table";
	popupMenu.style.top = ((window.innerHeight - popupMenu.offsetHeight) / 2) + "px";
	popupMenu.style.left = ((window.innerWidth - popupMenu.offsetWidth) / 2) + "px";

	anvillebackgroundTint = document.getElementById("anvillebackgroundTint");
	anvillebackgroundTint.style.display = "table";

	currentVisiblePopup = popupMenu;
}

function customiseMenuStyle(menuStyle, menuButtonStyleNormal, menuButtonStyleHover, menuButtonStyleActive, menuTitleStyle) {
	if(!hasAddedAnvilleStyle) {
		appendMenuAnvilleStyle();
		hasAddedAnvilleStyle = true;
	}
	
	let customMenuStyleString = ".anvilleMenu {" + menuStyle + "}";
	customMenuStyleString += ".anvilleButtons {" + menuButtonStyleNormal + "}";
	customMenuStyleString += ".anvilleButtons:hover {" + menuButtonStyleHover + "}";
	customMenuStyleString += ".anvilleButtons:active {" + menuButtonStyleActive +"}";
	customMenuStyleString += ".anvilleMenu h5 {" + menuTitleStyle + "}";

	let customMenuStyleElement = document.createElement("style");
	customMenuStyleElement.innerText = customMenuStyleString;
	document.body.appendChild(customMenuStyleElement);
}

function customiseAppBarStyle(customAppBarStyleString, toggleOptionsMenuButtonColor) {
	if(!hasAddedAnvilleStyle) {
		appendMenuAnvilleStyle();
		hasAddedAnvilleStyle = true;
	}
	
	let customAppBarStyleElement = document.createElement("style");
	customAppBarStyleElement.innerText = ("#anvilleAppBar {" + customAppBarStyleString + "} " + ".anvilleOptionsButton div {background: " + toggleOptionsMenuButtonColor + ";}");
}

var currentVisiblePopup;
function showError(errorTitle, errorMessage) {
	if(showDebugDialogMessages) {
		if(!isAnvilleStyleAdded) {
			appendStyleAndPopupViews();
			isAnvilleStyleAdded = true;
		}

		let anvillebackgroundTint = document.getElementById("anvillebackgroundTint");
		let anvillepopupContainer = document.getElementsByClassName("anvillepopupContainer")[0];
		let anvilleerrorDiv = document.getElementById("anvilleerrorDiv");

		anvilleerrorDiv.children[1].children[0].value = errorTitle;
		anvilleerrorDiv.children[1].children[1].children[0].innerText = errorMessage;

		anvillebackgroundTint.style.display = "table";
		anvillepopupContainer.style.display = "table";
		anvilleerrorDiv.style.display = "table";

		if(!currentVisiblePopup) {
			//initial show thus set button click listeners
			anvillebackgroundTint.onclick = () => {
				if(currentVisiblePopup.getAttribute("id") === "anvilleOptionsMenuID") {
					hideOptionsMenu()
				} else if(currentVisiblePopup.getAttribute("id").indexOf("Menu") >= 0) {
					currentVisiblePopup.style.display = "none";
				} else {
					currentVisiblePopup.style.display = "none";
					anvillepopupContainer.style.display = "none";
				}
				anvillebackgroundTint.style.display = "none";
			}

			anvillepopupContainer.onclick = (event) => {
				let eventTargetClass = event.target.getAttribute("class");
				if(eventTargetClass === "anvillepopupContainer" || eventTargetClass === "anvillepopup" || eventTargetClass === "anvillepopupContainerChild" || eventTargetClass === "anvillepopupContainerChildChild" || eventTargetClass.indexOf("anvilleborderDivSpacer") >= 0) {
					anvillebackgroundTint.click();
				}
			}

			let anvilleShowAllFunctionsButton = document.getElementById("anvilleShowAllFunctionsButton");
			anvilleShowAllFunctionsButton.onclick = () => {
				anvillebackgroundTint.click();
				showListFunctions();
			}

			let anvilleShowDocumentationButton = document.getElementById("anvilleShowDocumentationButton");
			anvilleShowDocumentationButton.onclick = () => {
				anvillebackgroundTint.click();
				showDocumentation();
			}
		}
		currentVisiblePopup = anvilleerrorDiv;
	}
}

function showListFunctions() {
	if(showDebugDialogMessages) {
		if(!hasAddedAnvilleStyle) {
			appendMenuAnvilleStyle();
			hasAddedAnvilleStyle = true;
		}
	
		let anvillebackgroundTint = document.getElementById("anvillebackgroundTint");
		let anvillepopupContainer = document.getElementsByClassName("anvillepopupContainer")[0];
		let anvillefunctionsListDiv = document.getElementById("anvillefunctionsListDiv");

		anvillebackgroundTint.style.display = "table";
		anvillepopupContainer.style.display = "table";
		anvillefunctionsListDiv.style.display = "table";

		if(!currentVisiblePopup) {
			//initial show thus set button click listeners
			anvillebackgroundTint.onclick = () => {
				if(currentVisiblePopup.getAttribute("id") === "anvilleOptionsMenuID") {
					hideOptionsMenu()
				} else if(currentVisiblePopup.getAttribute("id").indexOf("Menu") >= 0) {
					currentVisiblePopup.style.display = "none";
				} else {
					currentVisiblePopup.style.display = "none";
					anvillepopupContainer.style.display = "none";
				}
				anvillebackgroundTint.style.display = "none";
			}

			anvillepopupContainer.onclick = (event) => {
				let eventTargetClass = event.target.getAttribute("class");
				if(eventTargetClass === "anvillepopupContainer" || eventTargetClass === "anvillepopup" || eventTargetClass === "anvillepopupContainerChild" || eventTargetClass === "anvillepopupContainerChildChild" || eventTargetClass.indexOf("anvilleborderDivSpacer") >= 0) {
					anvillebackgroundTint.click();
				}
			}

			let anvilleShowAllFunctionsButton = document.getElementById("anvilleShowAllFunctionsButton");
			anvilleShowAllFunctionsButton.onclick = () => {
				anvillebackgroundTint.click();
				showListFunctions();
			}

			let anvilleShowDocumentationButton = document.getElementById("anvilleShowDocumentationButton");
			anvilleShowDocumentationButton.onclick = () => {
				anvillebackgroundTint.click();
				showDocumentation();
			}
		}
		currentVisiblePopup = anvillefunctionsListDiv;
	}
}

function showDocumentation() {
	if(showDebugDialogMessages) {
		if(!hasAddedAnvilleStyle) {
			appendMenuAnvilleStyle();
			hasAddedAnvilleStyle = true;
		}

		let anvillebackgroundTint = document.getElementById("anvillebackgroundTint");
		let anvillepopupContainer = document.getElementsByClassName("anvillepopupContainer")[0];
		let anvilledocumentationDiv = document.getElementById("anvilledocumentationDiv");

		anvillebackgroundTint.style.display = "table";
		anvillepopupContainer.style.display = "table";
		anvilledocumentationDiv.style.display = "table";

		if(!currentVisiblePopup) {
			//initial show thus set button click listeners
			anvillebackgroundTint.onclick = () => {
				if(currentVisiblePopup.getAttribute("id") === "anvilleOptionsMenuID") {
					hideOptionsMenu()
				} else if(currentVisiblePopup.getAttribute("id").indexOf("Menu") >= 0) {
					currentVisiblePopup.style.display = "none";
				} else {
					currentVisiblePopup.style.display = "none";
					anvillepopupContainer.style.display = "none";
				}
				anvillebackgroundTint.style.display = "none";
			}

			anvillepopupContainer.onclick = (event) => {
				let eventTargetClass = event.target.getAttribute("class");
				if(eventTargetClass === "anvillepopupContainer" || eventTargetClass === "anvillepopup" || eventTargetClass === "anvillepopupContainerChild" || eventTargetClass === "anvillepopupContainerChildChild" || eventTargetClass.indexOf("anvilleborderDivSpacer") >= 0) {
					anvillebackgroundTint.click();
				}
			}

			let anvilleShowAllFunctionsButton = document.getElementById("anvilleShowAllFunctionsButton");
			anvilleShowAllFunctionsButton.onclick = () => {
				anvillebackgroundTint.click();
				showListFunctions();
			}

			let anvilleShowDocumentationButton = document.getElementById("anvilleShowDocumentationButton");
			anvilleShowDocumentationButton.onclick = () => {
				anvillebackgroundTint.click();
				showDocumentation();
			}
		}
		currentVisiblePopup = anvilledocumentationDiv;
	}
}
