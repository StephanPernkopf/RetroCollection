var InputLib = (function() {
    var IL = {};

    var deadzone = 0.4;

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
        getKeyPressed["DPAD_LEFT"] = 0.0;
        getKeyPressed["DPAD_RIGHT"] = 0.0;
        getKeyPressed["DPAD_UP"] = 0.0;
        getKeyPressed["DPAD_DOWN"] = 0.0;
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

            if ((buttonPressed(gp.buttons[6]) ||
                buttonPressed(gp.buttons[7]) ||
                buttonPressed(gp.buttons[8]))) {

                if (getKeyPressed["PAUSE"] == 0.0) {
                    getKeyPressed["PAUSE"] = 1.0
                    GAME.pause = !GAME.pause;
                }
            } else {
                getKeyPressed["PAUSE"] = 0.0
            }

            if (GAME.pause) {
                if (buttonPressed(gp.buttons[0])) {
                    if (getKeyPressed["A_BUTTON"] == 0.0) {
                        getKeyPressed["A_BUTTON"] = 1.0;
                        MENU.binaryInput(i+1, "UP_ARROW");
                    }
                } else {
                    getKeyPressed["A_BUTTON"] = 0.0
                }

                if (buttonPressed(gp.buttons[4])) {
                    if (getKeyPressed["LEFT_BUMPER"] == 0.0) {
                        getKeyPressed["LEFT_BUMPER"] = 1.0;
                        MENU.binaryInput(i+1, "LEFT_ARROW");
                    }
                } else {
                    getKeyPressed["LEFT_BUMPER"] = 0.0
                }

                if (buttonPressed(gp.buttons[5])) {
                    if (getKeyPressed["RIGHT_BUMPER"] == 0.0) {
                        getKeyPressed["RIGHT_BUMPER"] = 1.0;
                        MENU.binaryInput(i+1, "RIGHT_ARROW");
                    }
                } else {
                    getKeyPressed["RIGHT_BUMPER"] = 0.0
                }


                value = axesTriggered(gp.axes[0], true);
                if (value != 0) {
                    if (getKeyPressed["LEFT_STICK_X"] == 0.0) {
                        getKeyPressed["LEFT_STICK_X"] = value;
                        MENU.binaryInput(i+1, "LEFT_ARROW");
                    }
                } else if (getKeyPressed["LEFT_STICK_X"] < 0) {
                    getKeyPressed["LEFT_STICK_X"] = 0.0;
                }

                value = axesTriggered(gp.axes[0], false);
                if (value != 0) {
                    if (getKeyPressed["LEFT_STICK_X"] == 0.0) {
                        getKeyPressed["LEFT_STICK_X"] = value;
                        MENU.binaryInput(i+1, "RIGHT_ARROW");
                    }
                } else if (getKeyPressed["LEFT_STICK_X"] > 0) {
                    getKeyPressed["LEFT_STICK_X"] = 0.0;
                }

                value = axesTriggered(gp.axes[1], true);
                if (value != 0) {
                    if (getKeyPressed["LEFT_STICK_Y"] == 0.0) {
                        getKeyPressed["LEFT_STICK_Y"] = value;
                        MENU.binaryInput(i+1, "UP_ARROW");
                    }
                } else if (getKeyPressed["LEFT_STICK_Y"] < 0) {
                    getKeyPressed["LEFT_STICK_Y"] = 0.0;
                }

                value = axesTriggered(gp.axes[6], true);
                if (value != 0) {
                    if (getKeyPressed["DPAD_LEFT"] == 0.0) {
                        getKeyPressed["DPAD_LEFT"] = 1.0;
                        MENU.binaryInput(i+1, "LEFT_ARROW");
                    }
                } else {
                    getKeyPressed["DPAD_LEFT"] = 0.0;
                }

                value = axesTriggered(gp.axes[6], false);
                if (value != 0) {
                    if (getKeyPressed["DPAD_RIGHT"] == 0.0) {
                        getKeyPressed["DPAD_RIGHT"] = 1.0;
                        MENU.binaryInput(i+1, "RIGHT_ARROW");
                    }
                } else {
                    getKeyPressed["DPAD_RIGHT"] = 0.0;
                }

                value = axesTriggered(gp.axes[7], true);
                if (value != 0) {
                    if (getKeyPressed["DPAD_UP"] == 0.0) {
                        getKeyPressed["DPAD_UP"] = 1.0;
                        MENU.binaryInput(i+1, "UP_ARROW");
                    }
                } else {
                    getKeyPressed["DPAD_UP"] = 0.0;
                }

            } else {


            }




            /*for (var j = 0; j < gp.buttons.length; j++) {
                if (buttonPressed(gp.buttons[j])) {
                    console.log(j + " / " + gp.buttons.length);
                }
            }

            for (var k = 0; k < gp.axes.length; k++) {
                if (gp.axes[k] > 0.5 || gp.axes[k] < -0.5) {
                    console.log(k, gp.axes[k]);
                }
            }*/




            i++;
        }
    }

    function buttonPressed(btn_code) {
        if (typeof(btn_code) == "object") {
            return btn_code.pressed;
        }
        return btn_code == 1.0;
    }

    function axesTriggered(btn_code, sign) {
        if (!sign && btn_code > deadzone) {
            return btn_code;
        } else if (sign && btn_code < -deadzone) {
            return btn_code;
        } else {
            return 0;
        }
    }

    return IL;
}());
