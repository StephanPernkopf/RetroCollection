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

var InputLib = (function() {
    var IL = {};

    IL.processKeyboardInput = function(e) {
        var btn_code = e.keyCode ? e.which : e.keyCode;
        
        if (btn_code == ESC_KEY) {
            GAME.pause = !GAME.pause;
        }

        else if (GAME.pause) {
            if (btn_code == LEFT_ARROW) {
                MENU.directionalInput(0, -1, 0);
            } else if (btn_code == UP_ARROW) {
                MENU.directionalInput(0, 0, 1);
            } else if (btn_code == RIGHT_ARROW) {
                MENU.directionalInput(0, 1, 0);
            } else if (btn_code == ENTER_KEY) {
                MENU.binaryInput(0, "ENTER_KEY");
            } else if (btn_code == SPACE_KEY) {
                MENU.binaryInput(0, "SPACE_KEY");
            } else if (btn_code == W_KEY) {
                MENU.binaryInput(0, "W_KEY");
            } else if (btn_code == A_KEY) {
                MENU.binaryInput(0, "A_KEY");
            } else  if (btn_code == D_KEY) {
                MENU.binaryInput(0, "D_KEY");
            }

        } else {
            
            if (btn_code == LEFT_ARROW) {
                GAME.directionalInput(0, -1, 0);
            } else if (btn_code == UP_ARROW) {
                GAME.directionalInput(0, 0, 1);
            } else if (btn_code == RIGHT_ARROW) {
                GAME.directionalInput(0, 1, 0);
            } else if (btn_code == DOWN_ARROW) {
                GAME.directionalInput(0, 0, -1);
            } else if (btn_code == ENTER_KEY) {
                GAME.binaryInput(0, "ENTER_KEY");
            } else if (btn_code == SHIFT_KEY) {
                GAME.binaryInput(0, "SHIFT_KEY");
            } else if (btn_code == CTRL_KEY) {
                GAME.binaryInput(0, "CTRL_KEY");
            } else if (btn_code == SPACE_KEY) {
                GAME.binaryInput(0, "SPACE_KEY");
            } else if (btn_code == W_KEY) {
                GAME.binaryInput(0, "W_KEY");
            } else if (btn_code == A_KEY) {
                GAME.binaryInput(0, "A_KEY");
            } else if (btn_code == S_KEY) {
                GAME.binaryInput(0, "S_KEY");
            } else  if (btn_code == D_KEY) {
                GAME.binaryInput(0, "D_KEY");
            } else {
                console.log("#unregistered keyboard input: ", btn_code);
            } 
        }
    }

    IL.processGamepadInput = function() {

    }

    return IL;
}());
