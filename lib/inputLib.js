var InputLib = (function() {
    var IL = {};

    var deadzone = 0.4;
    var os;

    var ENTER_KEY   = 13;
    var SHIFT_KEY   = 16;
    var CTRL_KEY    = 17;
    var ESC_KEY     = 27;
    var SPACE_KEY   = 32;
    var LEFT_ARROW  = 37;
    var UP_ARROW    = 38;
    var RIGHT_ARROW = 39;
    var DOWN_ARROW  = 40;

    var W_KEY = 87;
    var A_KEY = 65;
    var S_KEY = 83;
    var D_KEY = 68;

    var getKeyPressed = [];

    IL.initInputLib = function() {
        getKeyPressed["PAUSE"] = 0.0;

        getKeyPressed["ENTER_KEY"] = 0.0;
        getKeyPressed["SHIFT_KEY"] = 0.0;
        getKeyPressed["CTRL_KEY"] = 0.0;
        getKeyPressed["SPACE_KEY"] = 0.0;
        getKeyPressed["LEFT_ARROW"] = 0.0;
        getKeyPressed["UP_ARROW"] = 0.0;
        getKeyPressed["RIGHT_ARROW"] = 0.0;
        getKeyPressed["DOWN_ARROW"] = 0.0;
        getKeyPressed["W_KEY"] = 0.0;
        getKeyPressed["A_KEY"] = 0.0;
        getKeyPressed["S_KEY"] = 0.0;
        getKeyPressed["D_KEY"] = 0.0;

        getKeyPressed["A_BUTTON"] = 0.0;
        getKeyPressed["B_BUTTON"] = 0.0;
        getKeyPressed["X_BUTTON"] = 0.0;
        getKeyPressed["Y_BUTTON"] = 0.0;
        getKeyPressed["LEFT_BUMPER"] = 0.0;
        getKeyPressed["RIGHT_BUMPER"] = 0.0;
        getKeyPressed["LEFT_STICK"] = 0.0;
        getKeyPressed["RIGHT_STICK"] = 0.0;

        getKeyPressed["LEFT_STICK_X"] = 0.0;
        getKeyPressed["LEFT_STICK_Y"] = 0.0;
        getKeyPressed["LEFT_TRIGGER"] = 0.0;
        getKeyPressed["RIGHT_STICK_X"] = 0.0;
        getKeyPressed["RIGHT_STICK_Y"] = 0.0;
        getKeyPressed["RIGHT_TRIGGER"] = 0.0;
        getKeyPressed["DPAD_UP"] = 0.0;
        getKeyPressed["DPAD_DOWN"] = 0.0;
        getKeyPressed["DPAD_LEFT"] = 0.0;
        getKeyPressed["DPAD_RIGHT"] = 0.0;

        os = "Unknown OS";
        if (navigator.appVersion.indexOf("Win") != -1)   os = "Windows";
        if (navigator.appVersion.indexOf("Linux") != -1) os = "Linux";
        if (navigator.appVersion.indexOf("Mac") != -1)   os = "MacOS";
        if (navigator.appVersion.indexOf("X11") != -1)   os = "Unix";
    }

    IL.getKeyPressed = function(btn_code) {
        return getKeyPressed[btn_code];
    }

    IL.processKeyUp = function(e) {
        var btn_code = e.keyCode ? e.which : e.keyCode;

        if (btn_code == ENTER_KEY) {
            getKeyPressed["ENTER_KEY"] = 0.0;
        } else if (btn_code == SHIFT_KEY) {
            getKeyPressed["SHIFT_KEY"] = 0.0;
        } else if (btn_code == CTRL_KEY) {
            getKeyPressed["CTRL_KEY"] = 0.0;
        } else if (btn_code == ESC_KEY) {
            getKeyPressed["PAUSE"] = 0.0;
        } else if (btn_code == SPACE_KEY) {
            getKeyPressed["SPACE_KEY"] = 0.0;
        } else if (btn_code == LEFT_ARROW) {
            getKeyPressed["LEFT_ARROW"] = 0.0;
        } else if (btn_code == UP_ARROW) {
            getKeyPressed["UP_ARROW"] = 0.0;
        } else if (btn_code == RIGHT_ARROW) {
            getKeyPressed["RIGHT_ARROW"] = 0.0;
        } else if (btn_code == DOWN_ARROW) {
            getKeyPressed["DOWN_ARROW"] = 0.0;
        } else if (btn_code == W_KEY) {
            getKeyPressed["W_KEY"] = 0.0;
        } else if (btn_code == A_KEY) {
            getKeyPressed["A_KEY"] = 0.0;
        } else if (btn_code == S_KEY) {
            getKeyPressed["S_KEY"] = 0.0;
        } else if (btn_code == D_KEY) {
            getKeyPressed["D_KEY"] = 0.0;
        }
    }

    IL.processKeyboardInput = function(e) {
        var btn_code = e.keyCode ? e.which : e.keyCode;
        
        if (btn_code == ESC_KEY && getKeyPressed["PAUSE"] == 0.0) {
            getKeyPressed["PAUSE"] = 1.0;
            GAME.pause = !GAME.pause;
        }

        if (GAME.pause) {

            if (btn_code == LEFT_ARROW && getKeyPressed["LEFT_ARROW"] == 0.0) {
                getKeyPressed["LEFT_ARROW"] = 1.0;
                MENU.binaryInput(0, "LEFT_ARROW");
            } else if (btn_code == UP_ARROW && getKeyPressed["UP_ARROW"] == 0.0) {
                getKeyPressed["UP_ARROW"] = 1.0;
                MENU.binaryInput(0, "UP_ARROW");
            } else if (btn_code == RIGHT_ARROW && getKeyPressed["RIGHT_ARROW"] == 0.0) {
                getKeyPressed["RIGHT_ARROW"] = 1.0;
                MENU.binaryInput(0, "RIGHT_ARROW");
            } else if (btn_code == ENTER_KEY && getKeyPressed["ENTER_KEY"] == 0.0) {
                getKeyPressed["ENTER_KEY"] = 1.0;
                MENU.binaryInput(0, "UP_ARROW");
            } else if (btn_code == SPACE_KEY && getKeyPressed["SPACE_KEY"] == 0.0) {
                getKeyPressed["SPACE_KEY"] = 1.0;
                MENU.binaryInput(0, "UP_ARROW");
            } else if (btn_code == W_KEY && getKeyPressed["W_KEY"] == 0.0) {
                getKeyPressed["W_KEY"] = 1.0;
                MENU.binaryInput(0, "UP_ARROW");
            } else if (btn_code == A_KEY && getKeyPressed["A_KEY"] == 0.0) {
                getKeyPressed["A_KEY"] = 1.0;
                MENU.binaryInput(0, "LEFT_ARROW");
            } else  if (btn_code == D_KEY && getKeyPressed["D_KEY"] == 0.0) {
                getKeyPressed["D_KEY"] = 1.0;
                MENU.binaryInput(0, "RIGHT_ARROW");
            }

        } else {

            if (btn_code == LEFT_ARROW && getKeyPressed["LEFT_ARROW"] == 0.0) {
                getKeyPressed["LEFT_ARROW"] = 1.0;
                GAME.binaryInput(0, "LEFT_ARROW");
            } else if (btn_code == UP_ARROW && getKeyPressed["UP_ARROW"] == 0.0) {
                getKeyPressed["UP_ARROW"] = 1.0;
                GAME.binaryInput(0, "UP_ARROW");
            } else if (btn_code == RIGHT_ARROW && getKeyPressed["RIGHT_ARROW"] == 0.0) {
                getKeyPressed["RIGHT_ARROW"] = 1.0;
                GAME.binaryInput(0, "RIGHT_ARROW");
            } else if (btn_code == DOWN_ARROW && getKeyPressed["DOWN_ARROW"] == 0.0) {
                getKeyPressed["DOWN_ARROW"] = 1.0;
                GAME.binaryInput(0, "DOWN_ARROW");
            } else if (btn_code == ENTER_KEY && getKeyPressed["ENTER_KEY"] == 0.0) {
                getKeyPressed["ENTER_KEY"] = 1.0;
                GAME.binaryInput(0, "ENTER_KEY");
            } else if (btn_code == SHIFT_KEY && getKeyPressed["SHIFT_KEY"] == 0.0) {
                getKeyPressed["SHIFT_KEY"] = 1.0;
                GAME.binaryInput(0, "SHIFT_KEY");
            } else if (btn_code == CTRL_KEY && getKeyPressed["CTRL_KEY"] == 0.0) {
                getKeyPressed["CTRL_KEY"] = 1.0;
                GAME.binaryInput(0, "CTRL_KEY");
            } else if (btn_code == SPACE_KEY && getKeyPressed["SPACE_KEY"] == 0.0) {
                getKeyPressed["SPACE_KEY"] = 1.0;
                GAME.binaryInput(0, "SPACE_KEY");
            } else if (btn_code == W_KEY && getKeyPressed["W_KEY"] == 0.0) {
                getKeyPressed["W_KEY"] = 1.0;
                GAME.binaryInput(0, "W_KEY");
            } else if (btn_code == A_KEY && getKeyPressed["A_KEY"] == 0.0) {
                getKeyPressed["A_KEY"] = 1.0;
                GAME.binaryInput(0, "A_KEY");
            } else if (btn_code == S_KEY && getKeyPressed["S_KEY"] == 0.0) {
                getKeyPressed["S_KEY"] = 1.0;
                GAME.binaryInput(0, "S_KEY");
            } else  if (btn_code == D_KEY && getKeyPressed["D_KEY"] == 0.0) {
                getKeyPressed["D_KEY"] = 1.0;
                GAME.binaryInput(0, "D_KEY");
            }
        }
    }

    IL.processGamepadInput = function() {
        var gamepads = navigator.getGamepads ?
            navigator.getGamepads() :
            (navigator.webkitGetGamepads ?
            navigator.webkitGetGamepads : []);

        var i = 0;
        while (gamepads[i] != undefined) {
            var gp = gamepads[i];
            var value;

            if (os == "Windows" &&
                (buttonPressed(gp.buttons[9])) ||
                os == "Linux" &&
                (buttonPressed(gp.buttons[6]) ||
                buttonPressed(gp.buttons[7])) ||
                buttonPressed(gp.buttons[8])) {

                if (getKeyPressed["PAUSE"] == 0.0) {
                    getKeyPressed["PAUSE"] = 1.0
                    GAME.pause = !GAME.pause;
                }
            } else {
                getKeyPressed["PAUSE"] = 0.0
            }

            if (GAME.pause) {

                processButtonPressed(gp.buttons[0], "A_BUTTON", false, i);
                processButtonPressed(gp.buttons[4], "LEFT_BUMPER", false, i);
                processButtonPressed(gp.buttons[5], "RIGHT_BUMPER", false, i);

                processAxesTriggered(gp.axes[0], "LEFT_STICK_X", false, i);
                processAxesTriggered(gp.axes[1], "LEFT_STICK_Y", false, i);

                if (os == "Windows") {
                    processButtonPressed(gp.buttons[12], "DPAD_UP", false, i);
                    processButtonPressed(gp.buttons[14], "DPAD_LEFT", false, i);
                    processButtonPressed(gp.buttons[15], "DPAD_RIGHT", false, i);

                } else if (os == "Linux") {
                    processAxesTriggered(gp.axes[6], "DPAD_LEFT", false, i);
                    processAxesTriggered(gp.axes[6], "DPAD_RIGHT", false, i);
                    processAxesTriggered(gp.axes[7], "DPAD_UP", false, i);
                }

            } else {

                processButtonPressed(gp.buttons[0], "A_BUTTON", true, i);
                processButtonPressed(gp.buttons[1], "B_BUTTON", true, i);
                processButtonPressed(gp.buttons[2], "X_BUTTON", true, i);
                processButtonPressed(gp.buttons[3], "Y_BUTTON", true, i);
                processButtonPressed(gp.buttons[4], "LEFT_BUMPER", true, i);
                processButtonPressed(gp.buttons[5], "RIGHT_BUMPER", true, i);

                processAxesTriggered(gp.axes[0], "LEFT_STICK_X", true, i);
                processAxesTriggered(gp.axes[1], "LEFT_STICK_Y", true, i);

                if (os == "Windows") {
                    processButtonPressed(gp.buttons[6], "LEFT_TRIGGER", true, i);
                    processButtonPressed(gp.buttons[7], "RIGHT_TRIGGER", true, i);
                    processButtonPressed(gp.buttons[10], "LEFT_STICK", true, i);
                    processButtonPressed(gp.buttons[11], "RIGHT_STICK", true, i);
                    processButtonPressed(gp.buttons[12], "DPAD_UP", true, i);
                    processButtonPressed(gp.buttons[13], "DPAD_DOWN", true, i);
                    processButtonPressed(gp.buttons[14], "DPAD_LEFT", true, i);
                    processButtonPressed(gp.buttons[15], "DPAD_RIGHT", true, i);

                    processAxesTriggered(gp.axes[2], "RIGHT_STICK_X", true, i);
                    processAxesTriggered(gp.axes[3], "RIGHT_STICK_Y", true, i);
                } else if (os == "Linux") {
                    processButtonPressed(gp.buttons[9], "LEFT_STICK", true, i);
                    processButtonPressed(gp.buttons[10], "RIGHT_STICK", true, i);

                    processAxesTriggered(gp.axes[2], "LEFT_TRIGGER", true, i);
                    processAxesTriggered(gp.axes[3], "RIGHT_STICK_X", true, i);
                    processAxesTriggered(gp.axes[4], "RIGHT_STICK_Y", true, i);
                    processAxesTriggered(gp.axes[5], "RIGHT_TRIGGER", true, i);
                    processAxesTriggered(gp.axes[6], "DPAD_LEFT", true, i);
                    processAxesTriggered(gp.axes[6], "DPAD_RIGHT", true, i);
                    processAxesTriggered(gp.axes[7], "DPAD_UP", true, i);
                    processAxesTriggered(gp.axes[7], "DPAD_DOWN", true, i);
                }
            }

            i++;
        }
    }

    function processButtonPressed(btn, btn_code, in_game, gp_index) {
        var pressed;

        if (btn_code == "LEFT_TRIGGER" || btn_code == "RIGHT_TRIGGER") {
            (typeof(btn) == "object") ? (pressed = btn.value) : (pressed = btn == 1);
        } else {
            (typeof(btn) == "object") ? (pressed = btn.pressed) : (pressed = btn == 1);
        }

        if (pressed != 0) {
            if (getKeyPressed[btn_code] == 0.0) {
                getKeyPressed[btn_code] = pressed;
                (in_game) ? (GAME.binaryInput(gp_index+1, btn_code)) :
                    (MENU.binaryInput(gp_index+1, btn_code));
            }
            getKeyPressed[btn_code] = pressed;
        } else {
            getKeyPressed[btn_code] = 0.0;
        }
    }

    function processAxesTriggered(btn, btn_code, in_game, gp_index) {
        var triggered;

        if (btn > deadzone) {
            triggered = btn;
        } else if (btn < -deadzone && btn_code != "LEFT_TRIGGER" && btn_code != "RIGHT_TRIGGER") {
            triggered = btn;
        } else {
            triggered = 0;
        }


        if (triggered != 0 ||
            (btn_code == "DPAD_UP" && triggered == -1.0 ||
            btn_code == "DPAD_DOWN" && triggered == 1.0 ||
            btn_code == "DPAD_LEFT" && triggered == -1.0 ||
            btn_code == "DPAD_RIGHT" && triggered == 1.0)) {

            if (getKeyPressed[btn_code] == 0.0) {
                if (btn_code == "DPAD_UP" || btn_code == "DPAD_DOWN" ||
                    btn_code == "DPAD_LEFT" || btn_code == "DPAD_RIGHT") {

                    (in_game) ? (GAME.binaryInput(gp_index+1, btn_code)) :
                    (MENU.binaryInput(gp_index+1, btn_code));
                } else {
                    (in_game) ? (GAME.rawInput(gp_index+1, btn_code, triggered)) :
                        (MENU.rawInput(gp_index+1, btn_code, triggered));
                }
            }
            getKeyPressed[btn_code] = triggered;
        } else {
            getKeyPressed[btn_code] = 0.0;
        }
    }

    function buttonPressed(btn) {
        if (typeof(btn) == "object") {
            return btn.pressed;
        } else {
            return btn == 1;
        }
    }

    return IL;
}());
