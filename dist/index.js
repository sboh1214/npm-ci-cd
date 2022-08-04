"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["President"] = 0] = "President";
    Role[Role["VicePresident"] = 1] = "VicePresident";
    Role[Role["Member"] = 2] = "Member";
    Role[Role["Unknown"] = 3] = "Unknown";
})(Role || (Role = {}));
function getRole(nickname) {
    switch (nickname) {
        case "platypus":
            return Role.President;
        case "dora":
            return Role.VicePresident;
        case "jeuk":
            return Role.Member;
        default:
            return Role.Unknown;
    }
}
exports.default = getRole;
